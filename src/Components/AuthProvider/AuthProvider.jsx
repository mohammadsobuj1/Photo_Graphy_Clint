/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import axios from 'axios';




const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [reload, setReload] = useState(null)


    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const logIn = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }


    const googlelogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const changeName = (user, name, file) => {
        return updateProfile(user, {
            displayName: name, photoURL: file
        })

    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, recentuser => {
            setUser(recentuser)

            if (recentuser) {
                axios.post('http://localhost:5000/jwt', { email: recentuser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoader(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

         
        })
        return () => {
            unsubscribe()
        }
    }, [reload])

    const authInfo = {
        user,
        loader,
        setReload,
        createUser,
        changeName,
        logIn,
        logOut,
        googlelogIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;