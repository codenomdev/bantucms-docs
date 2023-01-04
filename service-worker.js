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
    "url": "1.x/installation-guide/docker.html",
    "revision": "feab6f38036efb9baadd2927f1cc8079"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "9a18596ad8b9cfe674bd11ee1c315f46"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "e6bbba408f5a83385cc2e46e18c25b66"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "450d900732a35f4a01010f1b9aea1549"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "12b70748783590d83bf306e7adc3638d"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "f11f0406cfce3d8a6d9555e92255c1bc"
  },
  {
    "url": "404.html",
    "revision": "d3cde23f9b02a033fbd2002ed7e31e91"
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
    "url": "assets/js/10.8e6f53bd.js",
    "revision": "89744648f4a3154c3614a3f4eab2fcfd"
  },
  {
    "url": "assets/js/11.a7e7175a.js",
    "revision": "8029d7c2c55314a5b5cffe0407eaaae3"
  },
  {
    "url": "assets/js/12.1df9673d.js",
    "revision": "e650276782923f7848008a519b203407"
  },
  {
    "url": "assets/js/2.ddf06445.js",
    "revision": "9dd94ac1663ef85b7c293b8a0d9fe0f8"
  },
  {
    "url": "assets/js/3.c842f050.js",
    "revision": "dd59b0e9fe50a939590ef6cc3515e334"
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
    "url": "assets/js/6.b9e410d9.js",
    "revision": "25da9e78c1a7fb9f8cf718141bfbb923"
  },
  {
    "url": "assets/js/7.63a90d76.js",
    "revision": "35c0516b2a5800333e73c230817ef08a"
  },
  {
    "url": "assets/js/8.653dcd12.js",
    "revision": "08a59c37a737f8b769f45ddc55a78d22"
  },
  {
    "url": "assets/js/9.55ca2fb7.js",
    "revision": "da09174046855cee6510e1bd707feee2"
  },
  {
    "url": "assets/js/app.6d0da39b.js",
    "revision": "1a34505e93342f3f60f1705662290ae7"
  },
  {
    "url": "index.html",
    "revision": "240679004347789212173088577e384e"
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
