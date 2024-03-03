import Image from "next/image";
import Link from "next/link"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center shadow-md justify-between p-24">
      <h1 className="text-4xl">Hi There!</h1>
      <h1 className="text-5xl">Home Page</h1>
    
      <Link href="/about" className='bg-gray-500 p-2 rounded '>Go to about page</Link>
   
    </main>
  );
}
