// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnt0S2KvMAHPGF2JVA2faIBLTD8GSeUHk",
  authDomain: "chef-finder-d54c0.firebaseapp.com",
  projectId: "chef-finder-d54c0",
  storageBucket: "chef-finder-d54c0.appspot.com",
  messagingSenderId: "363688234431",
  appId: "1:363688234431:web:9154ff2ef2985a8f76650a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;