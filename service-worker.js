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
    "revision": "d3da9cae0859c5f6a0fb854ac6c276e5"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "14522383066ac5bb6b5377a48d55fff3"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "135db8787e06711f27d3afbc3ea19af1"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "2e6e20bb18f82ae58986dd778ebf7a5a"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "ecff6ba9e3c8b365504d23272d9ec8a0"
  },
  {
    "url": "404.html",
    "revision": "e98212328d68d3552b1b8744492ef519"
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
    "url": "assets/js/7.9b6d0ef7.js",
    "revision": "4e2c98a855d67ce4f67768eba935f2dd"
  },
  {
    "url": "assets/js/8.04537abf.js",
    "revision": "14d909f440a181fb8ab407976d5d0fce"
  },
  {
    "url": "assets/js/9.639739d3.js",
    "revision": "2d2d3f2fbe90cb6a694768a8df20c144"
  },
  {
    "url": "assets/js/app.a11b0e81.js",
    "revision": "e941e666f57bff914facdf07fa8f135b"
  },
  {
    "url": "index.html",
    "revision": "50e4432d00355e63bdecd7392d4dd7e6"
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
