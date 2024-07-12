// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn4OKiaFxYGIofbD-kr0i4VF6Y4WDyd5Y",
  authDomain: "game-2b2ff.firebaseapp.com",
  projectId: "game-2b2ff",
  storageBucket: "game-2b2ff.appspot.com",
  messagingSenderId: "429145457202",
  appId: "1:429145457202:web:9ff0a819c45420abba322b",
  measurementId: "G-SSYESQ7XSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };