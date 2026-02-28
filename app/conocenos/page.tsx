import Image from "next/image";

export default function ConocenosPage() {
  return (
    <div className="space-y-12">

      {/* HERO CONOCENOS */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-950">
          Conócenos
        </h1>
        <p className="mt-4 text-emerald-900/70 text-lg max-w-3xl">
          Más que una empresa, somos una familia trabajando la tierra con disciplina,
          calidad y compromiso desde Bonao.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">
          Nuestra historia
        </h2>

        <div className="mt-6 space-y-5 text-emerald-900/80 leading-relaxed text-lg">
          <p>
            Farriña Fresh Fruits nace en <b>Bonao</b> hace más de <b>20 años</b>.
            Comenzamos como un proyecto familiar con una convicción clara:
            trabajar con honestidad y entregar producto de calidad constante.
          </p>

          <p>
            En el campo aprendimos que la reputación no se construye con palabras,
            sino con cumplimiento. Cada entrega representa nuestro nombre,
            nuestra familia y nuestro compromiso.
          </p>

          <p>
            A lo largo de los años hemos trabajado principalmente con
            <b> negocios y comercios</b> que necesitan un proveedor confiable.
            Sabemos que un negocio no puede fallar por culpa del producto.
            Por eso nuestro enfoque siempre ha sido el mismo:
            <b> calidad real y consistencia.</b>
          </p>

          <p>
            Para nosotros, calidad significa selección cuidadosa,
            manejo responsable y un estándar que se mantiene.
            No vendemos lo que sobra.
            Vendemos lo que representa nuestro trabajo.
          </p>

          <p>
            Hoy seguimos creciendo sin perder la esencia familiar.
            Modernizamos procesos, organizamos entregas y fortalecemos nuestra
            presencia digital, pero mantenemos lo más importante:
            el trato cercano y la responsabilidad.
          </p>
        </div>

        {/* Valores / Misión / Visión */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="border border-emerald-100 rounded-2xl p-6 bg-emerald-50/50">
            <h3 className="font-extrabold text-emerald-950 text-xl">Valores</h3>
            <ul className="mt-3 text-emerald-900/80 space-y-2">
              <li>Honestidad</li>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Trabajo familiar</li>
            </ul>
          </div>

          <div className="border border-emerald-100 rounded-2xl p-6 bg-emerald-50/50">
            <h3 className="font-extrabold text-emerald-950 text-xl">Misión</h3>
            <p className="mt-3 text-emerald-900/80">
              Llevar productos agrícolas frescos y seleccionados a hogares
              y negocios dominicanos con atención directa y confiable.
            </p>
          </div>

          <div className="border border-emerald-100 rounded-2xl p-6 bg-emerald-50/50">
            <h3 className="font-extrabold text-emerald-950 text-xl">Visión</h3>
            <p className="mt-3 text-emerald-900/80">
              Ser una marca familiar reconocida por calidad constante
              y cumplimiento en el mercado nacional.
            </p>
          </div>
        </div>
      </section>

      {/* PRESIDENTE */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-3xl font-extrabold text-emerald-950">
          Dirección
        </h2>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border border-emerald-200 shadow-sm">
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
            <p className="text-emerald-900/70 font-semibold">
              Presidente
            </p>

            <p className="mt-4 max-w-2xl mx-auto text-emerald-900/75">
              Lidera el proyecto con enfoque en calidad, organización
              y crecimiento responsable. Su visión es expandir sin perder
              la esencia familiar que ha definido la marca durante más de 20 años.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">
          Nuestro trabajo
        </h2>
        <p className="mt-3 text-emerald-900/70">
          Campo, producto y compromiso en cada etapa.
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/galeria/presidente.jpg",
            "/images/galeria/2.jpg",
            "/images/galeria/3.jpg",
            "/images/galeria/4.jpg",
          ].map((src) => (
            <div
              key={src}
              className="relative aspect-square rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-50"
            >
              <Image src={src} alt="Galería" fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-emerald-950">
              ¿Trabajamos juntos?
            </h2>
            <p className="mt-2 text-emerald-900/70">
              Si tienes un negocio o deseas hacer un pedido, contáctanos directamente.
            </p>
          </div>

          <a
            href="https://wa.me/18093185061?text=Hola%2C%20quiero%20hacer%20un%20pedido%20%F0%9F%8D%93"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:bg-green-600 transition"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}