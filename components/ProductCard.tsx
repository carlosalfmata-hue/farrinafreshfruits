"use client";

import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/lib/cart";

type Product = {
  id: string | number;
  name: string;
  price?: number; // 0 o undefined = Consultar
  unit?: string;
  image?: string;
  category?: string;
  segment?: string;
  availability?: string;
};

export default function ProductCard({ p }: { p: Product }) {
  const price = typeof p.price === "number" && p.price > 0 ? p.price : 0;

  return (
    <div className="bg-white border border-field rounded-3xl p-5 shadow-soft card-hover">
      <Link href={`/productos/${p.id}`} className="block">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-field bg-[color:var(--sand)]">
          <Image
            src={p.image || "/images/placeholder.jpg"}
            alt={p.name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-extrabold text-field truncate">{p.name}</h3>
            <p className="text-sm text-black/60">
              {p.unit ? p.unit : "—"} • {p.availability || "Disponible"}
            </p>
          </div>

          <div className="text-right shrink-0">
            <div className="text-xs font-bold text-black/50">Precio</div>
            <div className="text-lg font-extrabold text-field">
              {price > 0 ? `RD$ ${price.toLocaleString("es-DO")}` : "Consultar"}
            </div>
          </div>
        </div>

        {p.segment && (
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold bg-[color:var(--sand)] border border-field px-3 py-2 rounded-2xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--gold)]" />
            {p.segment}
          </div>
        )}
      </Link>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          onClick={() => {
            addToCart(
              {
                id: String(p.id),
                name: p.name,
                price, // 0 = Consultar
                unit: p.unit,
                image: p.image,
                category: p.category,
              },
              1
            );
            alert("Agregado al carrito ✅");
          }}
          className="flex-1 bg-[color:var(--field)] text-white px-5 py-3 rounded-2xl font-extrabold hover:opacity-95 transition"
        >
          Agregar
        </button>

        <Link
          href={`/productos/${p.id}`}
          className="border border-field px-5 py-3 rounded-2xl font-extrabold hover:bg-[color:var(--sand)] transition"
        >
          Ver
        </Link>
      </div>

      <p className="mt-3 text-xs text-black/55">
        * “Consultar” se agrega como solicitud y no entra en la factura hasta tener precio.
      </p>
    </div>
  );
}