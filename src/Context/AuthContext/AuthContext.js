import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    // Create user with email and pass
    const signUpUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    // SignUp With Google
    const SignUpGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // SignIn with email and pass
    const login = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }
    // Update User
    const updateUser = userInfo => {
        return updateProfile(auth.currentUser, userInfo)
    }
    // Sign Out user
    const SignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Observe currentuser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => unsubscribe;
    }, [])
    const userInfo = { signUpUser, SignUpGoogle, login, updateUser, SignOut, user, loading }
    return (
        <div>
            <AuthProvider.Provider value={userInfo}>
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;