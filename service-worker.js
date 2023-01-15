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
    "revision": "a7c66824ec2cfd03170f05980abfb703"
  },
  {
    "url": "1.x/coding-standards/php.html",
    "revision": "abd54134049498de6282d7b0a80d2380"
  },
  {
    "url": "1.x/coding-standards/technical-guidelines.html",
    "revision": "4107a3c1348ea203558faddd89512976"
  },
  {
    "url": "1.x/development/security/cross-site-scripting.html",
    "revision": "fa87ca5d0afdb324b7c73a3321e0445d"
  },
  {
    "url": "1.x/installation-guide/docker.html",
    "revision": "9063b24ea8e56ab2fc7366438da958a9"
  },
  {
    "url": "1.x/installation-guide/index.html",
    "revision": "c75976a2308590d0f98f8cdcacc1307c"
  },
  {
    "url": "1.x/installation-guide/installation.html",
    "revision": "177a4fd6ee8d1322b7ebdc3fb907d372"
  },
  {
    "url": "1.x/installation-guide/overview.html",
    "revision": "eaf882855b360a97aea3b8f6f3055629"
  },
  {
    "url": "1.x/installation-guide/requirements.html",
    "revision": "d0c41545859a4909816f4dbf8c210625"
  },
  {
    "url": "1.x/installation-guide/server-configuration.html",
    "revision": "a05857037b263dfa927c2cb535553e9e"
  },
  {
    "url": "1.x/modules/developments/create-a-config.html",
    "revision": "59a3f98c39291408f747a5ea20f9fc04"
  },
  {
    "url": "1.x/modules/developments/create-a-routes.html",
    "revision": "f8f2021de402ff396d6e1e1f64d84749"
  },
  {
    "url": "1.x/modules/developments/create-migrations.html",
    "revision": "8514ae3313897e660a24c3cde376e97d"
  },
  {
    "url": "1.x/modules/developments/create-models.html",
    "revision": "a6f62d0d6fe10a30007fa27f9a977fd1"
  },
  {
    "url": "1.x/modules/developments/creating-a-module.html",
    "revision": "42168d7ba1ac78ef81d46b13f8e94877"
  },
  {
    "url": "1.x/modules/developments/store-data-through-repositories.html",
    "revision": "825fd032562ffdd84fae3e5059c30e23"
  },
  {
    "url": "1.x/modules/index.html",
    "revision": "c496ecfd5426df01e7de5952b2eed452"
  },
  {
    "url": "404.html",
    "revision": "15841885a51a7faf3825090efa72c22b"
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
    "url": "assets/js/10.a3c61f5b.js",
    "revision": "f3379573c7b7e1d2ce9b5aa7859b1a85"
  },
  {
    "url": "assets/js/11.6734f063.js",
    "revision": "e24c116f46b3168518572816320ceed0"
  },
  {
    "url": "assets/js/12.b532bc6b.js",
    "revision": "8efad780761bac222ec89f040f5dd1dc"
  },
  {
    "url": "assets/js/13.3e1d4072.js",
    "revision": "845a20620c087a177138732175d090ca"
  },
  {
    "url": "assets/js/14.0f074afa.js",
    "revision": "e253fdd14081f438c36fce104f37bc15"
  },
  {
    "url": "assets/js/15.472bb6f5.js",
    "revision": "ad082a4ba730a1d4a76f8193e88adb5e"
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
    "url": "assets/js/7.220b570a.js",
    "revision": "15d6469fa7cd9a75a34bf8b7df9c62c5"
  },
  {
    "url": "assets/js/8.71bba785.js",
    "revision": "f71d5e7fcc7930a2f0b97028e7a1ba5a"
  },
  {
    "url": "assets/js/9.f0280227.js",
    "revision": "6791639216e54dcdf7b41071f399986f"
  },
  {
    "url": "assets/js/app.7b403d8b.js",
    "revision": "38cc7e3ad806afb5ffc7db1c2dcc7ff3"
  },
  {
    "url": "index.html",
    "revision": "c5b26f138f30b50ad8517d1a2728571a"
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
