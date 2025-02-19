import axios from "axios";

export async function GET(req: Request) {
    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;
    const JIRA_PROJECT_KEY = process.env.JIRA_PROJECT_KEY!;

    const jql = `project=${JIRA_PROJECT_KEY}`; 

    try {
        const response = await axios.get(`https://${JIRA_DOMAIN}/rest/api/3/search`, {
            params: {
                jql: jql,
                maxResults: 50,
            },
            headers: {
                'Authorization': `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
                'Accept': 'application/json',
            },
        });

        return new Response(JSON.stringify(response.data), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
