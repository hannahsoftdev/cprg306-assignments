"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user, logOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (user === null) router.replace("/week-10/sign-in");
  }, [user, router]);

  useEffect(() => {
    if (!user?.uid) return;
    (async () => setItems(await getItems(user.uid)))();
  }, [user?.uid]);

  async function handleAddItem(item) {
    if (!user?.uid) return;
    const id = await addItem(user.uid, item);
    setItems((prev) => [...prev, { id, ...item }]);
  }

  if (user === undefined) return <main className="p-6">Loading…</main>;
  if (user === null) return <main className="p-6">Redirecting…</main>;

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping List</h1>
        <div className="flex items-center gap-3 text-sm">
          <span className="opacity-70">{user.displayName || user.email || user.uid}</span>
          <button
            onClick={async () => { await logOut(); router.replace("/week-10/sign-in"); }}
            className="rounded-xl px-3 py-1 border shadow"
          >
            Sign out
          </button>
        </div>
      </header>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <MealIdeas items={items} />
    </main>
  );
}
