import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState({});
    // Create user with email and pass
    const signUpUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    // SignIn with email and pass
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    // Update User
    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }
    // Sign Out user
    const SignOut = () => {
        return signOut(auth)
    }
    // Observe currentuser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => unsubscribe;
    }, [])
    const userInfo = { signUpUser, login, updateUser, SignOut, user }
    return (
        <div>
            <AuthProvider.Provider value={userInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;