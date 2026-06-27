import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown, maxLength: number) {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;

    const name = field(payload.name, 120);
    const email = field(payload.email, 180);
    const phone = field(payload.phone, 80);
    const message = field(payload.message, 4000);
    const website = field(payload.website, 120);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, message: "Ju lutemi plotësoni të gjitha fushat." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Ju lutemi shkruani një email të vlefshëm." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "euro-al@outlook.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "EURO AL-SHPK <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Shërbimi i email-it nuk është konfiguruar ende. Ju lutemi kontaktoni direkt në euro-al@outlook.com."
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Kërkesë për ofertë nga ${name}`,
      text: [
        "Kërkesë e re nga website EURO AL-SHPK",
        "",
        `Emri: ${name}`,
        `Email: ${email}`,
        `Telefoni: ${phone}`,
        "",
        "Mesazhi:",
        message
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px; color: #0B0F19;">Kërkesë e re nga website EURO AL-SHPK</h2>
          <p><strong>Emri:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Telefoni:</strong> ${safePhone}</p>
          <p><strong>Mesazhi:</strong></p>
          <div style="padding: 16px; border-left: 4px solid #F4B400; background: #f8fafc;">
            ${safeMessage}
          </div>
        </div>
      `
    });

    if (error) {
      console.error("Resend contact email error:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Email-i nuk mund të dërgohej për momentin. Ju lutemi provoni përsëri ose kontaktoni direkt."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Kërkesa u dërgua me sukses. Do t'ju kontaktojmë së shpejti."
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Ndodhi një gabim i papritur. Ju lutemi provoni përsëri."
      },
      { status: 500 }
    );
  }
}
