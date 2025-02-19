import axios from "axios";

export async function GET(req: Request, { params }: { params: { issueKey: string } }) {
  try {
    const { issueKey } = params; 

    if (!issueKey) {
      return new Response(
        JSON.stringify({ error: "At least one issue key is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const issueKeyList = issueKey.split(",");

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    const allAttachments = [];

    for (const issueKey of issueKeyList) {
      try {
        const response = await axios.get(
          `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}?fields=attachment`,
          {
            headers: {
              Authorization: `Basic ${Buffer.from(
                `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
              ).toString("base64")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.data || !response.data.fields.attachment) {
          console.log(`No attachments found or empty response for issue: ${issueKey}`);
          continue;
        }

        allAttachments.push({
          issueKey,
          attachments: response.data.fields.attachment,
        });
      } catch (error: any) {
        console.error(`Error fetching attachments for issue ${issueKey}:`, error.response?.data || error.message);
      }
    }

    if (allAttachments.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No attachments found for the provided issues" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, attachments: allAttachments }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error fetching Jira issue attachments:", error.response?.data || error.message);
    return new Response(
      JSON.stringify({ error: error.response?.data || "Failed to fetch attachments" }),
      { status: error.response?.status || 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
