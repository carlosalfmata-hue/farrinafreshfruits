"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default function ProductosPage() {
  const products = getProducts();
  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["Todos", ...Array.from(set)];
  }, [products]);

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todos");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = cat === "Todos" ? true : p.category === cat;
      const matchQ =
        (p.name + " " + p.short + " " + p.variant)
          .toLowerCase()
          .includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [products, q, cat]);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">
          Productos
        </h2>
        <p className="text-emerald-900/70 mt-2">
          Compra rápido como supermercado, con calidad de marca exportadora.
        </p>

        <div className="mt-5 grid md:grid-cols-2 gap-4">
          <input
            className="w-full border border-emerald-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
            placeholder="Buscar (ej: fresas, 5 lb, tomate...)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <div className="flex flex-wrap gap-2 md:justify-end">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={
                  "px-4 py-2 rounded-full text-sm font-semibold border transition " +
                  (cat === c
                    ? "bg-emerald-900 text-white border-emerald-900"
                    : "bg-white border-emerald-200 text-emerald-900 hover:bg-emerald-50")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}