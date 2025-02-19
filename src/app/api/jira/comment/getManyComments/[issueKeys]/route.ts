import axios from "axios";

export async function GET(req: Request, { params }: { params: { issueKeys: string } }) {
  try {
    const { issueKeys } = params; 
    const issueKeyList = issueKeys.split(",");

    if (!issueKeyList || issueKeyList.length === 0) {
      return new Response(
        JSON.stringify({ error: "At least one issue key is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    const allComments = [];

    for (const issueKey of issueKeyList) {
      try {
        const response = await axios.get(
          `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/comment`,
          {
            headers: {
              Authorization: `Basic ${Buffer.from(
                `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
              ).toString("base64")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.data || !response.data.comments) {
          console.log(`No comments found or empty response for issue: ${issueKey}`);
          continue;
        }

        allComments.push({
          issueKey,
          comments: response.data.comments,
        });
      } catch (error: any) {
        console.error(`Error fetching comments for issue ${issueKey}:`, error.response?.data || error.message);
      }
    }

    if (allComments.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No comments found for the provided issues" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, comments: allComments }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error fetching Jira comments:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: error.response?.data || "Failed to fetch comments" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
