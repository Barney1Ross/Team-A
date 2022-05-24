import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAynfSs3ux_d0BNdpOARdWmKaA1KqV-2Vw",
  authDomain: "instagram-clone-react-50eae.firebaseapp.com",
  projectId: "instagram-clone-react-50eae",
  storageBucket: "instagram-clone-react-50eae.appspot.com",
  messagingSenderId: "232595766192",
  appId: "1:232595766192:web:28a45c349158670b19f475",
  measurementId: "G-YKSRSJ9851"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };