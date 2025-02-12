import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from '../Firebase/Firebase.init';
import axios from 'axios';


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
            console.log('state', currentUser?.email);
            if(currentUser?.email){
                const user = {email:currentUser.email}
                axios.post('https://review-xpert-server-side.vercel.app/jwt', user , {withCredentials:true})
                .then(res => {console.log('login token',res.data)
                    setLoading(false)
                })
            }else{
                    axios.post('https://review-xpert-server-side.vercel.app/logout', {}, {
                        withCredentials:true
                    })
                    .then(res=> {console.log('logout', res.data)
                        setLoading(false)
                    })
                }
            setLoading(false)
        })
        return () => {
            unsubscribe
        }
    }, [auth])
    const UpdateUserProfile = (updateData) => {
      
        return updateProfile(auth.currentUser, updateData);
      };

    const authInfo = {
            user ,
            loading,
            createUser,
            signInUser,
            signOutUser,
            UpdateUserProfile,
            
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;