import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBikNsCqaoB6WbuL2lu8MAliUBD5iXTdO0",
  authDomain: "chat-gpt-pease.firebaseapp.com",
  projectId: "chat-gpt-pease",
  storageBucket: "chat-gpt-pease.appspot.com",
  messagingSenderId: "670270035750",
  appId: "1:670270035750:web:5b350ec10912c284fe93e7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
