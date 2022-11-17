import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// process.env.FIREBASE_API_KEY
const firebaseConfig = {
  apiKey:  "AIzaSyBx0VI0U7Erk4a17STTuyrMznu8g6ZwyLQ",
  authDomain: "todo-app-abafb.firebaseapp.com",
  projectId: "todo-app-abafb",
  storageBucket: "todo-app-abafb.appspot.com",
  messagingSenderId: "106821637139",
  appId: "1:106821637139:web:6f74558bd313a4a3961be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

