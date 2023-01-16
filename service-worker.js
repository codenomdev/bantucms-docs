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
    "revision": "32c12654a9a23b266530f05540ce6e75"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "a2e5fc7ecc053bb3f227e1dcd626ac20"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "9245ddf1ab38214e284773c6ac65c1b6"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "2bab0f7aa87e97e3dbfb247f68b7fa39"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "e8f1d2807aaddbeeeee6bcf0791ec7ae"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "a6db889a7a09373bc35d1c07dbd690be"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "7886bd3d413b814c869442fa34048612"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "b86ff5c1fc8873146eb733d8cfc2f5cb"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "95d0233cafe46eb53d4559955dcb04ea"
  },
  {
    "url": "1.x/installation-guide/server-configuration.html",
    "revision": "062ce3fcd12b7a83bcd9b6a4ad0ae75c"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "c1c054b11f64468c024e888c514bb13f"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "1e69e0befff54bc30eb82471e232636b"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "6ed31815f7415cdb5527451dbee01af0"
  },
  {
    "url": "1.x/modules/developments/create-models.html",
    "revision": "12f3453cf8a93cc8d30f8c793142353c"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "11ca95ed1098b1f1a2229ef77dabd751"
  },
  {
    "url": "1.x/modules/developments/store-data-through-repositories.html",
    "revision": "b9528782f712dadc5b9bc6d843c6c6dd"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "0e4fc7a226987f8ce75bacb7b69f5dd4"
  },
  {
    "url": "404.html",
    "revision": "ef5623c4a7b8aa5039b596bd3a6bf2ad"
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
    "url": "assets/js/16.55aa3ddd.js",
    "revision": "e86c23524cb67cc02651b9e307f14882"
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
    "url": "assets/js/20.a5b7cb95.js",
    "revision": "1e1ddeb9076811ad3110ae3f8875dec9"
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
    "url": "assets/js/app.a0a142a3.js",
    "revision": "89023c8e0477ead750a1e4df83d467cc"
  },
  {
    "url": "index.html",
    "revision": "267b33d5088da6d8c733db97cc7d82a4"
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
