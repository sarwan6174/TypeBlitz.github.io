const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = [
  "/",
  "index.html",
  "manifest.json",
  "robots.txt",

  // Files in the production directory
  "production/files/giphy.gif",
  "production/files/v1.2.html",
  "production/files/v1.4.html",
  "production/redirect.html",
  "production/version.txt",

  // Asset images
  "assets/img/TypeBlitz-128.png",
  "assets/img/TypeBlitz-192.png",
  "assets/img/TypeBlitz-512.png",
  "assets/img/TypeBlitz-512-modified.png",
  "assets/img/TypeBlitz.ico",

  // Screenshots
  "assets/screenshots/1.png",
  "assets/screenshots/2.png",
  "assets/screenshots/3.png",
  "assets/screenshots/4.png",
  "assets/screenshots/5.png",
  "assets/screenshots/6.png",

  // CSS and other pages
  "assets/preloader.css",
  "assets/common.css",
  "assets/404.html",
  "assets/offline.html",
  "assets/MIT_License.html",
];

// Install event: Cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch((error) => console.error("Cache installation failed:", error))
  );
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).catch((error) => console.error("Cache cleanup failed:", error))
  );
  self.clients.claim();
});

// Fetch event: Serve cached or fetch from network
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return; // Skip non-GET requests
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(event.request);

        // Check if we received a valid response
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          cache.put(event.request, responseToCache);
        }

        return networkResponse;
      } catch (error) {
        // Handle offline situation
        if (event.request.mode === 'navigate') {
          return cache.match("/assets/offline.html");
        }
        console.error("Network request failed:", error);
        return cache.match("/assets/404.html");
      }
    })()
  );
});
