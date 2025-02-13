import axios from 'axios';

export async function DELETE(req: Request) {
  const { issueKey } = await req.json();

  if (!issueKey) {
    return new Response(JSON.stringify({ error: 'Issue key is required' }), { status: 400 });
  }

  const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
  const JIRA_EMAIL = process.env.JIRA_EMAIL!;
  const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

  try {
    const response = await axios.delete(`https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });

    // Return a successful response
    return new Response(JSON.stringify({ message: 'Issue deleted successfully', data: response.data }), { status: 200 });

  } catch (error) {
    console.error('Error deleting issue:', error);

    // Handle errors from the Jira API or network issues
    if (axios.isAxiosError(error) && error.response) {
      return new Response(JSON.stringify({ error: error.response.data }), { status: error.response.status });
    }

    return new Response(JSON.stringify({ error: 'Failed to delete issue' }), { status: 500 });
  }
}
