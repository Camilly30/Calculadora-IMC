let cacheName = "my-first-pwa";
let filesToCache = ["/","/index.html", "/truco.html","/css/css.css","/css/truco.css","/js/imc.js","/js/truco.js"];

self.addEventListener("install",(e) => {
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);

        })
    );
});

self.addEventListener("fetch",(e)=>{
    e.respondWith(
        caches.match(e.request).then((response) =>{
            return response || fetch(e.request);

        })
    );
});


