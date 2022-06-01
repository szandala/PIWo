import { auth, firestore } from "./init";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
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
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                roles: ["admin", "doctor"]
            });
        }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};



// export const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password);
//         const user = res.user;
//         await setDoc(q, {
//             name: name,
//             authProvider: "emailpassword",
//             email: user.email
//         });
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };



export const logout = () => {
    signOut(auth);
};



// export const logInWithEmailAndPassword = async (email, password) => {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
//     };
