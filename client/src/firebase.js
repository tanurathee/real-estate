// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-dc5aa.firebaseapp.com",
  projectId: "real-estate-dc5aa",
  storageBucket: "real-estate-dc5aa.appspot.com",
  messagingSenderId: "371342988114",
  appId: "1:371342988114:web:3e689b280a12b7f2aaa08b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);