import axios from "axios";

export async function GET(req: Request, { params }: { params: { issueKey: string } }) {
  try {
    // Extract the issueKey dynamically from the route parameters
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

    const response = await axios.get(
      `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    const status = response.data.fields.status.name;
    console.log("Status:", status)

    return new Response(
      JSON.stringify({ success: true, status: status }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error fetching issue status from Jira:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: error.response?.data || "Failed to fetch status" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
