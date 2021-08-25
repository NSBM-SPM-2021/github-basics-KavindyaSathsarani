import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBlFiFdCT6wevY12PAuZoZIOtxn0AYFX_4",
    authDomain: "student-management-syste-1db54.firebaseapp.com",
    projectId: "student-management-syste-1db54",
    storageBucket: "student-management-syste-1db54.appspot.com",
    messagingSenderId: "185507510618",
    appId: "1:185507510618:web:ec66a30c343ea36d985b63"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;