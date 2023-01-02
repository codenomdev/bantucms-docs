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
    "url": "1.x/installation-guide/index.html",
    "revision": "cf89ec04e8c817fc7ccb3d44bd6280dd"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "e13ef648e7b3e66184e787cd2f4a7085"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "6ba585b1fa7e503a67eedc0a8343effd"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "396688006ff160c1bf50abfe12f0885c"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "8b5ee4fe7697d5bb35f340234abec59d"
  },
  {
    "url": "404.html",
    "revision": "1fef317513adcfc2fbb4973cf44de6c7"
  },
  {
    "url": "assets/css/0.styles.a668a6b8.css",
    "revision": "7a1bfcd45f2f8131c29deb458c6542b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6d32d04f.js",
    "revision": "2f618f69deef17451a4b13171f1f313d"
  },
  {
    "url": "assets/js/11.b972dd0a.js",
    "revision": "709526e1d19c5f48c3f05e49d1861dc8"
  },
  {
    "url": "assets/js/2.ddf06445.js",
    "revision": "9dd94ac1663ef85b7c293b8a0d9fe0f8"
  },
  {
    "url": "assets/js/3.f295935a.js",
    "revision": "231b2e260f818a90e7f396adc721ffda"
  },
  {
    "url": "assets/js/4.fb841923.js",
    "revision": "012a15aaf011a1e3f1ce9f3e78269c24"
  },
  {
    "url": "assets/js/5.fee7fa69.js",
    "revision": "0efdb8b8d71a550ffae96b5f5ca47ace"
  },
  {
    "url": "assets/js/6.71204538.js",
    "revision": "6b1cfe9eeaac8dbe5b0ca5c307b6a2c6"
  },
  {
    "url": "assets/js/7.b6281b87.js",
    "revision": "de0d53a9cf2e79a1137c1a1510f96e7d"
  },
  {
    "url": "assets/js/8.81491de5.js",
    "revision": "e939bf6f6d765f889dd15513db3620f4"
  },
  {
    "url": "assets/js/9.639739d3.js",
    "revision": "2d2d3f2fbe90cb6a694768a8df20c144"
  },
  {
    "url": "assets/js/app.4942aa50.js",
    "revision": "854973876ca1afc9d731f785df811a20"
  },
  {
    "url": "index.html",
    "revision": "df81d6567fc8c7564449f4a26e47f5e8"
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
