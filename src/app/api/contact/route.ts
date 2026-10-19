import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error(
    "RESEND_API_KEY is missing in .env.local"
  );
}

const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "neekthegeek3@gmail.com",

      subject: `New message from ${name}`,

      html: `
        <div>
          <h2>Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}