import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyBUCoqr2VY3mqo_o-7XcQka1s-4MSvmW0U",
  authDomain: "admindev-60738.firebaseapp.com",
  projectId: "admindev-60738",
  storageBucket: "admindev-60738.appspot.com",
  messagingSenderId: "670659321473",
  appId: "1:670659321473:web:e22e6d38fc061f13fbb780"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);