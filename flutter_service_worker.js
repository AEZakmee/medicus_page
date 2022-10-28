'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3414a4ab90d70cfaf667deffebccf295",
"favicon.ico": "3d7852dbe2118e4a589bec8eb92cabe5",
"index.html": "9ab5c5c7930048f5de6e3b8ff7bcbc73",
"/": "9ab5c5c7930048f5de6e3b8ff7bcbc73",
"main.dart.js": "b44a930929116bcdd15d08a75a9be37c",
"site.webmanifest": "b029b36da21458319debcfb2786f2886",
"icons/favicon-16x16.png": "ad1d91d56df5bf78f61b65574a150bbb",
"icons/safari-pinned-tab.svg": "9377c3c79d4553801c64b373c045678f",
"icons/android-chrome-192x192.png": "81cd630919d77d4b516bbb6d4351e764",
"icons/apple-touch-icon.png": "599112c45496556189e5668037fdc7b8",
"icons/android-chrome-512x512.png": "14fcca9fe51a7c7dd0677868c75e71e1",
"icons/mstile-150x150.png": "a10f643e979ee5ecd823d284e4ac4416",
"icons/favicon-32x32.png": "7633486ef574dd2057d7520c4ea386c7",
"assets/AssetManifest.json": "91fcd6f2d7d7e412a43ad221422e59c6",
"assets/NOTICES": "fdcfcc0a269033ba716bf48b5f74ac20",
"assets/FontManifest.json": "43f064414315aa0e57bbeccf8705faab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/packages/file_icon/fonts/seti.ttf": "2b67c27356467781d7786c59ca58b34f",
"assets/shaders/ink_sparkle.frag": "4e3ffa145f92ce0d291cb58ef73c79b1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/banner-third.jpg": "ec9a9d0450ce9d2cfb82eb5b0a12f938",
"assets/assets/images/home-stacked-photos.png": "2a890b8257870f910017936ed6c4b386",
"assets/assets/images/medicus-logo-en.png": "6e2af03547ad834582d5aa1fb1e5fa1e",
"assets/assets/images/spis.sastav.jpg": "6f69a433f4341125b2d1ef56efea62ad",
"assets/assets/images/medicus-logo-en.svg": "3ff5a367074bf5a111da07e914e8fcf1",
"assets/assets/images/handshake-second.jpg": "2b8631e1f9a4b626175eae27278a417e",
"assets/assets/images/safety-banner.jpg": "5612a85259c0192cf8590779eebc189c",
"assets/assets/images/handshake-first.jpg": "a68ea3c353ca1a0d0e891d05504c7c8b",
"assets/assets/images/medicus-logo-bg.png": "5a23e21c91aa1d774b86f65a6db8c2b0",
"assets/assets/images/medicus-logo.png": "e561850b98de4c40ac672805f1140584",
"assets/assets/images/udost.STM_.jpg": "e3e80f2727ff9406856cffe4c22784db",
"assets/assets/images/diplom-specialnost.jpg": "648b919fc6d1b089ff536d0a5bd55ba0",
"assets/assets/images/tight-header.jpg": "565926c8bde14ddfd330e903d81f25fa",
"assets/assets/images/medicus-logo.svg": "eafc3766dc4d799d972d78a0989902ad",
"assets/assets/images/big-header.jpg": "a476ad4c93508d2d0cb3f91a77623b7b",
"assets/assets/images/medicus-logo-bg.svg": "50952faf231db0c29a0b11c2804789d8",
"assets/assets/lottie/construction.json": "2d361eaa7dd473983c52ee2bffe395f4",
"assets/assets/documents/ZZBUT-new.doc": "290de429f820a02eb29ac58dce82abcc",
"assets/assets/documents/Zakon-za-zastita-ot-vrednoto-vazdejstvie-na-himichnite-vestestva-i-smesi.doc": "7d8854db106eabc1daac9c25b7d15c1f",
"assets/assets/documents/RD07-2-instruktaj.doc": "27d05d631c135a5225f5a33688597224",
"assets/assets/documents/Zakon-za-integraciq-na-horata-s-uvregdaniq.doc": "05dabf9af64cf6682afda1d402fc0879",
"assets/assets/documents/Nar-15_31-5-99.rtf": "549f7c38d320b989744d7c786778d37a",
"assets/assets/documents/Zakon-za-inspektirane-na-truda.doc": "34f1cf6e3569184320f8c097e5718962",
"assets/assets/documents/Nar-3_28-2-87.rtf": "f49dbcdc21a7d4f21c80da9d74da7186",
"assets/assets/documents/Zakon-za-kontrol-nad-VV-OO-i-BEP.doc": "7b6da28f191891f4528f0e046759baae",
"assets/assets/documents/Zakon-za-GP-transport.doc": "83e8aa573b73eb92ef3228c4a41e2a35",
"assets/assets/documents/KT1.doc": "df98276bec7377ba7061303be70e2a92",
"assets/assets/documents/NAREDBA_3_ot_25_12_2008_STM.rtf": "0e8c8864fc513cdb5db1a8e2588345cf",
"assets/assets/documents/Zzakon-za-zdraveto.doc": "6ba6b679945008f00c261d7cfecd68e2",
"assets/assets/documents/Nar_nam_rab_vreme.rtf": "f3f79e29119cc54320a50248b01f6d94",
"assets/assets/documents/Nar_rab_vreme.doc": "f7ac29f411091a27f51d8d4978d38305",
"assets/assets/documents/Naredba-rabotni-mesta-za-udostoverqvane.doc": "356b45eaafd6ca9357214fe898b5ca91",
"assets/assets/documents/Nar_dop_pl_otpusk.rtf": "052a6b16fca1ee3275f36f5a237817d4",
"assets/assets/documents/Pravila-i-normi-za-pogarna-bezop-pri-eksploataciq-na-obektite-.doc": "eb4b1d4e2662a56fe5f9947a011a2096",
"assets/assets/documents/Nar-5_20-5-06.rtf": "7e31f606dc9f66ac2f62777906b56aa9",
"assets/assets/documents/Zakon-za-tehnicheskite-iziskvaniq-kam-produktite.doc": "543643b4f210d4824cba4d5730e998a3",
"assets/assets/documents/Naredba-8.doc": "374028d2a6722630648403c48af8e2d9",
"assets/assets/fonts/Montserrat-LightItalic.ttf": "e70e5d8d5129f35418fe2cfaa6132c1d",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "c35a5d833fe9bc6cc802a275fd612137",
"assets/assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "9d216a715551da3b92a4a9b0e8994868",
"assets/assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/assets/fonts/Montserrat-ThinItalic.ttf": "59cdce8fbd384a39ab0fd14b9f693de5",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "fca7947b08333e5ffcb80c069755b5c9",
"assets/assets/fonts/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/assets/fonts/OpenSans-Light.ttf": "8ac55d3905f927b83e36d04a7342b839",
"assets/assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/fonts/Montserrat-MediumItalic.ttf": "2e7c02a0a4a5fd318b0625d120ad2033",
"assets/assets/fonts/OpenSans-Italic.ttf": "dda9a792f39932b64e514669ae19f907",
"assets/assets/fonts/Montserrat-BlackItalic.ttf": "a943ff860cf7bda5ce3722cad5c1dc06",
"assets/assets/fonts/OpenSans-MediumItalic.ttf": "2feb877146b4ac522c966c4710a5c6ad",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "233d78d06ba32f4700bf8de9846913f1",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/assets/fonts/OpenSans-LightItalic.ttf": "57c3b3a3c6d31ac9e6ffb8ed77225047",
"assets/assets/fonts/Montserrat-ExtraLightItalic.ttf": "e4d0c1f4d67a7f3d23a1f2f78d24ea57",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/assets/fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/assets/fonts/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/assets/fonts/OpenSans-SemiBoldItalic.ttf": "157518814e76687d9d2dcf32451aa0dd",
"assets/assets/fonts/OpenSans-Medium.ttf": "ab21dae0926dcf5203881d4522ac2a55",
"assets/assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/assets/fonts/Montserrat-Italic.ttf": "761177c558bb3a0084aa85704315b990",
"assets/assets/fonts/OpenSans-ExtraBoldItalic.ttf": "c62aeef30c74135fb49ba79d6f27881d",
"assets/assets/fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"assets/assets/fonts/OpenSans-BoldItalic.ttf": "210de434db54de4a6a73d1cf8604e224",
"assets/assets/fonts/Montserrat-SemiBoldItalic.ttf": "d41c0a341637c2e35ae019730b2d45a5",
"assets/assets/fonts/Montserrat-ExtraBoldItalic.ttf": "e07b3f35e3e0073b2cde4c5a951cc24e",
"browserconfig.xml": "d2c3ec839559c9b7c7638c378d45bca5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
