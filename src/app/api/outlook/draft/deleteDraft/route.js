import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const draftId = searchParams.get("draftId");
    const { tokenKey: token } = await getTokenByAppName("Outlook");

    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!draftId) {
      return new NextResponse(
        JSON.stringify({ error: "Draft ID is required" }),
        {
          status: 400,
        }
      );
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages/${draftId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete draft" }),
        {
          status: response.status,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Draft deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting draft:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
      }
    );
  }
}
