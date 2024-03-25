import { auth } from "./init";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";

const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);

    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    return user;
};

export const logout = () => signOut(auth);
