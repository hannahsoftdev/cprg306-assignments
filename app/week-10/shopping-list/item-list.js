"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="text-white">
      <div className="mb-4 flex items-center gap-4">
        <span className="font-semibold">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-1 rounded ${
            sortBy === "name"
              ? "bg-orange-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-1 rounded ${
            sortBy === "category"
              ? "bg-orange-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Item item={item} onSelect={onItemSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}
