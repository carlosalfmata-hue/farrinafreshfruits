"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { CartItem, getCart, removeFromCart, updateQty } from "@/lib/cart";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type PaymentMethod = "Transferencia" | "Contra entrega" | "Pago online (próximamente)";

export default function CarritoPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [zona, setZona] = useState("Santo Domingo");
  const [direccion, setDireccion] = useState("");
  const [notas, setNotas] = useState("");
  const [pago, setPago] = useState<PaymentMethod>("Transferencia");

  useEffect(() => setItems(getCart()), []);

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [items]
  );

  // Delivery simple para Fase 1 (ajústalo luego)
  const delivery = useMemo(() => {
    if (items.length === 0) return 0;
    // Puedes cambiar esto por zonas
    return 150; // RD$ fijo de ejemplo
  }, [items.length]);

  const total = subtotal + delivery;

  const whatsappMsg = useMemo(() => {
    const lines = items.map((it) => {
      const sub = it.price * it.qty;
      const priceTxt = it.price > 0 ? `RD$${it.price}` : "Consultar";
      const subTxt = it.price > 0 ? `RD$${sub}` : "—";
      return `• ${it.name} (${it.variant}) x${it.qty} | ${priceTxt} | Sub: ${subTxt}`;
    });

    return (
      `Hola, quiero confirmar este pedido (Farriña Fresh Fruits):\n\n` +
      `PRODUCTOS:\n${lines.join("\n")}\n\n` +
      `Subtotal: ${subtotal > 0 ? `RD$${subtotal}` : "Consultar"}\n` +
      `Delivery: RD$${delivery}\n` +
      `TOTAL: ${subtotal > 0 ? `RD$${total}` : "Consultar"}\n\n` +
      `DATOS DE ENTREGA:\n` +
      `Nombre: ${nombre || "—"}\n` +
      `Teléfono: ${telefono || "—"}\n` +
      `Zona: ${zona}\n` +
      `Dirección: ${direccion || "—"}\n` +
      `Notas: ${notas || "—"}\n\n` +
      `Método de pago: ${pago}\n`
    );
  }, [items, subtotal, delivery, total, nombre, telefono, zona, direccion, notas, pago]);

  const whatsappLink = buildWhatsAppLink("+18093185061", whatsappMsg);

  const empty = items.length === 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">Carrito</h2>
        <p className="text-emerald-900/70 mt-2">
          Revisa tu pedido y confirma por WhatsApp.
        </p>
      </div>

      {empty ? (
        <div className="bg-white border border-emerald-200 rounded-3xl p-10 text-center shadow-sm">
          <p className="text-emerald-900/80">Tu carrito está vacío.</p>
          <a
            href="/productos"
            className="inline-block mt-4 bg-emerald-900 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            Ir a productos
          </a>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Lista productos */}
          <section className="lg:col-span-2 bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-extrabold text-emerald-950">Resumen de pedido</h3>

            <div className="mt-5 space-y-4">
              {items.map((it) => (
                <div
                  key={`${it.id}-${it.variant}`}
                  className="border border-emerald-100 rounded-2xl p-4 flex gap-4 items-center"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-emerald-50 border border-emerald-100">
                    {it.image ? (
                      <Image
                        src={it.image}
                        alt={it.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    ) : null}
                  </div>

                  <div className="flex-1">
                    <div className="font-extrabold text-emerald-950 leading-tight">
                      {it.name}
                    </div>
                    <div className="text-sm text-emerald-900/70">{it.variant}</div>
                    <div className="text-sm mt-1">
                      <span className="text-emerald-900/60">Precio: </span>
                      <span className="font-semibold text-emerald-950">
                        {it.price > 0 ? `RD$${it.price}` : "Consultar"}
                      </span>
                    </div>
                  </div>

                  {/* Cantidad */}
                  <div className="flex items-center gap-2">
                    <button
                      className="w-9 h-9 rounded-xl border border-emerald-200 hover:bg-emerald-50 font-bold"
                      onClick={() => {
                        const updated = updateQty(it.id, it.variant, it.qty - 1);
                        setItems(updated);
                      }}
                    >
                      −
                    </button>
                    <div className="w-10 text-center font-bold">{it.qty}</div>
                    <button
                      className="w-9 h-9 rounded-xl border border-emerald-200 hover:bg-emerald-50 font-bold"
                      onClick={() => {
                        const updated = updateQty(it.id, it.variant, it.qty + 1);
                        setItems(updated);
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="w-28 text-right">
                    <div className="text-xs text-emerald-900/60">Subtotal</div>
                    <div className="font-extrabold text-emerald-950">
                      {it.price > 0 ? `RD$${it.price * it.qty}` : "—"}
                    </div>
                    <button
                      className="mt-2 text-xs font-semibold text-red-600 hover:underline"
                      onClick={() => {
                        const updated = removeFromCart(it.id, it.variant);
                        setItems(updated);
                      }}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Panel derecha: entrega + pago + total */}
          <aside className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-emerald-950">Entrega</h3>
              <div className="mt-4 grid gap-3">
                <input
                  className="border border-emerald-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <input
                  className="border border-emerald-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <select
                  className="border border-emerald-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                  value={zona}
                  onChange={(e) => setZona(e.target.value)}
                >
                  <option>Santo Domingo</option>
                  <option>Santo Domingo Este</option>
                  <option>Santo Domingo Norte</option>
                  <option>Santo Domingo Oeste</option>
                  <option>Distrito Nacional</option>
                  <option>Otra (consultar)</option>
                </select>
                <textarea
                  className="border border-emerald-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="Dirección"
                  rows={3}
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                />
                <textarea
                  className="border border-emerald-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                  placeholder="Notas (opcional)"
                  rows={2}
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-emerald-950">Pago</h3>
              <div className="mt-3 grid gap-2">
                {(
                  ["Transferencia", "Contra entrega", "Pago online (próximamente)"] as PaymentMethod[]
                ).map((m) => (
                  <label
                    key={m}
                    className={
                      "flex items-center gap-3 border rounded-2xl px-4 py-3 cursor-pointer transition " +
                      (pago === m
                        ? "border-emerald-700 bg-emerald-50"
                        : "border-emerald-200 hover:bg-emerald-50")
                    }
                  >
                    <input
                      type="radio"
                      name="pago"
                      checked={pago === m}
                      onChange={() => setPago(m)}
                    />
                    <span className="font-semibold text-emerald-950">{m}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-emerald-100 pt-5 space-y-2">
              <div className="flex justify-between text-sm text-emerald-900/70">
                <span>Subtotal</span>
                <span>{subtotal > 0 ? `RD$${subtotal}` : "Consultar"}</span>
              </div>
              <div className="flex justify-between text-sm text-emerald-900/70">
                <span>Delivery</span>
                <span>RD${delivery}</span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-emerald-900/60">Total</div>
                  <div className="text-3xl font-extrabold text-emerald-950">
                    {subtotal > 0 ? `RD$${total}` : "Consultar"}
                  </div>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                className="mt-4 block text-center bg-green-500 text-white px-6 py-4 rounded-2xl font-extrabold shadow-md hover:bg-green-600 transition"
              >
                Confirmar pedido por WhatsApp
              </a>

              <p className="text-xs text-emerald-900/60 mt-2">
                Al confirmar, se enviará tu pedido con tus datos por WhatsApp.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}