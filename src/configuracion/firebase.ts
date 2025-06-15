import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const configuracionFirebase = {
  apiKey: "AIzaSyBZoHfOXB2RzCtqOTGq0Ru4QYnVCSRuLns",
  authDomain: "destination-wedding-dedf1.firebaseapp.com",
  projectId: "destination-wedding-dedf1",
  storageBucket: "destination-wedding-dedf1.firebasestorage.app",
  messagingSenderId: "82813215875",
  appId: "1:82813215875:web:cd47d0dc0e03129db267b6",
  measurementId: "G-ZBKZ8L0PCR"
};

const app = initializeApp(configuracionFirebase);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const proveedorGoogle = new GoogleAuthProvider();
