import Image from "next/image";

export default function ConocenosPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h1 className="text-4xl font-extrabold text-emerald-950">Conócenos</h1>
        <p className="mt-3 text-emerald-900/70 text-lg max-w-3xl">
          Detrás de cada caja de fresas hay familia, trabajo y campo dominicano.
          Aquí te contamos nuestra historia con detalle.
        </p>
      </section>

      {/* Historia (larga, separada del home) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-extrabold text-emerald-950">Nuestra historia</h2>

        <div className="mt-4 space-y-4 text-emerald-900/80 leading-relaxed">
          <p>
            Farriña Fresh Fruits nace como un esfuerzo familiar con una idea simple:
            llevar fresas frescas, bien seleccionadas y con trato honesto a cada cliente.
            Crecimos con el boca a boca, con personas que valoran la frescura real y el
            servicio directo.
          </p>

          <p>
            Nuestro enfoque siempre ha sido el mismo: calidad constante. Eso implica
            escoger bien, cuidar la manipulación, y coordinar entregas de manera clara
            y responsable. Para nosotros, cada pedido representa una relación: hogares,
            negocios, colmados y supermercados que necesitan un proveedor serio.
          </p>

          <p>
            Hoy seguimos con la misma esencia: trabajo de campo, selección cuidadosa y
            logística organizada. Y estamos construyendo una plataforma para que más
            personas puedan conocernos, comprar de forma simple y, en una próxima fase,
            participar en nuestro crecimiento.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/50">
              <h3 className="font-extrabold text-emerald-950">Valores</h3>
              <ul className="mt-2 text-sm list-disc pl-5 space-y-1">
                <li>Honestidad</li>
                <li>Responsabilidad</li>
                <li>Calidad constante</li>
                <li>Trato humano</li>
              </ul>
            </div>

            <div className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/50">
              <h3 className="font-extrabold text-emerald-950">Misión</h3>
              <p className="mt-2 text-sm">
                Llevar fresas y productos agrícolas frescos a hogares y negocios dominicanos
                con un servicio directo y confiable.
              </p>
            </div>

            <div className="border border-emerald-100 rounded-2xl p-5 bg-emerald-50/50">
              <h3 className="font-extrabold text-emerald-950">Visión</h3>
              <p className="mt-2 text-sm">
                Ser una marca familiar reconocida por frescura, cumplimiento y confianza
                en el mercado nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presidente centrado (confianza) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-extrabold text-emerald-950">Equipo</h2>
        <p className="mt-2 text-emerald-900/70">
          Personas reales, atención directa y compromiso con cada entrega.
        </p>

        <div className="mt-8 flex flex-col items-center text-center">
          {/* Foto del presidente (centrada) */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-emerald-200 bg-emerald-50 shadow-sm">
            {/* Cambia esta ruta a tu foto real */}
            <Image
              src="/images/presidente.jpg"
              alt="Carlos Mata"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="mt-4">
            <div className="text-2xl font-extrabold text-emerald-950">Carlos Mata</div>
            <div className="text-emerald-900/70 font-semibold">Presidente</div>
            <p className="mt-3 max-w-2xl text-emerald-900/75">
              Lidera la operación con enfoque en calidad, cumplimiento y relación directa
              con clientes. Nuestro objetivo es crecer sin perder la esencia familiar.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4 w-full max-w-3xl">
            <div className="border border-emerald-100 rounded-2xl p-5 text-left">
              <div className="font-extrabold text-emerald-950">Atención</div>
              <p className="mt-1 text-sm text-emerald-900/75">
                Respuesta rápida y seguimiento claro por WhatsApp.
              </p>
            </div>
            <div className="border border-emerald-100 rounded-2xl p-5 text-left">
              <div className="font-extrabold text-emerald-950">Cumplimiento</div>
              <p className="mt-1 text-sm text-emerald-900/75">
                Coordinación responsable de entregas y pedidos.
              </p>
            </div>
          </div>
        </div>

        {/* Miembro adicional (opcional) */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="border border-emerald-100 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-200" />
            <div>
              <div className="font-extrabold text-emerald-950">Guaremate</div>
              <div className="text-sm text-emerald-900/70">Operaciones / Ventas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-extrabold text-emerald-950">Galería</h2>
        <p className="mt-2 text-emerald-900/70">
          Campo, producto y entregas. (Sube tus fotos a <b>/public/images/galeria/</b>)
        </p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "/images/galeria/1.jpg",
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

      {/* CTA final */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-6 md:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-2xl font-extrabold text-emerald-950">
              ¿Hacemos tu pedido hoy?
            </h2>
            <p className="mt-2 text-emerald-900/70">
              Escríbenos y coordinamos rápido. Trato directo, como debe ser.
            </p>
          </div>

          <a
            href="https://wa.me/18093185061?text=Hola%2C%20vengo%20de%20la%20secci%C3%B3n%20Con%C3%B3cenos%20y%20quiero%20hacer%20un%20pedido%20%F0%9F%8D%93"
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center bg-green-500 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:bg-green-600 transition"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}