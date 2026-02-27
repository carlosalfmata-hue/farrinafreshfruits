export default function CatalogoPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-emerald-200 rounded-3xl p-6 shadow-sm">
        <h2 className="text-3xl font-extrabold text-emerald-950">Catálogo</h2>
        <p className="text-emerald-900/70 mt-2">
          Visualiza nuestro catálogo en PDF o descárgalo.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            className="bg-emerald-900 text-white px-6 py-3 rounded-2xl font-semibold"
            href="/catalogo.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Abrir PDF
          </a>

          <a
            className="border border-emerald-300 px-6 py-3 rounded-2xl font-semibold hover:bg-emerald-50 transition"
            href="/catalogo.pdf"
            download
          >
            Descargar
          </a>
        </div>
      </div>

      <div className="bg-white border border-emerald-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="w-full h-[75vh]">
          <iframe
            title="Catálogo Farriña Fresh Fruits"
            src="/catalogo.pdf"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}