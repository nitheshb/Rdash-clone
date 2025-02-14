import fetch from "node-fetch";

export async function DELETE(req) {
  try {
    const token = process.env.OUTLOOK_ACCESS_TOKEN;

    if (!token) {
      return new Response(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const { draftId } = await req.json();

    if (!draftId) {
      return new Response(JSON.stringify({ error: "Draft ID is required" }), {
        status: 400,
      });
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages/${draftId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to delete draft" }), {
        status: response.status,
      });
    }

    return new Response(
      JSON.stringify({ message: "Draft deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting draft:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
