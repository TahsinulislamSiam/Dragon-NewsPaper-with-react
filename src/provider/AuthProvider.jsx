import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // console.log(user);

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)

};

const signIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}


const logOut=()=>{
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
      });
      return ()=>{
          unsubscribe();  
      }
},[])

    const authData= {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,

    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;