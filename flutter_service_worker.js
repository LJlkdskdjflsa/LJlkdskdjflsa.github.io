'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9609d034353d7356e75cb28773711f9c",
"/": "9609d034353d7356e75cb28773711f9c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/images/avatar.jpg": "c94161ee8190f80ba56a698743a6cf46",
"assets/assets/images/bg.jpg": "22d1da710f63ed066ff2c78a34d3a1b7",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/241952003_4358931637496211_6752667580020570138_n.jpg": "9f98eef978846fd515de8a80ecb332d0",
"assets/assets/images/bg_mountain.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "a47161ab5c0cc47f4ba2b133045ec04b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "e1178d02fe3b78a9d06fe2269969b26f",
"main.dart.js": "dadbabd2b73b3e32330256e03431ff5b",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"README.md": "7d733415f7ddd1ed627c425793039b9c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/refs/heads/main": "91381dec1f5e2ccd7cc3756e49097703",
".git/refs/remotes/origin/main": "91381dec1f5e2ccd7cc3756e49097703",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "5e56ffb4232ac764155501caccb4fd34",
".git/logs/refs/heads/main": "e3abed1b17d33a86b1d2be75368d04e5",
".git/logs/refs/remotes/origin/main": "0d07435b9b442a4909f631007de73b42",
".git/config": "354fdc7eaf26f09ad93a688c79004fd0",
".git/objects/f7/550c6f37ca65326fadcaaaf8a60804b3641121": "f4bbe99cae96e47aa2bf0ba80de8e940",
".git/objects/c2/81dc622484b045fa9aa11f0e10dca730dca749": "7a7c341c9ed780082346e7f26c769b0c",
".git/objects/25/41c30f07a25e8fc8d8c38ea165ec7a05e5d744": "56a842652c8ba16904adb9baf1597600",
".git/objects/39/8734e2b612774834d5ffd52e2f2036b52ea3cd": "980c0c95fb7a0afde84a91c8a0a620dd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/6c/0244b5d0e4d07483636ccba6ed47072ee04d39": "31547d8cb8a7e1823b0576954d53fc29",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/71/6357442be7b8b1ab6ef13961134875e8302bec": "c6ca2059d111995609733f1652deb3dd",
".git/objects/7d/4f6181d3d1fffd5fe77116e7d24c398d3e13c3": "a4bfbe517572640d1baf39b9c12d7d1c",
".git/objects/bc/228dc92a91e6c47c0a337575e14f46ce252ab6": "dcc893d4b6f238452a46c106a3fb6171",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/e2/9f37dd733cbe6f7fdeafa4eda11b3cc63c71bd": "6c48df0218a56b0ff724755aa8537bef",
".git/objects/c5/2ecbbe16b27560c04716bc5ad8e42adb1641aa": "c121ca2f972c928864c40b37afc64aeb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/59/dbd806e25464858a8f07852fdfc0ed04000ac2": "b1f8059303b5ccfbd4926fd5690165bb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/b4/f357f518946474f8ef153b96a3d3fe0963e3af": "e0600c17b32d8c9c26036f13ef60e3db",
".git/objects/d7/3e36dbd9482c68f219c57fb5ef339a407e02e6": "d8d781b1ad68335ad72fb5f1b2e5ad96",
".git/objects/b5/1420e715e6811f31b684182552b5afce09de79": "d342ab9f3508f159659820803ffe75ce",
".git/objects/3f/aed3e36a4c4e82d40978e61566d1e933c61f42": "f23fcfb77ae2158d16c217f8dcda95c1",
".git/objects/b0/94c0dc51f93237609c8ea0122a94adddd28a4e": "42c539af1e20af7709c64e9a1cf8fbdb",
".git/objects/0e/cf194ab41fdbbf0d9c2554737232f7f09e0229": "7213a083d0771dc4267567e6f946e723",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/c7/ea41e1a76b08821146032b1e8fdf9bedfe3193": "a0aead001b16b2ebda8d947f9d9434f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5e3270f413b4afb3b1de16eb65224f91209371": "442441133fa31e9b71f5067676441537",
".git/objects/2d/075ae3d3470b48d25434051fbaa3f4741d16f3": "0436be25c6101348e1752b4ecf2b1064",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a3/1d996608beb993d7001e83927f4666e0f0e335": "56e09d63ec42027a03ef3bc0342f2247",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/67/7c25ae995fb332d7c941001e4136ff0617f998": "77f708e68bed396ff37978790866a1cb",
".git/objects/87/7e0eae8ffe676b15fd123c90449f7e1432b62c": "fef13c5801e2a0cf64bceddfa5578f69",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/47/ad1dbe03f5ba6dfa92eef5bd9398c9ebef8ade": "25419dc01b8bf636155b956065d4b24f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/19/fb30926305079066fb6082ee3d3e0172445f08": "f00edfbf503814b7869558ddae44fe77",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/7f96216011a1a70d5eab579cf8047b7a0324d0": "5cf57f6a88a119e941416732cec72499",
".git/objects/61/778ac12469cf8005ee9d595f9da033be4cc5e1": "0dbfb14c4789cdf161bb69efc3710eb7",
".git/objects/0f/2bf570701de989e061d060233a992a58ca18ff": "3e2ee317e636d8cfeef9a5c30ef51fd1",
".git/objects/75/39457561a8f5e3d7d2f168a1566462d3978fab": "3c859b0fa19cb07302ae063bd5577894",
".git/objects/d5/43368c0a7a8fea79c76d128415fbe8c4cf842a": "d4eee122148b34127fbfc8c7253030c4",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/f8270256335ee6824b3d634203e56a5cb9c4f6": "8a30cb59487ba25f86be12e53c77712e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/index": "7d9e4383232eb2866ee03a921e0fe302",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "91e80ee495cf78fed757993548c354da"
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
