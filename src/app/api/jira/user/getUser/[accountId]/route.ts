import axios from "axios";

export async function GET(req: Request, { params }: { params: { accountId: string } }) {
  try {
    const { accountId } = params; // Extract accountId from dynamic route parameters

    // Validate if accountId is present
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
      // Make a GET request to Jira to fetch user data based on accountId
      const response = await axios.get(
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
        JSON.stringify({ success: true, user: response.data }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error("Error fetching user data from Jira:", error.response?.data || error.message);
      return new Response(
        JSON.stringify({ error: error.response?.data || "Failed to fetch user" }),
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
