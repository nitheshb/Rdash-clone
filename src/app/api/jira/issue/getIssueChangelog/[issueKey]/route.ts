import axios from "axios";

export async function GET(req: Request, { params }: { params: { issueKey: string } }) {
  try {
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
      const response = await axios.get(
        `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/changelog`,
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
        JSON.stringify({ success: true, changelog: response.data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error("Error fetching issue changelog from Jira:", error.response?.data || error.message);
      return new Response(
        JSON.stringify({ error: error.response?.data || "Failed to fetch changelog" }),
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
