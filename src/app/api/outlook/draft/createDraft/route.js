import fetch from "node-fetch";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  try {
    const { tokenKey: token } = await getTokenByAppName("Outlook");

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const { body, recipient, subject } = await req.json();
    console.log("Received Data:", { body, recipient, subject });

    if (!body) {
      return new Response(JSON.stringify({ error: "Email body is required" }), {
        status: 400,
      });
    }

    if (!recipient) {
      return new Response(
        JSON.stringify({ error: "Recipient email is required" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: subject,
          body: {
            contentType: "Text",
            content: body,
          },
          toRecipients: [
            {
              emailAddress: {
                address: recipient,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new Response(
        JSON.stringify({ error: "Failed to create draft", details: errorData }),
        { status: response.status }
      );
    }

    const draft = await response.json();

    return new Response(
      JSON.stringify({
        message: "Draft created successfully",
        draftId: draft.id,
        subject: draft.subject,
        message: draft.bodyPreview,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating draft:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
