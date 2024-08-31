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

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch((error) => console.error("Cache installation failed:", error))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).catch((error) => console.error("Cache activation failed:", error))
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return; // Only cache GET requests
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return caches.match("/assets/404.html");
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        }).catch(() => {
          // Handle offline scenario by checking if it's a navigation request
          if (event.request.mode === 'navigate') {
            return caches.match("/assets/offline.html");
          }
        });
      }).catch((error) => {
        console.error("Fetch failed:", error);
        return caches.match("/assets/offline.html");
      })
  );
});
