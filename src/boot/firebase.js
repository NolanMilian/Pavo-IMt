import firebase from 'firebase';
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUAEScC0oiXdln9pk5G4ehB4GOUql1eTg",
  authDomain: "tabletop-expansion.firebaseapp.com",
  projectId: "tabletop-expansion",
  storageBucket: "tabletop-expansion.appspot.com",
  messagingSenderId: "818162262556",
  appId: "1:818162262556:web:7457985b07f6f9fb04f5d9",
  measurementId: "G-0LQV2XLX15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const analytics = firebase.analytics();

export default {db, auth, storage, analytics}
