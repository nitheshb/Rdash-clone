import axios from "axios";

export async function POST(req: Request) {
  try {
    const { emailAddress, displayName, group, applicationKeys }: { emailAddress: string, displayName: string, group: string, applicationKeys: string[] } = await req.json();

    // Validate inputs
    if (!emailAddress || !displayName || !group || !applicationKeys || applicationKeys.length === 0) {
      return new Response(
        JSON.stringify({ error: "Email address, display name, group, and applicationKeys are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const JIRA_DOMAIN = process.env.JIRA_DOMAIN!;
    const JIRA_EMAIL = process.env.JIRA_EMAIL!;
    const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN!;

    // Prepare the user payload
    const userPayload = {
      emailAddress,
      displayName,
      groups: [{ name: group }],
      applicationKeys: applicationKeys, // Ensure correct application keys for the product access
    };

    try {
      // Send request to Jira API to create the user
      const response = await axios.post(
        `https://${JIRA_DOMAIN}/rest/api/3/user`,
        userPayload,
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
        JSON.stringify({ success: true, message: "User created successfully", data: response.data }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    } catch (error: any) {
      console.error("Error creating user in Jira:", error.response?.data || error.message);

      // Log full error response for debugging
      if (error.response) {
        console.error("Full error response:", JSON.stringify(error.response.data, null, 2));
      }

      return new Response(
        JSON.stringify({ error: error.response?.data || "Failed to create user" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error: any) {
    console.error("Error processing the request:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to process the request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
