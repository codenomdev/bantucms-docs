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
    "revision": "7f0bed5a7da78a412cc9e0175271ea33"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "e6542999e5f862c5ade6987e20a345dc"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "9190b182fccd6c77478f4e3ab2bbc4ad"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "10b48bd3515b5010757c94b37412a208"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "b69b29d97c377b8507f3fb88db486ef4"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "fafc2a59a491435d8c2c93fc6d019f12"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "d9e28de55264bddbf145a5bd5da5430d"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "05570fd3e533e913405efddd1974d8fa"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "ab61bce214903419961d3805e07f023c"
  },
  {
    "url": "1.x/installation-guide/server-configuration.html",
    "revision": "c539ffbe3ead852f5c54e18eb4a8cfd6"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "a90f791a82d2d3d4cdf6cc3d5183e083"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "876ceae13bbe7e28c063d2a5ce8d2c13"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "9cc945b2d8f818a5f9a4bb4959d44617"
  },
  {
    "url": "1.x/modules/developments/create-models.html",
    "revision": "2854d331a61ab770d8606300a3b24a90"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "941a9ec7e830c37dfc7a589c43dcc4c6"
  },
  {
    "url": "1.x/modules/developments/store-data-through-repositories.html",
    "revision": "9c2f5da0c6cc283042e6f33bb30927ea"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "988d42153194ac0b1462f9807d92edca"
  },
  {
    "url": "404.html",
    "revision": "b20be3dafb1e2233dfcc97d82702cbcd"
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
    "url": "assets/js/17.9e91eb09.js",
    "revision": "50dbb998fb65716bc55ca90959377e8a"
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
    "url": "assets/js/app.a75e603e.js",
    "revision": "4a78393dff9bd1af3e560e929c55e46a"
  },
  {
    "url": "index.html",
    "revision": "0bf2427d45e590d68fe6b7b815a6f28b"
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
