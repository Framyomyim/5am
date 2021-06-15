import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDrq30nAlvVSFBdrano0rHztjX79LVYNuM",
    authDomain: "am-social-4e18e.firebaseapp.com",
    projectId: "am-social-4e18e",
    storageBucket: "am-social-4e18e.appspot.com",
    messagingSenderId: "670015136465",
    appId: "1:670015136465:web:dcd7e9cec93960ea57dbf0",
    measurementId: "G-CVMWJ8L9WB"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;