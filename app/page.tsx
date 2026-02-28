import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* HERO con fondo campo + logo */}
      <section className="relative overflow-hidden rounded-[32px] border border-emerald-200 shadow-sm">
        {/* Fondo: imagen de campo (si existe) + overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/campo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/55 via-emerald-950/35 to-emerald-950/10" />

        <div className="relative px-6 py-10 md:px-10 md:py-14">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white/90 border border-white/40 shadow-sm">
              <Image
                src="/images/logo.jpg"
                alt="Farriña Fresh Fruits"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="text-white">
              <p className="text-sm font-semibold tracking-wide opacity-90">
                Negocio familiar dominicano
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Farriña Fresh Fruits
              </h1>
            </div>
          </div>

          {/* Mensaje principal */}
          <div className="mt-8 max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Fresas frescas como en casa 🍓
            </h2>
            <p className="mt-4 text-white/90 text-lg md:text-xl">
              Cultivamos, seleccionamos y entregamos productos frescos con trato
              cercano. Ideal para familias, negocios y supermercados.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/productos"
                className="bg-white text-emerald-950 px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
              >
                Ver productos
              </Link>

              <a
                href="https://wa.me/18093185061?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quiero%20hacer%20un%20pedido%20%F0%9F%8D%93"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:bg-green-600 transition"
              >
                Pedir por WhatsApp
              </a>

              <Link
                href="/catalogo"
                className="border border-white/70 text-white px-6 py-3 rounded-2xl font-extrabold hover:bg-white/10 transition"
              >
                Ver catálogo (PDF)
              </Link>
            </div>

            {/* Sellos de confianza */}
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <div className="bg-white/90 text-emerald-950 border border-white/50 rounded-2xl p-4">
                <div className="font-extrabold">Trato familiar</div>
                <div className="text-sm opacity-80">Atención cercana y directa.</div>
              </div>
              <div className="bg-white/90 text-emerald-950 border border-white/50 rounded-2xl p-4">
                <div className="font-extrabold">Producto fresco</div>
                <div className="text-sm opacity-80">Selección y calidad.</div>
              </div>
              <div className="bg-white/90 text-emerald-950 border border-white/50 rounded-2xl p-4">
                <div className="font-extrabold">Entregas</div>
                <div className="text-sm opacity-80">Coordinación ágil por WhatsApp.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONÓCENOS */}
      <section id="conocenos" className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="text-3xl font-extrabold text-emerald-950">Conócenos</h3>
        <p className="mt-3 text-emerald-900/75 max-w-3xl">
          Somos una familia dedicada al cultivo y distribución de fresas y productos
          agrícolas. Trabajamos con responsabilidad, frescura y compromiso en cada entrega.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/50">
            <h4 className="font-extrabold text-emerald-950">Valores</h4>
            <ul className="mt-2 text-emerald-900/80 text-sm list-disc pl-5 space-y-1">
              <li>Honestidad</li>
              <li>Calidad</li>
              <li>Compromiso</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>

          <div className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/50">
            <h4 className="font-extrabold text-emerald-950">Visión</h4>
            <p className="mt-2 text-emerald-900/80 text-sm">
              Ser una marca confiable en el mercado nacional, reconocida por frescura,
              responsabilidad y trato cercano.
            </p>
          </div>

          <div className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/50">
            <h4 className="font-extrabold text-emerald-950">Misión</h4>
            <p className="mt-2 text-emerald-900/80 text-sm">
              Llevar productos agrícolas frescos y seleccionados a hogares y negocios
              dominicanos con atención directa.
            </p>
          </div>
        </div>
      </section>

      {/* CRECE CON NOSOTROS (Fase 2) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h3 className="text-2xl font-extrabold text-emerald-950">
              ¿Quieres crecer con nosotros?
            </h3>
            <p className="mt-2 text-emerald-900/75 max-w-2xl">
              Estamos preparando un modelo formal de inversión agrícola familiar.
              Muy pronto podrás conocer el plan y participar en el crecimiento.
            </p>
          </div>

          <Link
            href="/invertir"
            className="inline-flex justify-center bg-emerald-900 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
          >
            Conocer plan de inversión
          </Link>
        </div>
      </section>

      {/* EQUIPO (confianza) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="text-2xl font-extrabold text-emerald-950">Equipo</h3>
        <p className="mt-2 text-emerald-900/75">
          Personas reales, trato directo y compromiso con cada cliente.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200" />
            <div>
              <div className="font-extrabold text-emerald-950">Carlos Mata</div>
              <div className="text-sm text-emerald-900/70">Presidente</div>
            </div>
          </div>

          <div className="border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200" />
            <div>
              <div className="font-extrabold text-emerald-950">Guaremate</div>
              <div className="text-sm text-emerald-900/70">Operaciones / Ventas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}