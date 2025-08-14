"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <main className="p-6 space-y-4">
        <h1 className="text-xl font-semibold">Week 9</h1>
        <button onClick={gitHubSignIn} className="px-4 py-2 rounded border">
          Sign in with GitHub
        </button>
      </main>
    );
  }

  return (
    <main className="p-6 space-y-4">
      <p>Welcome, {user.displayName} ({user.email})</p>
      <div className="space-x-3">
        <Link href="/week-9/shopping-list" className="underline">
          Go to Shopping List
        </Link>
        <button onClick={firebaseSignOut} className="px-3 py-1 rounded border">
          Sign out
        </button>
      </div>
    </main>
  );
}
