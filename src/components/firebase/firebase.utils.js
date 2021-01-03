import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const config ={
        apiKey: "AIzaSyA0GuwG7z0bT_EeQXzwUeuDNSSfab3sGdo",
        authDomain: "crown-db-114f8.firebaseapp.com",
        projectId: "crown-db-114f8",
        storageBucket: "crown-db-114f8.appspot.com",
        messagingSenderId: "317450931186",
        appId: "1:317450931186:web:1c115b3b6e62f67affb96b",
        measurementId: "G-RYGRMGLG23"
      };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:`select_account`});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;