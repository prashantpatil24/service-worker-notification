
console.log('4. service worker loaded...');

//The browser downloads the JavaScript file, installs the Service Worker, 
//and triggers the install event. You can use the install event to pre-cache any important and long-lived files, 
//such as CSS files, JavaScript files, logo images, offline pages, and so on from your website.
self.addEventListener("install", function (event) {
    console.log("WORKER: install event in progress.");
});

//The Service Worker is activated, which triggers the activate event. Use this event to clean up outdated caches.
self.addEventListener("activate", event => {
    console.log('WORKER: activate event in progress.');
});

//The Service Worker is ready to run when the page is refreshed or when the user goes to a new page on the site. 
//If you want to run the Service Worker without waiting, use the self.skipWaiting() 
//method during the install event, as follows:
self.addEventListener("install", event => {
    self.skipWaiting();
    console.log("WORKER: skipWaiting event in progress.");
});

//The fetch event runs every time the browser attempts to access 
//content within the scope of the Service Worker.
self.addEventListener("fetch", event => {
    console.log('WORKER: Fetching', event.request);
});


//Push notifications can prompt users to re-engage with your application after time has elapsed.
self.addEventListener("push", event => {
    //data received from server 
    const data = event.data.json();
    console.log('5. service worker loaded...');
   // event.waitUntil(
        self.registration.showNotification(data.title, data.options)
     //   );
    
});

self.addEventListener('offline', function(e) { console.log('offline'); });

self.addEventListener('online', function(e) { console.log('online'); });
