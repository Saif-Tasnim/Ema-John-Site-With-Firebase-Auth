// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4AOfYR09Z5qD7s6FVL6i3CYPJlsWhIeU",
  authDomain: "ema-john-site-fb-auth.firebaseapp.com",
  projectId: "ema-john-site-fb-auth",
  storageBucket: "ema-john-site-fb-auth.appspot.com",
  messagingSenderId: "73919805678",
  appId: "1:73919805678:web:721e8b696caa8258541bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;