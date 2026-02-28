"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getCart } from "@/lib/cart";

export default function Navbar() {
  const [qty, setQty] = useState(0);

  const refreshQty = () => {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
    setQty(totalQty);
  };

  useEffect(() => {
    refreshQty();

    // Si cambia en otra pestaña
    const onStorage = (e: StorageEvent) => {
      if (e.key === "ff_cart_v1") refreshQty();
    };

    // Nuestro evento interno
    const onCartUpdated = () => refreshQty();

    window.addEventListener("storage", onStorage);
    window.addEventListener("ff_cart_updated", onCartUpdated);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ff_cart_updated", onCartUpdated);
    };
  }, []);

  const badge = useMemo(() => {
    if (qty <= 0) return null;
    return (
      <span className="ml-2 inline-flex items-center justify-center min-w-[22px] h-[22px] px-1 rounded-full bg-emerald-900 text-white text-xs font-extrabold">
        {qty > 99 ? "99+" : qty}
      </span>
    );
  }, [qty]);

  return (
    <header className="border-b bg-emerald-100/50 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold text-emerald-950">
          🍓 Farriña Fresh Fruits
        </Link>

        <div className="flex gap-6 text-sm font-semibold text-emerald-900 items-center">
          <Link className="hover:underline" href="/productos">Productos</Link>
          <Link className="hover:underline" href="/catalogo">Catálogo</Link>
          <Link className="hover:underline" href="/invertir">Invertir</Link>
          <a className="hover:underline" href="/#conocenos">Conócenos</a>

          <Link className="hover:underline flex items-center" href="/carrito">
            Carrito
            {badge}
          </Link>
        </div>
      </nav>
    </header>
  );
}
