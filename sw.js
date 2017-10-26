'use strict'

const cacheName = 'v1',
      cacheAssets = [
        'index.html'
      ]
      
self.addEventListener('install, e => {
  e.waitUntil(
    caches.open(cacheName)
      .then( cache => cache.addAll(cacheAssets) )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => self.clients.claim() );

self.addEventLister('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(reponse => response ||
      fetch(e.request))
  );
};
