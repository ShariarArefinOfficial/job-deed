//import React from 'react';

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, getAuth, onAuthStateChanged } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
       return signInWithPopup(auth, googleProvider)
            
    };

    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
               // const credential = GoogleAuthProvider.credentialFromResult(result);
               // const token = credential.accessToken;
                const user = result.user;
               console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
               // const email = error.customData.email;
               // const credential = GoogleAuthProvider.credentialFromError(error);
               console.log(errorCode,errorMessage)
            });
    };

    const updateUserProfile = (name, photo) => {
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    const logOut =async () => {
        setLoading(true);
       const {data}= await axios.get(`${import.meta.env.VITE_URL}/logOut`,{withCredentials:true})
       console.log(data);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        googleSignIn,
        githubSignIn,
    };





    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;