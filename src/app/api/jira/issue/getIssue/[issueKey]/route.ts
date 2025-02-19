import axios from 'axios';

export async function GET(req: Request, { params }: { params: { issueKey: string } }) {
  try {
    const { issueKey } = params;

    console.log('Issue Key:', issueKey);

    if (!issueKey) {
      return new Response(
        JSON.stringify({ error: 'Issue key is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    const issueUrl = `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}`;

    const response = await axios.get(issueUrl, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    return new Response(
      JSON.stringify({ success: true, data: response.data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error fetching Jira issue:', error);

    const errorMessage = error.response ? error.response.data : 'Failed to fetch issue';
    return new Response(
      JSON.stringify({
        error: errorMessage,
      }),
      { status: error.response ? error.response.status : 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
