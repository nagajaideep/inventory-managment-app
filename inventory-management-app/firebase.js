// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Corrected function name

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf-gpKvOvBYNWB0haWLlDXf7TiCFRRJbc",
  authDomain: "inventory-managment-ebc4f.firebaseapp.com",
  projectId: "inventory-managment-ebc4f",
  storageBucket: "inventory-managment-ebc4f.appspot.com",
  messagingSenderId: "116336716349",
  appId: "1:116336716349:web:0c13d7e5e2da16797f5854",
  measurementId: "G-ZY09L2L01D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Corrected variable name

export { firestore }; // Export corrected variable
