console.log("Hello from service-worker.js")

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

// tells if workbox is loaded
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// allows for precaching
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "0b23bd7c1c81198a90cb9e1e173570cb"
  },
  {
    "url": "about/index.html",
    "revision": "ffab31fc0aaf3b0f1a57293acdbc3429"
  },
  {
    "url": "assets/reveal.js/css/theme/README.md",
    "revision": "e1050b85564cabfce2eac841a3e5a60b"
  },
  {
    "url": "assets/reveal.js/plugin/markdown/example.html",
    "revision": "245225a42168314c163eca61a496effa"
  },
  {
    "url": "assets/reveal.js/plugin/markdown/example.md",
    "revision": "a7c636e4c64b1f26178385e5e5079110"
  },
  {
    "url": "assets/reveal.js/plugin/notes-server/notes.html",
    "revision": "d9293b9404dd96a1d1eab109dbd05bda"
  },
  {
    "url": "assets/reveal.js/plugin/notes/notes.html",
    "revision": "4ad7f893493073deb16dd9ac3cb19655"
  },
  {
    "url": "collection/index.html",
    "revision": "7480be2b77026881c767b0329f05d9d0"
  },
  {
    "url": "fragments/10/index.html",
    "revision": "1278b0d24342c1facbdfb50dae111173"
  },
  {
    "url": "fragments/11/index.html",
    "revision": "98e96d988b31c9510333151de442f42e"
  },
  {
    "url": "fragments/12/index.html",
    "revision": "d2a7ac82be63f6cee336e4fffe8878c6"
  },
  {
    "url": "fragments/13/index.html",
    "revision": "2bff8b1c3d7cf457c307dec758902abe"
  },
  {
    "url": "fragments/14/index.html",
    "revision": "96683189fab17d4404b8aa863243932b"
  },
  {
    "url": "fragments/15/index.html",
    "revision": "a3031a3a6b89931c37ccb7a9ead8da2e"
  },
  {
    "url": "fragments/16/index.html",
    "revision": "1afa141bd3d89ccf1e06a0121e8cb254"
  },
  {
    "url": "fragments/17/index.html",
    "revision": "e41fe3c6e3883e79ef4d42b66168669e"
  },
  {
    "url": "fragments/18/index.html",
    "revision": "a98c8be542ac18ff61e2d0c8f5830a4c"
  },
  {
    "url": "fragments/19/index.html",
    "revision": "92ac10f842f693364b485011c7583c0d"
  },
  {
    "url": "fragments/20/index.html",
    "revision": "eaf8bd9f533c9ac05358dba79444ac49"
  },
  {
    "url": "fragments/21/index.html",
    "revision": "6862c6bd72ee9b4ed6ad322267dd5b3d"
  },
  {
    "url": "fragments/22/index.html",
    "revision": "d8d7d60ab596142b46aff922be59bcca"
  },
  {
    "url": "fragments/23/index.html",
    "revision": "da3b73c66643f69403c7bc46cc3c4f6f"
  },
  {
    "url": "fragments/24/index.html",
    "revision": "88b0a601cebd30bb3ae4389ae07f5261"
  },
  {
    "url": "fragments/25/index.html",
    "revision": "3e4c386b65a6daaeeab7a2647b933aba"
  },
  {
    "url": "fragments/26/index.html",
    "revision": "ea805e2049d85ac7040317a25884443a"
  },
  {
    "url": "fragments/27/index.html",
    "revision": "5f44b1517bd249418b7f60dbe23ee0cf"
  },
  {
    "url": "fragments/28/index.html",
    "revision": "2b898290bbb894e5af991cb95541e2c2"
  },
  {
    "url": "fragments/29/index.html",
    "revision": "7798982274f08d2575caeab9fde31f03"
  },
  {
    "url": "fragments/30/index.html",
    "revision": "3e2fe43f3e2e4b6b42fcecfcec13c932"
  },
  {
    "url": "fragments/31/index.html",
    "revision": "00203e97ab05c08a8cfa4776f50f250c"
  },
  {
    "url": "fragments/32/index.html",
    "revision": "167f9f731d3c8cfad5b1350faca94dd7"
  },
  {
    "url": "fragments/33/index.html",
    "revision": "8431c497336707b04d6a257f565a2c70"
  },
  {
    "url": "fragments/34/index.html",
    "revision": "6c9a5fadc254e99bf209fa01264f38c9"
  },
  {
    "url": "fragments/35/index.html",
    "revision": "44ea54f5274ff9e71dd6715b1aa7aecc"
  },
  {
    "url": "fragments/36/index.html",
    "revision": "9318608836f9096b438476ed033a36a1"
  },
  {
    "url": "fragments/37/index.html",
    "revision": "b8705472d67d2674cbd174186728beac"
  },
  {
    "url": "fragments/38/index.html",
    "revision": "3f3389b70c1f5917f48b5460c6885e92"
  },
  {
    "url": "fragments/39/index.html",
    "revision": "55db61e5ea6c640f71ce9110415aca0d"
  },
  {
    "url": "fragments/40/index.html",
    "revision": "f918fb4df1fb8418e1f78ee6c6617cc0"
  },
  {
    "url": "fragments/41/index.html",
    "revision": "e8e7c63504b70b349c39f4e77fc11941"
  },
  {
    "url": "fragments/42/index.html",
    "revision": "5842e5d532ad95466309f65924073896"
  },
  {
    "url": "fragments/43/index.html",
    "revision": "1a49051b22b98257febf6f77d9e2aca5"
  },
  {
    "url": "fragments/44/index.html",
    "revision": "289bb9b326eede3764a3c8ca60353895"
  },
  {
    "url": "fragments/45/index.html",
    "revision": "630170d3176d8c07f9c303b8417fdee2"
  },
  {
    "url": "fragments/46/index.html",
    "revision": "e2a37e275d824824f196ab337a641309"
  },
  {
    "url": "fragments/47/index.html",
    "revision": "f78b8426cc71baadf738cf9242230bbc"
  },
  {
    "url": "fragments/48/index.html",
    "revision": "a68a186c3a93ee864d0b5519b205fc62"
  },
  {
    "url": "fragments/49/index.html",
    "revision": "15b4159e78ec2a946c70343d0b031a5d"
  },
  {
    "url": "fragments/50/index.html",
    "revision": "2ba9312172a11513400e23849cbe7fd6"
  },
  {
    "url": "fragments/51/index.html",
    "revision": "f5f0c06e519b11cf1c71cb9fcd0cb17c"
  },
  {
    "url": "fragments/52/index.html",
    "revision": "5c37cac3e5d37843cf52180875d958c9"
  },
  {
    "url": "index.html",
    "revision": "6cc35c67930d4e9941ff5ece933dd839"
  },
  {
    "url": "search/index.html",
    "revision": "96f5b0c9588423aec5a8f9c101a2551d"
  },
  {
    "url": "tour/driving-desires/index.html",
    "revision": "a61758d7493c7fa3ff8ca091b5b1be07"
  },
  {
    "url": "tour/index.html",
    "revision": "94f2c19cc5b926198fe726855269c6c3"
  },
  {
    "url": "tour/mansa-musas-hajj-to-mecca/index.html",
    "revision": "de166cfaa546df72c519d7e372f48c30"
  },
  {
    "url": "tour/ong-reach-of-the-sahara-central-sudan/index.html",
    "revision": "8c66096340b07d6d5fc30723ba639b48"
  },
  {
    "url": "tour/ong-reach-of-the-sahara-ife/index.html",
    "revision": "76e44b180d7aa7a2fd55ea3d499afe79"
  },
  {
    "url": "tour/ong-reach-of-the-sahara-igbo/index.html",
    "revision": "37724b074b66d552f41c6ee23de58a22"
  },
  {
    "url": "tour/ong-reach-of-the-sahara-medieval-glass-bead/index.html",
    "revision": "0752023aade99093fb5430b39e338788"
  },
  {
    "url": "tour/saharan-echoes/index.html",
    "revision": "ce086e259903d39dd21d1afa5df7b4a5"
  },
  {
    "url": "tour/saharan-frontiers-gao/index.html",
    "revision": "c41dff1ba054688e19fb6be81c4fe85f"
  },
  {
    "url": "tour/saharan-frontiers-niger-river/index.html",
    "revision": "87ccf89401e97bc1060de32abbf89308"
  },
  {
    "url": "tour/saharan-frontiers-sijilmasa/index.html",
    "revision": "19331b19ac9e97cf6d9682befed55476"
  },
  {
    "url": "tour/saharan-frontiers-spread-of-ideas/index.html",
    "revision": "faf45e0777fde0862fddf6d76c67bfed"
  },
  {
    "url": "tour/saharan-frontiers-tadmekka/index.html",
    "revision": "ee81e0a6d547d815ae92f54759f0822d"
  },
  {
    "url": "tour/shifting-away-from-the-sahara/index.html",
    "revision": "1c47b0f36dde8a06bece2e74ef50f3f9"
  },
  {
    "url": "assets/styles.css",
    "revision": "8e7812bb1ad7206b9357723a8880af3b"
  },
  {
    "url": "assets/elasticlunr.min.js",
    "revision": "354a6debbeb9da7beec4474b59564082"
  },
  {
    "url": "assets/grayscale.min.js",
    "revision": "9e6d5025536fc012dbd3bc68fe7f85db"
  },
  {
    "url": "assets/jquery-3.4.1.min.js",
    "revision": "a6b6350ee94a3ea74595c065cbf58af0"
  },
  {
    "url": "assets/popper.min.js",
    "revision": "8af9b177aa6c47cc10abf1b6ea3d1ddc"
  },
  {
    "url": "assets/search-ui.js",
    "revision": "105960ffca8b860e0786970f4fdcd481"
  },
  {
    "url": "img/bead-hero-mobile.jpg",
    "revision": "151c08a6dfc95860e02de8096e91fb96"
  },
  {
    "url": "img/bead-hero.jpg",
    "revision": "88bb676d78b19ed4ee23339fb0da06a8"
  },
  {
    "url": "img/caravans_hero_mobile.jpg",
    "revision": "83415071f3e3533bdb538fcdbf50c2b3"
  },
  {
    "url": "img/caravans_hero.jpg",
    "revision": "774340be3c8a707c6d55728ea8f1032e"
  },
  {
    "url": "img/libraries_logo.jpg",
    "revision": "852582f3c06f131dcc401cb3f3bc8967"
  },
  {
    "url": "img/SaharanFrontiers_LandingPageImg.tif_150xp.jpg",
    "revision": "b928080aa8aedb8f985735304808d70f"
  },
  {
    "url": "img/SaharanFrontiers_LandingPageImg.tif_640x.jpg",
    "revision": "434ce1be414856b411684aff34f7040f"
  },
  {
    "url": "img/SaharanFrontiers_LandingPageImg.tif_75xp.jpg",
    "revision": "6eda5e7affee40d72161e19c470610d3"
  },
  {
    "url": "assets/bootstrap/bootstrap.min.js",
    "revision": "fff7e51737c04771cb7eef69cf31582f"
  },
  {
    "url": "img/fragments/1/1_150x.jpg",
    "revision": "88d9b59fc4817f5b92cdb64bcf352067"
  },
  {
    "url": "img/fragments/10/10_150x.jpg",
    "revision": "db695d5cc4b28edaa0eea7f309b72bbf"
  },
  {
    "url": "img/fragments/11/11_150x.jpg",
    "revision": "a9424800f1544887f6e160321927719f"
  },
  {
    "url": "img/fragments/12/12_150x.jpg",
    "revision": "d49b247e616bd7025a3c5376c1f7420a"
  },
  {
    "url": "img/fragments/13/13_1_150x.jpg",
    "revision": "b2b8485c30619b41ca1b57a92e308cd2"
  },
  {
    "url": "img/fragments/13/13_2_150x.jpg",
    "revision": "16199e4d29f73d87430c6dd1bd083eb1"
  },
  {
    "url": "img/fragments/14/14_150x.jpg",
    "revision": "df13f27db0d09d6f37b9357441731674"
  },
  {
    "url": "img/fragments/15/15_150x.jpg",
    "revision": "14dc91c108465dd3581e166db6e2bc18"
  },
  {
    "url": "img/fragments/16/16_150x.jpg",
    "revision": "a1cc0297ff09dc3af82f470a5cc079d0"
  },
  {
    "url": "img/fragments/17/17_150x.jpg",
    "revision": "08315c1ae9eba68ce9c8d0a3e0273ac4"
  },
  {
    "url": "img/fragments/18/18_150x.jpg",
    "revision": "308f42f705c95f5b01f13d98030cc41a"
  },
  {
    "url": "img/fragments/19/19_150x.jpg",
    "revision": "3e2d6058b6cb6eba0cadc1fb49a2dbe0"
  },
  {
    "url": "img/fragments/2/2_150x.jpg",
    "revision": "ff78704627da0fdb65a0c9835db32383"
  },
  {
    "url": "img/fragments/20/20_150x.jpg",
    "revision": "61647735e88b4bb3b12e014e84c0d91a"
  },
  {
    "url": "img/fragments/21/21_150x.jpg",
    "revision": "3d494ad78fe5c1a39a93490a31fb90cd"
  },
  {
    "url": "img/fragments/22/22_150x.jpg",
    "revision": "0f3d02523e95f919936bcb953ee99adc"
  },
  {
    "url": "img/fragments/23/23_150x.jpg",
    "revision": "ae516cfc2c56c802ee2a5e16980e5ff5"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "aa4f3224f647eee46a69bdeebc346582"
  },
  {
    "url": "browserconfig.xml",
    "revision": "5932fbc53c577ed7241bec577feab2a0"
  },
  {
    "url": "caravans-192x192.png",
    "revision": "9e0fc6bbb12200d1af6104d26bae24ab"
  },
  {
    "url": "caravans-256x256.png",
    "revision": "ba3aee04cfda283e706a725d7592b2f7"
  },
  {
    "url": "caravans-512x512.png",
    "revision": "262e5e94bd311999cae86629fb06b62d"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "abc76794214ed50c6e484208e9be9c41"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b5d4a71b4c91263560b66e2f3fd8275e"
  },
  {
    "url": "favicon.ico",
    "revision": "05678a66c982d16cabba939372270d38"
  },
  {
    "url": "manifest.json",
    "revision": "2d8992c97ed300b1255cdba8d7108609"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "1ca0cc68774d23b5acd5c59b60864fed"
  },
  {
    "url": "robots.txt",
    "revision": "6c0c0b02c59a0e5b43917105fbeae507"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "050b2f8443ff63944e2f077d8618adeb"
  },
  {
    "url": "search/index.json",
    "revision": "ad3da023ac095b4dea91c50255ef5227"
  }
])

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