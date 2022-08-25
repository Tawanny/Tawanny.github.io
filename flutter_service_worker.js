'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "52952a7f5152463566ac79055a09de01",
"main.dart.js": "1740b9419a9b3f4f0571cce0c8b91b0d",
"index.html": "e1bcff2f6e80d6462c0bdb18f7ed9ace",
"/": "e1bcff2f6e80d6462c0bdb18f7ed9ace",
"assets/NOTICES": "563bb42b7359e650c86d2260d41ef29e",
"assets/FontManifest.json": "3ca64090b9da4a7c0a3988ea3cda93fc",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "b018292d10d2d4fab58d3c735c8a2b02",
"assets/assets/icons_png/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/icons_png/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/icons_png/google_cloud.png": "5efe4dae1e19d52a15cc360e8bcc3edc",
"assets/assets/icons_png/figma.png": "66a739223239ac1640596403c38b9afb",
"assets/assets/icons_png/firestore.png": "690baa18fca1ce4aa1ab3fab4c5eff11",
"assets/assets/icons_png/firebase.png": "895c3b8bc17c4b7385f973bc40c90f35",
"assets/assets/icons_png/github.png": "173fc3f1687ec2addd7d333f5076a5da",
"assets/assets/icons_png/wix.png": "a4e12314898671bd91821a6186e721c7",
"assets/assets/icons_png/dart.png": "0a4777b993a114d9b9870727398bcac6",
"assets/assets/icons_png/google.png": "875f2b69344b40e7eddc76b66444b128",
"assets/assets/icons_png/flutter.png": "646231c7b3e14f0959ac43175dfcf994",
"assets/assets/gif/talk%2520to%2520me.gif": "57a56ef2600a43f79df9123d38ebfd02",
"assets/assets/gif/Developer%2520activity.gif": "36b6bb4bc7957fdf663db6dc44d12425",
"assets/assets/gif/one.gif": "fe815c12069d61031b6202253750a3b1",
"assets/assets/gif/glasses.gif": "001b4e56e59f05fb4e553edd0aaba540",
"assets/assets/gif/avatar.gif": "fd8a6bb26d4514809b8d5e6a2e9f9741",
"assets/assets/gif/three.gif": "40f217bdfae1c539842269bb2e1bda48",
"assets/assets/gif/Website%2520designer.gif": "cdf521c81f1884ebe71b7e4d2b183372",
"assets/assets/gif/Responsive.gif": "4e69997e6a1573273c35ba4f564d153f",
"assets/assets/gif/App%2520development.gif": "f03ba97b52f3165500a356e5019c9cbf",
"assets/assets/gif/two.gif": "209340ecac39c77f039760fd5016656e",
"assets/assets/icons/twitter.svg": "d3ec2eef5268393b53efcf88050f1165",
"assets/assets/icons/wix.svg": "97a9715d1a79cd89e0e776f8c9524008",
"assets/assets/icons/fast.svg": "8b454cd00ab6fa8ca655bdcaef2f5264",
"assets/assets/icons/flutter.svg": "f318a67337183b3915060eee7a44b342",
"assets/assets/icons/firebase.svg": "5c8228e21c66f45cf23f18a7bca732f6",
"assets/assets/icons/interactive.svg": "5ca8a0c5ea671cf25e6c48eb4ad51b04",
"assets/assets/icons/facebook.svg": "279825b7676f8024d25cf2915295860f",
"assets/assets/icons/git_repo.svg": "26cffa6c8d5f4e911261399f55dac7d8",
"assets/assets/icons/linkedin.svg": "dc804fd72d041cbe2aba97121c9d6e6b",
"assets/assets/icons/intuitive.svg": "d3edd563032a38a96a5873b47413e98b",
"assets/assets/icons/google_cloud.svg": "82030cf184a2e1c77cef4679ba9c160a",
"assets/assets/icons/responsive.svg": "22f8569c0fc2b70b86a41c6d3d60bbcc",
"assets/assets/icons/firestore.svg": "8743ee3ca7218c54b40fa74331fdc483",
"assets/assets/icons/github_blue.svg": "9d68a324f62b897d70e5383fec6bdd48",
"assets/assets/icons/dart.svg": "9da33b058bf8980a407c2cd6840d0b91",
"assets/assets/icons/Calendly-Logo.png": "8cb179250a0786e140f84ea1801e062c",
"assets/assets/icons/check.svg": "7dacdac0d3fcfea3223c859c51266fca",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/bg.jpg": "ff4e65c1548d109fb2881bd27df49472",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/colourful_bg.jpg": "8e190cc5a97b939f9e80c7d7a1875175",
"assets/assets/images/bg_plash.jpg": "930adb760c4940d3b4a4ce5f379824ec",
"assets/assets/images/mypic.jpeg": "80cda8ea9e98b339333348ff24de40f5",
"assets/assets/images/ux.png": "a5573d74210aee456a0a073e110b49d2",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/development.png": "402e481d9dfec8a0e37655590bb20ec9",
"assets/assets/images/seo.png": "3d01aed438401db9505c4f88de13c373",
"assets/assets/images/system.png": "b31d2b7f479e66892a8e9eb84b1aa08e",
"assets/assets/images/android-ios.svg": "461194570e67f87cb1a8ea409b33b179",
"assets/assets/images/footerbg.png": "55b32af07558080974c334d79b9ae132",
"assets/assets/images/flutter-desktop.png": "950aa26693adca19ab028585eb6e4b6b",
"assets/assets/images/Wallet-amico.png": "72327aa7a2f99d9f47edc7562f1d446d",
"assets/assets/images/logo_noBg.png": "b451ffb0aef23684f5ce0a57083bad4c",
"assets/assets/images/blue_hexa.jpg": "15e82ed23b64d15c417a62d6e6c0f899",
"assets/assets/images/tech_lines_bg.jpg": "03dcf974a6164465d1c2fd343a186671",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/analytics.jpg": "1548128bc4592a3ab9ac019b2b3013ab",
"assets/assets/images/sign.png": "09ce9472b81f95dc3193a4ce58872bfb",
"assets/assets/images/Market%2520launch.png": "d8e6ba1b751d68dae0c32051e76abd32",
"assets/assets/images/flutter_responsive.png": "6607f59608f163c8a9d3a57c7b081112",
"assets/assets/images/flutter-pwa.png": "cbe75058bfc6088fba20e713cf8393d1",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/user-interface.png": "63b6c869be2d02c92b8e3e1cce660804",
"assets/assets/images/danny.png": "cb49d9005034ae753b8d7211a4a2628b",
"assets/assets/images/web-development.png": "c044c9191d6ef4c9196f0b4f5d755117",
"assets/assets/images/background.jpg": "bf958974609a7b1a0a3252098c116882",
"assets/assets/images/my_avatar.jpg": "1ce5f3e18b5c627df92e9037342e4e4b",
"assets/assets/images/pwa.png": "0422b0f6d3f44fdefc82be01946e8538",
"assets/assets/images/google.png": "875f2b69344b40e7eddc76b66444b128",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/flutterandroid-ios.png": "039f2436df525780c4397d3aa45b34f5",
"assets/assets/images/tile_masters_bg.jpg": "ca8d80a7aa1279ac14adf20352277e30",
"assets/assets/images/blueWavesBg.jpg": "148ea3b2fece1d7ed31247bc656b2176",
"assets/assets/images/site_mntnce.png": "ddfa3c65372cba918366a2868eaab762",
"assets/assets/images/logo.png": "487d17749d02ba7c115fd36c390e205c",
"assets/assets/images/tech_bg.png": "63c4b29294d6c57c05ce4e250e03af57",
"assets/assets/pdf/danny_cv.pdf": "4f2ab15bbb2e9e7829c0701fe05de0fe",
"assets/assets/svg/Questions-amico.svg": "a59b9bb6f45fce89f6e53749edd47686",
"assets/assets/svg/Palette-bro.svg": "e88925246b14bff41527f6db57df2d7f",
"assets/assets/svg/launch%2520and%2520grow.svg": "03c86305ac8a324bf2b2661a4a09ab8d",
"assets/assets/svg/Market%2520launch.svg": "5270215be5a6f9296830c9efa06a8077",
"assets/assets/svg/Mobile%2520UX-bro.svg": "d4fccf1489aaa477a88d2a5e1b97fc95",
"assets/assets/svg/app_dev.svg": "1d93c2b5c1529256d70ab3dd08cd7e81",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
