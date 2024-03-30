import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBahsKNz8yth-rvRiNWB99XRxzxHPvqE9I",
  authDomain: "saalve-a94ed.firebaseapp.com",
  projectId: "saalve-a94ed",
  storageBucket: "saalve-a94ed.appspot.com",
  messagingSenderId: "286991439140",
  appId: "1:286991439140:web:f486348e137b74a03b4fb1",
  measurementId: "G-LFR8CNZZ52"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export { app , auth , db };