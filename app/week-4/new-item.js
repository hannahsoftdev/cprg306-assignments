"use client"

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        let current = quantity.valueOf();
        if (current < 20) setQuantity(current + 1);
    };

    const decrement = () => {
        let current = quantity.valueOf();
        if (current > 1) setQuantity(current - 1);
    };

    let incrementButtonStyle = "bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded";
    let decrementButtonStyle = "bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded";

    if (quantity === 20) {
        incrementButtonStyle = "bg-gray-400 text-white px-2 py-1 rounded";
    }
    if (quantity === 1) {
        decrementButtonStyle = "bg-gray-400 text-white px-2 py-1 rounded";
    }

    return (
        <main className="min-h-screen flex justify-center bg-gray-100">  
            <div>
                <p>{quantity}
                <button
                    onClick={decrement}
                    className={decrementButtonStyle}
                    disabled={quantity === 1}>
                    -
                </button>
                <button
                    onClick={increment}
                    className={`${incrementButtonStyle} ml-1`}
                    disabled={quantity === 20}>
                    +
                </button></p>
            </div>
        </main>
    );
}
