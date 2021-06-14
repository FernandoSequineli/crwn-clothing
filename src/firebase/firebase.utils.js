import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhYnjt_UrE4fSBDN8LPG8D0vbG6QYZ7Kw",
  authDomain: "crwn-db-f6bc1.firebaseapp.com",
  projectId: "crwn-db-f6bc1",
  storageBucket: "crwn-db-f6bc1.appspot.com",
  messagingSenderId: "1085199997643",
  appId: "1:1085199997643:web:21d26dc7039b1fc5bfd94e",
  measurementId: "G-S7ZSMYT8PG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
