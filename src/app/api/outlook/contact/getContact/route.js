import { NextResponse } from "next/server";

export async function GET(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { searchParams } = new URL(req.url);
  const contactId = searchParams.get("contactId");

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  if (!contactId) {
    return new NextResponse(
      JSON.stringify({ error: "Contact ID is required" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/contacts/${contactId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to retrieve contact",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const contact = await response.json();
    return new NextResponse(JSON.stringify({ contact }), { status: 200 });
  } catch (error) {
    console.error("Error retrieving contact:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
