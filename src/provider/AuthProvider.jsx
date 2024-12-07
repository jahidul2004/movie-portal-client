import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (user) => {
        return updateProfile(auth.currentUser, user);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                console.log("User is logged out");
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        updateUser,
        user,
        setUser,
        loginUser,
        logOut,
        loginWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
