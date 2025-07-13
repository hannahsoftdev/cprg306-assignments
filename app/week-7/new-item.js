"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !category) {
      alert("Please fill out all fields.");
      return;
    }
    const newItem = { name, quantity, category };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increment = () => quantity < 20 && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="bg-[#0d1b2a] p-4 rounded-lg mb-6">
      <form onSubmit={handleSubmit} className="space-y-4 text-white">
        <input
          type="text"
          required
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded-md bg-white text-black"
        />

        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center bg-white rounded  px-3 py-1">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-2 py-0.5 rounded text-sm font-bold ${
                quantity === 1
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              −
            </button>
            <span className="text-black px-3">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-2 py-0.5 rounded text-sm font-bold ${
                quantity === 20
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              +
            </button>
          </div>

          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-md bg-white text-black w-48"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="bakery">Bakery</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="household">Household</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md text-lg hover:bg-blue-600"
        >
          +
        </button>
      </form>
    </div>
  );
}
