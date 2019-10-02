import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9LfoOl-Mmmpg75VkKu-DXAW2vuny4VbY",
  authDomain: "think-piece-5b529.firebaseapp.com",
  databaseURL: "https://think-piece-5b529.firebaseio.com",
  projectId: "think-piece-5b529",
  storageBucket: "",
  messagingSenderId: "248388533854",
  appId: "1:248388533854:web:b9306f7e96b6b3e1153ecf",
  measurementId: "G-YTB5XQDX46"
};

firebase.initializeApp(config);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const settings = {};
firestore.settings(settings);

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
