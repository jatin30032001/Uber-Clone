
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhQa9H-lHTCiuigNi340No0qBixM2iP8o",
  authDomain: "uber-next-clone-a38a4.firebaseapp.com",
  projectId: "uber-next-clone-a38a4",
  storageBucket: "uber-next-clone-a38a4.appspot.com",
  messagingSenderId: "870402927880",
  appId: "1:870402927880:web:7bcb87aa2c48f25aefd0bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export {app, provider, auth}