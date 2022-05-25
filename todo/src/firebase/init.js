// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvcqdazPdo6E9IK1jtwczQfIQM6LKDEyQ",
  authDomain: "piwerko-75273.firebaseapp.com",
  projectId: "piwerko-75273",
  storageBucket: "piwerko-75273.appspot.com",
  messagingSenderId: "598906876198",
  appId: "1:598906876198:web:243d69a753ab5b6968d1e7",
  measurementId: "G-NYLV47E0J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
