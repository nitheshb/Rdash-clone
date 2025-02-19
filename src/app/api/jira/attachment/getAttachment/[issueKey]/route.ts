import axios from "axios";

export async function GET(req: Request) {
  try {
    const { issueKeys }: { issueKeys: string[] } = await req.json();  // Expecting an array of issue keys

    if (!issueKeys || issueKeys.length === 0) {
      return new Response(
        JSON.stringify({ error: "At least one issue key is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    const allComments = [];

    // Fetch comments for each issue
    for (const issueKey of issueKeys) {
      const response = await axios.get(
        `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/comment`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${JIRA_EMAIL}:${JIRA_API_TOKEN}`
            ).toString("base64")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.comments) {
        const comments = response.data.comments.map((comment: any) => {
          // Extract text content from the structured content (doc format)
          const textContent = extractTextFromComment(comment.body);
          return {
            id: comment.id,
            author: comment.author.displayName,
            body: textContent,
            created: comment.created,
          };
        });

        allComments.push({
          issueKey,
          comments,
        });
      }
    }

    return new Response(
      JSON.stringify({ success: true, comments: allComments }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error fetching Jira comments:", error.response?.data || error.message);

    if (axios.isAxiosError(error) && error.response) {
      return new Response(
        JSON.stringify({ error: error.response.data }),
        { status: error.response.status }
      );
    }

    return new Response(
      JSON.stringify({ error: "Failed to fetch comments" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Helper function to extract text from structured comment body (Jira doc format)
function extractTextFromComment(body: any): string {
  let textContent = '';

  // If the body is a document type (common in Jira rich text format)
  if (body.type === 'doc' && body.content) {
    body.content.forEach((para: any) => {
      // Iterate through paragraph content
      para.content.forEach((item: any) => {
        if (item.type === 'text') {
          // If it's a text type, append its text value
          textContent += item.text;
        }
      });
    });
  }

  return textContent;
}
