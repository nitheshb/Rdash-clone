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
      "https://graph.microsoft.com/v1.0/me/messages?$filter=folder eq 'drafts'",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch drafts" }), {
        status: response.status,
      });
    }

    const drafts = await response.json();
    return new Response(JSON.stringify(drafts), { status: 200 });
  } catch (error) {
    console.error("Error fetching drafts:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
