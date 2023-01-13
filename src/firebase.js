import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDzvXfrsqLc08ywM64ixLgMUSmi4Ig83Es",
    authDomain: "b-chat-94d00.firebaseapp.com",
    projectId: "b-chat-94d00",
    storageBucket: "b-chat-94d00.appspot.com",
    messagingSenderId: "357888034304",
    appId: "1:357888034304:web:992a034540cb2e225bfae5"
}).auth()