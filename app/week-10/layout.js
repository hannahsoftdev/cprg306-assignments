import { AuthContextProvider } from "./_utils/auth-context";

export default function Week10Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
