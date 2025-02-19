import axios from "axios";

export async function PUT(req: Request) {
  try {
    const { issueKey, commentId, newComment }: { issueKey: string, commentId: string, newComment: string } = await req.json();

    if (!issueKey || !commentId || !newComment) {
      return new Response(
        JSON.stringify({ error: "Issue key, comment ID, and new comment are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    const formattedComment = {
        type: "doc",
        version: 1,
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: newComment,
              },
            ],
          },
        ],
      };
    

    try {
      const response = await axios.put(
        `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/comment/${commentId}`,
        {
            body: formattedComment,
        },
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
        JSON.stringify({ success: true, message: "Comment updated successfully", data: response.data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error(`Error updating comment for issue ${issueKey}:`, error.response?.data || error.message);
      return new Response(
        JSON.stringify({ error: error.response?.data || "Failed to update comment" }),
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
