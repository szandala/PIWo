import { auth, firestore } from "./init";
import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
} from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if (!docs.exists()) {

            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                roles: ["admin", "dog walker", "jedi"]
            });
        }

    } catch (err) {
        console.error({ err });
        alert(err.message);
    }
};

export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });
        return () => unsubscribe();
    }, []);

    return user;
};

export const logout = () => {
    signOut(auth);
};
