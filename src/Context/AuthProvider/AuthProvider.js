import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            } else {
                toast.error('Your email is not verified')
            }

            setLoading(false);
        })
    }, [])

    const authInfo = { user, setLoading, emailVerify, updateUserProfile, loading, providerLogin, logOut, createUser, signIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;