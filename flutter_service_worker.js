'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0a2920f18f23713bfad923a72d82ec87",
"index.html": "4ee92a58c77c360e44ea341c261ed91c",
"/": "4ee92a58c77c360e44ea341c261ed91c",
"main.dart.js": "e2ccd68a5ae3963142ffb10305bd53f5",
"README.md": "f75be20e0e3dfe96da903430388e05d1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e06ae7bdbbde2fbffebc4c5449ba31a0",
".git/ORIG_HEAD": "439edf3850efb051e52762a56cf94da1",
".git/config": "dde5a4500f4eb6c5305bb0c753cb55b3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/51/f1f11c4a37cd7d6b0d55138809a0719a837f55": "6b7b65bd8764baadc056a6bb59321334",
".git/objects/ad/56724f956a4e9c6c19657f5d9090f27277136e": "651041479b22adda12c827e9c44953ed",
".git/objects/df/d2b5ecd8df817e42ceb210a9c9ea55a75816e3": "98705548d1ee4e2d64ff1f9473142218",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cf/869f0bccfc24b8b70d4939824b99b1119dfc43": "187850e54d1afde7c298693ab82b02c1",
".git/objects/e4/fe5d0b0fdbaf0ba9d2f3bf1cc0ebeefef2dd59": "8125381578663e10ee7e2d98f18b2697",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/c1/1da757a9b2d65a96acfa4b9f194f9b9bc7d3ad": "7e19bda728fa9512b6dade1aac9edde5",
".git/objects/c6/ec0eda27f273f0e47b6dde422bdc468f1eb260": "2ff85c260aec782207581ae9834c8761",
".git/objects/ec/0e8769bff6be6505a05995ae104284c4d99c15": "4c5c8364e0f853e86243cc22aa9eebca",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/42/5562db5c15f2ce5ca49b63dd133250b4b0392d": "904b8a74a8d8efafa2ff168397d65368",
".git/objects/89/052943650a40c980d8852c84376345d96bcddb": "22e71847ca89bfc61cbce23f5d0deb2e",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/74/bf5ed3463732fc419c05f6dfa63f95a59447e1": "0ac37dff5447c2219a6c066616fc201c",
".git/objects/8f/5e1f62303b044e0c1fe799395e4111c5adf5c9": "3792ef732dc5079fdc54c13616836369",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/e5df76020ca30d64ee36be8ebf520b08becf7c": "14a93e9a10722179b8997b38af0a83fe",
".git/objects/4c/6c539d2c6fba13af0254bf565b60a00f269b64": "b3440d2033b268e734a13d93b7e6154e",
".git/objects/72/2fa2a1e53963abd4e70a4ac4b5921098e9e8cd": "2ae23fc3b6fe804596b15caf4836ee67",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/c5dea6c362a2e52f33d11104079c45c9bc3f03": "35201ba0b5c00099c18b0c9f2dff04ae",
".git/objects/9a/43a3ad848a904b91bb12465e0992e0fccb4d91": "37b581afb69f22f5de68cedb90858504",
".git/objects/9a/07a015d77ab50a346b6b923f61e23bea703c3f": "4d0d0e6b9578325bf469882a6301d9e0",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/09/4f7f1c77baf2f05fe7f6d55d791d154f1a2c80": "1d29ca47568d613abd775760bc59e764",
".git/objects/3a/30359dc759aac83f1750fd9804323930c47157": "7a18082afe2decf75321bdedd7c0af6a",
".git/objects/5e/a364c95ccf55bcc28dcbd785f9b363eafbce98": "beb24398bf9b2249a2254e4f6f62de6d",
".git/objects/37/0c4ae1ffec210c7f010311fd11f76fa211a8f6": "65e1002611e6f71df6d0478be5cb714d",
".git/objects/6d/395d88c28ce460f2928ce49841b1276fb2a6e5": "7aff272340ae20978599226bafc8ede3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/5abe751147d4a1ea2949a6e6bb21fcf2aacfa6": "2b4d22d24c78f12b3e3312c97d3d2c14",
".git/objects/f7/a6b3bc8368308b241cd24cefd2439a881f6083": "4b4f35034a52b706fa934d42e49607a7",
".git/objects/e8/845a28576c6c77c31de65db4abbe463d6fcee9": "5561817988059a4b544e13a5638ca844",
".git/objects/f1/664ed1906f66c2f0e3bee4fa4f6a085aa54dfa": "e61f5f4ff98d277de2c5dff97e76b724",
".git/objects/f8/80d7ed4626e345e4cb700cf9facb29276dd799": "6431520d6b6827e90b8bcb00fe9c0805",
".git/objects/e0/ada1811650eb26a4940fb518bef8b38edf3fde": "17f51f1a59caa4e402b58b7644aeed20",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/15/9156b3bc4dbdc97285dd9b484cbcb8135d79bb": "d0f1d98a7e8db07b7585c3ecb19761a9",
".git/objects/76/fa99d790305669b93f671cc03f361e6ac1b32d": "ff8858237755620ca5c6ae24d1d694f5",
".git/objects/82/5c6f5ca4a52033aa4ac7322c0efb1eab75c4fe": "2d8663f816ee93cebe5307fa517fc158",
".git/objects/7f/eb23fd00fa0c580031f49f0eebe156a473360f": "9e9d6eacd7b1902b41e059481180192e",
".git/objects/22/65872c77aa14243ad2773a7f0184ca62336cab": "bce054e6fe9b1b37e89c996ba5b2d054",
".git/objects/25/1c471196503a74974f033fb5d90ff8b972343e": "15a7e1952043ba77c77fefe8084cabd6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02bb38dc8c31c8e52ec0a91da70aa904",
".git/logs/refs/heads/main": "09793f075759821d10451fd790da6b60",
".git/logs/refs/remotes/origin/main": "f720ee55c461a4c9954f8f86bfa5779b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "439edf3850efb051e52762a56cf94da1",
".git/refs/remotes/origin/main": "439edf3850efb051e52762a56cf94da1",
".git/index": "7c7c43e6d83bec57e97c31a88353a4aa",
".git/COMMIT_EDITMSG": "f8f29a81177cb72ef563c70cc653780c",
".git/FETCH_HEAD": "ba027f1c16383220fe06a84dae4cc44d",
"assets/AssetManifest.json": "0c5f7a0bfc6c0b07bba2f40bef653c80",
"assets/NOTICES": "029249d46300414648ee3329be8f4917",
"assets/FontManifest.json": "8050d51002fbcd0ec3de8c2d375192f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBoldItalic.ttf": "5f67429d0ff76ec74d98b915439692ee",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLightItalic.ttf": "ade1717e588935bdec3d38ca19bd1050",
"assets/packages/widgetbook/google_fonts/Nunito-Light.ttf": "08bc5f85e4505782d3fa279944f2feab",
"assets/packages/widgetbook/google_fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/packages/widgetbook/google_fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/packages/widgetbook/google_fonts/Nunito-BoldItalic.ttf": "b21199decd37bf9a096e0f495bb20ffd",
"assets/packages/widgetbook/google_fonts/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/packages/widgetbook/google_fonts/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/packages/widgetbook/google_fonts/Nunito-SemiBoldItalic.ttf": "59cf0995782240777656a355cf08b234",
"assets/packages/widgetbook/google_fonts/Nunito-BlackItalic.ttf": "8bf9ce6e0c5434ca0ac97f90196d0c66",
"assets/packages/widgetbook/google_fonts/OFL.txt": "ee247edc304c64bb2135b9b6ec9a203f",
"assets/packages/widgetbook/google_fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/packages/widgetbook/google_fonts/Nunito-LightItalic.ttf": "55032f4e811253da318f967e0db3d7e9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
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
