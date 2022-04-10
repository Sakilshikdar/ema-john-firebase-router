// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR8GTqAuPTVkUjmjOE6Eyf0T83Q5R85HY",
  authDomain: "ema-john-simple-8ac21.firebaseapp.com",
  projectId: "ema-john-simple-8ac21",
  storageBucket: "ema-john-simple-8ac21.appspot.com",
  messagingSenderId: "128057310584",
  appId: "1:128057310584:web:0d390f8d01f0e839fedc8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;