import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  const { givenName, surname, emailAddresses } = await req.json();

  try {
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          givenName,
          surname,
          emailAddresses,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to create contact",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const contact = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Contact created successfully",
        contactId: contact.id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating contact:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
