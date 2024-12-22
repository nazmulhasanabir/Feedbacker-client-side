import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/Firebase.init';


const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null)
    const [loading , setLoading  ] = useState(true)

    const  createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password )
    }
    const signInUser = (email , password ) => {
        setLoading(true)
        return  signInWithEmailAndPassword(auth , email, password)
    }

    const signOutUser = ()=> {
        setLoading(true)
        return signOut(auth)
    }


    useEffect( () => {
     const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe
        }
    }, [])
    const UpdateUserProfile = (updateData) => {
        console.log(updateData)
        return updateProfile(auth.currentUser, updateData);
      };

    const authInfo = {
            user ,
            loading,
            createUser,
            signInUser,
            signOutUser,
            UpdateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;