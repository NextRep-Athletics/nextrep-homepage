import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/lib/emails/ContactEmail";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, email, phone, fitnessGoal, message } = await req.json();

  // Validate required fields
  if (!fullName || !email || !fitnessGoal || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_EMAIL_TO;
  if (!to) {
    return NextResponse.json(
      { error: "Recipient email is not configured." },
      { status: 500 },
    );
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject: `New Training Inquiry from ${fullName}`,
    react: ContactEmail({ fullName, email, phone, fitnessGoal, message }),
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
