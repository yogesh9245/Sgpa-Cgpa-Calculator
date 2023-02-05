// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBzIDz1N0B6sL0DnIlQKks0DFhzkelXcXY",
  authDomain: "sgpa-cgpa-calculator-25f57.firebaseapp.com",
  projectId: "sgpa-cgpa-calculator-25f57",
  storageBucket: "sgpa-cgpa-calculator-25f57.appspot.com",
  messagingSenderId: "369378048463",
  appId: "1:369378048463:web:7d102f8c3d1634fd37faba",
  measurementId: "G-4EEVEYH7YS"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app,auth};