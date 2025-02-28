import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const contactId = searchParams.get("contactId");
  const { tokenKey: token } = await getTokenByAppName("Outlook");

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
        method: "DELETE",
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
          error: "Failed to delete contact",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: `Contact with ID ${contactId} deleted successfully`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
