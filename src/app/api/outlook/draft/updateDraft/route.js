import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function PATCH(req) {
  const { draftId, subject, body, recipient } = await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!draftId) {
      return new NextResponse(
        JSON.stringify({ error: "Draft ID is required" }),
        { status: 400 }
      );
    }

    const updateData = {
      subject: subject || "Updated Subject",
      body: {
        contentType: "Text",
        content: body || "Updated body content here",
      },
      toRecipients: [
        {
          emailAddress: {
            address: recipient || "ensaraisites@gmail.com",
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages/${draftId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Graph API Error:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to update draft", details: errorData }),
        { status: response.status }
      );
    }

    const updatedDraft = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Draft updated successfully",
        draftId: updatedDraft.id,
        subject: updatedDraft.subject,
        message: updatedDraft.bodyPreview,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating draft:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
