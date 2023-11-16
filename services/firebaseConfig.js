import {initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP-wArDr-7UzqZ6lvrZlkZXJ7X9GBHO9o",
  authDomain: "cadeolixo.firebaseapp.com",
  projectId: "cadeolixo",
  storageBucket: "cadeolixo.appspot.com",
  messagingSenderId: "171769939527",
  appId: "1:171769939527:web:e715a9c47d95f13fba1362",
  measurementId: "G-3J0EKLNM0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
}