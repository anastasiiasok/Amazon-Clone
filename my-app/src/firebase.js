import firebase from "firebase";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyByRB47WhLTSN7wPDtDl-UHCklZp2_3Fbk",
  authDomain: "clone-ce38b.firebaseapp.com",
  projectId: "clone-ce38b",
  storageBucket: "clone-ce38b.appspot.com",
  messagingSenderId: "68500871309",
  appId: "1:68500871309:web:c1ea72dd2ade72c0c4aac4",
  measurementId: "G-QPTSTV908D",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
