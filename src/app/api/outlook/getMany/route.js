import fetch from "node-fetch";

export async function GET(req) {
  try {
    const token = process.env.OUTLOOK_ACCESS_TOKEN;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages?$top=10&$orderby=receivedDateTime desc",
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

    const emailDetails = emails.map((email) => ({
      subject: email.subject || "No subject",
      from: email.from.emailAddress.address || "Unknown sender",
      receivedAt: email.receivedDateTime || "Unknown time",
      bodyPreview: email.bodyPreview || "No body preview available",
    }));

    return new Response(JSON.stringify(emailDetails), { status: 200 });
  } catch (error) {
    console.error("Error fetching all emails:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
