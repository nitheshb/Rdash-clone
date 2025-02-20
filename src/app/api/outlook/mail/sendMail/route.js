import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function POST(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { to, subject, body } = await req.json();

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!to || !subject || !body) {
      return new NextResponse(
        JSON.stringify({
          error: "Missing required fields: to, subject, or body",
        }),
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/sendMail",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject,
            body: {
              contentType: "Text",
              content: body,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: to,
                },
              },
            ],
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error sending email:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to send email", details: errorData }),
        { status: 500 }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
