// import firebase from "firebase";
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyApWZkZSJZx7lg85-Psylb7X332udPQ1-k",
  authDomain: "snapchat-clone-cf449.firebaseapp.com",
  projectId: "snapchat-clone-cf449",
  storageBucket: "snapchat-clone-cf449.appspot.com",
  messagingSenderId: "254402284363",
  appId: "1:254402284363:web:a1b9e4f6b579f86dc4b6ce"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth =firebase.auth();
const storage=firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,storage,provider};