/* ============================================
   Service Worker — إذاعة القرآن الكريم
   ============================================ */

const CACHE_STATIC = 'quran-radio-static-v4';
const CACHE_AUDIO  = 'quran-radio-audio-v2';
const CACHE_ALARM  = 'quran-radio-alarm-v4';

const MAX_AUDIO_FILES = 50;

const ALARM_AUDIO_URLS = [
  /* ✅ ملف الـ intro (صل على النبي) — أولاً لضمان تحميله قبل أي شيء */
  "https://archive.org/download/2_20260614_20260614/%D8%B51.mp3",
  /* ✅ مقطع "اعوذ بالله" — يُشغَّل بعد مقطع الصلاة على النبي مباشرة */
  "https://archive.org/download/20260630_20260630_1419/%D8%A7%D8%B9%D9%88%D8%B0%20%D8%A8%D8%A7%D9%84%D9%84%D9%87%20.mp3",
  "https://archive.org/download/20260524_20260524_1140/%D8%A7%D9%84%D9%84%D9%87%D9%85%20%D8%B5%D9%84.mp3",
  "https://archive.org/download/20260618_20260618_2021/%D8%A7%D9%84%D9%84%D9%87%D9%85%20%20%D8%B5%D9%84%20.mp3",
  "https://archive.org/download/6_20260613/3.mp3",
  "https://archive.org/download/mix-saly/mix%20saly.mp3",
  "https://archive.org/download/6_20260613/5.mp3",
  "https://archive.org/download/6_20260613/6.mp3",
  "https://archive.org/download/6_20260613/1.mp3",
  "https://archive.org/download/6_20260613/4.mp3",
  "https://archive.org/download/20260524_20260524_1326/%D9%84%D8%A7%20%D8%A7%D9%84%D9%87%20%D8%A7%D9%84%D8%A7%20%D8%A7%D9%84%D9%84%D9%87.mp3",
  "https://archive.org/download/20260530_20260530_1151/%D8%A3%D8%B3%D8%AA%D8%BA%D9%81%D8%B1%20%D8%A7%D9%84%D9%84%D9%87.mp3",
  "https://archive.org/download/20260531_20260531_1135/%D8%B3%D8%A8%D8%AD%D8%A7%D9%86%20%D8%A7%D9%84%D9%84%D9%87%20%D9%88%20%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87.mp3",
  "https://archive.org/download/20260602_20260602_0726/%D8%AD%D9%89%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%B5%D9%84%D8%A9.mp3",
  /* الصلاة الإبراهيمية — الثلاثة روابط (للعمل أوفلاين) */
  "https://archive.org/download/20260407_20260407_2008/%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9%20%D8%A7%D9%84%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D9%8A%D8%A9%20%20%D8%A3%D8%A8%D9%88%20%D8%A5%D8%B3%D8%AD%D8%A7%D9%82.mp3",
  "https://archive.org/download/20260407_20260407_2008/%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9%20%D8%A7%D9%84%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D9%8A%D8%A9.mp3",
  "https://archive.org/download/20260407_20260407_2008/%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9%D8%A7%D9%84%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%D9%8A%D8%A9.mp3"
];

const ADHAN_URL = "https://archive.org/download/20260602_20260602_0726/%D8%AD%D9%89%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%B5%D9%84%D8%A9.mp3";

const STATIC_ASSETS = [
  '/Radio/',
  '/Radio/index.html',
  '/Radio/favicon.png',
  '/Radio/manifest.json',
  '/Radio/icon-192.png',
  '/Radio/icon-512.png'
];

const PRAYER_NAMES_AR = { Fajr:'الفجر', Dhuhr:'الظهر', Asr:'العصر', Maghrib:'المغرب', Isha:'العشاء' };
const PRAYER_NAMES_EN = { Fajr:'Fajr', Dhuhr:'Dhuhr', Asr:'Asr', Maghrib:'Maghrib', Isha:'Isha' };
const PRAYER_ORDER    = ['Fajr','Dhuhr','Asr','Maghrib','Isha'];

// ── حالة الأذان في الـ SW ──
let swAdhanTimers   = [];
let swAdhanTimings  = null;
let swAdhanLat      = null;
let swAdhanLon      = null;
let swLastAliveTs   = 0; // آخر وقت استقبلنا AUDIO_ALIVE

