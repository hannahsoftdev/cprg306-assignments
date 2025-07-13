'use client';

import { useState } from 'react';
import itemsData from './items.json';
import ItemList from './item-list';
import NewItem from './new-item';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    const itemWithId = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9), 
    };
    setItems([itemWithId, ...items]);
  };

  return (
    <main className="bg-black p-8 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
