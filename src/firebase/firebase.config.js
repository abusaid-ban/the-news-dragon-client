// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC29tILNlNfGk4xmnauqpSl_-sIQ6u1q1Y",
  authDomain: "the-news-dragon-9c308.firebaseapp.com",
  projectId: "the-news-dragon-9c308",
  storageBucket: "the-news-dragon-9c308.appspot.com",
  messagingSenderId: "9319688641",
  appId: "1:9319688641:web:8a53ae611496bab9a5a740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;