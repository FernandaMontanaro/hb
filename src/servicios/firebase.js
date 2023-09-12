import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA6aVsBftrVZuLo_if0uAJtShEDpRDhNKY",
  authDomain: "proyecto4-happy-burger.firebaseapp.com",
  projectId: "proyecto4-happy-burger",
  storageBucket: "proyecto4-happy-burger.appspot.com",
  messagingSenderId: "235630114192",
  appId: "1:235630114192:web:091514eaea7f30bc5bef15",
  measurementId: "G-XP7EXMF9J1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;