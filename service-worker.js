/* ============================================
   Service Worker — إذاعة القرآن الكريم
   ============================================ */

const CACHE_STATIC = 'quran-radio-static-v1';
const CACHE_AUDIO  = 'quran-radio-audio-v1';
const CACHE_ALARM  = 'quran-radio-alarm-v1';   // كاش منفصل لأصوات المنبه

const MAX_AUDIO_FILES = 50;

// أصوات المنبه — تتحفظ تلقائياً عند أول فتح للموقع
const ALARM_AUDIO_URLS = [
  // أصوات الـ Salah PiP
  "https://archive.org/download/20260524_20260524_1140/%D8%A7%D9%84%D9%84%D9%87%D9%85%20%D8%B5%D9%84.mp3",
  "https://archive.org/download/mix-saly/mix%20saly.mp3",
  "https://archive.org/download/20260524_20260524_1326/%D9%84%D8%A7%20%D8%A7%D9%84%D9%87%20%D8%A7%D9%84%D8%A7%20%D8%A7%D9%84%D9%84%D9%87.mp3",
  "https://archive.org/download/20260530_20260530_1151/%D8%A3%D8%B3%D8%AA%D8%BA%D9%81%D8%B1%20%D8%A7%D9%84%D9%84%D9%87.mp3",
  "https://archive.org/download/20260531_20260531_1135/%D8%B3%D8%A8%D8%AD%D8%A7%D9%86%20%D8%A7%D9%84%D9%84%D9%87%20%D9%88%20%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87.mp3",
  // صوت الأذان
  "https://archive.org/download/20260602_20260602_0726/%D8%AD%D9%89%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9.mp3"
];

const STATIC_ASSETS = [
  '/Radio/',
  '/Radio/index.html',
  '/Radio/favicon.png',
  '/Radio/manifest.json',
  '/Radio/icon-192.png',
  '/Radio/icon-512.png'
];

/* ── التثبيت: حفظ الواجهة + أصوات المنبه ── */
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // حفظ ملفات الواجهة
      caches.open(CACHE_STATIC).then(cache => cache.addAll(STATIC_ASSETS)),
      // حفظ أصوات المنبه (بدون فشل لو URL واحد مش شغال)
      caches.open(CACHE_ALARM).then(cache =>
        Promise.allSettled(
          ALARM_AUDIO_URLS.map(url =>
            cache.add(url).catch(() => {})
          )
        )
      )
    ])
  );
  self.skipWaiting();
});

/* ── التفعيل: احذف الكاش القديم ── */
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

/* ── الطلبات ── */
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // ── أصوات المنبه: من الكاش أولاً دايماً ──
  if (ALARM_AUDIO_URLS.includes(url)) {
    event.respondWith(
      caches.open(CACHE_ALARM).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(res => {
            if (res && res.status === 200) cache.put(event.request, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // ── ملفات archive.org الصوتية: Cache on Play ──
  if (url.includes('archive.org') && (url.includes('.mp3') || url.includes('.ogg'))) {
    event.respondWith(handleAudio(event.request));
    return;
  }

  // ── بث مباشر وخدمات خارجية: مباشرة من النت دايماً ──
  if (
    url.includes('stream') ||
    url.includes('live')   ||
    url.includes('aladhan.com') ||
    url.includes('translate.google') ||
    url.includes('cse.google') ||
    url.includes('youtube')
  ) {
    return;
  }

  // ── باقي الطلبات: Network First ──
  event.respondWith(
    fetch(event.request)
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

/* ── Cache on Play لملفات archive.org العادية ── */
async function handleAudio(request) {
  const cache  = await caches.open(CACHE_AUDIO);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone());
      trimAudioCache(cache);
    }
    return response;
  } catch {
    return new Response('', { status: 503 });
  }
}

/* ── رسالة من الصفحة: ابحث عن أي رابط محفوظ من نفس المحطة ── */
self.addEventListener('message', async event => {
  if (event.data && event.data.type === 'FIND_CACHED_URL') {
    const urls  = event.data.urls;
    const cache = await caches.open(CACHE_AUDIO);
    let found   = null;
    for (const url of urls) {
      const match = await cache.match(url);
      if (match) { found = url; break; }
    }
    event.source.postMessage({ type: 'CACHED_URL_RESULT', url: found });
  }
});

/* ── احذف الملفات القديمة لو تجاوز الحد ── */
async function trimAudioCache(cache) {
  const keys = await cache.keys();
  if (keys.length > MAX_AUDIO_FILES) {
    const toDelete = keys.slice(0, keys.length - MAX_AUDIO_FILES);
    await Promise.all(toDelete.map(k => cache.delete(k)));
  }
}
