// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuO0RqPKn2eAFST8UazrQEQz5OBW8o8X4",
    authDomain: "piw-pwr.firebaseapp.com",
    projectId: "piw-pwr",
    storageBucket: "piw-pwr.appspot.com",
    messagingSenderId: "110551109768",
    appId: "1:110551109768:web:0adc392f256c091301cf3d",
    measurementId: "G-RMFJL1Y33D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
