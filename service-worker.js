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
  "assets/images/favicon/apple-touch-icon.png",
  "assets/images/img/bg1.webp",
  "assets/images/img/bg2.webp",
  "assets/images/favicon/favicon.ico",
  "assets/images/favicon/web-app-manifest-192x192.png",
  "assets/images/favicon/web-app-manifest-512x512.png",
  "assets/images/favicon/favicon..svg",
  // Screenshots
  "assets/images/app_previews/1.webp",
  "assets/images/app_previews/2.webp",
  "assets/images/app_previews/3.webp",
  "assets/images/app_previews/4.webp",
  "assets/images/app_previews/5.webp",
  "assets/images/app_previews/6.webp",
  // CSS and other pages
  "assets/css/style.css",
  "assets/common.css",
  "assets/404.html",
  "assets/offline.html",
  "assets/MIT_License.html",
];

// Function to check if all URLs are available in the cache
async function checkCachePresence() {
  const cache = await caches.open(CACHE_NAME);

  // Check if all URLs are present in the cache
  const missingFiles = [];

  for (let url of urlsToCache) {
    const response = await cache.match(url);
    if (!response) {
      missingFiles.push(url);
    }
  }

  if (missingFiles.length === 0) {
    console.log("All files are present in the cache.");
  } else {
    console.log("Missing files:", missingFiles);
  }
}

// Install event: Cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await Promise.all(
          urlsToCache.map(async (url) => {
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
              }
              await cache.put(url, response);
            } catch (error) {
              console.error(error.message);
            }
          })
        );
        self.skipWaiting();
      } catch (error) {
        console.error("Cache installation failed:", error);
      }
    })
  );
});

// Activate event: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    ).catch((error) => console.error("Cache cleanup failed:", error))
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

        if (networkResponse.ok && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          cache.put(event.request, responseToCache);
        }

        return networkResponse;
      } catch (error) {
        if (event.request.mode === 'navigate') {
          return cache.match("/assets/offline.html");
        }
        console.error("Network request failed:", error);
        return cache.match("/assets/404.html");
      }
    })()
  );
});
