import fetch from "node-fetch";

export async function GET(req) {
  try {
    const token = process.env.OUTLOOK_ACCESS_TOKEN;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    console.log("The Token:", token);

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages?$filter=isRead eq false&$top=1&$orderby=receivedDateTime desc",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch email" }), {
        status: response.status,
      });
    }

    const data = await response.json();
    const latestUnreadEmail = data.value[0];
    console.log(data, latestUnreadEmail, "ljlsd");

    if (!latestUnreadEmail) {
      return new Response(
        JSON.stringify({ message: "No unread emails found" }),
        { status: 200 }
      );
    }

    const subject = latestUnreadEmail?.subject || "No subject";
    const from =
      latestUnreadEmail?.from?.emailAddress?.address || "Unknown sender";
    const receivedAt = latestUnreadEmail?.receivedDateTime || "Unknown time";
    const body = latestUnreadEmail?.bodyPreview || "No body preview available";
    const id = latestUnreadEmail?.id || "";

    return new Response(
      JSON.stringify({
        message: "Unread email found",
        subject,
        from,
        receivedAt,
        body,
        id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching the latest unread email:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
