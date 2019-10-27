console.log("Hello from service-worker.js")

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([])

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix:'caravans-wax',
  suffix:'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
});

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'my-image-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.js$'),
  new workbox.strategies.CacheFirst({
    cacheName: 'my-js-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.(css|scss)$'),
  new workbox.strategies.CacheFirst({
    cacheName: 'my-css-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.(html|md)$'),
  new workbox.strategies.CacheFirst({
    cacheName: 'my-html-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.(eot|ttf|woff|json|tif|gemspec)$'),
  new workbox.strategies.CacheFirst({
    cacheName: 'my-html-cache',
  })
);

workbox.routing.registerRoute(
  '/img/Biconical Bead (Egypt or Syria).tif',
  new workbox.strategies.staleWhileRevalidate({
    cacheName: 'Biconical-cache',
  })
);

workbox.routing.registerRoute(
  '/img/fragments/26/26. Atlas of maritime charts.jpg',
  new workbox.strategies.staleWhileRevalidate({
    cacheName: 'Atlas-cache',
  })
);

workbox.routing.registerRoute(
  '/img/fragments/40/40. Double-egg pendant.jpg',
  new workbox.strategies.staleWhileRevalidate({
    cacheName: 'Doubleegg-cache',
  })
);