// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH51BSyYRktrbszaEXfcF_qK76wrmOwG0",
    authDomain: "children-day-dd47d.firebaseapp.com",
    projectId: "children-day-dd47d",
    storageBucket: "children-day-dd47d.appspot.com",
    messagingSenderId: "286312742858",
    appId: "1:286312742858:web:344f6f84d04a6af4375933",
    measurementId: "G-EBSJ58TW2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
