var staticCacheName = 'currency-converter-static-v1';

self.addEventListener('install', function(event) {
  console.log('Installing')
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons',
        'https://unpkg.com/vue-material@beta/dist/theme/default.css'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('currency-converter-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  // var requestUrl = new URL(event.request.url);

  // if (requestUrl.origin === location.origin) {
  //   if (requestUrl.pathname === '/') {
  //     event.respondWith(caches.match('/'));
  //     return;
  //   }
  // }
  console.log('requesting', event.request)

  event.respondWith(
    // caches.match(event.request).then(function(response) {
    //   return response || fetch(event.request);
    // })
    caches.open(staticCacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
