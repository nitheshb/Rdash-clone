import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const messageId = searchParams.get("messageId");
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!messageId) {
      return new NextResponse(
        JSON.stringify({ error: "Message ID is required" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages/${messageId}/attachments`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to retrieve attachments",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const attachmentData = await response.json();

    if (!attachmentData.value || attachmentData.value.length === 0) {
      return new NextResponse(
        JSON.stringify({ error: "No attachments found" }),
        { status: 404 }
      );
    }

    const attachmentId = attachmentData.value[0].id;

    return new NextResponse(
      JSON.stringify({
        message: "Attachment retrieved successfully",
        attachmentId,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
