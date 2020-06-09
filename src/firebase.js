import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPFwcO5W4cSdCIBU4zYSWd2Hsi52CLNQs",
  authDomain: "recodedfacebook.firebaseapp.com",
  databaseURL: "https://recodedfacebook.firebaseio.com",
  projectId: "recodedfacebook",
  storageBucket: "recodedfacebook.appspot.com",
  messagingSenderId: "792119652578",
  appId: "1:792119652578:web:6f456d9c56b5bf6c876ebb",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
