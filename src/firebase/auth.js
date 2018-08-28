import { auth } from './firebase';

export const createUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
    auth.signOut();

export const doPasswordRequest = (email) =>
    auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);