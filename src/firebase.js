import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB9LfoOl-Mmmpg75VkKu-DXAW2vuny4VbY",
  authDomain: "think-piece-5b529.firebaseapp.com",
  databaseURL: "https://think-piece-5b529.firebaseio.com",
  projectId: "think-piece-5b529",
  storageBucket: "gs://think-piece-5b529.appspot.com",
  messagingSenderId: "248388533854",
  appId: "1:248388533854:web:b9306f7e96b6b3e1153ecf",
  measurementId: "G-YTB5XQDX46"
};

firebase.initializeApp(config);

window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

const settings = {};
firestore.settings(settings);

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async user => {
  if (!user) return;

  // get a reference to where in DB user doc might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // go and fetch the document from that location
  const snapshot = await userRef.get();

  /* eslint-disable no-undef */
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return getUserDocument(user.uid);
};
/* eslint-enable no-undef */
export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};
export default firebase;
