import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDUAEScC0oiXdln9pk5G4ehB4GOUql1eTg",
  authDomain: "tabletop-expansion.firebaseapp.com",
  projectId: "tabletop-expansion",
  storageBucket: "tabletop-expansion.appspot.com",
  messagingSenderId: "818162262556",
  appId: "1:818162262556:web:7457985b07f6f9fb04f5d9",
  measurementId: "G-0LQV2XLX15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export default {db, auth, analytics}
