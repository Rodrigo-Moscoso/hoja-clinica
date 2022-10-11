// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXsh07rKHV35qNG33kdf5R5wKA4lrddRQ",
  authDomain: "laboratorio-hoja-clinica.firebaseapp.com",
  projectId: "laboratorio-hoja-clinica",
  storageBucket: "laboratorio-hoja-clinica.appspot.com",
  messagingSenderId: "63872722977",
  appId: "1:63872722977:web:5440e03874893dc46bdb60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
