// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZl4ZVnhaWNFucN8haqTNjijrmtrEcRoc",
  authDomain: "car-service-997bf.firebaseapp.com",
  projectId: "car-service-997bf",
  storageBucket: "car-service-997bf.appspot.com",
  messagingSenderId: "294476251060",
  appId: "1:294476251060:web:a73dbc77b3c77c3e3ebce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;