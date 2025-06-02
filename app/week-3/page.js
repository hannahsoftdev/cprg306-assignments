import ItemList from './item-list';

export default function Page() {
  return (
    <main className="p-5 bg-black">
      <h1 className="text-3xl text-white font-bold mb-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
