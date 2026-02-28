import { NextRequest } from "next/server";
import PDFDocument from "pdfkit";

export const runtime = "nodejs";

type CartItem = {
  id: string;
  name: string;
  qty: number;
  price: number; // RD$
  unit?: string; // ej: "lb", "caja"
};

type Customer = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  rnc?: string;
};

function moneyRD(n: number) {
  return `RD$ ${n.toFixed(2)}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const items: CartItem[] = Array.isArray(body?.items) ? body.items : [];
  const customer: Customer = body?.customer || {};

  if (!items.length) {
    return new Response("No items", { status: 400 });
  }

  // Validación mínima
  for (const it of items) {
    if (!it?.name || typeof it.qty !== "number" || typeof it.price !== "number") {
      return new Response("Invalid item", { status: 400 });
    }
  }

  const doc = new PDFDocument({ size: "A4", margin: 50 });

  const chunks: Buffer[] = [];
  doc.on("data", (c) => chunks.push(c));
  const done = new Promise<Buffer>((resolve) => doc.on("end", () => resolve(Buffer.concat(chunks))));

  // ====== HEADER ======
  // Logo (opcional): pon tu logo en public/images/logo.jpg
  // PDFKit no puede leer directo desde /public en serverless sin fs, así que lo dejamos sin logo por ahora.
  // Cuando quieras logo en PDF, lo hacemos con ruta fs del proyecto (te lo ajusto).
  doc.font("Helvetica-Bold").fontSize(18).fillColor("#0F3D2E").text("Farriña Fresh Fruits");
  doc.font("Helvetica").fontSize(10).fillColor("#333").text("Bonao, República Dominicana");
  doc.moveDown(0.4);
  doc.font("Helvetica-Bold").fontSize(14).fillColor("#000").text("FACTURA / COTIZACIÓN");
  doc.font("Helvetica").fontSize(10).fillColor("#333").text(`Fecha: ${new Date().toLocaleString("es-DO")}`);
  doc.moveDown();

  // ====== CLIENTE ======
  doc.font("Helvetica-Bold").fontSize(11).fillColor("#0F3D2E").text("Datos del cliente");
  doc.font("Helvetica").fontSize(10).fillColor("#000");

  const cName = (customer.name || "").trim() || "—";
  const cPhone = (customer.phone || "").trim() || "—";
  const cEmail = (customer.email || "").trim() || "—";
  const cAddr = (customer.address || "").trim() || "—";
  const cRnc = (customer.rnc || "").trim() || "—";

  doc.text(`Nombre: ${cName}`);
  doc.text(`Teléfono: ${cPhone}`);
  doc.text(`Correo: ${cEmail}`);
  doc.text(`Dirección: ${cAddr}`);
  doc.text(`RNC (opcional): ${cRnc}`);
  doc.moveDown();

  // ====== TABLA ITEMS ======
  const startY = doc.y;
  const x1 = 50;
  const x2 = 310; // qty
  const x3 = 360; // price
  const x4 = 460; // total

  doc.font("Helvetica-Bold").fontSize(10).fillColor("#0F3D2E");
  doc.text("Producto", x1, startY);
  doc.text("Cant.", x2, startY);
  doc.text("Precio", x3, startY);
  doc.text("Total", x4, startY);

  doc.moveTo(50, startY + 15).lineTo(545, startY + 15).strokeColor("#0F3D2E").lineWidth(1).stroke();
  doc.moveDown(1.2);

  doc.font("Helvetica").fontSize(10).fillColor("#000");

  let subtotal = 0;
  items.forEach((it) => {
    const line = it.price * it.qty;
    subtotal += line;

    const y = doc.y;
    doc.text(it.name + (it.unit ? ` (${it.unit})` : ""), x1, y, { width: 250 });
    doc.text(String(it.qty), x2, y);
    doc.text(moneyRD(it.price), x3, y);
    doc.text(moneyRD(line), x4, y);

    doc.moveDown(0.8);
  });

  doc.moveDown(0.3);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor("#ddd").lineWidth(1).stroke();
  doc.moveDown(0.7);

  // ====== TOTALES ======
  const itbis = 0; // puedes habilitarlo luego
  const total = subtotal + itbis;

  doc.font("Helvetica").fontSize(11).fillColor("#000");
  doc.text(`Subtotal: ${moneyRD(subtotal)}`, { align: "right" });
  doc.text(`ITBIS: ${moneyRD(itbis)}`, { align: "right" });

  doc.font("Helvetica-Bold").fontSize(14).fillColor("#0F3D2E");
  doc.text(`TOTAL: ${moneyRD(total)}`, { align: "right" });

  doc.moveDown(1.2);

  // ====== NOTAS ======
  doc.font("Helvetica").fontSize(9).fillColor("#444");
  doc.text(
    "Nota: Esta factura/cotización está sujeta a disponibilidad y confirmación de entrega. " +
      "Para coordinar entrega, el equipo confirmará por WhatsApp o llamada.",
    { align: "left" }
  );

  doc.moveDown(0.6);
  doc.text("Gracias por confiar en Farriña Fresh Fruits.", { align: "left" });

  doc.end();
const pdf = await done;

// 👇 Convertir Buffer -> Uint8Array (compatible con Response en Next/TS)
return new Response(new Uint8Array(pdf), {
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename="factura-farrina.pdf"',
  },
});
}