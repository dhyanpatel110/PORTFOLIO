import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD2dU7W18l0ohoer-RarMpuRj56tJqi0xI",
    authDomain: "react-authentication-6c881.firebaseapp.com",
    projectId: "react-authentication-6c881",
    storageBucket: "react-authentication-6c881.appspot.com",
    messagingSenderId: "491766888557",
    appId: "1:491766888557:web:bae3d10e32e0158b116764"
};


let db = null;

export const initializeFirebase = () =>{
    const app = initializeApp(firebaseConfig);
     db = getDatabase(app);
}

export const getDB = () => {
    return db;
};