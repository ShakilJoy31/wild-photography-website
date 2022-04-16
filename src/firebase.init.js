// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4qcJD_INr6NX6HPbhzY-sKPN9z6dkfQg",
  authDomain: "wild-photography-world.firebaseapp.com",
  projectId: "wild-photography-world",
  storageBucket: "wild-photography-world.appspot.com",
  messagingSenderId: "129020173334",
  appId: "1:129020173334:web:f6ad986f2e51f152cf2937"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth; 