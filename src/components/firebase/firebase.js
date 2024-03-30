import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8HzZWOv8jRsnPHoXB49oIZF1jDkrSwJc",
  authDomain: "saalve-a460d.firebaseapp.com",
  projectId: "saalve-a460d",
  storageBucket: "saalve-a460d.appspot.com",
  messagingSenderId: "729058644368",
  appId: "1:729058644368:web:736e1b46226f08c8722315",
  measurementId: "G-747D8V4V0M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export { app , auth , db };