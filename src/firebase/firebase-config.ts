import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWmbmSPty39kVMRN9Df5DHWUGUjhkiZJs",
  authDomain: "forms-35ede.firebaseapp.com",
  databaseURL: "https://forms-35ede-default-rtdb.firebaseio.com",
  projectId: "forms-35ede",
  storageBucket: "forms-35ede.appspot.com",
  messagingSenderId: "1071939885062",
  appId: "1:1071939885062:web:23cc5f7d4c997a028f4b87"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);