import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-yGSNjq2rdjUjksPqlSgRB5iZjKln3_M",
  authDomain: "coffeeco-81f9d.firebaseapp.com",
  projectId: "coffeeco-81f9d",
  storageBucket: "coffeeco-81f9d.appspot.com",
  messagingSenderId: "208528241730",
  appId: "1:208528241730:web:8d96610031771c16fea9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;