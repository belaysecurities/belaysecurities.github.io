'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "fbb70a65c8e8573142837037b9301647",
"manifest.json": "f5688e0ea966e1611fdc70472c946dc5",
"assets/google_fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/google_fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/google_fonts/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/google_fonts/Raleway-SemiBoldItalic.ttf": "2ed1e9696712eac2b9ec02ada1045fcb",
"assets/google_fonts/Raleway-ExtraLightItalic.ttf": "005cfa6da2e318c6e260b9a4118f4be4",
"assets/google_fonts/Raleway-ThinItalic.ttf": "8fe060be26aca99ed4c879d41c3a8b6d",
"assets/google_fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/google_fonts/Raleway-Thin.ttf": "07ac22f3d71e66a0799703116b533ac5",
"assets/google_fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/google_fonts/OpenSans-LightItalic.ttf": "c147d1302b974387afd38590072e7294",
"assets/google_fonts/Raleway-ExtraLight.ttf": "3d22c4cbf0bbf560dbc16342b6bdccd4",
"assets/google_fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/google_fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/google_fonts/OpenSans-SemiBoldItalic.ttf": "4f04fe541ca8be9b60b500e911b75fb5",
"assets/google_fonts/OpenSans-ExtraBoldItalic.ttf": "a10effa3ed22bb89dd148e0018a7a761",
"assets/google_fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/google_fonts/Raleway-LightItalic.ttf": "78efd1da53f2af86712d955dd36af0a7",
"assets/google_fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/google_fonts/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/google_fonts/Raleway-BoldItalic.ttf": "2c6f0ac361f6a86d7e8d74f3d6737380",
"assets/google_fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/google_fonts/Raleway-BlackItalic.ttf": "82163a0f87990e4f9d9ec2b7893e796a",
"assets/google_fonts/Raleway-ExtraBoldItalic.ttf": "db1ef2f98145c0429dbc90c817a3cfdf",
"assets/google_fonts/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/google_fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/google_fonts/Raleway-MediumItalic.ttf": "a55ff2cd6e2cffc65817240e14da6813",
"assets/google_fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/google_fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/logo.png": "d8fb4c8da6b62378c1e55254a741bad9",
"assets/assets/uber.png": "c35a42b3ae57008bf8b8416a79652efb",
"assets/assets/graph.png": "7dcd5b52b52a80c7450c1ad0ac1be99b",
"assets/assets/lyft.png": "9cc517fdd7f6d6ae726c8de020fbe1e6",
"assets/assets/piggybank.png": "0ea1aa0ee1c9335691c59d332fdb8cac",
"assets/assets/moneybag.png": "6d9f8a1f4d9141ad750ee2b76bc2dd22",
"assets/assets/icons/profile.png": "cc061f45c414e0289ff11a284509cb8e",
"assets/assets/icons/bluestar.png": "a8482f70955e0e7a41de8f7b1a6ef71c",
"assets/assets/icons/lock.png": "451aaa3e657dafad13a56da0bb0a53fc",
"assets/assets/icons/backbutton.png": "ca8141079dd65b5ad9d401f2321507f2",
"assets/assets/icons/rightarrow.png": "a424e442ea1401bafd1487f22f384999",
"assets/assets/icons/bluecircle.png": "e7503fbd9f5fbc5b1ee582e515d99e44",
"assets/assets/icons/tealcircle.png": "cc1ac58028767e2a7c3619bdbc06fb59",
"assets/assets/icons/whitestar.png": "47e978e9fe39bc7b023e1441495e7da7",
"assets/assets/icons/mail.png": "ef4153420305b40417f0cb1d58d77c39",
"assets/assets/icons/whitecircle.png": "85e880639c3f0dcd07d523016bd17e8d",
"assets/assets/icons/yellowcircle.png": "100a00c38990ac571fab810d376acbf5",
"assets/assets/icons/bluebox.png": "b48bed87963bf8007010e41dacfbbc9f",
"assets/assets/icons/user.png": "62a6798ce33019899ae8374ab7191dd4",
"assets/assets/icons/whitebox.png": "d678844eb6f5e5eee6351d0c39ae32eb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/bank.png": "2f06fe711c476c364e53b9791fbc3712",
"assets/images/robot.png": "9dcdf1b2b06127b85587e3e313d5cc6b",
"assets/images/Uber_Logo_Black.png": "fb1cb6176c80bb70f380b0f119836b69",
"assets/images/home.png": "60e48a9077f9749e292028f4c5349707",
"assets/images/nighttime.jpeg": "7239d8bfd7bfe6629bbff61f721da1ca",
"assets/images/logo.png": "9f286930c0cbdf18d5cfc45fcc8a54ae",
"assets/images/suv.png": "02dc0d75002fc4f1a438462546fb5a1e",
"assets/images/laptop_lady.png": "5951e6e685b6340b1afe4514d1933434",
"assets/images/sunset.png": "ff15e08cd4904c44b69d16d06c36ceb9",
"assets/images/confetti.png": "5db53c409e327489971d6b5ba99ec546",
"assets/images/piggybank.png": "1365c3ea221746bb54a876000e5df8cf",
"assets/images/sunrise.png": "9ea917b2eac2d2e6ed78b6a44598454e",
"assets/images/person_sitting.png": "814f8b80f151358c412056f47106c77f",
"assets/images/Lyft_Logo_Pink%2520copy.png": "ef504591ef40dbcc39ceac221d2ecb60",
"assets/images/nighttime.png": "5bdf312cf0fa5b1299ebf49b3b9000f0",
"assets/images/onboarding_image.png": "8b6b937780bcae0a50d63475543982c9",
"assets/images/c749ad3875eaccb02248437ba969f56e.jpg": "28e50e85cd942a1e6a55a37ccee21e98",
"assets/images/calendar.png": "641d932e6ef6595875af03950b5c01f4",
"assets/images/night.png": "203fd7c75d017222ecef54706a332179",
"assets/images/Plaid_logo.png": "be8f31c2e633f707e1ab2a41106b50ba",
"assets/images/Uber_Logo_Black%2520copy.png": "fdf3a90e2eaf94cd59fa12d696517c4d",
"assets/images/Lyft_Logo_Pink.png": "168095aaa23f74a00e1ab717dd81c4d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "bd8a61b018d27b22fac5956a23ac967b",
"assets/NOTICES": "8721b6d775787d834aab4b8128b0ac92",
"index.html": "7a6085264c347959a4dc4cf4f0b4ed58",
"/": "7a6085264c347959a4dc4cf4f0b4ed58",
"version.json": "c84c11bc65b61fea8ca067f67ddc8059",
"icons/logo.png": "9f286930c0cbdf18d5cfc45fcc8a54ae",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
