import axios from "axios";

export async function GET(req: Request, { params }: { params: { issueKey: string } }) {
  const { issueKey } = params;

  if (!issueKey) {
    return new Response(
      JSON.stringify({ error: "Issue key is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
  const JIRA_EMAIL = process.env.JIRA_EMAIL!;
  const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

  try {
    // Fetch comments for the given issue
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

    return new Response(
      JSON.stringify({ success: true, comments: response.data.comments }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error fetching Jira comments:", error.response?.data || error.message);

    if (axios.isAxiosError(error) && error.response) {
      return new Response(
        JSON.stringify({ error: error.response.data }),
        { status: error.response.status }
      );
    }

    return new Response(
      JSON.stringify({ error: "Failed to fetch comments" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
