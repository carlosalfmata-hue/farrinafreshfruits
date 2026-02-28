"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Img = { src: string; alt: string };

function Lightbox({
  isOpen,
  src,
  alt,
  onClose,
}: {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl aspect-[16/10] bg-white rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={onClose}
            className="bg-white/90 hover:bg-white text-emerald-950 px-4 py-2 rounded-2xl font-bold shadow-sm transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ConocenosPage() {
  const images: Img[] = useMemo(
    () => [
      { src: "/images/galeria/presidente.jpg", alt: "Presidente" },
      { src: "/images/galeria/segundo.jpg", alt: "Campo" },
      { src: "/images/galeria/tercero.jpg", alt: "Cosecha" },
      { src: "/images/galeria/cuarta.jpg", alt: "Selección" },
      { src: "/images/galeria/quinta.jpg", alt: "Producto" },
      { src: "/images/galeria/sexta.jpg", alt: "Empaque" },
      { src: "/images/galeria/septima.jpg", alt: "Entrega" },
      { src: "/images/galeria/octava.jpg", alt: "Trabajo" },
    ],
    []
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Img>(images[0]);

  return (
    <div className="space-y-12">
      {/* HERO / HEADER con fondo campo */}
      <section className="relative overflow-hidden rounded-[32px] border border-emerald-200 shadow-sm">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/campo.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/45 to-emerald-950/10" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,white,transparent_55%)]" />

        <div className="relative px-6 py-10 md:px-12 md:py-14">
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
                Bonao • Negocio familiar dominicano
              </p>
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Conócenos
              </h1>
            </div>
          </div>

          <div className="mt-8 max-w-4xl text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              20 años trabajando con calidad real 🍓
            </h2>
            <p className="mt-4 text-white/90 text-lg md:text-xl">
              Nacimos en Bonao y crecimos con una regla simple:
              <b> entregar producto que un negocio pueda recibir con confianza</b>.
              Nuestra diferencia no es un slogan: es la consistencia.
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

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <div className="bg-white/90 text-emerald-950 border border-white/40 rounded-2xl p-4 hover:bg-white transition">
                <div className="text-3xl font-extrabold leading-none">20</div>
                <div className="text-sm font-semibold">Años de experiencia</div>
                <div className="text-xs opacity-80 mt-1">Trabajo constante desde Bonao.</div>
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

      {/* HISTORIA */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-950">
              Nuestra historia
            </h2>
            <p className="mt-2 text-emerald-900/70 max-w-3xl">
              Esto no empezó con anuncios. Empezó con reputación: entrega tras entrega.
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
            Compra un proveedor que responda, que cumpla y que mantenga el estándar.
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
              desc: "Arrancamos en Bonao con disciplina y enfoque en calidad.",
            },
            {
              year: "2012",
              title: "Clientes de negocio",
              desc: "Empezamos a suplir comercios que exigían consistencia.",
            },
            {
              year: "2018",
              title: "Estandarización",
              desc: "Mejoramos selección, manejo y coordinación de pedidos.",
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

      {/* CALIDAD */}
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
              desc: "Elegimos con criterio: frescura, firmeza y presentación.",
            },
            {
              title: "Manejo responsable",
              desc: "Cuidamos el producto como si fuera para nuestra casa.",
            },
            {
              title: "Cumplimiento claro",
              desc: "Confirmación y seguimiento directo por WhatsApp. Sin cuentos.",
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

      {/* PRESIDENTE (centrado) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm text-center">
        <h2 className="text-3xl font-extrabold text-emerald-950">Dirección</h2>
        <p className="mt-2 text-emerald-900/70">
          Personas reales. Trato directo. Compromiso con cada entrega.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border border-emerald-200 bg-emerald-50 shadow-sm">
            <Image
              src="/images/galeria/presidente.jpg"
              alt="Carlos Mata"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-extrabold text-emerald-950">Carlos Mata</h3>
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
              href="https://wa.me/18093185061?text=Hola%2C%20quisiera%20suplir%20mi%20negocio%20con%20ustedes%20%F0%9F%8D%93"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-6 bg-emerald-900 text-white px-6 py-3 rounded-2xl font-extrabold shadow-sm hover:opacity-95 transition"
            >
              Suplir mi negocio
            </a>
          </div>
        </div>
      </section>

      {/* GALERÍA (clic para ampliar) */}
      <section className="bg-white border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-950">Galería</h2>
            <p className="mt-2 text-emerald-900/70">
              Toca una foto para verla más grande.
            </p>
          </div>
          <p className="text-sm text-emerald-900/60">
            Carpeta: <b>/public/images/galeria/</b>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <button
              key={img.src}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-emerald-100 bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              onClick={() => {
                setActive(img);
                setOpen(true);
              }}
              aria-label={`Abrir imagen: ${img.alt}`}
            >
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition" />
              <div className="absolute bottom-2 left-2 text-xs font-bold bg-white/90 px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition">
                Ver
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        isOpen={open}
        src={active?.src ?? images[0].src}
        alt={active?.alt ?? "Imagen"}
        onClose={() => setOpen(false)}
      />

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