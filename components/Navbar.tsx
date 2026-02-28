"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartCount } from "@/lib/cart";

export default function Navbar() {
  const [count, setCount] = useState(0);

  // refresca el contador cada vez que cambia el localStorage
  useEffect(() => {
    const update = () => setCount(getCartCount());
    update();

    // Evento estándar de storage (otras pestañas)
    window.addEventListener("storage", update);

    // Evento custom (misma pestaña)
    window.addEventListener("farrina-cart-updated", update as any);

    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("farrina-cart-updated", update as any);
    };
  }, []);

  return (
    <nav className="w-full border-b border-field bg-[color:var(--bg)]">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-field">
          🍓 Farriña Fresh Fruits
        </Link>

        <div className="flex items-center gap-6 font-bold text-sm">
          <Link href="/productos">Productos</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/invertir">Invertir</Link>
          <Link href="/conocenos">Conócenos</Link>

          <Link href="/carrito" className="relative">
            Carrito
            <span className="ml-2 inline-flex items-center justify-center text-xs font-extrabold bg-[color:var(--field)] text-white px-2 py-1 rounded-full">
              {count}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}