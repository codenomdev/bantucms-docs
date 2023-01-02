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
    "revision": "a030e80fa9e85a5700a1a6e2df7abbce"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "af28c367c4bd14415fc1caa979e3fceb"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "f0304c8533d07e00e055b0d1111c6f9a"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "49fb562c51aaea8c757c7d5fc1e241f3"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "12b934f6c8f31b5329301ca98ad96ebe"
  },
  {
    "url": "404.html",
    "revision": "0249d6088e6e2507c72403408fbdde64"
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
    "url": "assets/js/10.6fae88e5.js",
    "revision": "8911681b64f31de0e0892623405b1213"
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
    "url": "assets/js/5.bf06c02c.js",
    "revision": "a925f1ef5dabbbf8d098906e3122dc5d"
  },
  {
    "url": "assets/js/6.71204538.js",
    "revision": "6b1cfe9eeaac8dbe5b0ca5c307b6a2c6"
  },
  {
    "url": "assets/js/7.70cb5811.js",
    "revision": "52cb96c3b3500cee578552b14cd65426"
  },
  {
    "url": "assets/js/8.81491de5.js",
    "revision": "e939bf6f6d765f889dd15513db3620f4"
  },
  {
    "url": "assets/js/9.56153556.js",
    "revision": "39b5af5a5355ce8b72ec395f09d9e2fd"
  },
  {
    "url": "assets/js/app.2b0ed53c.js",
    "revision": "8b24ffa830dc09414c83734832775c94"
  },
  {
    "url": "index.html",
    "revision": "293a53aa0129a948385b131caeeede4a"
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
