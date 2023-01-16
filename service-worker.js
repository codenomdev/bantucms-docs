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
    "revision": "926e2913a536f80d2aa58075c00ce8c4"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "d65507765596ea7515e6a935b14e44ca"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "cc654081fd01821b88f855e0bbdeb71a"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "9679608391cedc7ead5ed42158fc6451"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "bc3648615abc494f9bf2cee1f2c7ff37"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "b45471b608cc2c2642194a198d5c76c8"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "222fa63d1affe5f37d0726d2ec98f9d0"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "a75de4596f91477ac2415ce56c826528"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "669d52be05c9a02a13ef9a5a43313c16"
  },
  {
    "url": "1.x/installation-guide/server-configuration.html",
    "revision": "a40f8d308b5287f7f8ac3377449e05b5"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "946f108f9ed23017422128ff4c02b1a7"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "a5ffb7d17673450d4195c0aed0882fa2"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "beb694f42497d598edf9dfe8a3d66985"
  },
  {
    "url": "1.x/modules/developments/create-models.html",
    "revision": "8c206e56b45a6b49390fdfe657aeae1d"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "7809cbc1a1802a1e341da9492877d394"
  },
  {
    "url": "1.x/modules/developments/store-data-through-repositories.html",
    "revision": "1bc392ecd593fa0ff3bca5f99cafb832"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "6651928a0eda90339c67406e738fc36d"
  },
  {
    "url": "404.html",
    "revision": "e4dd8c3f47646691d78a12ea2123a288"
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
    "url": "assets/js/17.83caf89a.js",
    "revision": "741f337fe55958f41c89c1c9ec224648"
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
    "url": "assets/js/app.dcf4ab32.js",
    "revision": "daa55802dbea3c1807a2d01201529648"
  },
  {
    "url": "index.html",
    "revision": "f7a95df45b9e228162b891ec0fdb3945"
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
