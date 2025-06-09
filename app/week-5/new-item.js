"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (category === "") {
            alert("Please select a category.");
            return;
        }

        const newItem = {
            name,
            quantity,
            category,
        };

        alert(`Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("");
    };

    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-blue-950 text-white p-6 rounded-xl w-full max-w-md mx-auto space-y-4"
        >
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg text-black placeholder-gray-400"
            />

            <div className="flex space-x-4">
                <div className="flex items-center bg-white border border-gray-300 rounded-lg px-2 py-1 space-x-2">
                    <span className="text-black">{quantity}</span>
                    <button
                        type="button"
                        onClick={decrement}
                        disabled={quantity === 1}
                        className={`rounded px-2 py-1 text-white ${
                            quantity === 1 ? "bg-gray-400" : "bg-gray-500 hover:bg-gray-600"
                        }`}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={increment}
                        disabled={quantity === 20}
                        className={`rounded px-2 py-1 text-white ${
                            quantity === 20 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        +
                    </button>
                </div>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black bg-white"
                >
                    <option value="" disabled>Select a category</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
                +
            </button>
        </form>
    );
}

