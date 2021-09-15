/// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
//import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoaU9ADHM-L3Xc5eFIJoatAWVHHVqhQao",
  authDomain: "cook-that-64c7f.firebaseapp.com",
  projectId: "cook-that-64c7f",
  storageBucket: "cook-that-64c7f.appspot.com",
  messagingSenderId: "378513302928",
  appId: "1:378513302928:web:c82e9e558750095877bf15"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()

export const db = firebase.firestore()
export const auth = firebase.auth()