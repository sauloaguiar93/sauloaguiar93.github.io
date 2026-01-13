import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  runTransaction,
  serverTimestamp,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export {
  getFirestore,
  collection,
  getDocs,
  doc,
  runTransaction,
  serverTimestamp,
  addDoc
};

const firebaseConfig = {
  apiKey: "AIzaSyB15HNHiAVv00UnEsIl223s9upuVAIwjJU",
  authDomain: "myproject-f18ca.firebaseapp.com",
  projectId: "myproject-f18ca",
  storageBucket: "myproject-f18ca.firebasestorage.app",
  messagingSenderId: "939701687210",
  appId: "1:939701687210:web:880bb1bb8b77f08d1c91d3"
};


initializeApp(firebaseConfig);