/* ══════════════════════════════════════
   التثبيت
══════════════════════════════════════ */
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // مهم: نجبر الطلبات هنا تتجاهل أي كاش HTTP من المتصفح/GitHub Pages
      // عشان نضمن إن الملفات اللي بتتخزن في CACHE_STATIC فعلاً أحدث نسخة
      caches.open(CACHE_STATIC).then(cache =>
        Promise.all(
          STATIC_ASSETS.map(url =>
            fetch(url, { cache: 'reload' })
              .then(res => cache.put(url, res))
              .catch(() => {})
          )
        )
      ),
      // ملاحظة مهمة: روابط archive.org (حتى بصيغة /download/ الدائمة) بترد أحياناً
      // من عقدة CDN لا ترسل رأس Access-Control-Allow-Origin، وده بيخلي
      // cache.add()/fetch() في وضعهم الافتراضي (cors) يفشلوا بصمت.
      // الحل: نجيب الملف بوضع 'no-cors' (استجابة opaque) ونخزّنه يدوياً بـ cache.put،
      // فيشتغل بغض النظر عن رأس CORS.
      caches.open(CACHE_ALARM).then(cache =>
        Promise.allSettled(
          ALARM_AUDIO_URLS.map(url =>
            fetch(url, { mode: 'no-cors', cache: 'reload' })
              .then(res => cache.put(url, res))
              .catch(() => {})
          )
        )
      )
    ])
  );
  self.skipWaiting();
});

/* ══════════════════════════════════════
   التفعيل
══════════════════════════════════════ */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_STATIC && k !== CACHE_AUDIO && k !== CACHE_ALARM)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ══════════════════════════════════════
   الطلبات
══════════════════════════════════════ */
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // تجاهل أي طلبات ليست http/https (مثل إضافات المتصفح chrome-extension://)
  // الكاش لا يدعم هذه الأنواع من الطلبات وتسبب خطأ "Failed to execute 'put' on 'Cache'"
  if (!url.startsWith('http')) return;

  // أصوات المنبه والأذان: من الكاش أولاً
  if (ALARM_AUDIO_URLS.includes(url) || url === ADHAN_URL) {
    event.respondWith(
      caches.open(CACHE_ALARM).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          // نستخدم no-cors هنا كمان — استجابات archive.org لغير-CORS بتكون opaque
          // (status دايماً 0)، فمينفعش نتأكد من status === 200؛ لو الفetch نجح
          // من غير استثناء يبقى نخزّنها ونرجّعها
          return fetch(event.request.url, { mode: 'no-cors' }).then(res => {
            if (res) cache.put(event.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // ملفات archive.org الصوتية (كل الامتدادات): Cache on Play
  if (url.includes('archive.org/download/')) {
    event.respondWith(handleAudio(event.request));
    return;
  }

  // بث مباشر وخدمات خارجية: مباشرة من النت
  if (
    url.includes('stream') || url.includes('live') ||
    url.includes('aladhan.com') ||
    url.includes('translate.google') || url.includes('cse.google') ||
    url.includes('youtube')
  ) { return; }

  // باقي الطلبات (وأهمها index.html): Network First
  // نستخدم cache:'no-store' في طلب الشبكة عشان نضمن إن المتصفح/GitHub Pages
  // مايرجعش نسخة قديمة من كاش HTTP، ودايماً نجيب آخر تحديث فعلي
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_STATIC).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() =>
        caches.match(event.request).then(cached => cached || caches.match('/Radio/'))
      )
  );
});

/* ══════════════════════════════════════
   الرسائل من الصفحة
══════════════════════════════════════ */
self.addEventListener('message', async event => {
  const data = event.data;
  if (!data) return;

  // ── البحث عن كاش URL (يدور في CACHE_ALARM أولاً ثم CACHE_AUDIO) ──
  // بيرجع "url" (أول رابط متوفر — للتوافق مع الكود القديم) و"urls" (خريطة لكل رابط مطلوب نتيجته)
  if (data.type === 'FIND_CACHED_URL') {
    const [cacheAlarm, cacheAudio] = await Promise.all([
      caches.open(CACHE_ALARM),
      caches.open(CACHE_AUDIO)
    ]);
    let found = null;
    const urlsMap = {};
    for (const url of data.urls) {
      const match = (await cacheAlarm.match(url)) || (await cacheAudio.match(url));
      urlsMap[url] = match ? url : null;
      if (match && !found) found = url;
    }
    event.source.postMessage({ type: 'CACHED_URL_RESULT', url: found, urls: urlsMap });
  }

  // ── الصفحة بعتت الإحداثيات عشان الـ SW يجدول الأذان ──
  if (data.type === 'ADHAN_SCHEDULE') {
    swAdhanLat = data.lat;
    swAdhanLon = data.lon;
    await swFetchAndScheduleAdhan(data.lat, data.lon);
  }

  // ── keep-alive من الصفحة: الصوت لسه شغال ──
  if (data.type === 'AUDIO_ALIVE') {
    swLastAliveTs = Date.now();
  }
});

