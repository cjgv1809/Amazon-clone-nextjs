import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAI721-Hz5yrSrbDcqgEl0i9LBUyq3xHk",
  authDomain: "clone-nextjs-ac9e1.firebaseapp.com",
  projectId: "clone-nextjs-ac9e1",
  storageBucket: "clone-nextjs-ac9e1.appspot.com",
  messagingSenderId: "1084313490925",
  appId: "1:1084313490925:web:e0c7d6dd83f1f4409d83e4",
  measurementId: "G-8B2CYB8PZJ",
};

// Checking if it is already initialized
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
