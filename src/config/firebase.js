import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBmJMZB_kDW3woqxnSyhNiQk3b5QrX0TSA",
    authDomain: "topnote-3baa4.firebaseapp.com",
    projectId: "topnote-3baa4",
    storageBucket: "topnote-3baa4.appspot.com",
    messagingSenderId: "625141872998",
    appId: "1:625141872998:web:981f32055efa6856b030a7",
databaseURL:'https://topnote-3baa4-default-rtdb.firebaseio.com/'  
};
const fire=firebase.initializeApp(firebaseConfig);
export default fire;