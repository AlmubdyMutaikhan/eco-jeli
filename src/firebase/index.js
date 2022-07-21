import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPGRvoQ-yLqO8ZqGD-RvXpw2VPYv7P5Qs",
    authDomain: "bee-volunteers.firebaseapp.com",
    projectId: "bee-volunteers",
    storageBucket: "bee-volunteers.appspot.com",
    messagingSenderId: "229503957887",
    appId: "1:229503957887:web:89796667b1721b30e4384a",
    measurementId: "G-MVRY6S9284"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
