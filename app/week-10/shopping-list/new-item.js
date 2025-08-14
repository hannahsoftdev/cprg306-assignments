"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      name: name.trim(),
      category,
      quantity,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">

      <input
        className="bg-white text-black border border-gray-300 rounded p-2 w-full"
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="flex gap-4 items-center">
        <div className="flex items-center bg-white rounded overflow-hidden">
          <button
            type="button"
            onClick={decrementQuantity}
            className="px-3 py-1 bg-gray-400 text-white hover:bg-gray-500"
          >
            –
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center text-black"
          />
          <button
            type="button"
            onClick={incrementQuantity}
            className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-600"
          >
            +
          </button>
        </div>

        <select
          className="bg-white text-black border border-gray-300 rounded p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 text-lg font-semibold"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
