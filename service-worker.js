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
    "revision": "420e60d4def09e6c8fab1eb13681883e"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "3a88fbf00d6a546d90839df6498b48b9"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "9459581c3fa57052caa10773a39530e8"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "5876eabc9a8725d0eb764954913ca2a8"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "414f0898cf8e5d86db3335f951636a69"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "652c80e70926093d7afc6d1682911eaa"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "e385c78305e0f4dc96726bf2fce8f22a"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "d6d1fbbd6f603cc22c0f73a285b05774"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "fa45360f1c2ae0b6b51a5b7be8cc8aa4"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "ec6601ba9bd8783ceb1e5d670ba7a81f"
  },
  {
    "url": "404.html",
    "revision": "678a2e80311f29648a16c779dcb23753"
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
    "url": "assets/js/14.09238468.js",
    "revision": "2c86fb700b8a37298b7e1c164815a7b7"
  },
  {
    "url": "assets/js/15.ec6846e1.js",
    "revision": "a8ffbb0a285548029afe09aa316281be"
  },
  {
    "url": "assets/js/16.e498e8ab.js",
    "revision": "f65c7b92316fdfe99933f7c14ab4115b"
  },
  {
    "url": "assets/js/2.b2a3a940.js",
    "revision": "838751f32de0af4f2a221081b84af8fc"
  },
  {
    "url": "assets/js/3.bdad3a22.js",
    "revision": "6cebfc1bff726f44135ca0e50e723437"
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
    "url": "assets/js/7.d7e050d7.js",
    "revision": "b8baf9478562d9a845a9a931f6e64adf"
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
    "url": "assets/js/app.d3080a12.js",
    "revision": "11c20888c9c7947070a865a463c71483"
  },
  {
    "url": "index.html",
    "revision": "5fb1719a80120037818e53f747f00811"
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
