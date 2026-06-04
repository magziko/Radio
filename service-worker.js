/* ============================================
   Service Worker — إذاعة القرآن الكريم
   يحفظ الواجهة محلياً للتشغيل السريع
   ============================================ */

const CACHE_NAME = 'quran-radio-v1';

// الملفات اللي هتتحفظ محلياً
const STATIC_ASSETS = [
  '/Radio/',
  '/Radio/index.html',
  '/Radio/favicon.png',
  '/Radio/manifest.json'
];

/* ── التثبيت: احفظ الملفات الأساسية ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

/* ── التفعيل: احذف الكاش القديم ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ── الطلبات: استراتيجية Network First ── */
// يحاول يجيب من الإنترنت أولاً (عشان يأخذ أحدث نسخة)
// لو فشل يرجع للكاش المحفوظ
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // تجاهل طلبات البث الصوتي — دي لازم تيجي من الإنترنت دايماً
  if (
    event.request.url.includes('stream') ||
    event.request.url.includes('live') ||
    event.request.url.includes('radio') ||
    event.request.url.includes('mp3') ||
    event.request.url.includes('audio') ||
    event.request.url.includes('aladhan.com') ||
    event.request.url.includes('translate.google') ||
    event.request.url.includes('cse.google')
  ) {
    return; // اسيبه يروح للإنترنت مباشرة
  }

  // باقي الطلبات: Network First
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // لو النسخة من الإنترنت اشتغلت، احفظها في الكاش
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // الإنترنت مش شغال — رجّع من الكاش
        return caches.match(event.request).then(cached => {
          return cached || caches.match('/Radio/');
        });
      })
  );
});
