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
    "revision": "269d919c6fe55a8e499abd403c25c889"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "0f982306d773596490f4d3489f979070"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "ee650396e3426bbf76d4c49209ffcbe9"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "20147cf3e188d13951f23df57261343a"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "c08b6fb8ca0c04388c6fa3bda9d5a889"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "6bb481e275ba6cde99d6dccd862f1455"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "b8f2c8cef4755d463945faa33ac10858"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "a1ffab409d9665bbc2ccbd10ca992877"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "bfd5a04032e99280f6c14f94da0254ce"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "b98cd4014960f80977093109a16418b8"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "06f6006a7e3b1e2437126f51f85b2558"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "5c69405c3e0e8349d30011bf5f7ecbc4"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "eaea3be0d799ef8c20b8c52c808df81e"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "c5277baa25129fc06603043303d68af8"
  },
  {
    "url": "404.html",
    "revision": "a9c3e2271365746d3ba36b105457a117"
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
    "url": "assets/js/14.10e2a152.js",
    "revision": "89fe0de08e09c63b3b960e6fdde521ec"
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
    "url": "assets/js/18.10ecea78.js",
    "revision": "303381d5592a47415f4da9096552a07b"
  },
  {
    "url": "assets/js/19.8ca6c8f3.js",
    "revision": "617f5bcfece8a96c9dc0faeb2cf47b53"
  },
  {
    "url": "assets/js/2.b2a3a940.js",
    "revision": "838751f32de0af4f2a221081b84af8fc"
  },
  {
    "url": "assets/js/20.8f463423.js",
    "revision": "ca6e5d4dd117b67e1a76863380b08c77"
  },
  {
    "url": "assets/js/3.b4f1046f.js",
    "revision": "5b3fddeda3ad23c16617d504209c87c9"
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
    "url": "assets/js/app.b7794765.js",
    "revision": "7dcf6d43a701e7e7626e7bf7352d4ad2"
  },
  {
    "url": "index.html",
    "revision": "d6a01c7fc09a8a62b2f3a296cabbca19"
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
