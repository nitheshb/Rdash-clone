import axios from "axios";

export async function DELETE(req: Request) {
  try {
    const { issueKey, commentId }: { issueKey: string, commentId: string } = await req.json();

    if (!issueKey || !commentId) {
      return new Response(
        JSON.stringify({ error: "Issue key and comment ID are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    try {
      const response = await axios.delete(
        `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/comment/${commentId}`,
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
        JSON.stringify({ success: true, message: "Comment removed successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error(`Error removing comment for issue ${issueKey}:`, error.response?.data || error.message);
      return new Response(
        JSON.stringify({ error: error.response?.data || "Failed to remove comment" }),
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
