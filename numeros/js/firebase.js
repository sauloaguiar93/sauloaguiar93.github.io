import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB15HNHiAVv00UnEsIl223s9upuVAIwjJU",
  authDomain: "myproject-f18ca.firebaseapp.com",
  projectId: "myproject-f18ca",
  storageBucket: "myproject-f18ca.firebasestorage.app",
  messagingSenderId: "939701687210",
  appId: "1:939701687210:web:880bb1bb8b77f08d1c91d3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
