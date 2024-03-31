import Image from "next/image";
import { Appbar } from "./components/appbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Appbar/>
    </main>
  );
}
