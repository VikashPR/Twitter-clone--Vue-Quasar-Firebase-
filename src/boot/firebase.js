import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAyWk43-e6aSWBxyUy3kLjrXRpDDHnh9Cc",
  authDomain: "tweetkar-6e3cf.firebaseapp.com",
  projectId: "tweetkar-6e3cf",
  storageBucket: "tweetkar-6e3cf.appspot.com",
  messagingSenderId: "393344588939",
  appId: "1:393344588939:web:4d12ab1aff129a8ea7088e"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebstore
const db = firebaseApp.firestore()

export {
  db,
};
