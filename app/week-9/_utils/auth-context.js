"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const Ctx = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(undefined); // undefined=loading, null=logged out

  useEffect(() => {
    // If the page loaded after a redirect sign-in, complete it:
    getRedirectResult(auth).catch((e) => {
      // not fatal if there is no pending redirect
      if (e?.code !== "auth/no-auth-event") console.error(e);
    });

    return onAuthStateChanged(auth, (u) => setUser(u ?? null));
  }, []);

  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      // Try popup first (best UX on desktop)
      await signInWithPopup(auth, provider);
    } catch (e) {
      // If popup is blocked / environment disallows popups, fall back:
      if (
        e?.code === "auth/popup-blocked" ||
        e?.code === "auth/popup-closed-by-user" ||
        e?.code === "auth/operation-not-supported-in-this-environment" ||
        e?.code === "auth/cookie-policy-restricted"
      ) {
        await signInWithRedirect(auth, provider);
        return;
      }
      console.error("GitHub sign-in failed:", e);
      alert(e?.message ?? String(e));
    }
  };

  const firebaseSignOut = () => signOut(auth);

  return (
    <Ctx.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </Ctx.Provider>
  );
}

export const useUserAuth = () => useContext(Ctx);
