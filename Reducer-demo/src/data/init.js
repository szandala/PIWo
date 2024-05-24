// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCReNFYsiSxwXlSUNaLGHRejzM885Lck5g",
  authDomain: "piw-2024-wtorek-p.firebaseapp.com",
  projectId: "piw-2024-wtorek-p",
  storageBucket: "piw-2024-wtorek-p.appspot.com",
  messagingSenderId: "382357402263",
  appId: "1:382357402263:web:f2df138b8d6f1a65a36fd2",
  measurementId: "G-KB4LPJYYFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
