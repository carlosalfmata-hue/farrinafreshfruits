"use client";

import { useMemo, useState } from "react";
import type { InvestmentPlan } from "@/data/investmentPlans";

function formatRD(value: number) {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function InvestmentCalculator({ plan }: { plan: InvestmentPlan }) {
  const [amount, setAmount] = useState<number>(plan.min);

  const result = useMemo(() => {
    const minProfit = (amount * plan.estReturnMin) / 100;
    const maxProfit = (amount * plan.estReturnMax) / 100;
    return {
      minProfit,
      maxProfit,
      minTotal: amount + minProfit,
      maxTotal: amount + maxProfit,
    };
  }, [amount, plan.estReturnMin, plan.estReturnMax]);

  return (
    <div className="bg-white border border-field rounded-3xl p-6 md:p-8 shadow-soft">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h3 className="text-xl font-extrabold text-field">
            Simulador • Plan {plan.name}
          </h3>
          <p className="text-sm text-black/60 mt-1">
            Ciclo estimado: <b>{plan.cycleMonths} meses</b> • Retorno estimado:{" "}
            <b>
              {plan.estReturnMin}% – {plan.estReturnMax}%
            </b>{" "}
            (por ciclo)
          </p>
        </div>

        <span className="text-xs font-bold bg-[color:var(--sand)] px-3 py-2 rounded-2xl border border-field">
          Mínimo: {formatRD(plan.min)}
        </span>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="border border-field rounded-2xl p-4">
          <label className="text-sm font-bold text-black/70">Monto a invertir (RD$)</label>
          <input
            type="number"
            min={plan.min}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-2 w-full px-4 py-3 rounded-2xl border border-field outline-none focus:ring-2 focus:ring-[color:var(--gold)] bg-white"
          />
          <p className="text-xs text-black/50 mt-2">
            * No es retorno garantizado. Es un rango estimado basado en proyección por ciclo.
          </p>
        </div>

        <div className="border border-field rounded-2xl p-4 bg-[color:var(--bg)]">
          <div className="text-sm font-bold text-black/70">Proyección del ciclo</div>

          <div className="mt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Ganancia estimada</span>
              <b>
                {formatRD(result.minProfit)} – {formatRD(result.maxProfit)}
              </b>
            </div>

            <div className="flex justify-between text-sm">
              <span>Total estimado al cierre</span>
              <b>
                {formatRD(result.minTotal)} – {formatRD(result.maxTotal)}
              </b>
            </div>

            <div className="mt-3 text-xs text-black/55">
              Incluye devolución de capital + utilidad estimada al cierre del ciclo.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          className="bg-[color:var(--field)] text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
          href={`#solicitud`}
        >
          Solicitar cupo privado
        </a>
        <a
          className="border border-field px-6 py-3 rounded-2xl font-extrabold hover:bg-[color:var(--sand)] transition"
          href="/conocenos"
        >
          Ver credenciales
        </a>
      </div>
    </div>
  );
}