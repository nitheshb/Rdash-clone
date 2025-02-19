import axios from "axios";

export async function DELETE(req: Request) {
  try {
    const { accountId }: { accountId: string } = await req.json();

    if (!accountId) {
      return new Response(
        JSON.stringify({ error: "Account ID is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    try {
      await axios.delete(
        `https://${JIRA_DOMAIN}/rest/api/3/user?accountId=${accountId}`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
            ).toString("base64")}`,
            "Content-Type": "application/json",
          },
        }
      );

      return new Response(
        JSON.stringify({ success: true, message: "User deleted successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error("Error deleting user in Jira:", error.response?.data || error.message);
      return new Response(
        JSON.stringify({ error: error.response?.data || "Failed to delete user" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error: any) {
    console.error("Error processing the request:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to process the request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
