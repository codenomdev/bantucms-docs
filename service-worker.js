/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/coding-standards/index.html",
    "revision": "1c1dd0e0bc8f512ca1a62b32f9e3f7c3"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "e9a379bacc76362a546a8e306965c094"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "6d84156359ed24ad7ebaadb3187f6a14"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "e0da3ae2449fa69ef9060d443bd46968"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "c346b72332a8db2b4621b0f4f6720932"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "601215e1de462bef4ab1a03b2bd2d02c"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "0ce00feefee551edb8f334a229198140"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "bbbf1a06ba082b4d0b36c392e031c5d9"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "ac4b937b246d21404f589ea574c6f254"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "837dc4b3df335c4b6f9adcd29a42c550"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "98f2a4bf5e1d745927cbacbc69745b31"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "160bc67420208f78e5509777c1b56de2"
  },
  {
    "url": "1.x/modules/developments/create-models.html",
    "revision": "3beab6f1cc7c66c6423fbdce073acf3b"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "72bf28f9e88a2a62d4dd294673371817"
  },
  {
    "url": "1.x/modules/developments/store-data-through-repositories.html",
    "revision": "23603eca936386a3bbb812060b92eeac"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "40de2255412c4260f4264fe68f1dcddb"
  },
  {
    "url": "404.html",
    "revision": "74c6ded9382f3ded5ffa482c70a82e86"
  },
  {
    "url": "assets/css/0.styles.818b1d95.css",
    "revision": "d2487c413885b9fca25e0360976559c5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c88f33f.js",
    "revision": "da5fd045d9ed22bf558c2fa35b8fd836"
  },
  {
    "url": "assets/js/11.9e1a4094.js",
    "revision": "febc721a70ae4bb5a73d5b3e4f19a9ac"
  },
  {
    "url": "assets/js/12.55a5069c.js",
    "revision": "36fb556bae6acdd7953e22611a9c3f9e"
  },
  {
    "url": "assets/js/13.a8fc562b.js",
    "revision": "d2686bcce585943c9ce4d6fce97d922e"
  },
  {
    "url": "assets/js/14.3b74364e.js",
    "revision": "7e74ba950fa0ca186d03289ec39a3b9d"
  },
  {
    "url": "assets/js/15.6ecf4c6b.js",
    "revision": "88047f7c355bd971ae607d5373547302"
  },
  {
    "url": "assets/js/16.5b356b02.js",
    "revision": "6bd6e8a7d889da90ba7bc91431603e45"
  },
  {
    "url": "assets/js/17.250f7038.js",
    "revision": "5665b07e1497192e73e82a537c58767d"
  },
  {
    "url": "assets/js/18.7256384d.js",
    "revision": "4973e1c6aa7c920d5499db32b0e541db"
  },
  {
    "url": "assets/js/19.10d68bf4.js",
    "revision": "eb965b3b6b34121e9313e6dd3d6f475e"
  },
  {
    "url": "assets/js/2.b2a3a940.js",
    "revision": "838751f32de0af4f2a221081b84af8fc"
  },
  {
    "url": "assets/js/20.acbd9930.js",
    "revision": "d16e9c44415d90ce2dce622ed74f72d5"
  },
  {
    "url": "assets/js/21.2855fd68.js",
    "revision": "dab7778bc35477b8cc275ccb876374bc"
  },
  {
    "url": "assets/js/22.3d937c06.js",
    "revision": "3a3c70ffc91b46d6fb5f3360a6b16fae"
  },
  {
    "url": "assets/js/3.1cde5f36.js",
    "revision": "1b540eb48420284a7443b56960364905"
  },
  {
    "url": "assets/js/4.fb841923.js",
    "revision": "012a15aaf011a1e3f1ce9f3e78269c24"
  },
  {
    "url": "assets/js/5.f04f24d4.js",
    "revision": "3b1d85cef0f92f5af6d3665c457e041c"
  },
  {
    "url": "assets/js/6.b197ae70.js",
    "revision": "9a1fe56c9e7d8a6cc272e740bd402ca8"
  },
  {
    "url": "assets/js/7.5a18e449.js",
    "revision": "aa1b38ab60b77c0aaef42e6c80292c07"
  },
  {
    "url": "assets/js/8.e4d55808.js",
    "revision": "e939bf6f6d765f889dd15513db3620f4"
  },
  {
    "url": "assets/js/9.531a2ce1.js",
    "revision": "7696d8b22767c520025bfcacceb9223e"
  },
  {
    "url": "assets/js/app.7a9d917f.js",
    "revision": "0685d9b9a8a9867da8fb97e8f7d35856"
  },
  {
    "url": "index.html",
    "revision": "4ebb249f25d9318f0ee791ecc7a8bad5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
