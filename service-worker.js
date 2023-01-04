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
    "revision": "1dbeab01ba43e5830d0e065788708c70"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "c6f16dfd1553ac143cca9b772ec1b92e"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "c14b9d3066b88bd5156e80fe55aafea4"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "ed8b29b3bd3d1d87d7888cc54433368d"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "c3154ccac567c58ba6714446b0ddab4a"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "6d0f5cd9dce10216140fa4f90c0261cc"
  },
  {
    "url": "404.html",
    "revision": "80d08d3e671e817ab526686d64d3de26"
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
    "url": "assets/js/10.f0c5a4ca.js",
    "revision": "0d61078a95809fe688d0ed046e0b0b0d"
  },
  {
    "url": "assets/js/11.cdb15280.js",
    "revision": "2a20052dfadfed3c34c019582a4b13ed"
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
    "url": "assets/js/7.5067d593.js",
    "revision": "e14a4d0d4fa99bf7ed2bf6e66660ee1b"
  },
  {
    "url": "assets/js/8.039d126c.js",
    "revision": "b31544e8bad4b554132cbb5c87d928e5"
  },
  {
    "url": "assets/js/9.cf116cf0.js",
    "revision": "0fd983a6a5b536c53895dd0a25d6776c"
  },
  {
    "url": "assets/js/app.c488b69e.js",
    "revision": "4118167deee9f8b30ad782e6bd5d3412"
  },
  {
    "url": "index.html",
    "revision": "b13752ba66223d42041f8d24617548fb"
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
