const CACHE_NAME = 'rockstar-cache-v1';
const urlsToCache = [
  '/Startseite.html',
  '/Blog.html',
  '/Quiz.html',
  '/Shop.html',
  '/Übungen.html',
  '/style.css',
  '/page.js',
  '/pictures/logo-rockstar.png',
  '/pictures/rockstar-profile.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
  'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js'
];

// Installation: Dateien in Cache speichern
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Aktivierung: Alte Caches löschen
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
});

// Fetch-Anfragen abfangen und aus Cache bedienen, falls verfügbar
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
