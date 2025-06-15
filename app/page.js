import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
        <li>
          <Link href="./week-2/"
          className= "hover:text-green-500 hover:underline"
          >Week 2 Assignment</Link>
        </li>
        <li>
          <Link href="./week-3/"
          className= "hover:text-green-500 hover:underline"
          >Week 3 Assignment</Link>
        </li>
        <li>
          <Link href="./week-4/"
          className= "hover:text-green-500 hover:underline"
          >Week 4 Assignment</Link>
        </li>
        <li>
          <Link href="./week-5/"
          className= "hover:text-green-500 hover:underline"
          >Week 5 Assignment</Link>
        </li>
        <li>
          <Link href="./week-6/"
          className= "hover:text-green-500 hover:underline"
          >Week 6 Assignment</Link>
        </li>
      </ul>
    </main>

  );
}
