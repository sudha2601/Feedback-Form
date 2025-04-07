// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb4sKbf2Ybheja56sD4NW5U6iQcp6SOVM",
  authDomain: "feedback-form-b7401.firebaseapp.com",
  projectId: "feedback-form-b7401",
  databaseURL:"https://feedback-form-b7401-default-rtdb.firebaseio.com/",
  storageBucket: "feedback-form-b7401.firebasestorage.app",
  messagingSenderId: "117685069207",
  appId: "1:117685069207:web:35a6cc056fa8a71bff50d2",
  measurementId: "G-B40NYHG5DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;