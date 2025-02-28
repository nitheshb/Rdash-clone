import fetch from "node-fetch";

export async function GET() {
  try {
    const token = process.env.OUTLOOK_ACCESS_TOKEN;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages?$filter=isDraft eq true",
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
        status: response.status || 500,
      });
    }

    const drafts = await response.json();

    if (drafts.value.length === 0) {
      return new Response(
        JSON.stringify({ error: "No drafts found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        drafts,
        id: drafts.value[0].id,
        subject: drafts.value[0].subject,
        message: drafts.value[0].bodyPreview,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching first draft:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
