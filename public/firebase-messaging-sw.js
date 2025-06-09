importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.3.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyApZgQGZ6BQPxqEOMFKGodEJdPZE3uc-QY",
    authDomain: "mefo-b89a8.firebaseapp.com",
    projectId: "mefo-b89a8",
    storageBucket: "mefo-b89a8.firebasestorage.app",
    messagingSenderId: "624785152688",
    appId: "1:624785152688:web:4c609ad12d34726e2b3975"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    // console.log('[firebase-messaging-sw.js] 백그라운드 메시지 수신:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});