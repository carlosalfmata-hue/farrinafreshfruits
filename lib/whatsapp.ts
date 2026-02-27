export function buildWhatsAppLink(phoneE164: string, message: string) {
  const phone = phoneE164.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}