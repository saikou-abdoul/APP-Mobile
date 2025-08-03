// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzG5QsoRBiudogYwM8won5eEyao-nAP9k",
    authDomain: "projectfirebase-cef54.firebaseapp.com",
    projectId: "projectfirebase-cef54",
    storageBucket: "projectfirebase-cef54.firebasestorage.app",
    messagingSenderId: "970935152979",
    appId: "1:970935152979:web:007bb4b02ca347ebc131a6",
    measurementId: "G-2LQ2P9V23S"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const authfirebase = getAuth(app);
export { authfirebase };