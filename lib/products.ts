import raw from "@/data/products.json";

export type Product = {
  id: string;
  name: string;
  category: "Fresas" | "Vegetales" | "Frutas" | string;
  variant: string;     // 2 lb / 5 lb / Unidad / Libra
  price: number;       // RD$
  image: string;
  short: string;
};

export function getProducts(): Product[] {
  return raw as Product[];
}