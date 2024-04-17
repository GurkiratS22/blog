// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-6a1ee.firebaseapp.com",
  projectId: "blog-6a1ee",
  storageBucket: "blog-6a1ee.appspot.com",
  messagingSenderId: "240199429710",
  appId: "1:240199429710:web:3b628b4496dbd3bbabdd1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);