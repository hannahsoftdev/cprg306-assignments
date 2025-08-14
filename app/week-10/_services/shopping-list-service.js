"use client";

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  const colRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(colRef);
  const items = [];
  snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
  return items;
}

export async function addItem(userId, item) {
  const colRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(colRef, item);
  return docRef.id;
}
