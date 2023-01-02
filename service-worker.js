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
    "revision": "e27da58d9d48ee391d207bf414431b8b"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "162a7746aa633ad406d793143812803c"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "3536e1da07c2265c63db5152d94b46e1"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "961cb31f753e3495ea0ccf86f5abaf1b"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "6ad84649ab84e76bcbbf6cce38ebe956"
  },
  {
    "url": "404.html",
    "revision": "0d0dd85c699ea703ff14df45931c3690"
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
    "url": "assets/js/app.0e1eb08c.js",
    "revision": "8cf49ff3fdec517199d76291a2019869"
  },
  {
    "url": "index.html",
    "revision": "db90c09b5dba96f03bc47eb024b92ec0"
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
