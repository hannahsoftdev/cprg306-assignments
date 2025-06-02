export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-950 p-2 mb-4">
      <p className="text-white font-semibold">{name}</p>
      <p className="text-white">Buy {quantity} in {category}</p>
    </li>
  );
}

