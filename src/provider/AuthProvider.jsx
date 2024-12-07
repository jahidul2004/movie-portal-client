import { createContext } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (user) => {
        return updateProfile(auth.currentUser, user);
    }

    const authInfo = {
        createUser,
        updateUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
