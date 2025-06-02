export default function Item({ name, quantity, category }) {
  return ( 
    <li>
      <p>{name}</p>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}