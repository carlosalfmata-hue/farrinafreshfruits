// lib/cart.ts
export type CartItem = {
  id: string;
  name: string;
  price: number; // RD$ (0 = Consultar / no facturable)
  qty: number;
  unit?: string; // lb, unidad, caja...
  image?: string;
  category?: string; // fresas, vegetales...
};

const KEY = "farrina_cart_v1";

// ===== Helpers =====
function isBrowser() {
  return typeof window !== "undefined";
}

function readCart(): CartItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Sanitiza para evitar datos corruptos
    return parsed
      .map((x: any) => ({
        id: String(x.id),
        name: String(x.name ?? ""),
        price: Number(x.price ?? 0),
        qty: Math.max(1, Number(x.qty ?? 1)),
        unit: x.unit ? String(x.unit) : undefined,
        image: x.image ? String(x.image) : undefined,
        category: x.category ? String(x.category) : undefined,
      }))
      .filter((x) => x.id && x.name);
  } catch {
    return [];
  }
}

function writeCart(items: CartItem[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
  notifyCartUpdated();
}
function notifyCartUpdated() {
  if (!isBrowser()) return;
  window.dispatchEvent(new Event("farrina-cart-updated"));
}
// ===== Public API =====

/**
 * Devuelve el carrito desde localStorage.
 */
export function getCart(): CartItem[] {
  return readCart();
}

/**
 * Agrega un item. Si existe, suma qty.
 * price=0 significa "Consultar" (no facturable).
 */
export function addToCart(
  item: Omit<CartItem, "qty">,
  qty: number = 1
): CartItem[] {
  const cart = readCart();
  const q = Math.max(1, Number(qty || 1));

  const idx = cart.findIndex((x) => x.id === item.id);
  if (idx >= 0) {
    cart[idx].qty += q;
    // Si el producto ahora tiene precio, actualiza (sin romper si estaba 0)
    if (typeof item.price === "number") cart[idx].price = item.price;
    // Mantén metadata por si cambió
    cart[idx].name = item.name;
    cart[idx].unit = item.unit;
    cart[idx].image = item.image;
    cart[idx].category = item.category;
  } else {
    cart.push({ ...item, qty: q });
  }

  writeCart(cart);
  return cart;
}

/**
 * Cambia la cantidad de un producto.
 */
export function updateQty(id: string, qty: number): CartItem[] {
  const cart = readCart();
  const q = Math.max(1, Number(qty || 1));
  const updated = cart.map((x) => (x.id === id ? { ...x, qty: q } : x));
  writeCart(updated);
  return updated;
}

/**
 * Suma/resta cantidad usando delta (+1, -1, etc.)
 */
export function incrementQty(id: string, delta: number): CartItem[] {
  const cart = readCart();
  const updated = cart.map((x) => {
    if (x.id !== id) return x;
    const next = Math.max(1, x.qty + Number(delta || 0));
    return { ...x, qty: next };
  });
  writeCart(updated);
  return updated;
}

/**
 * Elimina un item.
 */
export function removeFromCart(id: string): CartItem[] {
  const cart = readCart();
  const updated = cart.filter((x) => x.id !== id);
  writeCart(updated);
  return updated;
}

/**
 * Limpia el carrito completo.
 */
export function clearCart(): CartItem[] {
  writeCart([]);
  return [];
}

/**
 * Total de items (suma de qty).
 */
export function getCartCount(): number {
  const cart = readCart();
  return cart.reduce((acc, it) => acc + it.qty, 0);
}

/**
 * Items facturables (price > 0).
 */
export function getBillableItems(): CartItem[] {
  return readCart().filter((x) => typeof x.price === "number" && x.price > 0);
}

/**
 * Items "Consultar" (price <= 0).
 */
export function getConsultItems(): CartItem[] {
  return readCart().filter((x) => !x.price || x.price <= 0);
}

/**
 * Totales (solo facturable por defecto).
 * Puedes pasar { includeConsult: true } si quieres incluirlos en subtotal (no recomendado).
 */
export function getTotals(opts?: { includeConsult?: boolean }) {
  const cart = readCart();
  const items = opts?.includeConsult ? cart : cart.filter((x) => x.price > 0);

  const subtotal = items.reduce((acc, it) => acc + it.price * it.qty, 0);
  const itbis = 0; // habilitar luego si aplica
  const total = subtotal + itbis;

  return { subtotal, itbis, total };
}

/**
 * Sincroniza precios desde tu catálogo (cuando un producto pasa de "Consultar" a tener precio).
 * Pasa un map: { [id]: price }
 */
export function syncPrices(priceMap: Record<string, number>): CartItem[] {
  const cart = readCart();
  const updated = cart.map((x) => {
    const newPrice = priceMap[x.id];
    if (typeof newPrice === "number" && newPrice >= 0) {
      return { ...x, price: newPrice };
    }
    return x;
  });
  writeCart(updated);
  return updated;
}