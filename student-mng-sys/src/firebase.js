import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyD1U0s0Z6rDqL0lx67W2rOLITFjRuoH5OE",
  authDomain: "student-mng-sys.firebaseapp.com",
  projectId: "student-mng-sys",
  storageBucket: "student-mng-sys.appspot.com",
  messagingSenderId: "607398245835",
  appId: "1:607398245835:web:eb537dea47f5d1b41cf24e"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;