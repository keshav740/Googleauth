import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA1UsbqYy7sXppYuQ7ZMQvz-VNAipCc82E",
  authDomain: "auth-f4841.firebaseapp.com",
  projectId: "auth-f4841",
  storageBucket: "auth-f4841.appspot.com",
  messagingSenderId: "317999712528",
  appId: "1:317999712528:web:8c9820f62eb67dcad13d95",
  measurementId: "G-ELBCLFT6TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;