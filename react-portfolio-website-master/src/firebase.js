
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };
const firebaseConfig = {
  apiKey: "AIzaSyBIkue29XFEb8Np1uoHtRrC91Ga4vVVi8U",
  authDomain: "personalportfolio-c05c3.firebaseapp.com",
  projectId: "personalportfolio-c05c3",
  storageBucket: "personalportfolio-c05c3.appspot.com",
  messagingSenderId: "799012179178",
  appId: "1:799012179178:web:ef6a5f8d19b04655021b93",
  measurementId: "G-Y8J6S3DLVN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);