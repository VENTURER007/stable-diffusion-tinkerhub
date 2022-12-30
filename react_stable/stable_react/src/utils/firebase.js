// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJunwRcIl6awsznEXAW1yMorcImx16VZ0",
  authDomain: "stable-diffusion-tinkerhub.firebaseapp.com",
  projectId: "stable-diffusion-tinkerhub",
  storageBucket: "stable-diffusion-tinkerhub.appspot.com",
  messagingSenderId: "395331049756",
  appId: "1:395331049756:web:b9890db4e3caaae2e242d9",
  measurementId: "G-HQNMLRLVTY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);