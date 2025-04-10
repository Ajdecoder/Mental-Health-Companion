// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fPNDqlQmgiUjgBNXm5VurVIr3d8f3lw",
  authDomain: "mental-health-companion-be456.firebaseapp.com",
  projectId: "mental-health-companion-be456",
  storageBucket: "mental-health-companion-be456.firebasestorage.app",
  messagingSenderId: "747506795207",
  appId: "1:747506795207:web:dfa496c3b311fb72a4f4e2",
  measurementId: "G-56XL3SX7F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);