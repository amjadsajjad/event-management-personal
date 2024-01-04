// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnFD3Tm8JUo10y6TeFNxoHfDz6MV1OFwc",
  authDomain: "react-auth-assignment-aa733.firebaseapp.com",
  projectId: "react-auth-assignment-aa733",
  storageBucket: "react-auth-assignment-aa733.appspot.com",
  messagingSenderId: "68297072243",
  appId: "1:68297072243:web:ae873b4df4dfdcdb0b1406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;