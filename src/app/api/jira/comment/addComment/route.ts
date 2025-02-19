import axios from "axios";

export async function POST(req: Request) {
  const { issueKey, comment } = await req.json();

  if (!issueKey || !comment) {
    return new Response(
      JSON.stringify({ error: "Issue key and comment are required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
  const JIRA_EMAIL = process.env.JIRA_EMAIL!;
  const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

  // Format the comment into the required "doc" structure
  const formattedComment = {
    type: "doc",
    version: 1,
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: comment,
          },
        ],
      },
    ],
  };

  try {
    const response = await axios.post(
      `https://${JIRA_DOMAIN}/rest/api/3/issue/${issueKey}/comment`,
      {
        body: formattedComment,
      },
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
      JSON.stringify({ success: true, message: "Comment added successfully", data: response.data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error adding Jira comment:", error.response?.data || error.message);

    if (axios.isAxiosError(error) && error.response) {
      return new Response(
        JSON.stringify({ error: error.response.data }),
        { status: error.response.status }
      );
    }

    return new Response(
      JSON.stringify({ error: "Failed to add comment" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
