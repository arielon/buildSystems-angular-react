import * as firebase from "firebase/app";
import "firebase/auth";

const appAuth = firebase.initializeApp({
    apiKey: "AIzaSyBDtABnRxJI78RIWEc4Qsb_CA5-c2vQobM",
    authDomain: "tienda-auth.firebaseapp.com",
    databaseURL: "https://tienda-auth.firebaseio.com",
    projectId: "tienda-auth",
    storageBucket: "tienda-auth.appspot.com",
    messagingSenderId: "6693868765",
    appId: "1:6693868765:web:67eb1cc8289fc67d887734"
})

export default appAuth;
