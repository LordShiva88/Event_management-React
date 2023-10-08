import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvBocauEN1JMSqbxfp3mv0FBY5uUOu-IM",
  authDomain: "login-form-1bde7.firebaseapp.com",
  projectId: "login-form-1bde7",
  storageBucket: "login-form-1bde7.appspot.com",
  messagingSenderId: "370608956840",
  appId: "1:370608956840:web:ae73ab6c9d23dd083d299d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
