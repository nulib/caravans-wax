console.log("Hello from service-worker.js")

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// tells if workbox is loaded
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// allows for precaching
workbox.precaching.precacheAndRoute([])

//sets queue for background-sync
const queue = new workbox.backgroundSync.Queue('BGS-queue');

self.addEventListener('fetch', (event) => {
  const promiseChain = fetch(event.request.clone()).catch((err) => {
    return queue.pushRequest({request: event.request});
  });

  event.waitUntil(promiseChain);
});

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix:'caravans-wax',
  suffix:'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
});

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'my-image-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.js$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'my-js-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.(css|scss)$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'my-css-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.(html|md)$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'my-html-cache',
  })
);

workbox.routing.registerRoute(
  new RegExp('\\.(eot|ttf|woff|json|gemspec)$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'my-html-cache',
  })
);

workbox.routing.registerRoute(
  '/img/fragments/26/26. Atlas of maritime charts.jpg',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'Atlas-cache',
  })
);

workbox.routing.registerRoute(
  '/img/fragments/40/40. Double-egg pendant.jpg',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'Doubleegg-cache',
  })
);