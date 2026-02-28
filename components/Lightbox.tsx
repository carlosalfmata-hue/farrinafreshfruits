"use client";

import Image from "next/image";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
};

export default function Lightbox({ isOpen, src, alt = "Imagen", onClose }: Props) {
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
        className="relative w-full max-w-4xl aspect-[16/10] bg-white rounded-3xl overflow-hidden border border-white/20 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-emerald-950 px-4 py-2 rounded-2xl font-bold shadow-sm transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}