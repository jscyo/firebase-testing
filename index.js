// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiCuKgdcTnsuYSH039vL3ZeR7jOAfzNsY",
  authDomain: "test-3385e.firebaseapp.com",
  projectId: "test-3385e",
  storageBucket: "test-3385e.appspot.com",
  messagingSenderId: "219894017893",
  appId: "1:219894017893:web:8c2e2c2c45f7326f21fb8c",
  measurementId: "G-3R1MK6KENN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);