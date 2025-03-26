import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import './globals.css'; // Importar CSS global aquí

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}