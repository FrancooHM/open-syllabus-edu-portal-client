"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","ec72c2a18c8149bd97dea799f3dbdd24"],["static/css/main.bf862b9a.css","6cc207cb01831298bcbb3c14ab90b79b"],["static/js/0.28fbf2fb.chunk.js","2bd59c6de671b5a0c259bb05bb7992b5"],["static/js/1.403ec950.chunk.js","569d86cf5f994b4c6c62f352e8da8f9e"],["static/js/2.caac7e0b.chunk.js","00db4fd18b0d085c65ce2943e2adf625"],["static/js/main.f055d687.js","33c3a40eddbb5e4f7db4922bc96ea4c3"],["static/media/186081425f588a894cd7876472413453.16afd447.woff","16afd447a67b92ca64a49172f6be5f67"],["static/media/186081425f588a894cd7876472413453.18608142.ttf","186081425f588a894cd7876472413453"],["static/media/186081425f588a894cd7876472413453.696a92c6.eot","696a92c686dd0376965db4ec353a38ac"],["static/media/186081425f588a894cd7876472413453.aa959263.svg","aa959263b33d8ec0f350fc26a1433263"],["static/media/186081425f588a894cd7876472413453.e4abb3fa.woff2","e4abb3fa7c1b48bab0fde2f1ebb41abf"],["static/media/5a756f3aa8aefd19b0eda8519770223b.19990466.eot","199904663513f6370cfe03d13b7d582d"],["static/media/5a756f3aa8aefd19b0eda8519770223b.5a756f3a.ttf","5a756f3aa8aefd19b0eda8519770223b"],["static/media/5a756f3aa8aefd19b0eda8519770223b.9e8ee175.woff","9e8ee175f2552ed80d08faa265a8b003"],["static/media/5a756f3aa8aefd19b0eda8519770223b.a3cd5033.woff2","a3cd50332ab1bd575b2ca1e9a24dbdca"],["static/media/5a756f3aa8aefd19b0eda8519770223b.ebbac08a.svg","ebbac08afbc3ee29f3dbf5bc8a5aee43"],["static/media/5e7aff76d1dc425b15ad9e364074e5e2.0b98f29b.woff","0b98f29b142132de75154f1f5bcc26bc"],["static/media/5e7aff76d1dc425b15ad9e364074e5e2.26cc866e.svg","26cc866e1910c4d3156c375296ee45ab"],["static/media/5e7aff76d1dc425b15ad9e364074e5e2.477b2b6f.eot","477b2b6f96421b94f81122e9934e7ea1"],["static/media/5e7aff76d1dc425b15ad9e364074e5e2.5e7aff76.ttf","5e7aff76d1dc425b15ad9e364074e5e2"],["static/media/5e7aff76d1dc425b15ad9e364074e5e2.9a2796a6.woff2","9a2796a6e908ebfe2dd59825c6772d3f"],["static/media/7ff3a37e1e7b7ffa2fd8845f7351d0bc.3ffc16a8.eot","3ffc16a84eb60f08a4fb3cf47e14ddbc"],["static/media/7ff3a37e1e7b7ffa2fd8845f7351d0bc.596936d4.woff","596936d4c0e7b797a8d1fb16c246e7b9"],["static/media/7ff3a37e1e7b7ffa2fd8845f7351d0bc.67896fc4.woff2","67896fc4e43b3f277a99903ea79c5162"],["static/media/7ff3a37e1e7b7ffa2fd8845f7351d0bc.7a4778e8.svg","7a4778e8494f1589ce64eba8076601ed"],["static/media/7ff3a37e1e7b7ffa2fd8845f7351d0bc.7ff3a37e.ttf","7ff3a37e1e7b7ffa2fd8845f7351d0bc"],["static/media/parallax.d4b5510b.png","d4b5510b93b404d401641a855dde6910"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var f=new URL(e);return c&&f.pathname.match(c)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),f=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),f]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});