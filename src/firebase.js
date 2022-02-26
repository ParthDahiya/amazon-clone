// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCDpN9uHYe5XUSCNbROVH8RFcffar2YWeo",
    authDomain: "challenge-93819.firebaseapp.com",
    projectId: "challenge-93819",
    storageBucket: "challenge-93819.appspot.com",
    messagingSenderId: "235508629683",
    appId: "1:235508629683:web:742bf1521341bbfcf1b0c6",
    measurementId: "G-YGBHLL9GG9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};