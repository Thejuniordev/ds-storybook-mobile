'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8083a87076a28c41e222f60c5abb125b",
"assets/assets/fonts/Manrope-Bold.ttf": "cb17fa4a508de3daf0d9ea64a0ab724e",
"assets/assets/fonts/Manrope-ExtraBold.ttf": "ff3defe710a0202082b8fd2227c66dad",
"assets/assets/fonts/Manrope-ExtraLight.ttf": "ac1f9121d9c60af8f12abace6296bb5d",
"assets/assets/fonts/Manrope-Light.ttf": "a115fc6209a11c4e1d4344557ae25433",
"assets/assets/fonts/Manrope-Medium.ttf": "39d3c7a46503479402db5fdd131016cd",
"assets/assets/fonts/Manrope-Regular.ttf": "e506b64ab60eae396e058916603b61cf",
"assets/assets/fonts/Manrope-SemiBold.ttf": "9e7aaa1e74322a45c153c790fdbacf90",
"assets/FontManifest.json": "f7221f73a8605fa741cf839451c92779",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "3918b96950cebe7a94e5df64e42cfd54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/design_icons_utils/icons/interface/search-fill.svg": "7632848c71ed442fbb37621dab638402",
"assets/packages/design_icons_utils/icons/navigation/arrow-run-forward.svg": "86158e4eb9ef6c1507cd7b4263241ab4",
"assets/packages/design_icons_utils/icons/navigation/check.svg": "1ece58416c22d6b309a05200eb97cdb4",
"assets/packages/design_icons_utils/icons/navigation/circle-close-small.svg": "da19694d2bb12ef81c2ad1a40ed6f549",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "166f4e305f78742bd87e8883665dbf67",
"/": "166f4e305f78742bd87e8883665dbf67",
"main.dart.js": "65cb41854b2cc203f786e4d234a6dd08",
"manifest.json": "e06ae7bdbbde2fbffebc4c5449ba31a0",
"version.json": "dcbf4f418b59c6fae1edb7fb1b3856ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
