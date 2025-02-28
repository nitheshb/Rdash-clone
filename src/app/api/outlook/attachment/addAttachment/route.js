import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  const { messageId, fileName, fileContent, contentType } = await req.json();

  const { tokenKey: token } = await getTokenByAppName("Outlook");
  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!messageId || !fileName || !fileContent) {
      return new NextResponse(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const attachment = {
      "@odata.type": "#microsoft.graph.fileAttachment",
      name: fileName,
      contentType: contentType || "application/octet-stream",
      contentBytes: Buffer.from(fileContent).toString("base64"),
    };

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages/${messageId}/attachments`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attachment),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to add attachment",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const attachmentResponse = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Attachment added successfully",
        attachment: attachmentResponse,
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
