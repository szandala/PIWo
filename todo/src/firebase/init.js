// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8IIs6VKxwJQHPkdsbbdYpgUpuqaLDBDo",
    authDomain: "bazinga-c9364.firebaseapp.com",
    projectId: "bazinga-c9364",
    storageBucket: "bazinga-c9364.appspot.com",
    messagingSenderId: "724366926944",
    appId: "1:724366926944:web:911c7398c2c0eefc77cf05",
    measurementId: "G-J19KRNCENZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
