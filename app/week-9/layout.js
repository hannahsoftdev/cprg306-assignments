"use client"
import { AuthContextProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
