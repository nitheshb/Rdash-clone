import { NextResponse } from "next/server";

export async function PATCH(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { contactId, givenName, surname, emailAddresses } = await req.json();

  console.log("ms;dmcds", contactId, givenName, surname, emailAddresses);

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
        method: "PATCH",
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
          error: "Failed to update contact",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const updatedContact = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: `Contact with ID ${contactId} updated successfully`,
        updatedContact,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating contact:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
