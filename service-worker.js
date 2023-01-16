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
    "revision": "cd6e5005f4b58bbd8ec44f0f2b91d4f1"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "30a498c71dd072eb29ddc228e07530be"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "0ef1ec14638e8b05b56c725566165464"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "99ca8812f58e8ad99469736904e99849"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "46cf77c7cad0435ec8be775b13bdc3b1"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "5f490d2a24693a4087d2b3aa4f2cfa89"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "9740a0b59cdfde39d6ca547259661459"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "1fde86f40f8aa53080c06e62e6d4dff8"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "d706e32ee73bccd70aa5cd0f75768ca3"
  },
  {
    "url": "1.x/installation-guide/server-configuration.html",
    "revision": "71029f9e76e6f7ba19046ca2d5534662"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "e27aa5c817b34307695870b45d09018b"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "993f6857700fa5393e160ca92fc1cc35"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "0d115efea362b67e4310ef9d702e23ba"
  },
  {
    "url": "1.x/modules/developments/create-models.html",
    "revision": "5474b6fc5d130e16dce66ec7057432f4"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "7bdc8996e5ab6434050a2418575a6889"
  },
  {
    "url": "1.x/modules/developments/store-data-through-repositories.html",
    "revision": "a7f2e7fdf6f67c3371450565b8bcd334"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "6e4379cf05d2b8cf1b952cc7dd15317b"
  },
  {
    "url": "404.html",
    "revision": "0562d0bec53ffe0fb2a65a23822a7a83"
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
    "url": "assets/js/10.2c9d0dd3.js",
    "revision": "8f6a659dee5b510e2bf6b6d7474fdc3f"
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
    "url": "assets/js/13.ae2c2393.js",
    "revision": "7c4151a815cb11ea369a4a28d1fc2b29"
  },
  {
    "url": "assets/js/14.809ff53c.js",
    "revision": "d880c6acdbbfc09611d62fe656de9da5"
  },
  {
    "url": "assets/js/15.611cf29f.js",
    "revision": "9f2ea00f37d0da9e21c6251bd7ad772c"
  },
  {
    "url": "assets/js/16.2c0b8eb0.js",
    "revision": "29bc84d79e87a089aa1494a7cb43cf48"
  },
  {
    "url": "assets/js/17.efeb96c2.js",
    "revision": "af0ca2103777d2bfecf7c67a9cb975fc"
  },
  {
    "url": "assets/js/18.65f9451b.js",
    "revision": "5c0524d8ece614453138717938b43c2e"
  },
  {
    "url": "assets/js/19.841e72ab.js",
    "revision": "6ba68dce7806685e9ec32d48fa464a25"
  },
  {
    "url": "assets/js/2.b2a3a940.js",
    "revision": "838751f32de0af4f2a221081b84af8fc"
  },
  {
    "url": "assets/js/20.5b11a502.js",
    "revision": "b0d7f379c3f864b18c76cd13211373a5"
  },
  {
    "url": "assets/js/21.5f4a24d9.js",
    "revision": "29d5b798229f31c5b653c3e395d128c2"
  },
  {
    "url": "assets/js/22.82394a47.js",
    "revision": "8d73f9fa35198e983ec4510a5cee165b"
  },
  {
    "url": "assets/js/23.bc99d202.js",
    "revision": "0cb0117cfd0efa1d87cbdea6f4b0e8f8"
  },
  {
    "url": "assets/js/3.8fb230f5.js",
    "revision": "4985890b9ecb18d1927f34aecd4c319b"
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
    "url": "assets/js/7.5399b5ec.js",
    "revision": "1306134937f49b22b5cd80698736c202"
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
    "url": "assets/js/app.f2ff4f33.js",
    "revision": "911ded7720e34683119120d3ac122fe7"
  },
  {
    "url": "index.html",
    "revision": "5eaeccc8156b2793f22d8af1c2c74715"
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
