"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ProductCard({ p }: { p: Product }) {
  const canBuyOnline = p.price > 0;

  const whatsapp = buildWhatsAppLink(
    "+18492822833",
    `Hola, quiero ordenar:\n- ${p.name} (${p.variant})\n${canBuyOnline ? `Precio: RD$${p.price}` : ""}\n\nNombre:\nDirección/Zona:\n`
  );

  return (
    <div className="bg-white border border-emerald-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-emerald-100 hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative w-full aspect-square bg-emerald-50 p-4">
        <Image src={p.image} alt={p.name} fill style={{ objectFit: "contain" }} />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-extrabold text-emerald-950 leading-tight">
              {p.name}
            </h3>
            <p className="text-sm text-emerald-900/70 mt-1">{p.short}</p>
          </div>

          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200">
            {p.variant}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-emerald-900/60">Precio</p>
            <p className="text-lg font-extrabold text-emerald-950">
              {canBuyOnline ? `RD$${p.price}` : "Disponible bajo cotización"}
            </p>
          </div>

          <span className="text-xs text-emerald-900/50 uppercase tracking-wide">
            {p.category}
            </span>
        </div>

        <div className="flex gap-3">
          <button
            className="flex-1 bg-emerald-900 text-white px-4 py-3 rounded-2xl font-semibold hover:opacity-95 transition"
            onClick={() => {
              if (!canBuyOnline) {
                window.open(whatsapp, "_blank");
                return;
              }
              addToCart({
                id: p.id,
                name: p.name,
                variant: p.variant,
                price: p.price,
                qty: 1,
                image: p.image,
                });
              alert("Agregado al carrito ✅");
            }}
          >
            {canBuyOnline ? "Agregar" : "Pedir"}
          </button>

          <a
            className="px-4 py-3 rounded-2xl font-semibold border border-emerald-300 hover:bg-emerald-50 transition"
            href={whatsapp}
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}