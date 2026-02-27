export default function InvertirPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">Invertir</h2>
        <p className="text-emerald-900/70 mt-2">
          Estamos habilitando un modelo formal de inversión para expandir producción,
          logística y distribución. Por ahora, si te interesa participar, déjanos tus datos.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-emerald-950">
            ¿Qué buscamos?
          </h3>
          <ul className="mt-3 space-y-2 text-emerald-900/80 list-disc pl-5">
            <li>Capital para inventario, empaque y cadena de frío.</li>
            <li>Expansión de rutas y capacidad de entrega.</li>
            <li>Compras por volumen y alianzas comerciales.</li>
          </ul>

          <div className="mt-6 border-t border-emerald-100 pt-5">
            <h3 className="text-xl font-extrabold text-emerald-950">
              Próximamente (Fase 2)
            </h3>
            <p className="mt-2 text-emerald-900/70">
              Panel de inversión, seguimiento del flujo y condiciones transparentes.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="bg-green-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-md hover:bg-green-600 transition"
                href="https://wa.me/18093185061?text=Hola%2C%20me%20interesa%20invertir%20en%20Farri%C3%B1a%20Fresh%20Fruits.%20%C2%BFC%C3%B3mo%20funciona%20el%20modelo%3F%20Mi%20nombre%20es%3A"
                target="_blank"
                rel="noreferrer"
              >
                Hablar por WhatsApp
              </a>

              <a
                className="border border-emerald-300 px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-50 transition"
                href="mailto:farrinafreshfruits@gmail.com?subject=Inter%C3%A9s%20en%20invertir%20-%20Farri%C3%B1a%20Fresh%20Fruits&body=Hola%2C%20me%20interesa%20invertir.%0A%0ANombre%3A%0ATel%C3%A9fono%3A%0AMonto%20aprox%3A%0AObjetivo%3A"
              >
                Enviar correo
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-emerald-950">
            Transparencia
          </h3>
          <p className="mt-2 text-emerald-900/70">
            La información de inversión se publicará con términos claros,
            riesgos y retornos estimados (según regulación aplicable).
          </p>

          <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
            <p className="text-sm text-emerald-900/80">
              Nota: Esta página es informativa (Fase 1). El modelo final se
              habilitará en Fase 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}