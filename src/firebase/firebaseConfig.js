import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIDeWUSogfejC-he1XIm2wWF37kpNjudM",
    authDomain: "cotizacion-1d409.firebaseapp.com",
    projectId: "cotizacion-1d409",
    storageBucket: "cotizacion-1d409.appspot.com",
    messagingSenderId: "208423686326",
    appId: "1:208423686326:web:7833a235df94384e7ad617",
};

initializeApp(firebaseConfig);
export const db = getFirestore();