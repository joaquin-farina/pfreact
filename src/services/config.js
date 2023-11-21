import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "saga-comics.firebaseapp.com",
  projectId: "saga-comics",
  storageBucket: "saga-comics.appspot.com",
  messagingSenderId: "623211828553",
  appId: "1:623211828553:web:ca786b4e72af81a0a37698"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//"AIzaSyCg0LBpIZjA85EXGHwRPXYw6uDXV4URRYc"