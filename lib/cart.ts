export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  image?: string;
};

const KEY = "ff_cart_v1";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));

  // Notificar a la app (Navbar, etc.) que el carrito cambió
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("ff_cart_updated"));
  }
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  const idx = cart.findIndex((x) => x.id === item.id && x.variant === item.variant);
  if (idx >= 0) cart[idx].qty += item.qty;
  else cart.push(item);
  saveCart(cart);
  return cart;
}

export function removeFromCart(id: string, variant: string) {
  const updated = getCart().filter((x) => !(x.id === id && x.variant === variant));
  saveCart(updated);
  return updated;
}

export function updateQty(id: string, variant: string, qty: number) {
  const updated = getCart().map((x) =>
    x.id === id && x.variant === variant ? { ...x, qty: Math.max(1, qty) } : x
  );
  saveCart(updated);
  return updated;
}