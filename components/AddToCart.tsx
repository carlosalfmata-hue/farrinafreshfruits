"use client";

import { useState } from "react";
import { addToCart } from "@/lib/cart";

type ProductLike = {
  id: string | number;
  name: string;
  price?: number; // 0 o undefined = Consultar
  unit?: string;
  image?: string;
  category?: string;
};

export default function AddToCart({ product }: { product: ProductLike }) {
  const [qty, setQty] = useState(1);

  const price = typeof product.price === "number" && product.price > 0 ? product.price : 0;

  function onAdd() {
    addToCart(
      {
        id: String(product.id),
        name: product.name,
        price,
        unit: product.unit,
        image: product.image,
        category: product.category,
      },
      qty
    );

    alert("Agregado al carrito ✅");
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="flex items-center border border-field rounded-2xl overflow-hidden bg-white">
        <button
          type="button"
          className="px-4 py-3 font-extrabold hover:bg-[color:var(--sand)] transition"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
        >
          -
        </button>
        <div className="px-4 py-3 font-extrabold">{qty}</div>
        <button
          type="button"
          className="px-4 py-3 font-extrabold hover:bg-[color:var(--sand)] transition"
          onClick={() => setQty((q) => q + 1)}
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="bg-[color:var(--field)] text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}