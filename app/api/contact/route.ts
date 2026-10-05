import { Resend } from "resend";
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";
import { site } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
        { status: 400 },
      );
    }

    const { website, ...payload } = parsed.data;

    if (website) {
      return NextResponse.json({ ok: true });
    }

    await sendEmail({ ...payload, receivedAt: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    const message =
      error instanceof Error && error.message
        ? error.message
        : "No pudimos procesar tu mensaje. Intentá de nuevo.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function sendEmail(entry: {
  name: string;
  email: string;
  subject: string;
  message: string;
  receivedAt: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("El envío de correo no está configurado.");
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Jampe <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: entry.email,
    subject: `Nueva consulta: ${entry.subject}`,
    html: `
      <div style="font-family: Inter, Arial, sans-serif; background:#141218; color:#e6e0e9; padding:24px;">
        <h2 style="color:#cfbcff;">Nueva consulta desde el sitio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(entry.name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(entry.email)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(entry.subject)}</p>
        <p><strong>Fecha:</strong> ${escapeHtml(entry.receivedAt)}</p>
        <p style="white-space:pre-wrap; background:#211f24; padding:16px; border-radius:12px;">${escapeHtml(entry.message)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error", error);
    throw new Error("No pudimos enviar el correo.");
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
