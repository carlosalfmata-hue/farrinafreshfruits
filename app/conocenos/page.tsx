import Image from "next/image";
import Link from "next/link";

export default function ConocenosPage() {
  return (
    <div className="space-y-12">
      {/* HERO / HEADER con fondo campo */}
      <section className="relative overflow-hidden rounded-[32px] border border-emerald-200 shadow-sm">
        {/* Fondo campo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/campo.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-950/40 to-emerald-950/10" />
        {/* Textura suave */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_55%)]" />

        <div className="relative px-6 py-10 md:px-12 md:py-14">
          {/* Logo + label */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white/90 border border-white/30 shadow-sm">
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
                Bonao • Negocio familiar
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Conócenos
              </h1>
            </div>
          </div>

          {/* Copy potente */}
          <div className="mt-8 max-w-4xl text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              20 años trabajando con calidad real 🍓
            </h2>
            <p className="mt-4 text-white/90 text-lg md:text-xl">
              Somos Farriña Fresh Fruits. Nacimos en Bonao y crecimos con una regla simple:
              <b> entregar producto que un negocio pueda recibir con confianza</b>.
              Lo que nos diferencia no es un slogan: es la consistencia.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://wa.me/18093185061?text=Hola%2C%20vengo%20de%20Con%C3%B3cenos%20y%20quiero%20hacer%20un%20pedido%20%F0%9F%8D%93"
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:bg-green-600 transition"
              >
                Pedir por WhatsApp
              </a>

              <Link
                href="/productos"
                className="bg-white text-emerald-950 px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
              >
                Ver productos
              </Link>

              <Link
                href="/catalogo"
                className="border border-white/70 text-white px-6 py-3 rounded-2xl font-extrabold hover:bg-white/10 transition"
              >
                Ver catálogo (PDF)
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <div className="bg-white/90 text-emerald-950 border border-white/40 rounded-2xl p-4 hover:bg-white transition">
                <div className="text-3xl font-extrabold leading-none">20</div>
                <div className="text-sm font-semibold">Años de experiencia</div>
                <div className="text-xs opacity-80 mt-1">
                  Trabajo constante desde Bonao.
                </div>
              </div>

              <div className="bg-white/90 text-emerald-950 border border-white/40 rounded-2xl p-4 hover:bg-white transition">
                <div className="text-3xl font-extrabold leading-none">B2B</div>
                <div className="text-sm font-semibold">Enfoque en negocios</div>
                <div className="text-xs opacity-80 mt-1">
                  Suplimos comercios que necesitan consistencia.
                </div>
              </div>

              <div className="bg-white/90 text-emerald-950 border border-white/40 rounded-2xl p-4 hover:bg-white transition">
                <div className="text-3xl font-extrabold leading-none">✔</div>
                <div className="text-sm font-semibold">Calidad constante</div>
                <div className="text-xs opacity-80 mt-1">
                  Selección y manejo responsable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIA (narrativa pro) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-950">
              Nuestra historia
            </h2>
            <p className="mt-2 text-emerald-900/70 max-w-3xl">
              Esto no comenzó con anuncios. Comenzó con reputación: entrega tras entrega.
            </p>
          </div>
          <div className="hidden md:block text-sm font-semibold text-emerald-900/70">
            Bonao • República Dominicana
          </div>
        </div>

        <div className="mt-7 space-y-5 text-emerald-900/80 leading-relaxed text-lg">
          <p>
            Farriña Fresh Fruits nació en <b>Bonao</b> hace más de <b>20 años</b>, como un proyecto
            familiar con una idea simple: trabajar de forma limpia y entregar producto que
            hable por nosotros. En el campo, uno aprende rápido que la palabra vale, pero
            <b> el cumplimiento vale más</b>.
          </p>

          <p>
            Con el tiempo, quienes más confiaron en nosotros fueron los <b>negocios</b>. Y eso nos marcó.
            Porque un negocio no compra “bonito”: compra <b>consistencia</b>. Compra tranquilidad.
            Compra un proveedor que responda, que cumpla, que mantenga el estándar.
          </p>

          <p>
            Por eso nuestra diferencia no es una frase: es un hábito. Seleccionamos, cuidamos el manejo,
            coordinamos y damos la cara. Preferimos crecer lento antes que perder la esencia familiar
            que nos ha sostenido durante dos décadas.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="mt-10 grid lg:grid-cols-4 gap-4">
          {[
            {
              year: "2006",
              title: "Inicio familiar",
              desc: "Comenzamos en Bonao con trabajo constante y enfoque en calidad.",
            },
            {
              year: "2012",
              title: "Clientes de negocio",
              desc: "Empezamos a suplir comercios que necesitaban consistencia.",
            },
            {
              year: "2018",
              title: "Estandarización",
              desc: "Mejoramos selección, manejo y coordinación para entregas confiables.",
            },
            {
              year: "Hoy",
              title: "Crecimiento organizado",
              desc: "Presencia digital y expansión sin perder el trato familiar.",
            },
          ].map((t) => (
            <div
              key={t.year}
              className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/40 hover:bg-emerald-50 transition"
            >
              <div className="text-xs font-extrabold text-emerald-900/70 tracking-wide">
                {t.year}
              </div>
              <div className="mt-1 text-lg font-extrabold text-emerald-950">
                {t.title}
              </div>
              <p className="mt-2 text-sm text-emerald-900/75">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALIDAD (lo que convence a negocios/supermercados) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">
          ¿Qué significa “calidad” para nosotros?
        </h2>
        <p className="mt-2 text-emerald-900/70 max-w-3xl">
          No es solo que se vea bien. Es que llegue bien, sea consistente y te permita trabajar tranquilo.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Selección cuidadosa",
              desc: "No mezclamos. Elegimos con criterio: frescura, firmeza y presentación.",
            },
            {
              title: "Manejo responsable",
              desc: "Cuidamos el producto como si fuera para nuestra casa. Menos maltrato, mejor calidad.",
            },
            {
              title: "Cumplimiento claro",
              desc: "Coordinación directa, confirmación y seguimiento por WhatsApp. Sin cuentos.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="border border-emerald-100 rounded-2xl p-6 bg-white hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center font-extrabold text-emerald-950">
                ✓
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-emerald-950">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-emerald-900/75">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRESIDENTE (centrado, confianza máxima) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-3xl font-extrabold text-emerald-950">Dirección</h2>
        <p className="mt-2 text-emerald-900/70">
          Personas reales. Trato directo. Compromiso con cada entrega.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border border-emerald-200 bg-emerald-50 shadow-sm">
            <Image
              src="/images/presidente.jpg"
              alt="Carlos Mata"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-extrabold text-emerald-950">
              Carlos Mata
            </h3>
            <p className="text-emerald-900/70 font-semibold">Presidente</p>

            <div className="mt-4 max-w-2xl mx-auto text-emerald-900/75 space-y-3">
              <p>
                “Mi prioridad es simple: que cada cliente reciba calidad constante y que cada negocio
                pueda trabajar tranquilo con nosotros.”
              </p>
              <p className="text-sm">
                Atención directa, seguimiento claro y enfoque en cumplimiento.
              </p>
            </div>

            <a
              href="https://wa.me/18093185061?text=Hola%2C%20quisiera%20hablar%20con%20ustedes%20para%20suplir%20mi%20negocio%20%F0%9F%8D%93"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-6 bg-emerald-900 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
            >
              Suplir mi negocio
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA (pro) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-950">Galería</h2>
            <p className="mt-2 text-emerald-900/70">
              Campo, producto y entregas: la parte real del trabajo.
            </p>
          </div>
          <p className="text-sm text-emerald-900/60">
            Sube fotos en <b>/public/images/galeria/</b>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/galeria/presidente.jpg",
            "/images/galeria/segundo.jpg",
            "/images/galeria/tercero.jpg",
            "/images/galeria/cuarta.jpg",
            "/images/galeria/quinta.jpg",
            "/images/galeria/sexta.jpg",
            "/images/galeria/septima.jpg",
            "/images/galeria/octava.jpg",
          ].map((src) => (
            <div
              key={src}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-50"
            >
              <Image
                src={src}
                alt="Galería Farriña"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-emerald-950">
              ¿Listo para ordenar?
            </h2>
            <p className="mt-2 text-emerald-900/70">
              Pide en minutos. Te respondemos rápido y coordinamos la entrega.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="bg-emerald-900 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
            >
              Ver productos
            </Link>

            <a
              href="https://wa.me/18093185061?text=Hola%2C%20quiero%20hacer%20un%20pedido%20%F0%9F%8D%93"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:bg-green-600 transition"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}