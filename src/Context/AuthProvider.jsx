import React, { useState } from 'react';
import AuthContext from './AuthContex';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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


    const authInfo = {
            user ,
            loading,
            createUser,
            signInUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;