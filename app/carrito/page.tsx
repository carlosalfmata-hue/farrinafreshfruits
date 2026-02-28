"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  getCart,
  updateQty,
  removeFromCart,
  clearCart,
  getTotals,
} from "@/lib/cart";

type Customer = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  rnc?: string;
};

function moneyRD(n: number) {
  return `RD$ ${n.toFixed(2)}`;
}

export default function CarritoPage() {
  const [refresh, setRefresh] = useState(0);

  // lee carrito (localStorage)
  const cart = getCart();

  // Facturable = price > 0
  const billable = cart.filter((x) => typeof x.price === "number" && x.price > 0);
  const consult = cart.filter((x) => !x.price || x.price <= 0);

  const totals = useMemo(() => getTotals(), [refresh]);

  const [customer, setCustomer] = useState<Customer>({
    name: "",
    phone: "",
    email: "",
    address: "",
    rnc: "",
  });

  async function downloadInvoice() {
    if (!billable.length) {
      alert("No hay productos con precio para facturar (todo está en 'Consultar').");
      return;
    }

    if (!customer.name.trim() || !customer.phone.trim()) {
      alert("Completa al menos Nombre y Teléfono para generar la factura.");
      return;
    }

    const res = await fetch("/api/invoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: billable.map((it) => ({
          id: it.id,
          name: it.name,
          qty: it.qty,
          price: it.price,
          unit: it.unit,
        })),
        customer,
      }),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      alert("No se pudo generar la factura. " + (txt ? `(${txt})` : ""));
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "factura-farrina.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8 anim-fadeUp">
      {/* Header */}
      <section className="bg-white border border-field rounded-3xl p-6 md:p-10 shadow-soft bg-field-grad">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-field">Carrito</h1>
            <p className="mt-2 text-black/65">
              Selecciona cantidades, completa tus datos y descarga tu <b>factura PDF</b>.
            </p>
          </div>

          <Link
            href="/productos"
            className="border border-field px-5 py-3 rounded-2xl font-extrabold hover:bg-[color:var(--sand)] transition"
          >
            Seguir comprando
          </Link>
        </div>
      </section>

      {/* Items */}
      <section className="bg-white border border-field rounded-3xl p-6 md:p-10 shadow-soft">
        {cart.length === 0 ? (
          <div className="text-black/70">
            Tu carrito está vacío.{" "}
            <Link className="underline" href="/productos">
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((it) => {
              const lineTotal = it.price > 0 ? it.price * it.qty : 0;

              return (
                <div
                  key={it.id}
                  className="flex items-center justify-between gap-4 border border-field rounded-2xl p-4 card-hover"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-field bg-[color:var(--sand)]">
                      <Image
                        src={it.image || "/images/placeholder.jpg"}
                        alt={it.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="font-extrabold text-field truncate">{it.name}</div>
                      <div className="text-sm text-black/60">
                        {it.unit ? it.unit : "—"} •{" "}
                        {it.price > 0 ? moneyRD(it.price) : "Consultar"}
                        {it.price > 0 ? ` • Sub: ${moneyRD(lineTotal)}` : ""}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-field rounded-2xl overflow-hidden bg-white">
                      <button
                        className="px-3 py-2 font-extrabold hover:bg-[color:var(--sand)]"
                        onClick={() => {
                          updateQty(it.id, it.qty - 1);
                          setRefresh((r) => r + 1);
                        }}
                      >
                        -
                      </button>
                      <div className="px-4 py-2 font-extrabold">{it.qty}</div>
                      <button
                        className="px-3 py-2 font-extrabold hover:bg-[color:var(--sand)]"
                        onClick={() => {
                          updateQty(it.id, it.qty + 1);
                          setRefresh((r) => r + 1);
                        }}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="text-sm font-extrabold px-4 py-2 rounded-2xl border border-field hover:bg-[color:var(--sand)] transition"
                      onClick={() => {
                        removeFromCart(it.id);
                        setRefresh((r) => r + 1);
                      }}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Totales + acciones */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
              <button
                onClick={() => {
                  clearCart();
                  setRefresh((r) => r + 1);
                }}
                className="text-sm font-extrabold px-5 py-3 rounded-2xl border border-field hover:bg-[color:var(--sand)] transition"
              >
                Vaciar carrito
              </button>

              <div className="text-right">
                <div className="text-sm text-black/60">Subtotal facturable</div>
                <div className="text-2xl font-extrabold text-field">
                  {moneyRD(totals.subtotal)}
                </div>
              </div>
            </div>

            {/* Aviso si hay consultables */}
            {consult.length > 0 && (
              <div className="mt-4 text-sm text-black/65 bg-[color:var(--sand)] border border-field rounded-2xl p-4">
                <b>Nota:</b> Tienes {consult.length} producto(s) en modo{" "}
                <b>Consultar</b>. Esos no entran en la factura hasta que tengan precio.
              </div>
            )}
          </div>
        )}
      </section>

      {/* Checkout */}
      <section className="bg-white border border-field rounded-3xl p-6 md:p-10 shadow-soft">
        <h2 className="text-2xl font-extrabold text-field">Checkout</h2>
        <p className="mt-2 text-black/65">
          Completa tus datos para generar la factura/cotización en PDF.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <input
            value={customer.name}
            onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
            placeholder="Nombre y apellido / Empresa"
            className="px-4 py-3 rounded-2xl border border-field outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
          />
          <input
            value={customer.phone}
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            placeholder="Teléfono / WhatsApp"
            className="px-4 py-3 rounded-2xl border border-field outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
          />
          <input
            value={customer.email}
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            placeholder="Correo (opcional)"
            className="px-4 py-3 rounded-2xl border border-field outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
          />
          <input
            value={customer.rnc}
            onChange={(e) => setCustomer({ ...customer, rnc: e.target.value })}
            placeholder="RNC (opcional)"
            className="px-4 py-3 rounded-2xl border border-field outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
          />
          <textarea
            value={customer.address}
            onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
            placeholder="Dirección de entrega (opcional)"
            className="md:col-span-2 px-4 py-3 rounded-2xl border border-field outline-none focus:ring-2 focus:ring-[color:var(--gold)] min-h-[100px]"
          />

          <button
            onClick={downloadInvoice}
            className="md:col-span-2 bg-[color:var(--gold)] text-black px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
          >
            Descargar factura (PDF)
          </button>

          <p className="md:col-span-2 text-xs text-black/55">
            * La factura solo incluye productos con precio. Los “Consultar” quedan fuera.
          </p>
        </div>
      </section>
    </div>
  );
}