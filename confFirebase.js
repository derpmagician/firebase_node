// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBHVAo1GzV36KYfPRxobCRhbr-YfAkPkiI",
  authDomain: "test-a47d0.firebaseapp.com",
  projectId: "test-a47d0",
  storageBucket: "test-a47d0.appspot.com",
  messagingSenderId: "264855364377",
  appId: "1:264855364377:web:c0b5556debb5925e7c5b88"
// };
});
// Initialize Firebase
// const app = initializeApp(firebaseApp);
const db = getFirestore();

export { db }