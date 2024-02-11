// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDorow3Xh04A3A5toQoGbfqr6ta1DoV94Q",
  authDomain: "kashvi-s-portfolio-aafe9.firebaseapp.com",
  projectId: "kashvi-s-portfolio-aafe9",
  storageBucket: "kashvi-s-portfolio-aafe9.appspot.com",
  messagingSenderId: "576440229518",
  appId: "1:576440229518:web:311187b4cf6ffde64273df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);

