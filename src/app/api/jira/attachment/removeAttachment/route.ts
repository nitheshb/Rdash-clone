import axios from "axios";

export async function DELETE(req: Request) {
    const { attachmentId } = await req.json();

    if (!attachmentId) {
        return new Response(
            JSON.stringify({ error: "Attachment ID is required" }),
            { status: 400 }
        );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    try {
        await axios.delete(
            `https://${JIRA_DOMAIN}/rest/api/3/attachment/${attachmentId}`,
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
                    ).toString("base64")}`,
                    "X-Atlassian-Token": "no-check",
                    "Content-Type": "application/json",
                },
            }
        );

        return new Response(
            JSON.stringify({ success: true, message: "Attachment removed successfully" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error: any) {
        console.error("Error removing Jira attachment:", error.response?.data || error.message);

        if (axios.isAxiosError(error) && error.response) {
            return new Response(
                JSON.stringify({ error: error.response.data }),
                { status: error.response.status }
            );
        }

        return new Response(
            JSON.stringify({ error: "Failed to remove attachment" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
