// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBto8tICxkvw_yP5m8FejQUE9AiD19Tl0",
  authDomain: "auction-website-731cf.firebaseapp.com",
  projectId: "auction-website-731cf",
  storageBucket: "auction-website-731cf.appspot.com",
  messagingSenderId: "465419192466",
  appId: "1:465419192466:web:b34f7b28502f2c88613e4b",
  measurementId: "G-L5R5B17CV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);
const analytics = getAnalytics(app);

export{auth,db,storageDB,analytics}