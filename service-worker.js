/* ============================================
   Service Worker — إذاعة القرآن الكريم
   ============================================ */

const CACHE_STATIC = 'quran-radio-static-v1';
const CACHE_AUDIO  = 'quran-radio-audio-v1';

const MAX_AUDIO_FILES = 50;

const STATIC_ASSETS = [
  '/Radio/',
  '/Radio/index.html',
  '/Radio/favicon.png',
  '/Radio/manifest.json',
  '/Radio/icon-192.png',
  '/Radio/icon-512.png'
];

/* ── التثبيت ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

/* ── التفعيل ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_STATIC && k !== CACHE_AUDIO)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── الطلبات ── */
self.addEventListener('fetch', event => {
  const url = event.request.url;

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

/* ── Cache on Play لملفات archive.org ── */
async function handleAudio(request) {
  const cache = await caches.open(CACHE_AUDIO);
  const cached = await cache.match(request);

  // لو موجود في الكاش رجّعه فوراً
  if (cached) return cached;

  // مش موجود — جيبه من النت واحفظه
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
    const urls   = event.data.urls;   // كل روابط المحطة
    const cache  = await caches.open(CACHE_AUDIO);
    let found    = null;

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
