import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCcQklTe87b4Ic7PIhgApZNKOCHCCKMF7I",
    authDomain: "react-firechat-21f32.firebaseapp.com",
    projectId: "react-firechat-21f32",
    storageBucket: "react-firechat-21f32.appspot.com",
    messagingSenderId: "782431911949",
    appId: "1:782431911949:web:13ff155900fde2dbe65544",
    measurementId: "G-XN8NM81Q28"
}

const firebaseApp=firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()
const db=firebaseApp.firestore()


export {auth, db}