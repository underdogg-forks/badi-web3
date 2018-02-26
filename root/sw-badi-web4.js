console.log('loading workbox')
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

if (workbox) {
    workbox.setConfig({ debug: false });
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.warn);

    workbox.skipWaiting();

    console.log(`Yay! Workbox is loaded 🎉`);

    // if (location.hostname === 'localhost') {
    //     console.log('Not caching on localhost')
    // } else {

    workbox.routing.registerRoute(
        new RegExp('.*'),
        workbox.strategies.networkFirst()
    );


    workbox.googleAnalytics.initialize();

    // Shows logs, warnings and errors.
    // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.log);

    // Show warnings and errors.
    //workbox.core.setLogLevel(workbox.core.LOG_LEVELS.warn);


    // }

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '201027632116'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('Received background message ', payload);
    // Customize notification here
});
