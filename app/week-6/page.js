import ItemList from './item-list';

export default function Page() {
  return (
    <main className="bg-black p-8">
      <h1 className="text-white text-4xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
