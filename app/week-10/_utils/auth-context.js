"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase"; 

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined); 

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return () => unsub();
  }, []);

  async function gitHubSignIn() {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider); 
  }

  async function logOut() {
    await signOut(auth);
  }

  const value = { user, gitHubSignIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(AuthContext);
}
