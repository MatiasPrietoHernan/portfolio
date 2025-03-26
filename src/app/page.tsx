'use client'
import "@/app/globals.css";
import Main from "@/pages/Home";
import { usePathname } from "next/navigation";

export default function Home() {
  const currentRoute = usePathname(); // Esto te da la ruta actual
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-16">
        <Main />
      </main>
    </div>
  );
}
