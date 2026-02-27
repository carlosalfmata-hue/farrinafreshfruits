import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl p-12 shadow-lg bg-gradient-to-br from-emerald-200 via-lime-100 to-emerald-50 border border-emerald-300">

  <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

  <p className="text-sm font-semibold text-emerald-900">
    🌿 Directo del campo dominicano
  </p>

  <h1 className="mt-3 text-5xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
    Frescura familiar que se nota 🍓
  </h1>
  <div className="w-24 h-1 bg-emerald-800 mt-5 rounded-full"></div>

  <p className="mt-4 text-lg text-emerald-900/80 max-w-2xl">
    Fresas premium y productos agrícolas 100% frescos.
    Compra online o haz tu pedido por WhatsApp.
  </p>

  <div className="mt-8 flex flex-wrap gap-4">
    <Link
      href="/productos"
      className="bg-emerald-900 text-white px-8 py-4 rounded-2xl font-semibold shadow hover:scale-105 transition"
    >
      Ver Productos
    </Link>

    <a
      href="https://wa.me/18492822833"
      target="_blank"
      className="bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-md hover:bg-green-600 transition"
    >
            Pedir por WhatsApp
          </a>

          <Link
            href="/catalogo"
            className="border border-emerald-400 text-emerald-900 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition"
          >
            Ver Catálogo (PDF)
          </Link>
        </div>
      </section>

      {/* Secciones destacadas */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-emerald-200 p-6 rounded-3xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="font-bold text-lg text-emerald-950">🍓 Fresas Premium</h3>
          <p className="mt-2 text-emerald-900/80">
            Rubessa, Altessa y Rosvella.
          </p>
        </div>

        <div className="bg-white border border-emerald-200 p-6 rounded-3xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="font-bold text-lg text-emerald-950">🥬 Productos Agrícolas</h3>
          <p className="mt-2 text-emerald-900/80">
            Variedad fresca según disponibilidad.
          </p>
        </div>

        <div className="bg-white border border-emerald-200 p-6 rounded-3xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="font-bold text-lg text-emerald-950">🚚 Entrega Rápida</h3>
          <p className="mt-2 text-emerald-900/80">
            Servicio ágil y confiable.
          </p>
        </div>
      </section>
    </div>
  );
}