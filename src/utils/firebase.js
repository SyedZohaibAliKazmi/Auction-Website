// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  
apiKey: "",
authDomain: "biding-website.firebaseapp.com",
projectId: "biding-website",
storageBucket: "biding-website.appspot.com",
messagingSenderId: "1048574524343",
appId: "1:1048574524343:web:44492e1f6044fe443bc632",
measurementId: "G-78CQRXZZ1E"

 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);
const analytics = getAnalytics(app);

export{auth,db,storageDB,analytics}

