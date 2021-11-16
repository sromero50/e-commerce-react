import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAJVbCzckD4TYBL3cO0QtVpNgColhNPVRc",
    authDomain: "react-utn-57308.firebaseapp.com",
    projectId: "react-utn-57308",
    storageBucket: "react-utn-57308.appspot.com",
    messagingSenderId: "1061066389219",
    appId: "1:1061066389219:web:8c8581abcc3d730e1f37d6"
  };
  
 
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

export default firebase
