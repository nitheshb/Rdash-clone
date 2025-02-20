import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { searchParams } = new URL(req.url);
  const messageId = searchParams.get("messageId");

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

    const attachmentResponse = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages/${messageId}/attachments/${attachmentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!attachmentResponse.ok) {
      const errorData = await attachmentResponse.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to download attachment",
          details: errorData,
        }),
        { status: attachmentResponse.status }
      );
    }

    const attachment = await attachmentResponse.json();

    return new NextResponse(
      JSON.stringify({
        message: "Attachment downloaded successfully",
        content: attachment.contentBytes,
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
