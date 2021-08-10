'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "92f422a2dd62c83195b3052e4ff93dac",
".git/logs/refs/heads/main": "371ca4118aafb74c83ad609e2026e15f",
".git/logs/refs/remotes/origin/main": "9c8b532bae4aaae4e2893fcf1c624cab",
".git/index": "44c971de91224d75cb501c6313258676",
".git/refs/heads/main": "6174f6e98b0f58747a232c7c96d37d0e",
".git/refs/remotes/origin/main": "6174f6e98b0f58747a232c7c96d37d0e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/66/5d94e8c31201bbe7e18b1d592440badca31f59": "c4836133a1e9205e4daadc026ea88761",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/9b/8f0626f99dfcc17018e2ad6da1f1610664992f": "09e715c00d51782c535a387c78f98d93",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/fa/3d4315aea5e15d76bdec042489d86175cda40c": "f24555b05201fc1d296b9f1081493938",
".git/objects/fa/9b8246e9659b84f362ae9ebd5ee5ed42c71433": "301b1cba7f3c0d743e4c9a45a7c23316",
".git/objects/fa/ace9a8c031c2e73f2bcaefae884225dfed57f5": "d6c5b98370b99f010756460929c8384c",
".git/objects/d7/2c8f1d46cbf6fe812b293b77dfb3f1b0c5983e": "74e32692049d21afe77b374a3df5429e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/3a/bc6fc159e82b301f39c9c0bc51ed64d598b0ec": "a5f7c947fc5231ca314ea78558e05aec",
".git/objects/ed/cec050229fdc9cc8d02f586318ebe2e0b08632": "55f9cf7a8e38a9f273df31199bb9faab",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/f8/e09f083bbdc3d15a1f8a85618cc06333c9a2cd": "2a78045394194c71ed31aa9ab64c71b3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a3/d5476426452d1784726e8b8a42a2e0854844d9": "7a16cda0cc71a7113621b708fdbc75d3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/7e/06daccc13da3145b5ff44355e683bf64651205": "166c915398453d0bdfd56a76c1fe63d8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/7d/958ad274e0a701ced9cde2097cb225e65b2888": "b8420f2a2801373a178cea58f3071d53",
".git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
".git/objects/05/5170c22002002f2d9e6a2c163a58cbe7e15113": "1b41f44c574eb34fdbf94c8ec65ac4dc",
".git/objects/97/260bf0f8eb5c4dfb141448ecca682f2129b61a": "f395d651d1c07aeb2baf359c62f6ed05",
".git/objects/1e/94982286f2310e8614b45179b8cb63649ad744": "ad3605860921ce9360d0761570f50990",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/d9/e4406e44d8ac28accc7c8a9e6143a8c905e8b7": "e6af4df0d758546f423d3bc0c5c77a73",
".git/objects/ef/8c0f2779ef0e6ca9517109fb75be8f40d60d6f": "182647197a08ed54d6bc1d19ce083c9e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/04/4694a2398618fd6bf77d058beb8c34a89bf93e": "bc2d8c730b6d2f0a0efc7ee78bc57197",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f6/a0afc65949daed90dd22ade21aeae47d30efd2": "e6d6061d5861e4a99cfc7aa68d594f5a",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "a57f1906f0a250157c0d3ecc0e9fe12b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "470d80057fe754dc707509c964bb7931",
"index.html": "5be623a8a092578821e7acb84e5f116d",
"/": "5be623a8a092578821e7acb84e5f116d",
"version.json": "281f2a7b1646c3dea6feea25f04fa556",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "6cb3a9af7eb46de7d3d44e589edcc160",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "fd6494b37022485e5afc7fd40db2392b",
"main.dart.js": "12d058526952b16fbe29812c4aee8753"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
