import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const name = String(data.name || "").trim()
    const email = String(data.email || "").trim()
    const subject = String(data.subject || "").trim()
    const message = String(data.message || "").trim()
    const humanCheck = String(data.humanCheck || "").trim()
    const website = String(data.website || "").trim()

    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Alle felt må fylles ut." },
        { status: 400 }
      )
    }

    if (humanCheck !== "7") {
      return NextResponse.json(
        { ok: false, error: "Menneskesjekken er feil." },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Mangler RESEND_API_KEY." },
        { status: 500 }
      )
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "MediPro <post@medipro.no>",
      to: process.env.CONTACT_TO_EMAIL || "post@medipro.no",
      replyTo: email,
      subject: `MediPro kontaktskjema: ${subject}`,
      text: `
Navn: ${name}
E-post: ${email}
Emne: ${subject}

Melding:
${message}
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: "Kunne ikke sende meldingen." },
      { status: 500 }
    )
  }
}
