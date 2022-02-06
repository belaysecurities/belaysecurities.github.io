'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "07acdc41f660d516630aa4bee76a0dbe",
"index.html": "bf8cb08514f5536a457825284730a9a2",
"/": "bf8cb08514f5536a457825284730a9a2",
"main.dart.js": "7aa4031651f114c902d056262bab4468",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/logo.png": "9f286930c0cbdf18d5cfc45fcc8a54ae",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b7b8edb8d41a713f5f26aa0946497866",
"assets/images/update.png": "e4fc530942eb76aa3747feaa65607577",
"assets/images/app_person.png": "c4d4be14b89c257b822772ae87e082fb",
"assets/images/confetti.png": "cdc8f1fe05560f6637550e0a80c3569d",
"assets/images/charge.png": "07ea7d5de21bde328e48fd924613f819",
"assets/images/lock.png": "0110024da73ce0687e13afd6b3f7ebf5",
"assets/images/money_person.png": "ccfe4c2d8d756bfde7ac310c76afb01d",
"assets/images/calendar_person.png": "3488d6e0d41af1133ba71432de4c66c6",
"assets/images/hand_phone.png": "8fda7b197b382e650efa42a1ab7c1394",
"assets/images/uber_person.png": "4519c583fdf2b8e895c943f0aefd4210",
"assets/images/charts.png": "28c55453b1a7e928dc6f85c9157f5e96",
"assets/images/uber_logo.png": "4cd731e00b6164d3a0840ced0ece3ae2",
"assets/images/belay_favicon_32x32.jpg": "0f648a538bc9ad62cac17fe1e753fb2c",
"assets/images/piggy.png": "44ff07e7a7b7b10431bfb31de2bedadf",
"assets/images/logo.png": "853d2d2d37bca06431a3b0a3db975295",
"assets/images/lyft_logo.png": "a5bf8f10ee01dcf3070280a3606ab291",
"assets/images/logo_white.png": "48c5aa914015db1ee6e0f00aa8f7fd3b",
"assets/images/robot.png": "0ac0f45080b43383034aa9d12969fac7",
"assets/images/calendar.png": "a748c29cef51a4b540e85b9862aa1cdb",
"assets/images/car.png": "9eae4ed46338082b116751c745b7b932",
"assets/images/lyft_driver.png": "1a35911edd93862d6d8f5ea68db37dc7",
"assets/images/busy.png": "16161fbd129cbe2b14651ee49e6b8f1e",
"assets/images/money_sack.png": "bc87e59602c7d0401a9d6a4a352c2e09",
"assets/images/phone_card.png": "42da7d6a3f1b3fa50f82d90512546d11",
"assets/images/reward.png": "e2660358ce26588c5419be75283fae18",
"assets/images/contingency.png": "0a75d8a6220b71febe9c8d4cf1c006d4",
"assets/AssetManifest.json": "493e0f78e3cd9e972c87cc21f9c68807",
"assets/NOTICES": "b8f7add293f544b24d015727d5bc658d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "5c717055b6683529243c292ab78aa797",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
