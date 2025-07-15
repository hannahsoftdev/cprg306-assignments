"use client";

export default function Item({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="p-4 bg-gray-900 hover:bg-gray-700 cursor-pointer rounded transition"
    >
      <div className="font-semibold text-white mb-1">{item.name}</div>
      <div className="text-sm text-gray-300">
        Buy {item.quantity} in {item.category}
      </div>
    </div>
  );
}
