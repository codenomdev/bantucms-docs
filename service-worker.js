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
    "revision": "b2c9cb00789b33cd81ec36b0307cdfe9"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "ad696a3f3008c1e917b5828643d81744"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "64547ae5c88deddbe5245b867024ff6c"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "7df26c4df9aaf25d6b1ce65db63da6e9"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "78e458ba29ab5f06088ec2e7c1bb4836"
  },
  {
    "url": "404.html",
    "revision": "d0206753952ceda1ecedfb058c1c7250"
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
    "url": "assets/js/6.632d4020.js",
    "revision": "000ee56cbcc4ac796821d62ab1b684d7"
  },
  {
    "url": "assets/js/7.9b6d0ef7.js",
    "revision": "4e2c98a855d67ce4f67768eba935f2dd"
  },
  {
    "url": "assets/js/8.bc6d1a5c.js",
    "revision": "971efb0f6603f8623356d31515b040c1"
  },
  {
    "url": "assets/js/9.639739d3.js",
    "revision": "2d2d3f2fbe90cb6a694768a8df20c144"
  },
  {
    "url": "assets/js/app.9b057598.js",
    "revision": "1de36747359d4d0bd972c37bbdafce2e"
  },
  {
    "url": "index.html",
    "revision": "803eebd16c5af7c6b537e9fef2550a7f"
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
