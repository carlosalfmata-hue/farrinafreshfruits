import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();

  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const email = String(form.get("email") || "").trim();
  const plan = String(form.get("plan") || "").trim();
  const note = String(form.get("note") || "").trim();

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Faltan campos requeridos" }, { status: 400 });
  }

  // MVP: por ahora solo “log”. En producción: guardar en DB / Google Sheets / CRM.
  console.log("[INVEST-LEAD]", { name, phone, email, plan, note, at: new Date().toISOString() });

  // Puedes redirigir a una página de gracias si quieres
  return NextResponse.redirect(new URL("/invertir?enviado=1#solicitud", req.url));
}