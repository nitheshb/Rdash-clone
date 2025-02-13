import axios from "axios";

export async function POST(req: Request) {
    const { summary, description, issueType = 'Task' } = await req.json();

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;
    const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY!;

    const formattedDescription = {
        type: "doc",
        version: 1,
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: description,
                    }
                ]
            }
        ]
    };

    const issueData = {
        fields: {
            project: {
                key: JIRA_PROJECT_KEY,
            },
            summary,
            description: formattedDescription,
            issuetype: {
                name: issueType,
            },
        },
    };

    try {
        const response = await axios.post(`https://${JIRA_DOMAIN}/rest/api/3/issue`,
            issueData,
            {
            headers: {
                'Authorization': `Basic ${Buffer.from(
                    `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
                ).toString('base64')}`,
                'Content-Type': 'application/json',
            },
        });

        return new Response(JSON.stringify(response.data), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
