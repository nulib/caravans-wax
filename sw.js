console.log("Hello from service-worker.js")

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "ff632cabeb6a8550e2abfab4ccafcd31"
  },
  {
    "url": "about/index.html",
    "revision": "569e96c7b6b20fd9d53d8a48bc408b73"
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
    "revision": "e31a667b05e828af23534c4f2bf68254"
  },
  {
    "url": "fragments/1/index.html",
    "revision": "bd62c512bbac7b0e5b350eb04d0ac68a"
  },
  {
    "url": "fragments/10/index.html",
    "revision": "b4ffec842e25597d4193a0bd8ef014aa"
  },
  {
    "url": "fragments/11/index.html",
    "revision": "a0ead50e9c1279f309186b9ab370345a"
  },
  {
    "url": "fragments/12/index.html",
    "revision": "dd0ae336bff2faa11b8e2926fbbeac4a"
  },
  {
    "url": "fragments/13/index.html",
    "revision": "e7074e2999eb2f6dee3fbb24248c1298"
  },
  {
    "url": "fragments/14/index.html",
    "revision": "364f61d1d852a0e8fc925c1cd33cc963"
  },
  {
    "url": "fragments/15/index.html",
    "revision": "4517d12705c4da7dc374e5a70596a6b7"
  },
  {
    "url": "fragments/16/index.html",
    "revision": "8c4bd1119eb1884a39239fb1536cafe0"
  },
  {
    "url": "fragments/17/index.html",
    "revision": "801ef184ead0fa7550314cf890a7f3a2"
  },
  {
    "url": "fragments/18/index.html",
    "revision": "001edac76c5a5cf452ecee095f978d29"
  },
  {
    "url": "fragments/19/index.html",
    "revision": "eff0b359367187328c9bbf0e400ee05c"
  },
  {
    "url": "fragments/2/index.html",
    "revision": "7c4ec3e92f43818c6916f12905cc4aa3"
  },
  {
    "url": "fragments/20/index.html",
    "revision": "0675cc0d39197495126c7b97a0530d23"
  },
  {
    "url": "fragments/21/index.html",
    "revision": "b72568bc212c0b8983dfc6ab62e1d4a3"
  },
  {
    "url": "fragments/22/index.html",
    "revision": "954f6723f54388f9f9ad2a30a059d0cc"
  },
  {
    "url": "fragments/23/index.html",
    "revision": "bd2a4e49f624d69d20f40b56ec036d1e"
  },
  {
    "url": "fragments/24/index.html",
    "revision": "e39c357ad9d8ee17d112277ddae2ad57"
  },
  {
    "url": "fragments/25/index.html",
    "revision": "eb1dfc7a9be60a8e79b839990f396350"
  },
  {
    "url": "fragments/26/index.html",
    "revision": "54512e6225799062000252ff30888f84"
  },
  {
    "url": "fragments/27/index.html",
    "revision": "85d677015da13334a0bf9bcb40fe714c"
  },
  {
    "url": "fragments/28/index.html",
    "revision": "458516350d0cd78506cab90fc3f0c5f3"
  },
  {
    "url": "fragments/29/index.html",
    "revision": "ea26321eb0277474f3a4ef1cb975ec37"
  },
  {
    "url": "fragments/3/index.html",
    "revision": "9efff8f6fcff3aa5f47521634f9d4dda"
  },
  {
    "url": "fragments/30/index.html",
    "revision": "0f894e352da4db056a1a9e5a53f9ca51"
  },
  {
    "url": "fragments/31/index.html",
    "revision": "3791e17565bb7a9882a7828785780fcf"
  },
  {
    "url": "fragments/32/index.html",
    "revision": "baa61eae4560cbd9fa2900dd82653730"
  },
  {
    "url": "fragments/33/index.html",
    "revision": "c032728024828e321036f06069e8bb4e"
  },
  {
    "url": "fragments/34/index.html",
    "revision": "a8bd350998fc16f179229e59eb63f589"
  },
  {
    "url": "fragments/35/index.html",
    "revision": "41de8f3bc85ac39b9d7ef73e6f70ecf3"
  },
  {
    "url": "fragments/36/index.html",
    "revision": "383af9e315ed4b141e957fc5f3746a5b"
  },
  {
    "url": "fragments/37/index.html",
    "revision": "cb378a46bdf33ee0b8787d6760f1c91e"
  },
  {
    "url": "fragments/38/index.html",
    "revision": "753423b80a58e43fe5822610124ba7ad"
  },
  {
    "url": "fragments/39/index.html",
    "revision": "2956122820590735bae588d072badde1"
  },
  {
    "url": "fragments/4/index.html",
    "revision": "d2eaace30a5f16772cde30871936a343"
  },
  {
    "url": "fragments/40/index.html",
    "revision": "e233f241b6923ee362be6b5d5e7174b6"
  },
  {
    "url": "fragments/41/index.html",
    "revision": "dc32a5c6c630ad87be1cc691cb7813f6"
  },
  {
    "url": "fragments/42/index.html",
    "revision": "abf192ae83119d9df2c40662e333ab4e"
  },
  {
    "url": "fragments/43/index.html",
    "revision": "9bf2679e78431d66b36621b8e131b21f"
  },
  {
    "url": "fragments/44/index.html",
    "revision": "2dc831ee236fdbbdec29f99d6d8884ae"
  },
  {
    "url": "fragments/45/index.html",
    "revision": "bd92cd4b9efdef5599b8ea9266153db5"
  },
  {
    "url": "fragments/46/index.html",
    "revision": "fa1edae8b6e0b57bda472c806ef3a17f"
  },
  {
    "url": "fragments/47/index.html",
    "revision": "9e37fd9b404e7cf67ed0756db059a789"
  },
  {
    "url": "fragments/48/index.html",
    "revision": "7542abab1fb9ed34c3e37e649eb4b2ad"
  },
  {
    "url": "fragments/49/index.html",
    "revision": "45672378ced7ea8d8ec7100a8191486e"
  },
  {
    "url": "fragments/5/index.html",
    "revision": "81d32e9f3fd05cf4434c0111b7edadaf"
  },
  {
    "url": "fragments/50/index.html",
    "revision": "a69d2261522fe37d20d81c4190a7c85f"
  },
  {
    "url": "fragments/51/index.html",
    "revision": "0db5925974d8f0e89cb165a943967da5"
  },
  {
    "url": "fragments/52/index.html",
    "revision": "9fad57adebd1f46668f14c87813bf254"
  },
  {
    "url": "fragments/6/index.html",
    "revision": "0826aa9c525e3a50265ecc45414930bf"
  },
  {
    "url": "fragments/7/index.html",
    "revision": "0b6f88f42777f994fd81b73c23504122"
  },
  {
    "url": "fragments/8/index.html",
    "revision": "4d2b4a924f5b8c1cf7533a1d23a63d56"
  },
  {
    "url": "fragments/9/index.html",
    "revision": "3bd9994838a00d67a570675f2973d77b"
  },
  {
    "url": "index.html",
    "revision": "8b9d6fd367fb8864f52ec5b735cbe890"
  },
  {
    "url": "search/index.html",
    "revision": "c16472bbb26a6808e6b1d99758722c3f"
  },
  {
    "url": "tour/driving-desires/index.html",
    "revision": "a61758d7493c7fa3ff8ca091b5b1be07"
  },
  {
    "url": "tour/index.html",
    "revision": "b5f68c2cf56e7f3aa2e86cc32fa330a6"
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
    "url": "img/tour/atlas-of-maritime.jpg",
    "revision": "b2e9246601be4ed5e21ff9cae43c55d1"
  },
  {
    "url": "img/tour/ife-tour.jpg",
    "revision": "8669a62afca6be43ed7c0cb9100f68c0"
  },
  {
    "url": "img/tour/igbo-tour.jpg",
    "revision": "b0ad89103efdb4438fd59f1746c5d6c7"
  },
  {
    "url": "img/tour/man_on_camel_card.jpg",
    "revision": "d0bb1597dc3911659698699deebd041a"
  },
  {
    "url": "img/tour/saharan-frontiers-1.jpg",
    "revision": "95ae3600d6b8b5bcbee758762e4311a2"
  },
  {
    "url": "img/tour/shifting-away-from-the-sahara.jpg",
    "revision": "8663946c02e3e5d06fcb082f8c5d768b"
  },
  {
    "url": "img/tour/spread-of-ideas.jpg",
    "revision": "44b7f86afa0a611a476f56b8f1d01bb3"
  },
  {
    "url": "img/tour/tadmekka-tour.jpg",
    "revision": "a7f184be4f416f4603017571d59ca603"
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