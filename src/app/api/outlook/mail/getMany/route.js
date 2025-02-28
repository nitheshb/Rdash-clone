import fetch from "node-fetch";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  try {
    const { tokenKey: token } = await getTokenByAppName("Outlook");

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages?$top=25&$orderby=receivedDateTime desc",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch emails" }), {
        status: response.status,
      });
    }

    const data = await response.json();
    const emails = data.value;

    if (!emails || emails.length === 0) {
      return new Response(JSON.stringify({ message: "No emails found" }), {
        status: 200,
      });
    }

    console.log(emails, "The Complete Emails");

    const emailDetails = emails.map((email) => ({
      subject: email?.subject || "No subject",
      from: email?.from?.emailAddress?.address || "Unknown sender",
      receivedAt: email?.receivedDateTime || "Unknown time",
      body: email?.bodyPreview || "No body preview available",
      id: email?.id,
    }));

    return new Response(JSON.stringify(emailDetails), { status: 200 });
  } catch (error) {
    console.error("Error fetching all emails:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
