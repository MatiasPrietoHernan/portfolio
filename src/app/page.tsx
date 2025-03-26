'use client'
import "@/app/globals.css";
import Main from "@/pages/Home";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow pt-16">
        <Main />
      </main>
    </div>
  );
}
