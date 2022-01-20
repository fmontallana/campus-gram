import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDzODopb6XYq2BcWEQdJ_vliV-vh71L08U",
  authDomain: "campus-gram.firebaseapp.com",
  projectId: "campus-gram",
  storageBucket: "campus-gram.appspot.com",
  messagingSenderId: "877651639656",
  appId: "1:877651639656:web:3d2b93584c3697cd27aadd",
  measurementId: "G-KBGCT34HB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)