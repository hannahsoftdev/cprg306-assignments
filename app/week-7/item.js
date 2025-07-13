export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-950 p-4 py-1 w-90">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      <p className="text-white">Buy {quantity} in {category}</p>
    </li>
  );
}
