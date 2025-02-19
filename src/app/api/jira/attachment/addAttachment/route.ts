import axios from "axios";
import FormData from "form-data";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const issueKey = formData.get("issueKey") as string;
        const file = formData.get("file") as File;

        if (!issueKey || !file) {
            return new Response(JSON.stringify({ error: "Issue key and file are required" }), { status: 400 });
        }

        const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
        const JIRA_EMAIL = process.env.JIRA_EMAIL!;
        const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

        // Convert file to Buffer
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        // Append to FormData
        const jiraFormData = new FormData();
        jiraFormData.append("file", fileBuffer, file.name);

        const response = await axios.post(
            `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/attachments`,
            jiraFormData,
            {
                headers: {
                    ...jiraFormData.getHeaders(),
                    Authorization: `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString("base64")}`,
                    "X-Atlassian-Token": "no-check",
                },
            }
        );

        return new Response(JSON.stringify({ success: true, data: response.data }), { status: 200, headers: { "Content-Type": "application/json" }  });
    } catch (error: any) {
        console.error("Jira Upload Error:", error.response?.data || error.message);
        return new Response(JSON.stringify({ error: error.response?.data || "Failed to upload attachment" }), { status: error.response?.status || 500, headers: { "Content-Type": "application/json" } });
    }
}
