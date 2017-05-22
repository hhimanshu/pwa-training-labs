(function () {
    'use strict';

    // TODO 2.1 - Cache static assets on install
    var CACHE_NAME = 'static-cache';
    var urlsToCache = [
        '.',
        'index.html',
        'styles/main.css'
    ];

    self.addEventListener('install', function(event){
        console.log("Received install event");
       event.waitUntil(
           caches.open(CACHE_NAME)
               .then(function(cache){
                   return cache.addAll(urlsToCache);
               })
               .catch(function(error){
                   console.log('Could not cache:', error);
               })
       );
    });

    // TODO 2.2 - Fetch from the cache
    self.addEventListener('fetch', function(event){
        console.log('Received fetch event');
       event.respondWith(
           caches.match(event.request)
               .then(function(response){
                   return response || fetchAndCache(event.request);
               })
       );
    });

    function fetchAndCache(url) {
        return fetch(url)
            .then(function(response){
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return caches.open(CACHE_NAME)
                    .then(function(cache){
                        cache.put(url, response.clone());
                        return response;
                    })
            })
            .catch(function(error){
                console.log('Request failed:', error);
                // you could also return a custom HTTP 404 page
            });
    }
})();
