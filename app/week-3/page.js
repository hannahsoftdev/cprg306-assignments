import ItemList from "./item-list";


export default function Page() {
  return (
    <main className="bg-black text-white">
        <div className="text-3xl font-bold mb-4">
            <h1>Shopping List</h1>
        </div>

        <div className="text-1xl bg-gray-800 px-2 py-1 rounded">
            <ItemList />
        </div>
    </main>
  );
}