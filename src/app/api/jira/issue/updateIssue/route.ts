import axios from 'axios';

export async function PUT(req: Request) {
  try {
    const { issueKey, summary, description, issueType = 'Task' } = await req.json();

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

    if (!issueKey) {
      return new Response(
        JSON.stringify({ error: 'Issue key is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const updatedIssueData = {
      fields: {
        summary: summary || '',
        description: formattedDescription || '',
        issuetype: { 
          name: issueType 
        },
      },
    };
    const url = `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}`;
    const response = await axios.put(
      url,
      updatedIssueData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(
            `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
          ).toString('base64')}`,
        },
      }
    );

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error("Error updating Jira issue:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Error updating Jira issue',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
