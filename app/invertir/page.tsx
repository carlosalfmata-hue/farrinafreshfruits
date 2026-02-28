import { plans } from "@/data/investmentPlans";
import InvestmentCalculator from "@/components/InvestmentCalculator";

export default function InvertirPage() {
  const featured = plans[2]; // Oro

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[32px] border border-field shadow-soft">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/campo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_15%,white,transparent_60%)]" />

        <div className="relative px-6 py-10 md:px-12 md:py-14 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-2xl text-sm font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--gold)]" />
            Programa privado de participación agrícola • RD
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
            Invierte en producción agrícola real.
            <span className="block text-white/90">
              Transparencia, seguimiento y cierre por ciclo.
            </span>
          </h1>

          <p className="mt-4 text-lg text-white/90 max-w-3xl">
            Capital aplicado a producción y distribución (modelo operativo real).
            Retorno <b>estimado por ciclo</b> con reportes y evidencia del avance.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#planes"
              className="bg-[color:var(--gold)] text-black px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
            >
              Ver planes
            </a>
            <a
              href="#solicitud"
              className="bg-white text-black px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
            >
              Solicitar cupo
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              { t: "Ciclos por lote", d: "Inversión asociada a un ciclo agrícola (6 meses).", tag: "Estructurado" },
              { t: "Reportes y evidencia", d: "Actualizaciones + fotos + resumen de avance.", tag: "Transparente" },
              { t: "Enfoque negocios", d: "Distribución activa a comercios (flujo real).", tag: "Operativo" },
            ].map((c) => (
              <div key={c.t} className="bg-white/10 border border-white/20 rounded-3xl p-5">
                <div className="text-xs font-bold text-white/80">{c.tag}</div>
                <div className="mt-1 text-lg font-extrabold">{c.t}</div>
                <p className="mt-2 text-sm text-white/85">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-white border border-field rounded-3xl p-6 md:p-10 shadow-soft">
        <h2 className="text-3xl font-extrabold text-field">¿Cómo funciona?</h2>
        <p className="mt-2 text-black/65 max-w-3xl">
          Modelo híbrido: inversión por ciclo agrícola (lote) + retorno estimado por cierre de ciclo.
        </p>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { n: "1", t: "Solicitud", d: "Pides cupo privado y validamos disponibilidad del ciclo." },
            { n: "2", t: "Asignación", d: "Te asignamos al ciclo (lote) con condiciones claras." },
            { n: "3", t: "Seguimiento", d: "Reportes + evidencia del avance durante el ciclo." },
            { n: "4", t: "Cierre", d: "Cierre del ciclo: devolución + utilidad estimada (según resultados)." },
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-field p-5 bg-[color:var(--bg)]">
              <div className="w-10 h-10 rounded-2xl bg-[color:var(--soil)] text-white flex items-center justify-center font-extrabold">
                {s.n}
              </div>
              <div className="mt-3 text-lg font-extrabold text-field">{s.t}</div>
              <p className="mt-2 text-sm text-black/65">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-xs text-black/55">
          * Esto no es una promesa de retorno garantizado. Es participación estructurada con proyección estimada por ciclo.
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="space-y-6">
        <div className="flex items-end justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-3xl font-extrabold text-field">Planes por ciclo</h2>
            <p className="mt-2 text-black/65">
              Diseñados para inversionistas conservadores y crecimiento sostenible.
            </p>
          </div>
          <div className="text-sm font-bold bg-[color:var(--sand)] px-4 py-2 rounded-2xl border border-field">
            Ciclo estándar: 6 meses
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-3xl border border-field bg-white p-6 shadow-soft ${
                p.id === featured.id ? "ring-2 ring-[color:var(--gold)]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-xl font-extrabold text-field">{p.name}</div>
                {p.id === featured.id && (
                  <span className="text-xs font-extrabold bg-[color:var(--gold)] text-black px-3 py-1.5 rounded-2xl">
                    Recomendado
                  </span>
                )}
              </div>

              <div className="mt-4 grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/65">Mínimo</span>
                  <b>RD$ {p.min.toLocaleString("es-DO")}</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/65">Retorno estimado</span>
                  <b>
                    {p.estReturnMin}% – {p.estReturnMax}%
                  </b>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/65">Duración</span>
                  <b>{p.cycleMonths} meses</b>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-black/70">
                {p.perks.map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="text-[color:var(--gold)] font-extrabold">✓</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="#solicitud"
                  className="block text-center bg-[color:var(--field)] text-white px-6 py-3 rounded-2xl font-extrabold hover:opacity-95 transition"
                >
                  Solicitar cupo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SIMULADOR (Plan destacado) */}
      <InvestmentCalculator plan={featured} />

      {/* SOLICITUD PRIVADA */}
      <section
        id="solicitud"
        className="bg-white border border-field rounded-3xl p-6 md:p-10 shadow-soft"
      >
        <h2 className="text-3xl font-extrabold text-field">Solicitud privada de inversión</h2>
        <p className="mt-2 text-black/65 max-w-3xl">
          Completa este formulario y te contactamos con el detalle del ciclo disponible, condiciones y calendario.
        </p>

        <form className="mt-8 grid md:grid-cols-2 gap-4" action="/api/invest/lead" method="post">
          <input
            name="name"
            placeholder="Nombre y apellido"
            className="px-4 py-3 rounded-2xl border border-field bg-white outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            required
          />
          <input
            name="phone"
            placeholder="Teléfono / WhatsApp"
            className="px-4 py-3 rounded-2xl border border-field bg-white outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Correo (opcional)"
            className="px-4 py-3 rounded-2xl border border-field bg-white outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
          />
          <select
            name="plan"
            className="px-4 py-3 rounded-2xl border border-field bg-white outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            defaultValue="Oro"
          >
            <option>Bronce</option>
            <option>Plata</option>
            <option>Oro</option>
          </select>

          <textarea
            name="note"
            placeholder="Monto aproximado / objetivo (opcional)"
            className="md:col-span-2 px-4 py-3 rounded-2xl border border-field bg-white outline-none focus:ring-2 focus:ring-[color:var(--gold)] min-h-[110px]"
          />

          <button
            type="submit"
            className="md:col-span-2 bg-[color:var(--gold)] text-black px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
          >
            Enviar solicitud
          </button>

          <p className="md:col-span-2 text-xs text-black/55">
            * Solicitud sujeta a disponibilidad de cupos. No se garantiza retorno. Se comparte información bajo condiciones del ciclo.
          </p>
        </form>
      </section>
    </div>
  );
}