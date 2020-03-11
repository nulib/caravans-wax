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
    "revision": "41e8729efcc432f3ed722aa8da5b227b"
  },
  {
    "url": "about/index.html",
    "revision": "2dfcf653054409c4cbb8ac32f66bbdbe"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "aa4f3224f647eee46a69bdeebc346582"
  },
  {
    "url": "assets/bootstrap/bootstrap.min.js",
    "revision": "fff7e51737c04771cb7eef69cf31582f"
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
    "url": "assets/reveal.js/css/print/paper.css",
    "revision": "c2a99dc0887fa37ba513bcfe2820a1fb"
  },
  {
    "url": "assets/reveal.js/css/print/pdf.css",
    "revision": "8056360339ae47dbcf6cecb94d190a84"
  },
  {
    "url": "assets/reveal.js/css/reset.css",
    "revision": "dcce4901635bcb4a5373c0ad0d501105"
  },
  {
    "url": "assets/reveal.js/css/reveal.css",
    "revision": "0f59e199749ecfa5a40de49a3cd86e82"
  },
  {
    "url": "assets/reveal.js/css/reveal.scss",
    "revision": "a2ee11c43b3b89ec0a5c5b3ea72d9a5b"
  },
  {
    "url": "assets/reveal.js/css/theme/beige.css",
    "revision": "667050923a15845b56989abdb8a40d43"
  },
  {
    "url": "assets/reveal.js/css/theme/black.css",
    "revision": "4c0d91e1cf4096f40c554df2b42aab47"
  },
  {
    "url": "assets/reveal.js/css/theme/blood.css",
    "revision": "24d80da9e6ef58a145db8a04c1ffd828"
  },
  {
    "url": "assets/reveal.js/css/theme/league.css",
    "revision": "f8068101874b7ce77a3ff545e19dc0dd"
  },
  {
    "url": "assets/reveal.js/css/theme/moon.css",
    "revision": "f87bb9e367737d779a53ad2946f29b2c"
  },
  {
    "url": "assets/reveal.js/css/theme/night.css",
    "revision": "587b86b734a7889cb81656eb1037eb12"
  },
  {
    "url": "assets/reveal.js/css/theme/README.md",
    "revision": "e1050b85564cabfce2eac841a3e5a60b"
  },
  {
    "url": "assets/reveal.js/css/theme/serif.css",
    "revision": "c4ac3997243d248b3c3556c609988ae1"
  },
  {
    "url": "assets/reveal.js/css/theme/simple.css",
    "revision": "5761675b24581092a8fb341ad6d32ef4"
  },
  {
    "url": "assets/reveal.js/css/theme/sky.css",
    "revision": "23b11a31ce6efdb8c19345dea9be9b19"
  },
  {
    "url": "assets/reveal.js/css/theme/solarized.css",
    "revision": "5b19edfc252f0258be887a83d92e0ef8"
  },
  {
    "url": "assets/reveal.js/css/theme/source/beige.scss",
    "revision": "feb84129ebc96dd4c85b5d8b6c3eb4f4"
  },
  {
    "url": "assets/reveal.js/css/theme/source/black.scss",
    "revision": "2985de6020ad8b0f87ff8f36c70f4f6b"
  },
  {
    "url": "assets/reveal.js/css/theme/source/blood.scss",
    "revision": "d82dc38bae609c2726958f9aab4fc9ee"
  },
  {
    "url": "assets/reveal.js/css/theme/source/league.scss",
    "revision": "08da2480acca7f600f9e5bd1a078837f"
  },
  {
    "url": "assets/reveal.js/css/theme/source/moon.scss",
    "revision": "1ba59e61fa0101bd785176f838c9ba51"
  },
  {
    "url": "assets/reveal.js/css/theme/source/night.scss",
    "revision": "9a1ea0cc2d76bcb89b0515b382f6401d"
  },
  {
    "url": "assets/reveal.js/css/theme/source/serif.scss",
    "revision": "bfa4bc2657849d17ff0dfd4a207eb64f"
  },
  {
    "url": "assets/reveal.js/css/theme/source/simple.scss",
    "revision": "622ca20ce548ef42e7b16737dd17a907"
  },
  {
    "url": "assets/reveal.js/css/theme/source/sky.scss",
    "revision": "0638061654d97d460420829a9193ad78"
  },
  {
    "url": "assets/reveal.js/css/theme/source/solarized.scss",
    "revision": "847fbfcc4a8213da67cc3cefa7f8d3ce"
  },
  {
    "url": "assets/reveal.js/css/theme/source/white.scss",
    "revision": "98adcce779e000d8f8296fea9304f9ce"
  },
  {
    "url": "assets/reveal.js/css/theme/template/mixins.scss",
    "revision": "3f9eb23c4b5ccc227e43cda612a52df0"
  },
  {
    "url": "assets/reveal.js/css/theme/template/settings.scss",
    "revision": "a783e81e3f3aabbda9cb1690c2ea8867"
  },
  {
    "url": "assets/reveal.js/css/theme/template/theme.scss",
    "revision": "b62d8615a9459397a93b43e14c90e904"
  },
  {
    "url": "assets/reveal.js/css/theme/white.css",
    "revision": "4b1a509b77990661e5a9672b53a798b7"
  },
  {
    "url": "assets/reveal.js/js/reveal.js",
    "revision": "3ebe652a9b4cbc1b93aa4b0923d469ee"
  },
  {
    "url": "assets/reveal.js/lib/css/monokai.css",
    "revision": "61e38729dbd8f81f129ae38770c9cd68"
  },
  {
    "url": "assets/reveal.js/lib/css/zenburn.css",
    "revision": "b8210619cb21042d14d0676f27e2f41c"
  },
  {
    "url": "assets/reveal.js/lib/font/league-gothic/league-gothic.css",
    "revision": "8bb6925b428183314e77f7faac77902f"
  },
  {
    "url": "assets/reveal.js/lib/font/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "assets/reveal.js/lib/font/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "assets/reveal.js/lib/font/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "assets/reveal.js/lib/font/source-sans-pro/source-sans-pro.css",
    "revision": "fc967f67d573d595bbe8f9e013f9cd74"
  },
  {
    "url": "assets/reveal.js/lib/js/html5shiv.js",
    "revision": "9ae3929a0f70ac45b5f665912f488100"
  },
  {
    "url": "assets/reveal.js/lib/js/promise.js",
    "revision": "7e3f91f4833c77e262dda01ce927c3ed"
  },
  {
    "url": "assets/reveal.js/plugin/highlight/highlight.js",
    "revision": "5a8657906b49e5c501174a1bddd8c09e"
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
    "url": "assets/reveal.js/plugin/markdown/markdown.js",
    "revision": "28ccea36c0a5d7dafca4c74e15bc2c0a"
  },
  {
    "url": "assets/reveal.js/plugin/markdown/marked.js",
    "revision": "3d0182ccfe9433c2f6e3bc2ca12ca90d"
  },
  {
    "url": "assets/reveal.js/plugin/math/math.js",
    "revision": "c47e38f3bc2591da51ecb90908bd3185"
  },
  {
    "url": "assets/reveal.js/plugin/multiplex/client.js",
    "revision": "d65eaf35b8207845d752fb7b693ac81b"
  },
  {
    "url": "assets/reveal.js/plugin/multiplex/index.js",
    "revision": "1bb0ccd1473437192133b13ad70518be"
  },
  {
    "url": "assets/reveal.js/plugin/multiplex/master.js",
    "revision": "2d3370fc9912b4351e07fc969ae0f509"
  },
  {
    "url": "assets/reveal.js/plugin/multiplex/package.json",
    "revision": "3d2533c8e572bbab738b898eee6577c4"
  },
  {
    "url": "assets/reveal.js/plugin/notes-server/client.js",
    "revision": "1be6b104c0b1e46f6e6d13d056dad09d"
  },
  {
    "url": "assets/reveal.js/plugin/notes-server/index.js",
    "revision": "912cb2e283598ad0067e3eb391327e82"
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
    "url": "assets/reveal.js/plugin/notes/notes.js",
    "revision": "b9a2e5c3720155be4ff324d3768c990a"
  },
  {
    "url": "assets/reveal.js/plugin/print-pdf/print-pdf.js",
    "revision": "252b5a7e6952a70036ba607fe82f81a1"
  },
  {
    "url": "assets/reveal.js/plugin/search/search.js",
    "revision": "e804e3daccd98f7a1ae6e075782aa272"
  },
  {
    "url": "assets/reveal.js/plugin/zoom-js/zoom.js",
    "revision": "a23d32681ee1968291cc0a4c7c76733d"
  },
  {
    "url": "assets/search-ui.js",
    "revision": "105960ffca8b860e0786970f4fdcd481"
  },
  {
    "url": "assets/styles.css",
    "revision": "8e7812bb1ad7206b9357723a8880af3b"
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
    "url": "collection/index.html",
    "revision": "40dc11082820562f067ac5453522c1e4"
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
    "url": "fragments/1/index.html",
    "revision": "238393cec9041b2d9238bb292c3e67f2"
  },
  {
    "url": "fragments/10/index.html",
    "revision": "65eb789ae430fe7462cbdbffc082422c"
  },
  {
    "url": "fragments/11/index.html",
    "revision": "e263de67829360f0611ca146459727ff"
  },
  {
    "url": "fragments/12/index.html",
    "revision": "b0a4f72a0d3d71abf169a19e2dedc7eb"
  },
  {
    "url": "fragments/13/index.html",
    "revision": "fbcc39a305b9c2119b4ae66cb0ad3c28"
  },
  {
    "url": "fragments/14/index.html",
    "revision": "076fcdcfa8a58443c985f66da4c14621"
  },
  {
    "url": "fragments/15/index.html",
    "revision": "1f67efba414ed5540fc6f95d5d9146dd"
  },
  {
    "url": "fragments/16/index.html",
    "revision": "30b8eb35d4f4512554d4f4548f915f87"
  },
  {
    "url": "fragments/17/index.html",
    "revision": "c82ee3b0da1f31e187c91802f9756fc7"
  },
  {
    "url": "fragments/18/index.html",
    "revision": "b57d3a5eb5abea11ef22cb079662f87a"
  },
  {
    "url": "fragments/19/index.html",
    "revision": "098ce3efa5f4c91ca51ad6ff0eabe0a8"
  },
  {
    "url": "fragments/2/index.html",
    "revision": "b49ba17c814ed394ba4ba00283dfd656"
  },
  {
    "url": "fragments/20/index.html",
    "revision": "1ac8ea8f945806136fe2142329b7f721"
  },
  {
    "url": "fragments/21/index.html",
    "revision": "f8cd49691664dc3ad42483bd9cc25bd2"
  },
  {
    "url": "fragments/22/index.html",
    "revision": "6dca933d44b0484c137c8177194161de"
  },
  {
    "url": "fragments/23/index.html",
    "revision": "2115de03a92445d24fa1029f13abe440"
  },
  {
    "url": "fragments/24/index.html",
    "revision": "8027742565c9efdea0436677dba376cf"
  },
  {
    "url": "fragments/25/index.html",
    "revision": "a0704450d922a773feee83c55239612a"
  },
  {
    "url": "fragments/26/index.html",
    "revision": "06eca991ba8c7fa67ea9bd02af499440"
  },
  {
    "url": "fragments/27/index.html",
    "revision": "1b3e94728ba2468258a8cc09377e2eb0"
  },
  {
    "url": "fragments/28/index.html",
    "revision": "697b6eb72b0c9740fa1c1019e81fe3e4"
  },
  {
    "url": "fragments/29/index.html",
    "revision": "519efe9f61cc88e96615b8ab8613edda"
  },
  {
    "url": "fragments/3/index.html",
    "revision": "9aa505b110cc6a0a749441076e044f3b"
  },
  {
    "url": "fragments/30/index.html",
    "revision": "3e00636383814803c5ce93dc66ea56e8"
  },
  {
    "url": "fragments/31/index.html",
    "revision": "a8339308bd396c82d3fa6299615f7ffa"
  },
  {
    "url": "fragments/32/index.html",
    "revision": "2b8bfd997db9bc8ba8dffdc072d21686"
  },
  {
    "url": "fragments/33/index.html",
    "revision": "3570db766d7f0c2367b664fea6f2d47e"
  },
  {
    "url": "fragments/34/index.html",
    "revision": "bb6a9e5a3d5516d8b3b31cf2d5a28fe2"
  },
  {
    "url": "fragments/35/index.html",
    "revision": "997f722db652ebd962079f4966deccd3"
  },
  {
    "url": "fragments/36/index.html",
    "revision": "d03ad9864ba3d68b8f4fe262a774e04d"
  },
  {
    "url": "fragments/37/index.html",
    "revision": "da3cc3290f2d3d15e203863665df3da6"
  },
  {
    "url": "fragments/38/index.html",
    "revision": "4a7f5975e12c8c4e2285d1616d943c1a"
  },
  {
    "url": "fragments/39/index.html",
    "revision": "82f9a4a3c99ac60d4efc38c193a582a0"
  },
  {
    "url": "fragments/4/index.html",
    "revision": "392a41368f6bc733ab687172057a8243"
  },
  {
    "url": "fragments/40/index.html",
    "revision": "9abbf0b321db83f7fab568577a8f550a"
  },
  {
    "url": "fragments/41/index.html",
    "revision": "e5906aae915f36d8b1454803ac413b31"
  },
  {
    "url": "fragments/42/index.html",
    "revision": "d3cc4465046d97e1c19c04caa6b160c4"
  },
  {
    "url": "fragments/43/index.html",
    "revision": "e4a21f3d6b6b690a916f3366be3d2bf8"
  },
  {
    "url": "fragments/44/index.html",
    "revision": "586abf81f6a422dae0f9c04ce6622201"
  },
  {
    "url": "fragments/45/index.html",
    "revision": "ea074510b9491a8afa65fdfb55afd539"
  },
  {
    "url": "fragments/46/index.html",
    "revision": "9b9142e7177cb6cd746eac9f5b7ae003"
  },
  {
    "url": "fragments/47/index.html",
    "revision": "0b31bc5d7b08cc38f317a1b3042b5763"
  },
  {
    "url": "fragments/48/index.html",
    "revision": "91396011ea606ab305d5cfa9d3f3a899"
  },
  {
    "url": "fragments/49/index.html",
    "revision": "30ae78e4f7c2c07ad39d20db6b09075f"
  },
  {
    "url": "fragments/5/index.html",
    "revision": "01e33ee4e5d5560b3345c44809ca4352"
  },
  {
    "url": "fragments/50/index.html",
    "revision": "e29df06648aede9c987f3297a85be2f3"
  },
  {
    "url": "fragments/51/index.html",
    "revision": "1069ac8a6911eacd3a7a537de8a1afbb"
  },
  {
    "url": "fragments/52/index.html",
    "revision": "28b8bc9e3a956194ec985d2a33aa8c02"
  },
  {
    "url": "fragments/6/index.html",
    "revision": "94279b656df951c77cd0521842522d7f"
  },
  {
    "url": "fragments/7/index.html",
    "revision": "da39b6b9414aabe371b351147673879e"
  },
  {
    "url": "fragments/8/index.html",
    "revision": "91c433f582b8d37ca80d56707deb079d"
  },
  {
    "url": "fragments/9/index.html",
    "revision": "b1eee4b13f411484e7b3da42d42a37a3"
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
    "url": "img/works/1/1_150x.jpg",
    "revision": "88d9b59fc4817f5b92cdb64bcf352067"
  },
  {
    "url": "img/works/1/1_640x.jpg",
    "revision": "7c2894f90ff43eb4ea0abf6878386a37"
  },
  {
    "url": "img/works/10/10_150x.jpg",
    "revision": "db695d5cc4b28edaa0eea7f309b72bbf"
  },
  {
    "url": "img/works/10/10_640x.jpg",
    "revision": "c3d60f991a033b7daaf950da8db5d90f"
  },
  {
    "url": "img/works/11/11_150x.jpg",
    "revision": "a9424800f1544887f6e160321927719f"
  },
  {
    "url": "img/works/11/11_640x.jpg",
    "revision": "28388f68a8faafc490e4172dfcad8cb8"
  },
  {
    "url": "img/works/12/12_150x.jpg",
    "revision": "d49b247e616bd7025a3c5376c1f7420a"
  },
  {
    "url": "img/works/12/12_640x.jpg",
    "revision": "411f1175c84defe2e77fded3fe1afae2"
  },
  {
    "url": "img/works/13/13_1_150x.jpg",
    "revision": "b2b8485c30619b41ca1b57a92e308cd2"
  },
  {
    "url": "img/works/13/13_1_640x.jpg",
    "revision": "fea940fca7c88a5324900d65a00b1316"
  },
  {
    "url": "img/works/13/13_2_150x.jpg",
    "revision": "16199e4d29f73d87430c6dd1bd083eb1"
  },
  {
    "url": "img/works/13/13_2_640x.jpg",
    "revision": "1bc2d2cf67658a7297bd593342cea906"
  },
  {
    "url": "img/works/14/14_150x.jpg",
    "revision": "df13f27db0d09d6f37b9357441731674"
  },
  {
    "url": "img/works/14/14_640x.jpg",
    "revision": "e451f7784ce43e339fb2abcaca11374f"
  },
  {
    "url": "img/works/15/15_150x.jpg",
    "revision": "14dc91c108465dd3581e166db6e2bc18"
  },
  {
    "url": "img/works/15/15_640x.jpg",
    "revision": "7cae4612dae38cedbbb6c9d14f6201f7"
  },
  {
    "url": "img/works/16/16_150x.jpg",
    "revision": "a1cc0297ff09dc3af82f470a5cc079d0"
  },
  {
    "url": "img/works/16/16_640x.jpg",
    "revision": "e43a34b5bb5175480dc8780da3501fea"
  },
  {
    "url": "img/works/17/17_150x.jpg",
    "revision": "08315c1ae9eba68ce9c8d0a3e0273ac4"
  },
  {
    "url": "img/works/17/17_640x.jpg",
    "revision": "3985aec724ed3d34c84f334a55effaaa"
  },
  {
    "url": "img/works/18/18_150x.jpg",
    "revision": "308f42f705c95f5b01f13d98030cc41a"
  },
  {
    "url": "img/works/18/18_640x.jpg",
    "revision": "37a5ca96ff0c619f9871fa60d2ad637b"
  },
  {
    "url": "img/works/19/19_150x.jpg",
    "revision": "3e2d6058b6cb6eba0cadc1fb49a2dbe0"
  },
  {
    "url": "img/works/19/19_640x.jpg",
    "revision": "90edca2a5099c540b6b3a5c6cec55120"
  },
  {
    "url": "img/works/2/2_150x.jpg",
    "revision": "ff78704627da0fdb65a0c9835db32383"
  },
  {
    "url": "img/works/2/2_640x.jpg",
    "revision": "cc80101ca99747282a47a9c4f8cae562"
  },
  {
    "url": "img/works/20/20_150x.jpg",
    "revision": "61647735e88b4bb3b12e014e84c0d91a"
  },
  {
    "url": "img/works/20/20_640x.jpg",
    "revision": "0a58f6b00a94a2b2bc304e28e3d70d66"
  },
  {
    "url": "img/works/21/21_150x.jpg",
    "revision": "3d494ad78fe5c1a39a93490a31fb90cd"
  },
  {
    "url": "img/works/21/21_640x.jpg",
    "revision": "d7c71aeb5cb44ee78602ab7cb6c6c07e"
  },
  {
    "url": "img/works/22/22_150x.jpg",
    "revision": "0f3d02523e95f919936bcb953ee99adc"
  },
  {
    "url": "img/works/22/22_640x.jpg",
    "revision": "0465ae3e283527c3b7914ca216d75db5"
  },
  {
    "url": "img/works/23/23_150x.jpg",
    "revision": "ae516cfc2c56c802ee2a5e16980e5ff5"
  },
  {
    "url": "img/works/23/23_640x.jpg",
    "revision": "16c018460087f4d1a8c8797e2a6d1ac5"
  },
  {
    "url": "img/works/24/24_150x.jpg",
    "revision": "abc0bccf5a78237eb52570834dd93026"
  },
  {
    "url": "img/works/24/24_640x.jpg",
    "revision": "c9944c6681897b14e02f4442b01411c6"
  },
  {
    "url": "img/works/25/25_150x.jpg",
    "revision": "583bbec7ae2ac967175a838f01c1d129"
  },
  {
    "url": "img/works/25/25_640x.jpg",
    "revision": "3a1df4c97aac4b6407c26726f2c64d3e"
  },
  {
    "url": "img/works/26/26_1_640x.jpg",
    "revision": "bc6c685b691a9c4da40427e6978410b6"
  },
  {
    "url": "img/works/26/26_150x.jpg",
    "revision": "d5ce043dfab02aba986034e133486c05"
  },
  {
    "url": "img/works/26/26_2_640x.jpg",
    "revision": "ca166536ff6c18cda9907e3306fbe58d"
  },
  {
    "url": "img/works/26/26_3_640x.jpg",
    "revision": "aceface0459cd6a9b5867c2fd4c7c08c"
  },
  {
    "url": "img/works/27/27_150x.jpg",
    "revision": "ca52060f7c82a52c09eee8e2bf5a689d"
  },
  {
    "url": "img/works/27/27_640x.jpg",
    "revision": "405f7c62607ce8384026d88196895185"
  },
  {
    "url": "img/works/28/28_150x.jpg",
    "revision": "6a69cdb776100cd8dbcb65e2f1ec68de"
  },
  {
    "url": "img/works/28/28_640x.jpg",
    "revision": "7d59df6b17575bbea2f4b655bec92afa"
  },
  {
    "url": "img/works/29/29_1_150x.jpg",
    "revision": "9c0437966d177e6749a98692380eed7c"
  },
  {
    "url": "img/works/29/29_1_640x.jpg",
    "revision": "2500948fb985e86147db166d6945c223"
  },
  {
    "url": "img/works/3/3_150x.jpg",
    "revision": "9d9fb929573bd3072c560f3effc7cd6b"
  },
  {
    "url": "img/works/3/3_640x.jpg",
    "revision": "828e425af61211ba7e9b59f8deb0059e"
  },
  {
    "url": "img/works/30/30_150x.jpg",
    "revision": "c86f9d34a63f11566c126d9fbf8c0e1f"
  },
  {
    "url": "img/works/30/30_640x.jpg",
    "revision": "de1240f56e82ed2cc8cd4a5b731d6837"
  },
  {
    "url": "img/works/31/31_150x.jpg",
    "revision": "4de8d6d57241089ee2257c079b69513c"
  },
  {
    "url": "img/works/31/31_640x.jpg",
    "revision": "1c41ff4b29fdc3ab5e2f42c70ed1f078"
  },
  {
    "url": "img/works/32/32_150x.jpg",
    "revision": "8c4ca2766ed66359839e110d9c7b9ef0"
  },
  {
    "url": "img/works/32/32_640x.jpg",
    "revision": "93c63486f8fdabb38db2168f6c390789"
  },
  {
    "url": "img/works/33/33_150x-0.jpg",
    "revision": "2e88ed506e677e52084bfbcca91a172d"
  },
  {
    "url": "img/works/33/33_150x-1.jpg",
    "revision": "79664ff8e525c286fb623c6b4812d669"
  },
  {
    "url": "img/works/33/33_640x-0.jpg",
    "revision": "e912f3d04631b4b795c354e12d748d03"
  },
  {
    "url": "img/works/33/33_640x-1.jpg",
    "revision": "d9b64292dce07d910629ac0533f2bdc5"
  },
  {
    "url": "img/works/34/34_150x.jpg",
    "revision": "e3bc81dbb260fd31651a867ccada5c24"
  },
  {
    "url": "img/works/34/34_640x.jpg",
    "revision": "51dab803a3a36fd80c0e55b12bf11e9e"
  },
  {
    "url": "img/works/35/35_150x.jpg",
    "revision": "9b2dd79c999251a8c8bd15afe356caba"
  },
  {
    "url": "img/works/35/35_640x.jpg",
    "revision": "4250d50dcd2a217e4faa53fff351abe4"
  },
  {
    "url": "img/works/36/36_150x.jpg",
    "revision": "09121a4e7ee93014fe774524a9dd1b71"
  },
  {
    "url": "img/works/36/36_640x.jpg",
    "revision": "5dd36ce761c1032965a35a8bb924db60"
  },
  {
    "url": "img/works/37/37_150x.jpg",
    "revision": "0b7a0738f4194b4a10537b1a3e17ca93"
  },
  {
    "url": "img/works/37/37_640x.jpg",
    "revision": "2a3e26eef4423f2f1308852489b28a4a"
  },
  {
    "url": "img/works/38/38_150x.jpg",
    "revision": "504f449a3c087557bc136bab55e68960"
  },
  {
    "url": "img/works/38/38_640x.jpg",
    "revision": "b5aff14394e8e6a76b8f54a0812f1d95"
  },
  {
    "url": "img/works/39/39_150x.jpg",
    "revision": "2e0b89d9236a136b597572749a8b9ba4"
  },
  {
    "url": "img/works/39/39_640x.jpg",
    "revision": "595523ff5aec5817c9f031d22d87e403"
  },
  {
    "url": "img/works/4/4_150x.jpg",
    "revision": "b9bc29f6aa158ebc1844169f9fe7962e"
  },
  {
    "url": "img/works/4/4_640x.jpg",
    "revision": "6f9c4d0e8bff9ecc330060765cdb8936"
  },
  {
    "url": "img/works/40/40_150x.jpg",
    "revision": "6c12ee69126294f6d4c58ec38d466a0f"
  },
  {
    "url": "img/works/40/40_640x.jpg",
    "revision": "441aa6d1f869e4cea9248bf5f9859f07"
  },
  {
    "url": "img/works/41/41_150x.jpg",
    "revision": "dc4ff099b7013884c93c1affd06150a9"
  },
  {
    "url": "img/works/41/41_640x.jpg",
    "revision": "1e75631fca50ceadc2f3b98dfc3211f0"
  },
  {
    "url": "img/works/42/42_150x.jpg",
    "revision": "42ff412ccb8cbc7f0347bfec722e3496"
  },
  {
    "url": "img/works/42/42_640x.jpg",
    "revision": "bcf3151114a5a9a9465212dcce4d7279"
  },
  {
    "url": "img/works/43/43_150x.jpg",
    "revision": "f9d08d3eb7f7ee9647851c492a52c19d"
  },
  {
    "url": "img/works/43/43_640x.jpg",
    "revision": "5b5736511c9f62af8824f51aee19c64a"
  },
  {
    "url": "img/works/44/44_150x.jpg",
    "revision": "daaa2067f9636c9ba7dafcc0cfb6e612"
  },
  {
    "url": "img/works/44/44_640x.jpg",
    "revision": "924b38f586242d16e30913b185be68cd"
  },
  {
    "url": "img/works/45/45_150x.jpg",
    "revision": "53192c4f96d90c497bb2d8ca9fa5d15c"
  },
  {
    "url": "img/works/45/45_640x.jpg",
    "revision": "104a8e0105ba01982b3ada31c23284db"
  },
  {
    "url": "img/works/46/46_150x.jpg",
    "revision": "413915ac0f8f7203b42e3ce918f10a34"
  },
  {
    "url": "img/works/46/46_640x.jpg",
    "revision": "c134011c6ef2ff834eec1eb55449d8c5"
  },
  {
    "url": "img/works/47/47_1_150x.jpg",
    "revision": "2621c7176fb52a3aadd207a5c49d2cf0"
  },
  {
    "url": "img/works/47/47_1_640x.jpg",
    "revision": "a8e143327dd8befe9d9927410a4613cf"
  },
  {
    "url": "img/works/47/47. A selection of beads 2.tif_150xp.jpg",
    "revision": "66f4d0283d1742c3f3dfbe81137f090c"
  },
  {
    "url": "img/works/47/47. A selection of beads 2.tif_640x.jpg",
    "revision": "bf5b676bb83535ca9014c8c0781e434d"
  },
  {
    "url": "img/works/47/47. A selection of beads 3.tif_150xp.jpg",
    "revision": "31b5c037ca7018406f486c6fcf692271"
  },
  {
    "url": "img/works/47/47. A selection of beads 3.tif_640x.jpg",
    "revision": "f1c4ff18071bb2f3a0557d6bb72a9c5b"
  },
  {
    "url": "img/works/48/48_150x.jpg",
    "revision": "1bd2177251a35f88c352b671e37afea2"
  },
  {
    "url": "img/works/48/48_640x.jpg",
    "revision": "069a7bc36c19eb676e908f32dbadf11b"
  },
  {
    "url": "img/works/49/49_150x.jpg",
    "revision": "562affedd7ba368d3f034295b635edc0"
  },
  {
    "url": "img/works/49/49_640x.jpg",
    "revision": "15078f253d08ea4d897567546ac096e2"
  },
  {
    "url": "img/works/5/5_150x.jpg",
    "revision": "9296d9146635257033a74b23f6ea95d5"
  },
  {
    "url": "img/works/5/5_640x.jpg",
    "revision": "e296d3d410c7536491ea3a1d03b01c44"
  },
  {
    "url": "img/works/50/50_150x.jpg",
    "revision": "a9c537fbe1bcbbca17d9e4e50ad8f90f"
  },
  {
    "url": "img/works/50/50_640x.jpg",
    "revision": "f0bda4699604d0154a92308c92021d54"
  },
  {
    "url": "img/works/51/51_150x.jpg",
    "revision": "cce14ade657e2632e33acd82c60c24d6"
  },
  {
    "url": "img/works/51/51_640x.jpg",
    "revision": "71719f20a2e185b5b88faae25947115c"
  },
  {
    "url": "img/works/52/52_150x.jpg",
    "revision": "2fed0b8df87e684a2c14a0d2f09e8a26"
  },
  {
    "url": "img/works/52/52_640x.jpg",
    "revision": "373c04e5ea0ab727f5783e81437800c8"
  },
  {
    "url": "img/works/6/6_150x.jpg",
    "revision": "d4773a78d72233f6571d865efd8a7736"
  },
  {
    "url": "img/works/6/6_640x.jpg",
    "revision": "71798bd3a062aa045881441f59eecf64"
  },
  {
    "url": "img/works/7/7_150x.jpg",
    "revision": "5d5e6c5e78e7b34e0733e506c3bc2747"
  },
  {
    "url": "img/works/7/7_640x.jpg",
    "revision": "68ed2c05c6740ac0ac2ce2d8e364f790"
  },
  {
    "url": "img/works/8/8_150x.jpg",
    "revision": "256bb26a634d9263154890243bcd708d"
  },
  {
    "url": "img/works/8/8_640x.jpg",
    "revision": "8e3685c044332183b2ea6aea50b0fb2a"
  },
  {
    "url": "img/works/9/9_150x.jpg",
    "revision": "f5d599e8382847f3d4d5847750d3aab7"
  },
  {
    "url": "img/works/9/9_640x.jpg",
    "revision": "b9eac8a3417385ccd139878b8c5cf17d"
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
    "url": "img/tour/atlas-of-maritime.jpg",
    "revision": "b2e9246601be4ed5e21ff9cae43c55d1"
  },
  {
    "url": "img/tour/gao-tour.png",
    "revision": "035fa048c60b5755ad2a321ada0918f4"
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
    "url": "img/tour/medieval-glass-tour.png",
    "revision": "af8d52fd6ba3291ab5b0c61fdec6b3bb"
  },
  {
    "url": "img/tour/niger-river.png",
    "revision": "5cfa401d2fab1e9e1c45728fbea0448c"
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
    "url": "index.html",
    "revision": "3fed53f17c6b8e52d62bbac958874b65"
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
    "url": "search/index.html",
    "revision": "2bf4321e44e7ac8c6bcdd11aaa04b4bd"
  },
  {
    "url": "search/index.json",
    "revision": "a5044d8861ffee025159e85437baea90"
  },
  {
    "url": "service-worker.js",
    "revision": "9f7609664f95361c5222dea0cc856408"
  },
  {
    "url": "tour/driving-desires/index.html",
    "revision": "a61758d7493c7fa3ff8ca091b5b1be07"
  },
  {
    "url": "tour/index.html",
    "revision": "3a4668011fb2ef31b8bbcfd78a229b8f"
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
    "url": "workbox-config.js",
    "revision": "20ac577b3c0d6f35ab1c8962c739fc63"
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
  '/img/works/26/26. Atlas of maritime charts.jpg',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'Atlas-cache',
  })
);

workbox.routing.registerRoute(
  '/img/works/40/40. Double-egg pendant.jpg',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'Doubleegg-cache',
  })
);