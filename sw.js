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
    "revision": "2057ff51b5ddf03e8d181b7f93df97a5"
  },
  {
    "url": "about/index.html",
    "revision": "830f7e4a9cdb9659cd046e05d3d76e7e"
  },
  {
    "url": "assets/bootstrap/bootstrap.min.js",
    "revision": "610cebadf3448a055a38a80634fad5c0"
  },
  {
    "url": "assets/datatables/datatables.css",
    "revision": "fdb1721b8cdde45ed91c599dadbacc5a"
  },
  {
    "url": "assets/datatables/datatables.min.js",
    "revision": "64b492d8a6619cbf2cbaf056d722b844"
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
    "url": "assets/jquery-3.2.1.min.js",
    "revision": "473957cfb255a781b42cb2af51d54a3b"
  },
  {
    "url": "assets/openseadragon/alt-buttons/fullpage_grouphover.png",
    "revision": "bdf114b275e0e1869243d3994a3676d6"
  },
  {
    "url": "assets/openseadragon/alt-buttons/fullpage_hover.png",
    "revision": "bdf114b275e0e1869243d3994a3676d6"
  },
  {
    "url": "assets/openseadragon/alt-buttons/fullpage_pressed.png",
    "revision": "bdf114b275e0e1869243d3994a3676d6"
  },
  {
    "url": "assets/openseadragon/alt-buttons/fullpage_rest.png",
    "revision": "8560da44846c22ffbbeb1fe43e46d934"
  },
  {
    "url": "assets/openseadragon/alt-buttons/home_grouphover.png",
    "revision": "800ca4bee72e33e07851bf2d5df736b4"
  },
  {
    "url": "assets/openseadragon/alt-buttons/home_hover.png",
    "revision": "800ca4bee72e33e07851bf2d5df736b4"
  },
  {
    "url": "assets/openseadragon/alt-buttons/home_pressed.png",
    "revision": "800ca4bee72e33e07851bf2d5df736b4"
  },
  {
    "url": "assets/openseadragon/alt-buttons/home_rest.png",
    "revision": "c5bbaaaca44d99610e5fa6f7d385214a"
  },
  {
    "url": "assets/openseadragon/alt-buttons/next_grouphover.png",
    "revision": "f06f2e3f28f151f19f0a4dc51aeacb65"
  },
  {
    "url": "assets/openseadragon/alt-buttons/next_hover.png",
    "revision": "f06f2e3f28f151f19f0a4dc51aeacb65"
  },
  {
    "url": "assets/openseadragon/alt-buttons/next_pressed.png",
    "revision": "f06f2e3f28f151f19f0a4dc51aeacb65"
  },
  {
    "url": "assets/openseadragon/alt-buttons/next_rest.png",
    "revision": "2489bb4531431bb8bcbfc54e8a05615e"
  },
  {
    "url": "assets/openseadragon/alt-buttons/previous_grouphover.png",
    "revision": "09d2953025c76d2ed3ba9d8ea7d005c9"
  },
  {
    "url": "assets/openseadragon/alt-buttons/previous_hover.png",
    "revision": "09d2953025c76d2ed3ba9d8ea7d005c9"
  },
  {
    "url": "assets/openseadragon/alt-buttons/previous_pressed.png",
    "revision": "09d2953025c76d2ed3ba9d8ea7d005c9"
  },
  {
    "url": "assets/openseadragon/alt-buttons/previous_rest.png",
    "revision": "06cc0d6b4c2f3f9e2fcc4fc82d6302d2"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateleft_grouphover.png",
    "revision": "4fa1f3fd21ba4a2510450d2e3ab0c757"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateleft_hover.png",
    "revision": "4fa1f3fd21ba4a2510450d2e3ab0c757"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateleft_pressed.png",
    "revision": "4fa1f3fd21ba4a2510450d2e3ab0c757"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateleft_rest.png",
    "revision": "a11115101ac4170c3d4cda3d86089eaa"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateright_grouphover.png",
    "revision": "0e453f022390014d6ac47f68c188b052"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateright_hover.png",
    "revision": "0e453f022390014d6ac47f68c188b052"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateright_pressed.png",
    "revision": "0e453f022390014d6ac47f68c188b052"
  },
  {
    "url": "assets/openseadragon/alt-buttons/rotateright_rest.png",
    "revision": "dd4dea5190447b68496368a3a9678146"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomin_grouphover.png",
    "revision": "f1f7886dd8f608f2a04e93efbd8d9b1a"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomin_hover.png",
    "revision": "f1f7886dd8f608f2a04e93efbd8d9b1a"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomin_pressed.png",
    "revision": "f1f7886dd8f608f2a04e93efbd8d9b1a"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomin_rest.png",
    "revision": "5d8560c935018b63bab386e0df9f51ab"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomout_grouphover.png",
    "revision": "32dad8bb5425303dc870e971e8482303"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomout_hover.png",
    "revision": "32dad8bb5425303dc870e971e8482303"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomout_pressed.png",
    "revision": "32dad8bb5425303dc870e971e8482303"
  },
  {
    "url": "assets/openseadragon/alt-buttons/zoomout_rest.png",
    "revision": "833ed2faef46a2b2899775ce586c167d"
  },
  {
    "url": "assets/openseadragon/images/button_grouphover.png",
    "revision": "71845fb2fc9a756e824778d101b06157"
  },
  {
    "url": "assets/openseadragon/images/button_hover.png",
    "revision": "219ca15281bf30ca42fc9b041baa0f81"
  },
  {
    "url": "assets/openseadragon/images/button_pressed.png",
    "revision": "520d9665fb306f55bbf589cd94a12dee"
  },
  {
    "url": "assets/openseadragon/images/button_rest.png",
    "revision": "6d65f1f8fcc0ef137c1a0b9226dc7147"
  },
  {
    "url": "assets/openseadragon/images/flip_grouphover.png",
    "revision": "07cf5529f84839834d6b56b239d4a9ba"
  },
  {
    "url": "assets/openseadragon/images/flip_hover.png",
    "revision": "1d151fdb16a178907d72b409c04603a6"
  },
  {
    "url": "assets/openseadragon/images/flip_pressed.png",
    "revision": "5023e50d2cfd174f86d600825823321c"
  },
  {
    "url": "assets/openseadragon/images/flip_rest.png",
    "revision": "7f9c40c57f9f4be36aa1d5d22497f71f"
  },
  {
    "url": "assets/openseadragon/images/fullpage_grouphover.png",
    "revision": "42e9c79dc79375d102153858e669bd30"
  },
  {
    "url": "assets/openseadragon/images/fullpage_hover.png",
    "revision": "f3a4dc16ec7028978d3c334073a9c36c"
  },
  {
    "url": "assets/openseadragon/images/fullpage_pressed.png",
    "revision": "4f2a6dd2d0d4ffdf350ef253d17e45b0"
  },
  {
    "url": "assets/openseadragon/images/fullpage_rest.png",
    "revision": "52688ff690266b2055752e3aa91f9009"
  },
  {
    "url": "assets/openseadragon/images/home_grouphover.png",
    "revision": "d14125142ef3694d56fd8a29fa32e2c6"
  },
  {
    "url": "assets/openseadragon/images/home_hover.png",
    "revision": "af78a3af12bcf393b01f74f9b3e37a6a"
  },
  {
    "url": "assets/openseadragon/images/home_pressed.png",
    "revision": "34fcccb901abeecf9731594b4ca70887"
  },
  {
    "url": "assets/openseadragon/images/home_rest.png",
    "revision": "8d9fa38f7e0cd6d66f7c6927095e67a4"
  },
  {
    "url": "assets/openseadragon/images/next_grouphover.png",
    "revision": "5f8e933291cf779d715ded0ab4759692"
  },
  {
    "url": "assets/openseadragon/images/next_hover.png",
    "revision": "1d86f5b8002be1d5542cdd5dfb00e0b3"
  },
  {
    "url": "assets/openseadragon/images/next_pressed.png",
    "revision": "028df665ba465133ea20a5f7d8f7a45b"
  },
  {
    "url": "assets/openseadragon/images/next_rest.png",
    "revision": "504f56a785ab7f6da4a0415f1c16f6b4"
  },
  {
    "url": "assets/openseadragon/images/previous_grouphover.png",
    "revision": "830a1f39be3cadaabedda812424ec763"
  },
  {
    "url": "assets/openseadragon/images/previous_hover.png",
    "revision": "b2eb667c796530057e17ec05556c8a30"
  },
  {
    "url": "assets/openseadragon/images/previous_pressed.png",
    "revision": "0478bc0721361e245bc6ae7b80d07bb2"
  },
  {
    "url": "assets/openseadragon/images/previous_rest.png",
    "revision": "7b852cf8cc419742f33c0796a375c790"
  },
  {
    "url": "assets/openseadragon/images/rotateleft_grouphover.png",
    "revision": "803fa7192e5aa0bdb9dea5f78db5705a"
  },
  {
    "url": "assets/openseadragon/images/rotateleft_hover.png",
    "revision": "f34fb64dfbb2bfdd2e0d54478ec8e7cc"
  },
  {
    "url": "assets/openseadragon/images/rotateleft_pressed.png",
    "revision": "b08af14c739a8482ddc495184adb21c3"
  },
  {
    "url": "assets/openseadragon/images/rotateleft_rest.png",
    "revision": "65336ac83e6674247de68e1363a916a0"
  },
  {
    "url": "assets/openseadragon/images/rotateright_grouphover.png",
    "revision": "1ac9f6bd7fd35cfe81abe8ec516a7ad0"
  },
  {
    "url": "assets/openseadragon/images/rotateright_hover.png",
    "revision": "7a66a59675febabbe9b4d30f0b1a0aeb"
  },
  {
    "url": "assets/openseadragon/images/rotateright_pressed.png",
    "revision": "d7168de399c639756fad56a7b877938a"
  },
  {
    "url": "assets/openseadragon/images/rotateright_rest.png",
    "revision": "6a4823da6ccb5a7d4d7a2dde4b19d5e6"
  },
  {
    "url": "assets/openseadragon/images/zoomin_grouphover.png",
    "revision": "9939873c8af89939e7c5be4db4dab447"
  },
  {
    "url": "assets/openseadragon/images/zoomin_hover.png",
    "revision": "6c78c2bc7bea7254506283208b553bb8"
  },
  {
    "url": "assets/openseadragon/images/zoomin_pressed.png",
    "revision": "5b21ffaa3340353be073ecedad1d5d0a"
  },
  {
    "url": "assets/openseadragon/images/zoomin_rest.png",
    "revision": "92c4eed280c1bed37c9fba0aae7cca88"
  },
  {
    "url": "assets/openseadragon/images/zoomout_grouphover.png",
    "revision": "19662f7ca1c1a896c95bd760c0f6a31e"
  },
  {
    "url": "assets/openseadragon/images/zoomout_hover.png",
    "revision": "016da063e45add4f7f353eb87f2de5d7"
  },
  {
    "url": "assets/openseadragon/images/zoomout_pressed.png",
    "revision": "c6327813723b52b9eabc1952626c99df"
  },
  {
    "url": "assets/openseadragon/images/zoomout_rest.png",
    "revision": "1750b0b6fb8f23fb343a3bd595741cbd"
  },
  {
    "url": "assets/openseadragon/openseadragon.min.js",
    "revision": "e83aee7791cac410eec25787803e66f9"
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
    "revision": "fcc26de798b07c0a3f78d68205b014b7"
  },
  {
    "url": "collection/index.html",
    "revision": "605604df56297c190c8578ce462a64f6"
  },
  {
    "url": "fragments/1/index.html",
    "revision": "e3856b07c7e071a54571b008981e2819"
  },
  {
    "url": "fragments/10/index.html",
    "revision": "c6f98b096c90ccc59a1add376e0bb7a7"
  },
  {
    "url": "fragments/11/index.html",
    "revision": "46bcc512bed9cb4b47989e766a7534a4"
  },
  {
    "url": "fragments/12/index.html",
    "revision": "ca9f7f8ec25b07e05bf87e8ef625603e"
  },
  {
    "url": "fragments/13/index.html",
    "revision": "45155762991f3bdcf830d139f3f1316e"
  },
  {
    "url": "fragments/14/index.html",
    "revision": "96a7ca8b92de18e4a060f468bdea0f9a"
  },
  {
    "url": "fragments/15/index.html",
    "revision": "d17fc8912dbb747f55450d1f6b216060"
  },
  {
    "url": "fragments/16/index.html",
    "revision": "25ff8bac3e7dc57f21667c8d4a8c715e"
  },
  {
    "url": "fragments/17/index.html",
    "revision": "480749cfce08a39e18ddeb84eabf34fe"
  },
  {
    "url": "fragments/18/index.html",
    "revision": "229cf2b79bd2ed71dd7a3879e83f8b78"
  },
  {
    "url": "fragments/19/index.html",
    "revision": "791b9b65ce92cac528b76891eb9d8cc8"
  },
  {
    "url": "fragments/2/index.html",
    "revision": "f3fd9197c31c3a13530457f60ce8b46e"
  },
  {
    "url": "fragments/20/index.html",
    "revision": "224f953723ad2718003aeb7667168cee"
  },
  {
    "url": "fragments/21/index.html",
    "revision": "70c9298fcca7fe4241a2ea970e7ec503"
  },
  {
    "url": "fragments/22/index.html",
    "revision": "5bac0fd9b93e58ef540c48c68d634751"
  },
  {
    "url": "fragments/23/index.html",
    "revision": "7cf824f9e13f030eedf2d7e8b8a168fb"
  },
  {
    "url": "fragments/24/index.html",
    "revision": "095aef578c6638e41343e0d58c50b550"
  },
  {
    "url": "fragments/25/index.html",
    "revision": "8ded734420cb675d31673500f192755f"
  },
  {
    "url": "fragments/26/index.html",
    "revision": "4954759bde00b6cc48b762ed6e1eaa7f"
  },
  {
    "url": "fragments/27/index.html",
    "revision": "afb4a5c6c79f3364e54fa6b92aa1007e"
  },
  {
    "url": "fragments/28/index.html",
    "revision": "7da318d21348208b21c130319d789707"
  },
  {
    "url": "fragments/29/index.html",
    "revision": "2390dac9a01d18529205f956a413bd2f"
  },
  {
    "url": "fragments/3/index.html",
    "revision": "496b9bf3469df5db6073d30e84bae4ce"
  },
  {
    "url": "fragments/30/index.html",
    "revision": "b245568cc98b1a289c088ad54df3eed3"
  },
  {
    "url": "fragments/31/index.html",
    "revision": "d84e15018019b6cd2b3f7283daa2a5b7"
  },
  {
    "url": "fragments/32/index.html",
    "revision": "d2bc750a57545f05859c34cdd343bb52"
  },
  {
    "url": "fragments/33/index.html",
    "revision": "f5e794e4b5de4b80c5e3f4458d92d4af"
  },
  {
    "url": "fragments/34/index.html",
    "revision": "c864d1022538057a5a45fc599efb3b2d"
  },
  {
    "url": "fragments/35/index.html",
    "revision": "0fc58197ee109cc43691f6dd63207fb5"
  },
  {
    "url": "fragments/36/index.html",
    "revision": "4543f369a0af6d6b05063d361e385bfd"
  },
  {
    "url": "fragments/37/index.html",
    "revision": "3df79ec3f39e46751a90868133ac442e"
  },
  {
    "url": "fragments/38/index.html",
    "revision": "bc1c36d48c4813962cf77a598180a2f9"
  },
  {
    "url": "fragments/39/index.html",
    "revision": "f92bf400990e4a133155bea380a66fe9"
  },
  {
    "url": "fragments/4/index.html",
    "revision": "8214c484a8d30cf70d4994785823d764"
  },
  {
    "url": "fragments/40/index.html",
    "revision": "1173ee6592eca736718d1f0521a6f8a0"
  },
  {
    "url": "fragments/41/index.html",
    "revision": "68a7156121bf749dff351d0c62fa8d04"
  },
  {
    "url": "fragments/42/index.html",
    "revision": "a047332fa3186bbda45cf3cfdf574322"
  },
  {
    "url": "fragments/43/index.html",
    "revision": "fc982439d40352c91305227faf7f2794"
  },
  {
    "url": "fragments/44/index.html",
    "revision": "eed805afd440d2bee82a6895d684ae75"
  },
  {
    "url": "fragments/45/index.html",
    "revision": "a33abf10b177ee84718fea0acaf41da1"
  },
  {
    "url": "fragments/46/index.html",
    "revision": "361d437727b072cecc067e5ec246c0b0"
  },
  {
    "url": "fragments/47/index.html",
    "revision": "cde6f1a15d00bf6a7e89415f26ef8dea"
  },
  {
    "url": "fragments/48/index.html",
    "revision": "9a3aefdcefe41fc9c074b7bb8aaa7035"
  },
  {
    "url": "fragments/49/index.html",
    "revision": "298ec97ddcf1dcd61a26f6592fd441e1"
  },
  {
    "url": "fragments/5/index.html",
    "revision": "f28379633f2de6587d921eda3556ba37"
  },
  {
    "url": "fragments/50/index.html",
    "revision": "277020d148a94340fc72f1d102e21187"
  },
  {
    "url": "fragments/51/index.html",
    "revision": "721d23ae2e84609e9c090c9da084299c"
  },
  {
    "url": "fragments/52/index.html",
    "revision": "05e23e37f7954ac7137e2021018cbad6"
  },
  {
    "url": "fragments/6/index.html",
    "revision": "729cadde37cac675b14fc00795150be7"
  },
  {
    "url": "fragments/7/index.html",
    "revision": "935d42dd811fefa36c4aa260a36962b9"
  },
  {
    "url": "fragments/8/index.html",
    "revision": "6a112a12147f335514bf8e75290dee3f"
  },
  {
    "url": "fragments/9/index.html",
    "revision": "2434811b6f22aee815c5dce329461678"
  },
  {
    "url": "img/atlas_hero.jpg",
    "revision": "7c7fd154a2c90bc61c338bfa0cf2529b"
  },
  {
    "url": "img/bead-hero-mobile.jpg",
    "revision": "151c08a6dfc95860e02de8096e91fb96"
  },
  {
    "url": "img/bead-hero.jpg",
    "revision": "69b44a20db615ad417e0b0b906a3589d"
  },
  {
    "url": "img/caravans_hero_mobile.jpg",
    "revision": "83415071f3e3533bdb538fcdbf50c2b3"
  },
  {
    "url": "img/caravans_hero.jpg",
    "revision": "7d11cb64765a14983eabbfde37ddd1fe"
  },
  {
    "url": "img/caravans_logo.jpg",
    "revision": "a38c3ccaccb49928398788d83f9212cc"
  },
  {
    "url": "img/fragments/1/1_150x.jpg",
    "revision": "88d9b59fc4817f5b92cdb64bcf352067"
  },
  {
    "url": "img/fragments/1/1_640x.jpg",
    "revision": "606b232b2f5ede508fe1ef353062c780"
  },
  {
    "url": "img/fragments/1/1_75x.jpg",
    "revision": "b492dfc959918d60d8bbb037ec55c953"
  },
  {
    "url": "img/fragments/10/10_150x.jpg",
    "revision": "db695d5cc4b28edaa0eea7f309b72bbf"
  },
  {
    "url": "img/fragments/10/10_640x.jpg",
    "revision": "c3d60f991a033b7daaf950da8db5d90f"
  },
  {
    "url": "img/fragments/10/10_75x.jpg",
    "revision": "683d7687939da4bbfa4350f0df8a7012"
  },
  {
    "url": "img/fragments/10/10. Qingbai bowl.jpg_1400xp.jpg",
    "revision": "6a91f5fcb32e212259ab5e6d15aca851"
  },
  {
    "url": "img/fragments/10/10. Qingbai bowl.jpg_x550p.jpg",
    "revision": "9db0b5c6535d66363bc5f36591639f35"
  },
  {
    "url": "img/fragments/11/11_150x.jpg",
    "revision": "a9424800f1544887f6e160321927719f"
  },
  {
    "url": "img/fragments/11/11_640x.jpg",
    "revision": "28388f68a8faafc490e4172dfcad8cb8"
  },
  {
    "url": "img/fragments/11/11_75x.jpg",
    "revision": "c682be26b91ebbdc6799bf332c213958"
  },
  {
    "url": "img/fragments/11/11. Glazed vessel fragments.png_1400xp.jpg",
    "revision": "6e320a361dd8c32b30300fe498ac8b15"
  },
  {
    "url": "img/fragments/11/11. Glazed vessel fragments.png_150xp.jpg",
    "revision": "ea0c0a50a56742803d4e4fc6e7749f4b"
  },
  {
    "url": "img/fragments/11/11. Glazed vessel fragments.png_640x.jpg",
    "revision": "cdc96c929fef6baead983a96b732ee81"
  },
  {
    "url": "img/fragments/11/11. Glazed vessel fragments.png_75xp.jpg",
    "revision": "0990d969cac787dfaa62e21913daa635"
  },
  {
    "url": "img/fragments/11/11. Glazed vessel fragments.png_x550p.jpg",
    "revision": "08443d528d5a45235ac7937f050c01dd"
  },
  {
    "url": "img/fragments/11/11. Unglazed local ceramic.jpg_1400xp.jpg",
    "revision": "685daf27b0ce88bd8bcd6e969cff945f"
  },
  {
    "url": "img/fragments/11/11. Unglazed local ceramic.jpg_x550p.jpg",
    "revision": "96a7140047dd0c6cc5c8f7d87d829c4f"
  },
  {
    "url": "img/fragments/12/12_150x.jpg",
    "revision": "d49b247e616bd7025a3c5376c1f7420a"
  },
  {
    "url": "img/fragments/12/12_640x.jpg",
    "revision": "411f1175c84defe2e77fded3fe1afae2"
  },
  {
    "url": "img/fragments/12/12_75x.jpg",
    "revision": "da5ac8257defb0551b603b5691bf29c9"
  },
  {
    "url": "img/fragments/12/12. Crucible.JPG_1400xp.jpg",
    "revision": "952515457530f0374130bdeefcbcc003"
  },
  {
    "url": "img/fragments/12/12. Crucible.JPG_x550p.jpg",
    "revision": "8d5471d1b97db60c9ef9028878915106"
  },
  {
    "url": "img/fragments/13/13_1_150x.jpg",
    "revision": "b2b8485c30619b41ca1b57a92e308cd2"
  },
  {
    "url": "img/fragments/13/13_1_640x.jpg",
    "revision": "fea940fca7c88a5324900d65a00b1316"
  },
  {
    "url": "img/fragments/13/13_1_75x.jpg",
    "revision": "a5da34abb3d9aafc99be8400f227099c"
  },
  {
    "url": "img/fragments/13/13_2_150x.jpg",
    "revision": "16199e4d29f73d87430c6dd1bd083eb1"
  },
  {
    "url": "img/fragments/13/13_2_640x.jpg",
    "revision": "1bc2d2cf67658a7297bd593342cea906"
  },
  {
    "url": "img/fragments/13/13_2_75x.jpg",
    "revision": "76f70f7e0cc5336e92d39af7cc275d99"
  },
  {
    "url": "img/fragments/13/13. Assorted glass beads 1.tif_1400xp.jpg",
    "revision": "1e311cbc2c911f6c0438f0d3572a6846"
  },
  {
    "url": "img/fragments/13/13. Assorted glass beads 1.tif_x550p.jpg",
    "revision": "4116ad9a8794759e1f356f05f783b63d"
  },
  {
    "url": "img/fragments/13/13. Assorted glass beads 2.tif_1400xp.jpg",
    "revision": "ca20297646622a9150a406e6b9887523"
  },
  {
    "url": "img/fragments/13/13. Assorted glass beads 2.tif_x550p.jpg",
    "revision": "d300ce79522a8db64045dedbb98c0adc"
  },
  {
    "url": "img/fragments/14/14_150x.jpg",
    "revision": "df13f27db0d09d6f37b9357441731674"
  },
  {
    "url": "img/fragments/14/14_640x.jpg",
    "revision": "e451f7784ce43e339fb2abcaca11374f"
  },
  {
    "url": "img/fragments/14/14_75x.jpg",
    "revision": "c216aa3cd278506803a8d93592efbd24"
  },
  {
    "url": "img/fragments/14/14. Terracotta beads.JPG_1400xp.jpg",
    "revision": "141991b255a875cee90cdac37bde352e"
  },
  {
    "url": "img/fragments/14/14. Terracotta beads.JPG_150xp.jpg",
    "revision": "5e4a9b31633b301a39078db3baa2cd89"
  },
  {
    "url": "img/fragments/14/14. Terracotta beads.JPG_640x.jpg",
    "revision": "7153a332dc2521dae19c748c5414684a"
  },
  {
    "url": "img/fragments/14/14. Terracotta beads.JPG_75xp.jpg",
    "revision": "34f8e64dc420d6dc4b377ad72a8173e6"
  },
  {
    "url": "img/fragments/14/14. Terracotta beads.JPG_x550p.jpg",
    "revision": "20ebb4997e07c387797bf4dbc03cb8c9"
  },
  {
    "url": "img/fragments/14/14. Two fragments of glazed ceramics, fragment of alabaster.tif_1400xp.jpg",
    "revision": "8f241b70da27e39131edda1bce702fc7"
  },
  {
    "url": "img/fragments/14/14. Two fragments of glazed ceramics, fragment of alabaster.tif_x550p.jpg",
    "revision": "9cc1acafc6e3d25fe21f87a7bb7b6b3e"
  },
  {
    "url": "img/fragments/15/15_150x.jpg",
    "revision": "14dc91c108465dd3581e166db6e2bc18"
  },
  {
    "url": "img/fragments/15/15_640x.jpg",
    "revision": "7cae4612dae38cedbbb6c9d14f6201f7"
  },
  {
    "url": "img/fragments/15/15_75x.jpg",
    "revision": "a19fdb670ba1d1ffb870856b38dd7878"
  },
  {
    "url": "img/fragments/15/15. Kneeling figure.tif_1400xp.jpg",
    "revision": "9c6011e61624e3aa8be3550b44f816a8"
  },
  {
    "url": "img/fragments/15/15. Kneeling figure.tif_x550p.jpg",
    "revision": "2b894e73c6fa717fc5be02c1d3d3e569"
  },
  {
    "url": "img/fragments/16/16_150x.jpg",
    "revision": "a1cc0297ff09dc3af82f470a5cc079d0"
  },
  {
    "url": "img/fragments/16/16_640x.jpg",
    "revision": "e43a34b5bb5175480dc8780da3501fea"
  },
  {
    "url": "img/fragments/16/16_75x.jpg",
    "revision": "5ff497a98ba67ae946b74b2e88ac14bc"
  },
  {
    "url": "img/fragments/16/16. Horse.tif_1400xp.jpg",
    "revision": "cd63d39dd0ebf059c3a01d9493a63fee"
  },
  {
    "url": "img/fragments/16/16. Horse.tif_x550p.jpg",
    "revision": "b9b3f56bf7733d9b2bf05888fa770539"
  },
  {
    "url": "img/fragments/17/17_150x.jpg",
    "revision": "08315c1ae9eba68ce9c8d0a3e0273ac4"
  },
  {
    "url": "img/fragments/17/17_640x.jpg",
    "revision": "3985aec724ed3d34c84f334a55effaaa"
  },
  {
    "url": "img/fragments/17/17_75x.jpg",
    "revision": "786286dff894b093aaeb289619e7ed8a"
  },
  {
    "url": "img/fragments/17/17. Blanket fragment.tif_1400xp.jpg",
    "revision": "e7965d7f2f20c9ed11c722def6e1833e"
  },
  {
    "url": "img/fragments/17/17. Blanket fragment.tif_x550p.jpg",
    "revision": "1aa39be16b205ab42966f363008bbb06"
  },
  {
    "url": "img/fragments/18/18_150x.jpg",
    "revision": "308f42f705c95f5b01f13d98030cc41a"
  },
  {
    "url": "img/fragments/18/18_640x.jpg",
    "revision": "37a5ca96ff0c619f9871fa60d2ad637b"
  },
  {
    "url": "img/fragments/18/18_75x.jpg",
    "revision": "415f6cf53b734427d32b0b80ef1b9579"
  },
  {
    "url": "img/fragments/18/18. Biconical bead.tif_1400xp.jpg",
    "revision": "7793d2812f51d01db7f53411e064f57b"
  },
  {
    "url": "img/fragments/18/18. Biconical bead.tif_x550p.jpg",
    "revision": "11154cbb3338e87bc905484c87d32b43"
  },
  {
    "url": "img/fragments/19/19_150x.jpg",
    "revision": "2ab350233808092314316c8d28b656df"
  },
  {
    "url": "img/fragments/19/19_640x.jpg",
    "revision": "738f8ac8453bf8756b9f9e286c09f871"
  },
  {
    "url": "img/fragments/19/19_75x.jpg",
    "revision": "e7e8ab09da516e5838652505ff8d90b7"
  },
  {
    "url": "img/fragments/19/19. Stone monument.tif_1400xp.jpg",
    "revision": "cfb73fbdf861b941fc58a11485c75e22"
  },
  {
    "url": "img/fragments/19/19. Stone monument.tif_x550p.jpg",
    "revision": "fa542606e39ef81a6009956386c93785"
  },
  {
    "url": "img/fragments/2/2_1024x.jpg",
    "revision": "a91967a02978803ccfe32c47958e874f"
  },
  {
    "url": "img/fragments/2/2_1366x.jpg",
    "revision": "99e478b093c07008c1b13d8179f77175"
  },
  {
    "url": "img/fragments/2/2_150x.jpg",
    "revision": "29b9ca6ab47106df5c531c4664ce57ba"
  },
  {
    "url": "img/fragments/2/2_1600x.jpg",
    "revision": "7a33805b8568f0108a12dc558c870ffe"
  },
  {
    "url": "img/fragments/2/2_640x.jpg",
    "revision": "4c01ed61b95ad92e0d564486e1aac95a"
  },
  {
    "url": "img/fragments/2/2_75x.jpg",
    "revision": "f62fa5eff69980c0dbd6eab523a0c186"
  },
  {
    "url": "img/fragments/2/2_768x.jpg",
    "revision": "cc8ec369579da723aa2529b1f47a3820"
  },
  {
    "url": "img/fragments/20/20_150x.jpg",
    "revision": "61647735e88b4bb3b12e014e84c0d91a"
  },
  {
    "url": "img/fragments/20/20_640x.jpg",
    "revision": "0a58f6b00a94a2b2bc304e28e3d70d66"
  },
  {
    "url": "img/fragments/20/20_75x.jpg",
    "revision": "5f06b5f0a3fbf9e983bc0e646f7d2295"
  },
  {
    "url": "img/fragments/20/20. Grindstone refashioned.tif_1400xp.jpg",
    "revision": "f8c358f942637edbd1b5d51f40614719"
  },
  {
    "url": "img/fragments/20/20. Grindstone refashioned.tif_x550p.jpg",
    "revision": "3b974f870c821ff2511ffdae655febec"
  },
  {
    "url": "img/fragments/21/21_150x.jpg",
    "revision": "3d494ad78fe5c1a39a93490a31fb90cd"
  },
  {
    "url": "img/fragments/21/21_640x.jpg",
    "revision": "d7c71aeb5cb44ee78602ab7cb6c6c07e"
  },
  {
    "url": "img/fragments/21/21_75x.jpg",
    "revision": "65f3366c345736012052689e15a92776"
  },
  {
    "url": "img/fragments/21/21. Al-qadi 'lyad.tif_1400xp.jpg",
    "revision": "1362027f3f3529a9aaacc545bca17652"
  },
  {
    "url": "img/fragments/21/21. Al-qadi 'lyad.tif_x550p.jpg",
    "revision": "021c3bfbb345947db07fa7e45b31f5e8"
  },
  {
    "url": "img/fragments/22/22_150x.jpg",
    "revision": "0f3d02523e95f919936bcb953ee99adc"
  },
  {
    "url": "img/fragments/22/22_640x.jpg",
    "revision": "0465ae3e283527c3b7914ca216d75db5"
  },
  {
    "url": "img/fragments/22/22_75x.jpg",
    "revision": "1681a07bd61b2fd9e1e91c17af8b7ee7"
  },
  {
    "url": "img/fragments/22/22. Talismanic textile.jpg_1400xp.jpg",
    "revision": "4834376c20e0380eb52256a259500edf"
  },
  {
    "url": "img/fragments/22/22. Talismanic textile.jpg_x550p.jpg",
    "revision": "4feb6952f8fe193b2b1c49ea63a2352f"
  },
  {
    "url": "img/fragments/23/23_150x.jpg",
    "revision": "ae516cfc2c56c802ee2a5e16980e5ff5"
  },
  {
    "url": "img/fragments/23/23_640x.jpg",
    "revision": "16c018460087f4d1a8c8797e2a6d1ac5"
  },
  {
    "url": "img/fragments/23/23_75x.jpg",
    "revision": "1520841382a8e57a0ef7a48e7f8b2082"
  },
  {
    "url": "img/fragments/23/23. De totius Africae descriptio.tif_1400xp.jpg",
    "revision": "e3dd873ab5000930aa4fd4f12ad47d77"
  },
  {
    "url": "img/fragments/23/23. De totius Africae descriptio.tif_x550p.jpg",
    "revision": "e96d8d1e557430160d07c44cbe632910"
  },
  {
    "url": "img/fragments/24/24_150x.jpg",
    "revision": "abc0bccf5a78237eb52570834dd93026"
  },
  {
    "url": "img/fragments/24/24_640x.jpg",
    "revision": "c9944c6681897b14e02f4442b01411c6"
  },
  {
    "url": "img/fragments/24/24_75x.jpg",
    "revision": "c0db47e35943c123c127ee40d1e5f126"
  },
  {
    "url": "img/fragments/24/24. Cap with striped inscribed silk.jpg_1400xp.jpg",
    "revision": "96e8c8a0fcdd68608c119045a9f34a40"
  },
  {
    "url": "img/fragments/24/24. Cap with striped inscribed silk.jpg_x550p.jpg",
    "revision": "d6c9e8d73c243abbae291b70c0cd5884"
  },
  {
    "url": "img/fragments/25/25_150x.jpg",
    "revision": "583bbec7ae2ac967175a838f01c1d129"
  },
  {
    "url": "img/fragments/25/25_640x.jpg",
    "revision": "3a1df4c97aac4b6407c26726f2c64d3e"
  },
  {
    "url": "img/fragments/25/25_75x.jpg",
    "revision": "45e8c8ed2fea5fa8a449c5b8c162f907"
  },
  {
    "url": "img/fragments/25/25. Signet ring.tif_1400xp.jpg",
    "revision": "50bc17f7fb751c871e2c5db38046163e"
  },
  {
    "url": "img/fragments/25/25. Signet ring.tif_x550p.jpg",
    "revision": "2fca321b9e41c56703c9e303ead8d9fc"
  },
  {
    "url": "img/fragments/26/26_1400x.jpg",
    "revision": "bd6e49edf07404339282b800c75ef6ea"
  },
  {
    "url": "img/fragments/26/26_150x.jpg",
    "revision": "d5ce043dfab02aba986034e133486c05"
  },
  {
    "url": "img/fragments/26/26_359x.jpg",
    "revision": "1d9cfbee4be6c3872858f9bf55e014a1"
  },
  {
    "url": "img/fragments/26/26_640x_1.jpg",
    "revision": "8e8be8d3dc6c55466a6d669054be3a02"
  },
  {
    "url": "img/fragments/26/26_640x_2.jpg",
    "revision": "530532a3bc2bab61d3e3f01539f31988"
  },
  {
    "url": "img/fragments/26/26_640x_3.jpg",
    "revision": "0881510c7923ee794cab137b52c68403"
  },
  {
    "url": "img/fragments/27/27_150x.jpg",
    "revision": "ca52060f7c82a52c09eee8e2bf5a689d"
  },
  {
    "url": "img/fragments/27/27_640x.jpg",
    "revision": "405f7c62607ce8384026d88196895185"
  },
  {
    "url": "img/fragments/27/27_75x.jpg",
    "revision": "3c1e2ba8a01cca5313448c54b622180c"
  },
  {
    "url": "img/fragments/27/27. Solidus of Honorius.jpg_1400xp.jpg",
    "revision": "ee038cf38c362a85442b360a0ba44d5a"
  },
  {
    "url": "img/fragments/27/27. Solidus of Honorius.jpg_x550p.jpg",
    "revision": "e56f9902c243129140e65b37eb80f42e"
  },
  {
    "url": "img/fragments/28/28_150x.jpg",
    "revision": "180b76b18101cdc9384f926b92a69f89"
  },
  {
    "url": "img/fragments/28/28_640x.jpg",
    "revision": "8bbe47dfb3677835f8139ecf5ac6ab77"
  },
  {
    "url": "img/fragments/28/28_75x.jpg",
    "revision": "511f69d01b03038a7d61bb61a02fe8dd"
  },
  {
    "url": "img/fragments/28/28. Dinar of Abu 'Inan .jpg_1400xp.jpg",
    "revision": "62384083963b372af4dccfaf52ce3f1d"
  },
  {
    "url": "img/fragments/28/28. Dinar of Abu 'Inan .jpg_x550p.jpg",
    "revision": "587c2f7aa2de1be940e61ffb5aadb8a7"
  },
  {
    "url": "img/fragments/29/29_1_150x.jpg",
    "revision": "9c0437966d177e6749a98692380eed7c"
  },
  {
    "url": "img/fragments/29/29_1_640x.jpg",
    "revision": "2500948fb985e86147db166d6945c223"
  },
  {
    "url": "img/fragments/29/29_1_75x.jpg",
    "revision": "74ac1040b578e570fc7c2538921fd6cf"
  },
  {
    "url": "img/fragments/29/29. Gold florin (obverse).jpg_1400xp.jpg",
    "revision": "063302ad220bcf687591511e3298072f"
  },
  {
    "url": "img/fragments/29/29. Gold florin (obverse).jpg_x550p.jpg",
    "revision": "56fd8b3903c07db660d594c4aafa32de"
  },
  {
    "url": "img/fragments/29/29. Gold florin (reverse).jpg_1400xp.jpg",
    "revision": "df5de49d5804e91c12a5abcefb60663f"
  },
  {
    "url": "img/fragments/29/29. Gold florin (reverse).jpg_150xp.jpg",
    "revision": "5e550176e99a0b8c19e31bcff671ace7"
  },
  {
    "url": "img/fragments/29/29. Gold florin (reverse).jpg_640x.jpg",
    "revision": "6d1a821d86c215cdf9fa1484eb413986"
  },
  {
    "url": "img/fragments/29/29. Gold florin (reverse).jpg_75xp.jpg",
    "revision": "47c7051418c0c428aab64f7e9b80d5b8"
  },
  {
    "url": "img/fragments/29/29. Gold florin (reverse).jpg_x550p.jpg",
    "revision": "6033cc69d2a0ccaebb676dd2ef47636e"
  },
  {
    "url": "img/fragments/3/3_1024x.jpg",
    "revision": "32debb12106a548058c2e1cc5defc365"
  },
  {
    "url": "img/fragments/3/3_1366x.jpg",
    "revision": "d82064cbc5a48f0263d6b437287baef0"
  },
  {
    "url": "img/fragments/3/3_150x.jpg",
    "revision": "9d9fb929573bd3072c560f3effc7cd6b"
  },
  {
    "url": "img/fragments/3/3_1600x.jpg",
    "revision": "e9cdfd579cff74eb149e39f332e713ba"
  },
  {
    "url": "img/fragments/3/3_640x.jpg",
    "revision": "b19df3f1986ff2db143c76b1a85f902a"
  },
  {
    "url": "img/fragments/3/3_75x.jpg",
    "revision": "9f3c9d52ba4ec90d301612ec03864730"
  },
  {
    "url": "img/fragments/3/3_768x.jpg",
    "revision": "8e0a4ba1ef87539370d4becaee2bc70e"
  },
  {
    "url": "img/fragments/30/30_150x.jpg",
    "revision": "c86f9d34a63f11566c126d9fbf8c0e1f"
  },
  {
    "url": "img/fragments/30/30_640x.jpg",
    "revision": "de1240f56e82ed2cc8cd4a5b731d6837"
  },
  {
    "url": "img/fragments/30/30_75x.jpg",
    "revision": "7d593d747a07825515c23111390ce723"
  },
  {
    "url": "img/fragments/30/30. Coronation of the virgin.tif_1400xp.jpg",
    "revision": "8950da0e9d001d2b06102f6b72cd8d1e"
  },
  {
    "url": "img/fragments/30/30. Coronation of the virgin.tif_x550p.jpg",
    "revision": "6213dc245fc734f4ff3d08f1c3268bfc"
  },
  {
    "url": "img/fragments/31/31_150x.jpg",
    "revision": "4de8d6d57241089ee2257c079b69513c"
  },
  {
    "url": "img/fragments/31/31_640x.jpg",
    "revision": "70460796aec5033f90cd3e4af8378eb4"
  },
  {
    "url": "img/fragments/31/31_75x.jpg",
    "revision": "8a5a9b4794157cec287e1572d9128cb8"
  },
  {
    "url": "img/fragments/31/31. Biconical bead.tif_1400xp.jpg",
    "revision": "69dcabefb95dbf78631849bc350b2964"
  },
  {
    "url": "img/fragments/31/31. Biconical bead.tif_x550p.jpg",
    "revision": "acf58b46b3221ef1650416e0f04ec227"
  },
  {
    "url": "img/fragments/32/32_150x.jpg",
    "revision": "8c4ca2766ed66359839e110d9c7b9ef0"
  },
  {
    "url": "img/fragments/32/32_640x.jpg",
    "revision": "93c63486f8fdabb38db2168f6c390789"
  },
  {
    "url": "img/fragments/32/32_75x.jpg",
    "revision": "7609f4e9d963b6d38e40526a931d3173"
  },
  {
    "url": "img/fragments/32/32. Leaf from the blue quran.png",
    "revision": "07484ac1ecdf12b784f6728a9b21a801"
  },
  {
    "url": "img/fragments/32/32. Leaf from the blue quran.png_1400xp.jpg",
    "revision": "d62f2ae125d321e8c567cfc2febff5f4"
  },
  {
    "url": "img/fragments/32/32. Leaf from the blue quran.png_x550p.jpg",
    "revision": "c9bd10b28988a461fa29bc209e73b4f8"
  },
  {
    "url": "img/fragments/33/33_150x-0.jpg",
    "revision": "2e88ed506e677e52084bfbcca91a172d"
  },
  {
    "url": "img/fragments/33/33_150x-1.jpg",
    "revision": "79664ff8e525c286fb623c6b4812d669"
  },
  {
    "url": "img/fragments/33/33_640x-0.jpg",
    "revision": "e912f3d04631b4b795c354e12d748d03"
  },
  {
    "url": "img/fragments/33/33_640x-1.jpg",
    "revision": "d9b64292dce07d910629ac0533f2bdc5"
  },
  {
    "url": "img/fragments/33/33_75x-0.jpg",
    "revision": "e7a1be93580c4cac3c305bfeba2e1172"
  },
  {
    "url": "img/fragments/33/33_75x-1.jpg",
    "revision": "9b8adb0f4890d69b0d50d09883fdf476"
  },
  {
    "url": "img/fragments/33/33. Ethics of the fathers.tif_1400xp-0.jpg",
    "revision": "c818c61100edd2e9cd65e936f12d265d"
  },
  {
    "url": "img/fragments/33/33. Ethics of the fathers.tif_1400xp-1.jpg",
    "revision": "adcea9a666273a21d978aaf095d2d0e4"
  },
  {
    "url": "img/fragments/33/33. Ethics of the fathers.tif_x550p-0.jpg",
    "revision": "9f236c41c7e0bb1896cd0ba082cc4719"
  },
  {
    "url": "img/fragments/33/33. Ethics of the fathers.tif_x550p-1.jpg",
    "revision": "f11a8534eebcbaaa0dd30e23b7e5f047"
  },
  {
    "url": "img/fragments/34/34_150x.jpg",
    "revision": "e3bc81dbb260fd31651a867ccada5c24"
  },
  {
    "url": "img/fragments/34/34_640x.jpg",
    "revision": "51dab803a3a36fd80c0e55b12bf11e9e"
  },
  {
    "url": "img/fragments/34/34_75x.jpg",
    "revision": "585767104c899e307546e2da4c3057a9"
  },
  {
    "url": "img/fragments/34/34. Virgin and Child.jpg_1400xp.jpg",
    "revision": "d38eeffb95274fb7cb600e47a93627c1"
  },
  {
    "url": "img/fragments/34/34. Virgin and Child.jpg_x550p.jpg",
    "revision": "5ee3d410a3adb0098fb8cbdb4b1524ae"
  },
  {
    "url": "img/fragments/35/35_150x.jpg",
    "revision": "9b2dd79c999251a8c8bd15afe356caba"
  },
  {
    "url": "img/fragments/35/35_640x.jpg",
    "revision": "4250d50dcd2a217e4faa53fff351abe4"
  },
  {
    "url": "img/fragments/35/35_75x.jpg",
    "revision": "8d62e2443394cdbb2f9efd1b3eb10ef2"
  },
  {
    "url": "img/fragments/35/35. Casket.jpg_1400xp.jpg",
    "revision": "12c6e2a30d8e8481154506271f465afa"
  },
  {
    "url": "img/fragments/35/35. Casket.jpg_x550p.jpg",
    "revision": "530ddaef97321bf3a658fc526942470e"
  },
  {
    "url": "img/fragments/35/35. Head (Nok Figure).tif_1400xp.jpg",
    "revision": "f1b60eadc28ae9c820b7c35ea596643d"
  },
  {
    "url": "img/fragments/35/35. Head (Nok Figure).tif_150xp.jpg",
    "revision": "2ad23a243cbcbc592a4d76f52005770b"
  },
  {
    "url": "img/fragments/35/35. Head (Nok Figure).tif_640x.jpg",
    "revision": "7d95003614a41a59f9b62e5e8e9c3098"
  },
  {
    "url": "img/fragments/35/35. Head (Nok Figure).tif_75xp.jpg",
    "revision": "57817d0f0400bfa281b6831196aa4872"
  },
  {
    "url": "img/fragments/35/35. Head (Nok Figure).tif_x550p.jpg",
    "revision": "bef7453e36ba98264f9cd5d5006dd20e"
  },
  {
    "url": "img/fragments/36/36_150x.jpg",
    "revision": "09121a4e7ee93014fe774524a9dd1b71"
  },
  {
    "url": "img/fragments/36/36_640x.jpg",
    "revision": "5dd36ce761c1032965a35a8bb924db60"
  },
  {
    "url": "img/fragments/36/36_75x.jpg",
    "revision": "4f0163efdf0bf9909a2baae8b4b08352"
  },
  {
    "url": "img/fragments/36/36. Coronation of the virgin.tif_1400xp.jpg",
    "revision": "92376aa6e753c849dca618f1e87f426d"
  },
  {
    "url": "img/fragments/36/36. Coronation of the virgin.tif_x550p.jpg",
    "revision": "ce6eefb6367b5ef073d5efa6ba0e9fca"
  },
  {
    "url": "img/fragments/37/37_150x.jpg",
    "revision": "0b7a0738f4194b4a10537b1a3e17ca93"
  },
  {
    "url": "img/fragments/37/37_640x.jpg",
    "revision": "2a3e26eef4423f2f1308852489b28a4a"
  },
  {
    "url": "img/fragments/37/37_75x.jpg",
    "revision": "e287a3e4b49eca3c0b5e7e8146539244"
  },
  {
    "url": "img/fragments/37/37. Standing figure.tif_1400xp.jpg",
    "revision": "e46dc381177dfdaf84c0dbb8693384f7"
  },
  {
    "url": "img/fragments/37/37. Standing figure.tif_x550p.jpg",
    "revision": "a4377490cb2b7b6ae5f2ef6f90970f28"
  },
  {
    "url": "img/fragments/38/38_150x.jpg",
    "revision": "504f449a3c087557bc136bab55e68960"
  },
  {
    "url": "img/fragments/38/38_640x.jpg",
    "revision": "b5aff14394e8e6a76b8f54a0812f1d95"
  },
  {
    "url": "img/fragments/38/38_75x.jpg",
    "revision": "b43a0e19012daa9b79473764d433bf72"
  },
  {
    "url": "img/fragments/38/38. Armlets.tif_1400xp.jpg",
    "revision": "2cc43c0dc950aa3230d0d2ceea19a0b9"
  },
  {
    "url": "img/fragments/38/38. Armlets.tif_x550p.jpg",
    "revision": "3cb0600eea20dbee5908a19300b179ce"
  },
  {
    "url": "img/fragments/39/39_150x.jpg",
    "revision": "2e0b89d9236a136b597572749a8b9ba4"
  },
  {
    "url": "img/fragments/39/39_640x.jpg",
    "revision": "595523ff5aec5817c9f031d22d87e403"
  },
  {
    "url": "img/fragments/39/39_75x.jpg",
    "revision": "1412ff47bdd4c10c33456cd6fd878545"
  },
  {
    "url": "img/fragments/39/39. Horse and rider finial.tif_1400xp.jpg",
    "revision": "4b803e21844b7d83dc79472bf3a08a61"
  },
  {
    "url": "img/fragments/39/39. Horse and rider finial.tif_x550p.jpg",
    "revision": "1c21eb331fcdbe1957eba98c91d38f1b"
  },
  {
    "url": "img/fragments/4/4_1400x.jpg",
    "revision": "ee648253ce4d5f90dc24e44fa22d747e"
  },
  {
    "url": "img/fragments/4/4_150x.jpg",
    "revision": "b9bc29f6aa158ebc1844169f9fe7962e"
  },
  {
    "url": "img/fragments/4/4_640x.jpg",
    "revision": "6f9c4d0e8bff9ecc330060765cdb8936"
  },
  {
    "url": "img/fragments/4/4_75x.jpg",
    "revision": "bc69c0f7788f38c009da24e46e88813e"
  },
  {
    "url": "img/fragments/4/4_x550.jpg",
    "revision": "bbae6fab352eb9acff4469be28f523ed"
  },
  {
    "url": "img/fragments/40/40_150x.jpg",
    "revision": "6c12ee69126294f6d4c58ec38d466a0f"
  },
  {
    "url": "img/fragments/40/40_640x.jpg",
    "revision": "441aa6d1f869e4cea9248bf5f9859f07"
  },
  {
    "url": "img/fragments/40/40_75x.jpg",
    "revision": "17e799775057a7e480cf90b2bb6624da"
  },
  {
    "url": "img/fragments/40/40. Double-egg pendant.jpg_1400xp.jpg",
    "revision": "38d9e8dd5cc16d53d5663b2711b1a9a5"
  },
  {
    "url": "img/fragments/40/40. Double-egg pendant.jpg_x550p.jpg",
    "revision": "bfbe43b35e8bef136b253cad972ac219"
  },
  {
    "url": "img/fragments/41/41_150x.jpg",
    "revision": "dc4ff099b7013884c93c1affd06150a9"
  },
  {
    "url": "img/fragments/41/41_640x.jpg",
    "revision": "1e75631fca50ceadc2f3b98dfc3211f0"
  },
  {
    "url": "img/fragments/41/41_75x.jpg",
    "revision": "754496cebd172737214b7cf53532626a"
  },
  {
    "url": "img/fragments/41/41. Seated Figure.tif_1400xp.jpg",
    "revision": "188257d1e12e5f62053ac74e2025c138"
  },
  {
    "url": "img/fragments/41/41. Seated Figure.tif_x550p.jpg",
    "revision": "168076c8b121bf599389a58d8bc92fe9"
  },
  {
    "url": "img/fragments/42/42_150x.jpg",
    "revision": "42ff412ccb8cbc7f0347bfec722e3496"
  },
  {
    "url": "img/fragments/42/42_640x.jpg",
    "revision": "bcf3151114a5a9a9465212dcce4d7279"
  },
  {
    "url": "img/fragments/42/42_75x.jpg",
    "revision": "4e3e15c0e6829a705f72e364b6e0c9b3"
  },
  {
    "url": "img/fragments/42/42. Bowman.tif_1400xp.jpg",
    "revision": "f9d500f70d672fc7be053fdde9a4e472"
  },
  {
    "url": "img/fragments/42/42. Bowman.tif_x550p.jpg",
    "revision": "ec4776e028fd357f7638f10ea42e98d2"
  },
  {
    "url": "img/fragments/43/43_150x.jpg",
    "revision": "f9d08d3eb7f7ee9647851c492a52c19d"
  },
  {
    "url": "img/fragments/43/43_640x.jpg",
    "revision": "5b5736511c9f62af8824f51aee19c64a"
  },
  {
    "url": "img/fragments/43/43_75x.jpg",
    "revision": "eeac51945207c4a2e854fbac9b24a151"
  },
  {
    "url": "img/fragments/43/43. Head of an elephant and hippo.TIF_1400xp.jpg",
    "revision": "273729839c81b3194852ee3267acc8c7"
  },
  {
    "url": "img/fragments/43/43. Head of an elephant and hippo.TIF_x550p.jpg",
    "revision": "1d9d49fef41668f09ca7b24aa901d6b3"
  },
  {
    "url": "img/fragments/44/44_150x.jpg",
    "revision": "0ba6b9c6ed91eb203952a1b770061d99"
  },
  {
    "url": "img/fragments/44/44_640x.jpg",
    "revision": "eaa2e6b91f2ab215115bdf16b15ec953"
  },
  {
    "url": "img/fragments/44/44_75x.jpg",
    "revision": "ca6d9032d6c3f6d007b78a5f08064a32"
  },
  {
    "url": "img/fragments/44/44. Rods.tif_1400xp.jpg",
    "revision": "4f87e61d06df8fd80b302b5b649d321a"
  },
  {
    "url": "img/fragments/44/44. Rods.tif_x550p.jpg",
    "revision": "ec70a74d9347131cf78ef4e1fb1c6c18"
  },
  {
    "url": "img/fragments/45/45_150x.jpg",
    "revision": "53192c4f96d90c497bb2d8ca9fa5d15c"
  },
  {
    "url": "img/fragments/45/45_640x.jpg",
    "revision": "104a8e0105ba01982b3ada31c23284db"
  },
  {
    "url": "img/fragments/45/45_75x.jpg",
    "revision": "43b8b90d816f7bb861c223fa7ba66dba"
  },
  {
    "url": "img/fragments/45/45. Mamluk bowl and two buckets.tif_1400xp.jpg",
    "revision": "dd9aa8edde9bc8a4e9cc54611ba4af52"
  },
  {
    "url": "img/fragments/45/45. Mamluk bowl and two buckets.tif_x550p.jpg",
    "revision": "0b37321b372b98d2938b6fc4e1797427"
  },
  {
    "url": "img/fragments/46/43. Gold jewelry from tumulus 7.tif_1400xp-0.jpg",
    "revision": "d40c4da6ff6084053dda2d6794c7773b"
  },
  {
    "url": "img/fragments/46/43. Gold jewelry from tumulus 7.tif_1400xp-1.jpg",
    "revision": "43439aae69d22a552436407e19ad23c9"
  },
  {
    "url": "img/fragments/46/43. Gold jewelry from tumulus 7.tif_1400xp-2.jpg",
    "revision": "f927611afa2298938eff2326de337dc6"
  },
  {
    "url": "img/fragments/46/43. Gold jewelry from tumulus 7.tif_x550p-0.jpg",
    "revision": "b5430cf19652fbb64baf71eed795c9f7"
  },
  {
    "url": "img/fragments/46/43. Gold jewelry from tumulus 7.tif_x550p-1.jpg",
    "revision": "67e3afc1bbc1406848fafeff501ab86c"
  },
  {
    "url": "img/fragments/46/43. Gold jewelry from tumulus 7.tif_x550p-2.jpg",
    "revision": "63f94949e13b310301e3ba47a4221e00"
  },
  {
    "url": "img/fragments/46/46_150x-0.jpg",
    "revision": "5d890413b03c70897f4842f9b93e9409"
  },
  {
    "url": "img/fragments/46/46_150x-1.jpg",
    "revision": "f15b405e24e648d5ab3cf3457f02e525"
  },
  {
    "url": "img/fragments/46/46_150x-2.jpg",
    "revision": "118e7e0177ca0a47f0d8c53bbdee2a63"
  },
  {
    "url": "img/fragments/46/46_640x-0.jpg",
    "revision": "12c2e8393644e336ff0840a3baded4fc"
  },
  {
    "url": "img/fragments/46/46_640x-1.jpg",
    "revision": "987ac0d570e489f3627cdb7f8b5c0984"
  },
  {
    "url": "img/fragments/46/46_640x-2.jpg",
    "revision": "6e0400e3def06b0779eb768e6bb8e9ac"
  },
  {
    "url": "img/fragments/46/46_75x-0.jpg",
    "revision": "855559b3c60a91f0a6dd3f373a859166"
  },
  {
    "url": "img/fragments/46/46_75x-1.jpg",
    "revision": "da58622c67a5edd9d4c3c974df150e39"
  },
  {
    "url": "img/fragments/46/46_75x-2.jpg",
    "revision": "f680a3f1e108c0d577a2f627176be9af"
  },
  {
    "url": "img/fragments/47/47_1_150x.jpg",
    "revision": "2621c7176fb52a3aadd207a5c49d2cf0"
  },
  {
    "url": "img/fragments/47/47_1_640x.jpg",
    "revision": "a8e143327dd8befe9d9927410a4613cf"
  },
  {
    "url": "img/fragments/47/47_1_75x.jpg",
    "revision": "098dad3caaf19a8b93fc46e7bc79f0a0"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 1.tif_1400xp.jpg",
    "revision": "dcc4f12e494eb46b64e4e75091f08ab4"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 1.tif_x550p.jpg",
    "revision": "a28c5b80a33caa40bf856e528a3dc418"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 2.tif_1400xp.jpg",
    "revision": "6507b188f48c6d973b66e6ae2df42c23"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 2.tif_150xp.jpg",
    "revision": "66f4d0283d1742c3f3dfbe81137f090c"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 2.tif_640x.jpg",
    "revision": "bf5b676bb83535ca9014c8c0781e434d"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 2.tif_75xp.jpg",
    "revision": "2ceb4837e7913fe6607f81faf743d5a4"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 2.tif_x550p.jpg",
    "revision": "d4b6ce383f541ff18f37276c161ddaa6"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 3.tif_1400xp.jpg",
    "revision": "470c93bf809635990ed81730ac398900"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 3.tif_150xp.jpg",
    "revision": "31b5c037ca7018406f486c6fcf692271"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 3.tif_640x.jpg",
    "revision": "f1c4ff18071bb2f3a0557d6bb72a9c5b"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 3.tif_75xp.jpg",
    "revision": "2ce332aaad72803c51efb44477223849"
  },
  {
    "url": "img/fragments/47/47. A selection of beads 3.tif_x550p.jpg",
    "revision": "6bfad425dae596001d6f23a4bcd7ca94"
  },
  {
    "url": "img/fragments/48/48_150x.jpg",
    "revision": "1bd2177251a35f88c352b671e37afea2"
  },
  {
    "url": "img/fragments/48/48_640x.jpg",
    "revision": "069a7bc36c19eb676e908f32dbadf11b"
  },
  {
    "url": "img/fragments/48/48_75x.jpg",
    "revision": "1608d4811aeac137af03230342c86982"
  },
  {
    "url": "img/fragments/48/48. Bowl (kuduo).JPG_1400xp.jpg",
    "revision": "87abca715a956d0cf095534c0b5c6e55"
  },
  {
    "url": "img/fragments/48/48. Bowl (kuduo).JPG_x550p.jpg",
    "revision": "e6bf8acc16261cd4824cdd1cfaeb8075"
  },
  {
    "url": "img/fragments/49/49_150x.jpg",
    "revision": "562affedd7ba368d3f034295b635edc0"
  },
  {
    "url": "img/fragments/49/49_640x.jpg",
    "revision": "15078f253d08ea4d897567546ac096e2"
  },
  {
    "url": "img/fragments/49/49_75x.jpg",
    "revision": "2aa092c8ec7c4d0d03978ac6bbd08677"
  },
  {
    "url": "img/fragments/49/49. Scale, scoop, boxes, and weights.tif_1400xp.jpg",
    "revision": "5ae7838e497777040d565c87908d1f93"
  },
  {
    "url": "img/fragments/49/49. Scale, scoop, boxes, and weights.tif_x550p.jpg",
    "revision": "4c98a5f3a6a37d240a086167bfc2a984"
  },
  {
    "url": "img/fragments/5/5_150x.jpg",
    "revision": "015f67ac4b7a8a98dbbb8239132e3e97"
  },
  {
    "url": "img/fragments/5/5_640x.jpg",
    "revision": "583ae3971e6d17074ee2bc3f167a4314"
  },
  {
    "url": "img/fragments/5/5_75x.jpg",
    "revision": "22694e974ed940948c77377dab9d5cef"
  },
  {
    "url": "img/fragments/5/5. Ring.tif_1400xp.jpg",
    "revision": "1b3c6840629e9cc4cfe6344288b1e1e6"
  },
  {
    "url": "img/fragments/5/5. Ring.tif_x550p.jpg",
    "revision": "5618a1c03059416721109e6b3651052e"
  },
  {
    "url": "img/fragments/50/50_150x.jpg",
    "revision": "a9c537fbe1bcbbca17d9e4e50ad8f90f"
  },
  {
    "url": "img/fragments/50/50_640x.jpg",
    "revision": "f0bda4699604d0154a92308c92021d54"
  },
  {
    "url": "img/fragments/50/50_75x.jpg",
    "revision": "2bc6bd7b39ad53020927fbff9efe0d84"
  },
  {
    "url": "img/fragments/50/50. 5 guinea and 1 guinea.jpeg_1400xp.jpg",
    "revision": "30ad92db1e61bb8824dbd9955a910897"
  },
  {
    "url": "img/fragments/50/50. 5 guinea and 1 guinea.jpeg_x550p.jpg",
    "revision": "f762239aa7b67176ce7223881d88a446"
  },
  {
    "url": "img/fragments/51/51_150x.jpg",
    "revision": "cce14ade657e2632e33acd82c60c24d6"
  },
  {
    "url": "img/fragments/51/51_640x.jpg",
    "revision": "71719f20a2e185b5b88faae25947115c"
  },
  {
    "url": "img/fragments/51/51_75x.jpg",
    "revision": "820f53dfbb052ad4553bfb734da5cd91"
  },
  {
    "url": "img/fragments/51/51. Fragments of jewelry and ingots.JPG_1400xp.jpg",
    "revision": "5ddf682e027b5a39b026687d824dd051"
  },
  {
    "url": "img/fragments/51/51. Fragments of jewelry and ingots.JPG_x550p.jpg",
    "revision": "22c5714ea8f9a57e7dcfb53fc4e5e908"
  },
  {
    "url": "img/fragments/52/52_150x.jpg",
    "revision": "2fed0b8df87e684a2c14a0d2f09e8a26"
  },
  {
    "url": "img/fragments/52/52_640x.jpg",
    "revision": "373c04e5ea0ab727f5783e81437800c8"
  },
  {
    "url": "img/fragments/52/52_75x.jpg",
    "revision": "e63c8b6878e8bc0fc68b9a680094e520"
  },
  {
    "url": "img/fragments/52/52. The Asante Jug.jpg_1400xp.jpg",
    "revision": "9fe4021bb50953535527c94b88fa3efe"
  },
  {
    "url": "img/fragments/52/52. The Asante Jug.jpg_x550p.jpg",
    "revision": "0add4a96d34ab93b18a3e8694298f6ce"
  },
  {
    "url": "img/fragments/6/6_150x.jpg",
    "revision": "d4773a78d72233f6571d865efd8a7736"
  },
  {
    "url": "img/fragments/6/6_640x.jpg",
    "revision": "71798bd3a062aa045881441f59eecf64"
  },
  {
    "url": "img/fragments/6/6_75x.jpg",
    "revision": "708474397ef54c7e45e0e959f3ae6b03"
  },
  {
    "url": "img/fragments/6/6. Glazed ceramic inscribed vase .jpg_1400xp.jpg",
    "revision": "bf4e1e8a774f0f18d608453af669b9d3"
  },
  {
    "url": "img/fragments/6/6. Glazed ceramic inscribed vase .jpg_x550p.jpg",
    "revision": "05070fbf6f23f0c12913c9c270603439"
  },
  {
    "url": "img/fragments/7/7_150x.jpg",
    "revision": "5d5e6c5e78e7b34e0733e506c3bc2747"
  },
  {
    "url": "img/fragments/7/7_640x.jpg",
    "revision": "68ed2c05c6740ac0ac2ce2d8e364f790"
  },
  {
    "url": "img/fragments/7/7_75x.jpg",
    "revision": "711c9579da1a6aec75d3e5be95bbfb8f"
  },
  {
    "url": "img/fragments/7/7. Glass fragments from excavations at Tadmekka.tif_1400xp.jpg",
    "revision": "b6424900c7898d15b2e536182ed06f6e"
  },
  {
    "url": "img/fragments/7/7. Glass fragments from excavations at Tadmekka.tif_x550p.jpg",
    "revision": "ba5560c0c93a81f5a7776ecd769e2074"
  },
  {
    "url": "img/fragments/8/8_150x.jpg",
    "revision": "d180a1f599371daec6ac2c9740dd6e63"
  },
  {
    "url": "img/fragments/8/8_640x.jpg",
    "revision": "a6061aa4f538be9d54293d3d304b46c4"
  },
  {
    "url": "img/fragments/8/8_75x.jpg",
    "revision": "cc29f7a0eccf75c1b2445fa1d365ceea"
  },
  {
    "url": "img/fragments/8/8. Glass sprinkler.tif_1400xp.jpg",
    "revision": "72db214a08642d49119d72084bea0012"
  },
  {
    "url": "img/fragments/8/8. Glass sprinkler.tif_x550p.jpg",
    "revision": "9b5a9ea709cc88295542e9a130a037a3"
  },
  {
    "url": "img/fragments/9/09. Gold coin blank mold.tif_1400xp.jpg",
    "revision": "5b2e6c87f538dc3bcab2246e65f79879"
  },
  {
    "url": "img/fragments/9/09. Gold coin blank mold.tif_150xp.jpg",
    "revision": "6a62791cbdac9444ca8ea152c0781ac7"
  },
  {
    "url": "img/fragments/9/09. Gold coin blank mold.tif_640x.jpg",
    "revision": "187f86ace017610bb741e66f5a2fc59f"
  },
  {
    "url": "img/fragments/9/09. Gold coin blank mold.tif_75xp.jpg",
    "revision": "528736cf7278339c4afa4e6437f4c112"
  },
  {
    "url": "img/fragments/9/09. Gold coin blank mold.tif_x550p.jpg",
    "revision": "06debfd8a06b34b880d1f7fcd3af7437"
  },
  {
    "url": "img/fragments/9/9_150x.jpg",
    "revision": "f5d599e8382847f3d4d5847750d3aab7"
  },
  {
    "url": "img/fragments/9/9_640x.jpg",
    "revision": "b9eac8a3417385ccd139878b8c5cf17d"
  },
  {
    "url": "img/fragments/9/9_75x.jpg",
    "revision": "57cba5ac5439973c63ce5776c36d4dbc"
  },
  {
    "url": "img/fragments/9/9. Fragment of qingbai porcelain.tif_1400xp.jpg",
    "revision": "f98e31c8af7e2fb9bf96f303acf8529e"
  },
  {
    "url": "img/fragments/9/9. Fragment of qingbai porcelain.tif_x550p.jpg",
    "revision": "e1f1c5dbf1e28960cfb1b7bef072428f"
  },
  {
    "url": "img/libraries_logo.jpg",
    "revision": "852582f3c06f131dcc401cb3f3bc8967"
  },
  {
    "url": "img/SaharanFrontiers_LandingPageImg.tif_1400xp.jpg",
    "revision": "6c18c85ee0c4c60e8ffb2303557f54a7"
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
    "url": "img/SaharanFrontiers_LandingPageImg.tif_x550p.jpg",
    "revision": "899a7742e7e684ea7bc6e0208882c7fc"
  },
  {
    "url": "img/tour/atlas-of-maritime.jpg",
    "revision": "c222ff7ca782f39df18f9cc6bc62ae72"
  },
  {
    "url": "img/tour/gao-tour.png",
    "revision": "5e1a41d23affac1ff9b5cb3e4833d57d"
  },
  {
    "url": "img/tour/ife-tour.jpg",
    "revision": "358ebffa4813fec2a055b358b03a1d8d"
  },
  {
    "url": "img/tour/igbo-tour.jpg",
    "revision": "b0ad89103efdb4438fd59f1746c5d6c7"
  },
  {
    "url": "img/tour/man_on_camel_card.jpg",
    "revision": "de8b18f1c3f23d2d13cd52b016a9e70e"
  },
  {
    "url": "img/tour/medieval-glass-tour.png",
    "revision": "cd3c535f3be905f1a2f25b53f3f18ff7"
  },
  {
    "url": "img/tour/niger-river.png",
    "revision": "5c3334cb840fcca1b258c3f5f30f705a"
  },
  {
    "url": "img/tour/saharan-frontiers-1.jpg",
    "revision": "3076a39b167e1ab6462ae60d3c95fc72"
  },
  {
    "url": "img/tour/shifting-away-from-the-sahara.jpg",
    "revision": "8663946c02e3e5d06fcb082f8c5d768b"
  },
  {
    "url": "img/tour/spread-of-ideas.jpg",
    "revision": "fe100ea1397b51677f92927796712c24"
  },
  {
    "url": "img/tour/tadmekka-tour.jpg",
    "revision": "ccfa5359968ccd163b48125dd349b82e"
  },
  {
    "url": "index.html",
    "revision": "0235666b60ab0e9a0c582f6e7873d34a"
  },
  {
    "url": "search/index.html",
    "revision": "f291ec149332944c7ffb29598bba8ce8"
  },
  {
    "url": "search/index.json",
    "revision": "879e6ba6f535fbebd9ae542a86fc0cd8"
  },
  {
    "url": "service-worker.js",
    "revision": "7b079a9f15b28c063ca26210da381c1b"
  },
  {
    "url": "tour/driving-desires/index.html",
    "revision": "a61758d7493c7fa3ff8ca091b5b1be07"
  },
  {
    "url": "tour/index.html",
    "revision": "daa6b2d6bf80288bda4c3f300988eab1"
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
    "revision": "2044420f334b29e4a1c98e98297d002a"
  },
  {
    "url": "tour/saharan-frontiers-gao/index.html",
    "revision": "383cd3bd1d2cc8fb3c0e4f557e0bd554"
  },
  {
    "url": "tour/saharan-frontiers-niger-river/index.html",
    "revision": "8c9293eda83524612f3180be6108f905"
  },
  {
    "url": "tour/saharan-frontiers-sijilmasa/index.html",
    "revision": "8c5f32dfc09d24e6f04299281df69a59"
  },
  {
    "url": "tour/saharan-frontiers-spread-of-ideas/index.html",
    "revision": "8c9293eda83524612f3180be6108f905"
  },
  {
    "url": "tour/saharan-frontiers-tadmekka/index.html",
    "revision": "d9ad9492704a12d77538da045a5afa40"
  },
  {
    "url": "tour/shifting-away-from-the-sahara/index.html",
    "revision": "cc387a3940a0aae2d5130f9ad10a92e5"
  },
  {
    "url": "wax_theme.gemspec",
    "revision": "447a91a6009ff4890f3bb71dc8f71b66"
  },
  {
    "url": "workbox-config.js",
    "revision": "b4edc9de9e6f58e007cedafd7eb576b4"
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