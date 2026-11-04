/* equran-embed.js — يفتح موقع المصحف (magziko/equran) جوّه الراديو، ويجهّزه للأوفلاين.
   - ملف مستقل: لا يعمل شيئًا إلا بعد استدعاء window.openEquran() أو تحميل الملف نفسه.
   - لا يغيّر أي كود فى الراديو؛ index.html بتاع الراديو فيه محمّل كسول لهذا الملف + زر فى قائمة ⋮.
   - التجهيز للأوفلاين: تسجيل sw.js الخاص بـ equran وقت الخمول وإرسال PRECACHE_MUSHAF له، فيخزّن الصفحة وquran-data.js
     وصفحات المصحف الـ604 والخطوط (يحتاج sw.js المعدَّل المرفق).

*/
(function () {
  'use strict';
  if (window.__equranEmbedLoaded) return;
  window.__equranEmbedLoaded = true;

  // عنوان موقع المصحف. نفس الدومين (magziko.github.io) فيشتغل التسجيل والـ iframe بدون مشاكل.
  var BASE = (window.EQURAN_BASE || (location.origin + '/equran/')).replace(/\/?$/, '/');
  var KEY = 'eqEmbed:warmed:v1';          // مفتاح له prefix عشان ما يتعارضش مع مفاتيح equran على نفس الدومين
  var overlay = null, frame = null, prevOverflow = '';

  function store(get, v) {
    try { return get ? localStorage.getItem(KEY) : localStorage.setItem(KEY, v); } catch (e) { return null; }
  }

  /* ---------- التجهيز للأوفلاين (مرة واحدة، وقت الخمول، وبدون إزعاج مستخدمي توفير البيانات) ----------
     1) نسجّل sw.js بتاع equran (نطاق /equran/): وقت تثبيته بيخزّن الصفحة وquran-data.js تلقائيًا.
     2) نبعتله رسالة PRECACHE_MUSHAF فيحمّل كل صفحات المصحف (604) والخطوط فى كاش مستقل لا يُحذف مع التحديثات.
     لما التحميل يخلص بنجاح بنسجّل علامة فى localStorage فما نكررش العملية. لو انقطع الإنترنت وسط التحميل،
     بيكمّل الناقص فقط فى الزيارة التالية. */
  function whenActive(reg) {
    return new Promise(function (resolve) {
      var sw = reg.active || reg.waiting || reg.installing;
      if (!sw) return resolve(null);
      if (sw.state === 'activated') return resolve(sw);
      sw.addEventListener('statechange', function () { if (sw.state === 'activated') resolve(sw); });
      setTimeout(function () { resolve(reg.active || null); }, 30000);
    });
  }
  var warming = false, listening = false;
  function warmUp(force) {
    if (warming || store(true) || !('serviceWorker' in navigator) || navigator.onLine === false) return;
    var c = navigator.connection || {};
    // نتخطى: توفير البيانات، 2G، وشبكة الموبايل (cellular) عند التحميل التلقائى؛
    // التحميل حوالى 3 ميجا نقل (≈14 ميجا تخزين)، فنفضّل الواى فاى. لو فتح المستخدم المصحف بنفسه نحمّل (إلا مع توفير البيانات).
    if (c.saveData || /(^|-)2g$/.test(c.effectiveType || '')) return;
    if (!force && c.type === 'cellular') return;
    warming = true;
    if (!listening) {
      listening = true;
      navigator.serviceWorker.addEventListener('message', function (e) {
        var d = e && e.data;
        if (!d || d.type !== 'MUSHAF_PRECACHE_DONE') return;
        if (d.failed === 0) store(false, String(Date.now()));
        else warming = false;                      // فيه ملفات ناقصة: نسمح بمحاولة تانية فى الفتح الجاى
      });
    }
    navigator.serviceWorker.register(BASE + 'sw.js', { scope: BASE })
      .then(whenActive)
      .then(function (sw) { if (sw) sw.postMessage({ type: 'PRECACHE_MUSHAF' }); else warming = false; })
      .catch(function () { warming = false; });
  }
  function idle(fn) {
    if (window.requestIdleCallback) requestIdleCallback(fn, { timeout: 15000 });
    else setTimeout(fn, 8000);
  }
  idle(function () { setTimeout(function () { warmUp(false); }, 5000); });   // بعد ما الراديو يفتح ويستقر

  /* ---------- فتح المصحف فى طبقة كاملة الشاشة ---------- */
  function pauseRadio() {
    // نوقف أى صوت شغال فى الراديو (بدون لمس فيديوهات الخلفية المكتومة)
    var els = document.querySelectorAll('audio,video'), paused = [];
    for (var i = 0; i < els.length; i++) {
      var m = els[i];
      if (!m.muted && !m.paused) { try { m.pause(); paused.push(m); } catch (e) {} }
    }
    try { window.dispatchEvent(new CustomEvent('equran:open', { detail: { paused: paused } })); } catch (e) {}
  }

  function build() {
    overlay = document.createElement('div');
    overlay.id = 'equran-embed-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'المصحف الشريف');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:2147483000;background:#0f4c3a;display:none;flex-direction:column;';
    var bar = document.createElement('div');
    bar.style.cssText = 'flex:none;display:flex;align-items:center;gap:10px;padding:8px 12px;background:#0b3a2c;color:#fff;font:600 14px Cairo,Arial,sans-serif;direction:rtl;';
    var close = document.createElement('button');
    close.type = 'button'; close.textContent = '✕ إغلاق';
    close.style.cssText = 'cursor:pointer;border:0;border-radius:8px;padding:6px 12px;background:rgba(255,255,255,.16);color:#fff;font:inherit;';
    close.onclick = closeEquran;
    var title = document.createElement('span'); title.textContent = '📖 المصحف الشريف'; title.style.flex = '1';
    var ext = document.createElement('a');
    ext.href = BASE; ext.target = '_blank'; ext.rel = 'noopener'; ext.textContent = 'فتح فى تبويب';
    ext.style.cssText = 'color:#cfeee0;text-decoration:none;font-weight:500;';
    bar.appendChild(close); bar.appendChild(title); bar.appendChild(ext);
    frame = document.createElement('iframe');
    frame.title = 'المصحف الشريف';
    frame.allow = 'autoplay; clipboard-write; fullscreen';
    frame.style.cssText = 'flex:1;width:100%;border:0;background:#0f4c3a;';
    overlay.appendChild(bar); overlay.appendChild(frame);
    document.body.appendChild(overlay);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && overlay.style.display !== 'none') closeEquran();
    });
  }

  window.openEquran = function () {
    if (!overlay) build();
    if (!frame.getAttribute('src')) frame.src = BASE;       // يتحمّل أول مرة فقط عند الضغط
    pauseRadio();
    warmUp(true);                                           // المستخدم بيقرأ فعلًا: نجهّز الأوفلاين لو لسه (مرة واحدة)
    prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlay.style.display = 'flex';
  };
  // يوقف (مؤقتًا) أى تلاوة شغالة داخل المصحف عند الإغلاق، عشان ما تتداخلش مع صوت الراديو.
  // الصفحتان على نفس الدومين فنقدر نوصل لدوال المصحف مباشرة؛ ولو فشل شيء نتجاهله بهدوء.
  function pauseFrameAudio() {
    try {
      var w = frame && frame.contentWindow;
      if (!w) return;
      try { if (typeof w.pauseFullSurahListen === 'function') w.pauseFullSurahListen(); } catch (e) {}   // الاستماع المتواصل (يحفظ مكانه)
      try { w.eval('typeof ayahAudioPlayer!=="undefined" && ayahAudioPlayer && ayahAudioPlayer.pause()'); } catch (e) {}   // تلاوة آية/سورة
      try { w.document.querySelectorAll('audio,video').forEach(function (m) { try { m.pause(); } catch (e) {} }); } catch (e) {}
    } catch (e) {}
  }
  function closeEquran() {
    if (!overlay) return;
    pauseFrameAudio();
    overlay.style.display = 'none';                         // نحتفظ بالـ iframe عشان العودة تكون فورية ويفضل مكان القراءة
    document.body.style.overflow = prevOverflow;
  }
  window.closeEquran = closeEquran;
})();
