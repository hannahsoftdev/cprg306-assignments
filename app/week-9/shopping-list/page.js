"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9),
      quantity: newItem.quantity || 1,
    };
    setItems([itemWithId, ...items]);
  };

  const handleItemSelect = (item) => {
    const cleaned = item.name
      .split(",")[0]
      .replace(/[^a-zA-Z ]/g, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(cleaned);
  };

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping List</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <section className="lg:w-2/3 space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <NewItem onAddItem={handleAddItem} />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
          </section>
          <section className="lg:w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg shadow h-full">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
