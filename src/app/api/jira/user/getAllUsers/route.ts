import axios from "axios";

export async function GET(req: Request) {
  try {
    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    // Fetching users by querying the first 50 users
    const response = await axios.get(
      `https://${JIRA_DOMAIN}/rest/api/3/users/search?maxResults=50`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Filter users to include only those with accountType = "atlassian"
    const atlassianUsers = response.data.filter((user: any) => user.accountType === "atlassian");

    return new Response(
      JSON.stringify({ success: true, users: atlassianUsers }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error fetching users from Jira:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: error.response?.data || "Failed to fetch users" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
