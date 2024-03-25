// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJSZ15_r9mDzFff11UQeQC385wat88brw",
    authDomain: "pwr-sroda-1315.firebaseapp.com",
    projectId: "pwr-sroda-1315",
    storageBucket: "pwr-sroda-1315.appspot.com",
    messagingSenderId: "590932750314",
    appId: "1:590932750314:web:2682d700820eeb36140c93",
    measurementId: "G-PJ9F5EKH80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
