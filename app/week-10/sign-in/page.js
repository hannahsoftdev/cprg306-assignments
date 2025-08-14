"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.replace("/week-10/shopping-list");
  }, [user, router]);

  if (user === undefined) return <main className="p-6">Loading…</main>;

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <button
        onClick={async () => {
          try { await gitHubSignIn(); }
          catch (e) { console.error(e); alert("Sign-in failed — see console."); }
        }}
        className="rounded-2xl px-4 py-2 border shadow"
      >
        Continue with GitHub
      </button>
    </main>
  );
}

