import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Farriña Fresh Fruits",
  description: "Frescura familiar que se nota",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-emerald-50 via-lime-50 to-white text-emerald-950 min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="border-t mt-10 bg-emerald-100/40">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
            <p>📧 farrinafreshfruits@gmail.com</p>
            <p>📱 +1 (809) 318-5061</p>
            <p className="mt-2">
              © {new Date().getFullYear()} Farriña Fresh Fruits
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}