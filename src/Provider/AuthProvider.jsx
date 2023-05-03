import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSigner = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  const gitSigner = () =>{
    return signInWithPopup(auth, gitProvider);
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () =>{
    setLoading(true)
    return signOut(auth);
  }



  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
  },[])



  const authInfo = {
    user,
    createUser,
    signInUser,
    userUpdate,
    logOut,
    loading,
    googleSigner,
    gitSigner
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
