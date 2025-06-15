'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  const groupedItems = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  return (
    <div>
      <div className="mb-4 space-x-4 text-white">
        <span className="mr-4">Sort by:</span>
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-1 ${
            sortBy === 'name' ? 'bg-orange-600 text-white' : 'bg-orange-200 text-black'
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-1 ${
            sortBy === 'category' ? 'bg-orange-600 text-white' : 'bg-orange-200 text-black'
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy('grouped')}
          className={`px-4 py-1 w-30 ${
            sortBy === 'grouped' ? 'bg-orange-600 text-white' : 'bg-orange-200 text-black'
          }`}
        >
          Grouped Category
        </button>
      </div>

      {sortBy === 'grouped' ? (
        <div className="space-y-6">
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category}>
                <h2 className="text-xl text-white font-bold capitalize mb-2">{category}</h2>
                <ul className="space-y-2">
                  {groupedItems[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul className="space-y-4">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
