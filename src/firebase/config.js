import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm3g6DIMfdV_ssDHhxzlnK09SrVmcKvW8",
  authDomain: "blog-site-7bcd9.firebaseapp.com",
  projectId: "blog-site-7bcd9",
  storageBucket: "blog-site-7bcd9.appspot.com",
  messagingSenderId: "102283755825",
  appId: "1:102283755825:web:be464a3bd2e62cf51f3010",
  measurementId: "G-HXVBSDEN3T",
};
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