/* ══════════════════════════════════════
   جدولة الأذان من الـ SW
   (يشتغل حتى لو الصفحة مجمدة أو الشاشة مقفلة)
══════════════════════════════════════ */
async function swFetchAndScheduleAdhan(lat, lon) {
  try {
    const today   = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    const res     = await fetch(
      `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lon}&method=4`
    );
    const json = await res.json();
    if (json && json.data && json.data.timings) {
      swScheduleAdhanTimers(json.data.timings);
    }
  } catch(e) {}
}

function swClearAdhanTimers() {
  swAdhanTimers.forEach(clearTimeout);
  swAdhanTimers = [];
}

function swScheduleAdhanTimers(timings) {
  swClearAdhanTimers();
  swAdhanTimings = timings;
  const now = new Date();

  PRAYER_ORDER.forEach(name => {
    if (!timings[name]) return;
    const [h, m] = timings[name].split(' ')[0].split(':').map(Number);
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
    const diff   = target - now;
    if (diff > 0) {
      const t = setTimeout(() => swTriggerAdhan(name), diff);
      swAdhanTimers.push(t);
    }
  });

  // أعد الجدولة في منتصف الليل
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 1, 0, 0);
  const msToMidnight = tomorrow - new Date();
  setTimeout(async () => {
    if (swAdhanLat !== null) await swFetchAndScheduleAdhan(swAdhanLat, swAdhanLon);
  }, msToMidnight);
}

async function swTriggerAdhan(prayerName) {
  // لو الصفحة شغالة وأرسلت AUDIO_ALIVE مؤخراً → الصفحة هتتكلم هي
  const pageAlive = (Date.now() - swLastAliveTs) < 60000;

  // ابعت للصفحة تشغّل الأذان لو هي صاحية
  const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
  clients.forEach(client => {
    client.postMessage({ type: 'SW_PLAY_ADHAN', prayerName });
  });

  // لو ما في صفحة صاحية → أرسل Push Notification بصوت
  if (clients.length === 0 || !pageAlive) {
    const arName = PRAYER_NAMES_AR[prayerName] || prayerName;
    const enName = PRAYER_NAMES_EN[prayerName] || prayerName;
    if (self.registration.showNotification) {
      await self.registration.showNotification(`🕌 أذان ${arName} — ${enName} Adhan`, {
        body:    'حان وقت الصلاة — Prayer time',
        icon:    '/Radio/icon-192.png',
        badge:   '/Radio/favicon.png',
        tag:     'adhan-' + prayerName,
        renotify: true,
        requireInteraction: true,
        silent:  false,
        vibrate: [300, 100, 300, 100, 500]
      });
    }
  }
}

/* ══════════════════════════════════════
   Cache on Play — ملفات archive.org
══════════════════════════════════════ */
async function handleAudio(request) {
  const cache  = await caches.open(CACHE_AUDIO);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    // ملاحظة: بعض عُقد CDN بتاعة archive.org ما بترجعش رأس CORS، فالاستجابة
    // بتبقى opaque (status = 0 دايماً) حتى لو الملف اتحمّل صح فعلاً.
    // فمينفعش نشرط status === 200 بس؛ لازم نقبل النوعين (basic/cors سليم، أو opaque).
    if (response && (response.status === 200 || response.type === 'opaque')) {
      cache.put(request, response.clone());
      trimAudioCache(cache);
    }
    return response;
  } catch {
    return new Response('', { status: 503 });
  }
}

async function trimAudioCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_AUDIO_FILES) {
    const toDelete = keys.slice(0, keys.length - MAX_AUDIO_FILES);
    await Promise.all(toDelete.map(k => cache.delete(k)));
  }
}

/* ══════════════════════════════════════
   استقبال Notification Click
══════════════════════════════════════ */
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      if (clients.length > 0) {
        clients[0].focus();
        clients[0].postMessage({ type: 'SW_PLAY_ADHAN', prayerName: event.notification.tag.replace('adhan-', '') });
      } else {
        self.clients.openWindow('/Radio/');
      }
    })
  );
});
