/* hls-support.js
 * يضيف دعم بث HLS (.m3u8) لكل عناصر <audio> في الموقع بدون تعديل باقي الكود.
 * المتصفحات غير سفاري (Chrome / Firefox / Edge) لا تشغّل m3u8 مباشرة، فنستخدم hls.js.
 * - يحمّل hls.js عند الحاجة فقط (أول محطة HLS).
 * - يعترض تعيين .src و load() و play() على كل عناصر الصوت.
 * - لو الرابط (مثل الكويت) طلع بث عادي مش HLS، بيرجع للتشغيل المباشر تلقائيًا.
 */
(function () {
  'use strict';
  var HLS_URL = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js';

  var proto = HTMLMediaElement.prototype;
  var srcDesc = Object.getOwnPropertyDescriptor(proto, 'src');
  if (!srcDesc || !srcDesc.set) return;
  var nativeSet = srcDesc.set, nativeGet = srcDesc.get;
  var nativeLoad = proto.load, nativePlay = proto.play;

  // سفاري / iOS يشغّل HLS مباشرة (والخلفية على iOS تحتاج التشغيل الأصلي).
  // باقي المتصفحات نستخدم hls.js لأن الدعم الأصلي في كروم للبث الصوتي الحي غير موثوق.
  var ua = navigator.userAgent || '';
  var isApple = /iPhone|iPad|iPod/i.test(ua) ||
                (/Safari/i.test(ua) && !/Chrome|Chromium|CriOS|FxiOS|Android|Edg/i.test(ua)) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var hasMse = !!(window.MediaSource || window.ManagedMediaSource);
  var nativeHls = isApple || !hasMse;

  function isHlsUrl(u) {
    if (!u || typeof u !== 'string') return false;
    if (/^(blob|data):/i.test(u)) return false;
    if (/\.m3u8(\?|#|$)/i.test(u)) return true;
    if (/[?&]ext=\.m3u8/i.test(u)) return true;
    // روابط way2quran: مرشّحة لـ HLS، ولو مش HLS بنرجع للتشغيل المباشر
    if (/way2quran\.com\/api\/external-radio\/stream\//i.test(u)) return true;
    return false;
  }

  var loader = null;
  function loadHls() {
    if (window.Hls) return Promise.resolve(window.Hls);
    if (loader) return loader;
    loader = new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = HLS_URL;
      s.onload = function () { window.Hls ? res(window.Hls) : rej(new Error('Hls missing')); };
      s.onerror = function () { loader = null; rej(new Error('hls.js failed to load')); };
      document.head.appendChild(s);
    });
    return loader;
  }

  function destroy(el) {
    var h = el.__hls;
    el.__hls = null;
    el.__hlsUrl = null;
    el.__hlsToken = (el.__hlsToken || 0) + 1;
    if (h) { try { h.destroy(); } catch (e) {} }
  }

  function fireError(el) {
    try { el.dispatchEvent(new Event('error')); } catch (e) {}
  }

  function attach(el, url) {
    destroy(el);
    var token = el.__hlsToken;
    el.__hlsUrl = url;
    el.__hlsPending = true;
    loadHls().then(function (Hls) {
      if (el.__hlsToken !== token) return;           // اتغيّر الرابط في الأثناء
      el.__hlsPending = false;
      if (!Hls.isSupported()) { fallbackNative(el, url, token); return; }
      var hls = new Hls({ lowLatencyMode: false, maxBufferLength: 30, enableWorker: true });
      el.__hls = hls;
      var recovered = 0;
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        if (el.__wantPlay || el.autoplay) nativePlay.call(el).catch(function () {});
      });
      hls.on(Hls.Events.ERROR, function (ev, data) {
        if (!data || !data.fatal) return;
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR &&
            data.details === Hls.ErrorDetails.MANIFEST_PARSING_ERROR) {
          fallbackNative(el, url, token); return;   // مش HLS فعلًا
        }
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR && recovered < 3) {
          recovered++; hls.startLoad(); return;
        }
        if (data.type === Hls.ErrorTypes.MEDIA_ERROR && recovered < 3) {
          recovered++; hls.recoverMediaError(); return;
        }
        if (data.details === Hls.ErrorDetails.MANIFEST_PARSING_ERROR ||
            data.details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR) {
          // آخر محاولة: ممكن يكون بث mp3/aac عادي أو CORS
          fallbackNative(el, url, token); return;
        }
        console.warn('[hls-support] fatal', data.type, data.details);
        destroy(el);
        fireError(el);
      });
      hls.loadSource(url);
      hls.attachMedia(el);
    }).catch(function (e) {
      console.warn('[hls-support]', e && e.message);
      if (el.__hlsToken === token) fallbackNative(el, url, token);
    });
  }

  function fallbackNative(el, url, token) {
    if (el.__hlsToken !== token) return;
    destroy(el);
    el.__hlsPending = false;
    el.__hlsFallback = url;                          // لا نحاول HLS مرة ثانية لنفس الرابط
    nativeSet.call(el, url);
    nativeLoad.call(el);
    if (el.__wantPlay || el.autoplay) nativePlay.call(el).catch(function () {});
  }

  function setSrc(el, v) {
    var url = (v == null) ? '' : String(v);
    if (/^blob:/i.test(url)) { nativeSet.call(el, url); return; }   // hls.js بيعيّنها بنفسه
    if (!nativeHls && isHlsUrl(url) && el.__hlsFallback !== url) {
      attach(el, url);
      return;
    }
    el.__hlsFallback = null;
    var had = el.__hls || el.__hlsPending;
    destroy(el);
    el.__hlsPending = false;
    if (had && !url) nativeLoad.call(el);
    nativeSet.call(el, url);
  }

  Object.defineProperty(proto, 'src', {
    configurable: true,
    enumerable: srcDesc.enumerable,
    get: function () {
      return (this.__hls || this.__hlsPending) && this.__hlsUrl ? this.__hlsUrl : nativeGet.call(this);
    },
    set: function (v) { setSrc(this, v); }
  });

  // load() بعد attachMedia كان هيصفّر البث
  proto.load = function () {
    if (this.__hls || this.__hlsPending) return;
    return nativeLoad.call(this);
  };

  var nativePause = proto.pause;
  proto.pause = function () { this.__wantPlay = false; return nativePause.apply(this, arguments); };

  // new Audio(url) و setAttribute('src') بيعدّوا من غير الـ setter
  proto.play = function () {
    if (!nativeHls && !this.__hls && !this.__hlsPending) {
      var a = this.getAttribute('src');
      if (a && isHlsUrl(a) && this.__hlsFallback !== a) {
        this.removeAttribute('src');
        attach(this, a);
      }
    }
    this.__wantPlay = true;
    if (this.__hlsPending) return Promise.resolve();  // hls.js بيشغّل أول ما يجهز
    return nativePlay.apply(this, arguments);
  };
})();
