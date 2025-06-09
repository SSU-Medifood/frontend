import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyApZgQGZ6BQPxqEOMFKGodEJdPZE3uc-QY",
    authDomain: "mefo-b89a8.firebaseapp.com",
    projectId: "mefo-b89a8",
    storageBucket: "mefo-b89a8.firebasestorage.app",
    messagingSenderId: "624785152688",
    appId: "1:624785152688:web:4c609ad12d34726e2b3975",
    measurementId: "G-1W4Z5FCCLK"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 푸시 알림에 필요한 messaging 객체 export
export const messaging = getMessaging(app);