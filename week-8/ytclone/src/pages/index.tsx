import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";
import  Sidebar  from "@/components/Sidebar";
import  Appbar  from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Appbar/>
      <Sidebar/>
      <Card/>
    </div>
  );
}
