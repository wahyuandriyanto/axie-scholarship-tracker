import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from "react-firebase-hooks/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDtX2UUDmdsb96D0XEvK9cYdodQmxBFDeM",
    authDomain: "axie-infinity-tracker-75b78.firebaseapp.com",
    projectId: "axie-infinity-tracker-75b78",
    storageBucket: "axie-infinity-tracker-75b78.appspot.com",
    messagingSenderId: "924070901063",
    appId: "1:924070901063:web:3d3cb564c4522989708862"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection("users").add({
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const AddRonin = async (ronin) => {
    const [user] = useAuthState(auth);
    try {
        await db.collection("ronin").add({
            uid: user?.uid,
            ronin
        })
    } catch (err) {
        console.log(err);
        alert(err.message);
    }
}
const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const logout = () => {
    auth.signOut();
};
export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    AddRonin,
    sendPasswordResetEmail,
    logout,
};