import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (user) => {
        return updateProfile(auth.currentUser, user);
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
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
