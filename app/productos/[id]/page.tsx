import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import AddToCart from "@/components/AddToCart";

type PageProps = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: PageProps) {
  const product = (products as any[]).find((p) => String(p.id) === params.id);

  if (!product) {
    return (
      <div className="bg-white border border-field rounded-3xl p-10 shadow-soft">
        <h1 className="text-2xl font-extrabold text-field">Producto no encontrado</h1>
        <Link className="underline" href="/productos">
          Volver a productos
        </Link>
      </div>
    );
  }

  const priceIsNumber = typeof product.price === "number" && product.price > 0;

  return (
    <div className="space-y-10 anim-fadeUp">
      <section className="bg-white border border-field rounded-3xl p-6 md:p-10 shadow-soft bg-field-grad">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-field bg-[color:var(--sand)]">
            <Image
              src={product.image || "/images/placeholder.jpg"}
              alt={product.name || "Producto"}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-[color:var(--sand)] border border-field px-3 py-2 rounded-2xl text-xs font-extrabold">
              <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--gold)]" />
              Campo • Selección • Entrega
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-field">
              {product.name}
            </h1>

            <p className="mt-3 text-black/70 text-lg">
              {product.description ||
                "Producto fresco, seleccionado con criterio y entregado con cuidado."}
            </p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="bg-white border border-field rounded-2xl p-4">
                <div className="text-xs font-bold text-black/60">Calidad</div>
                <div className="font-extrabold text-field">Exportadora</div>
              </div>
              <div className="bg-white border border-field rounded-2xl p-4">
                <div className="text-xs font-bold text-black/60">Ideal para</div>
                <div className="font-extrabold text-field">
                  {product.segment || "Hogar y Negocios"}
                </div>
              </div>
              <div className="bg-white border border-field rounded-2xl p-4">
                <div className="text-xs font-bold text-black/60">Unidad</div>
                <div className="font-extrabold text-field">{product.unit || "Unidad"}</div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <div className="text-3xl font-extrabold text-field">
                {priceIsNumber
                  ? `RD$ ${Number(product.price).toLocaleString("es-DO")}`
                  : "Consultar"}
              </div>

              <span className="text-xs font-bold bg-[color:var(--sand)] border border-field px-3 py-2 rounded-2xl">
                {product.availability || "Disponible"}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <AddToCart product={product} />
              <Link
                href="/carrito"
                className="border border-field px-6 py-3 rounded-2xl font-extrabold hover:bg-[color:var(--sand)] transition"
              >
                Ir al carrito
              </Link>
              <Link
                href="/productos"
                className="border border-field px-6 py-3 rounded-2xl font-extrabold hover:bg-[color:var(--sand)] transition"
              >
                Volver
              </Link>
            </div>

            <p className="mt-4 text-xs text-black/55">
              * Si el producto aparece como “Consultar”, podrás agregarlo como solicitud,
              pero no se factura hasta que tenga precio asignado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}