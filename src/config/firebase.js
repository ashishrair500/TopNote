import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore" //to handle files
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey:  import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
databaseURL:'https://topnote-3baa4-default-rtdb.firebaseio.com/'  
};
const fire=firebase.initializeApp(firebaseConfig);

export default fire;