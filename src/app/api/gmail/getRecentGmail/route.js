import { google } from "googleapis";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET() {
  const { tokenKey: token } = await getTokenByAppName("Google");

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }
  try {
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials({ access_token: token });
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const response = await gmail.users.messages.list({
      userId: "me",
      q: "is:unread",
      maxResults: 1,
    });

    if (!response.data.messages || response.data.messages.length === 0) {
      console.log("No unread emails found.");
      return new Response(JSON.stringify({ message: "No unread emails" }), {
        status: 200,
      });
    }

    const messageId = response.data.messages[0].id;
    const email = await gmail.users.messages.get({
      userId: "me",
      id: messageId,
    });

    const headers = email?.data?.payload?.headers;
    const subject =
      headers.find((header) => header?.name === "Subject")?.value ||
      "No subject";
    const from =
      headers.find((header) => header?.name === "From")?.value ||
      "Unknown sender";

    const to =
      headers.find((header) => header?.name === "To")?.value ||
      "Unknown receiver";

    const body = email?.data?.payload?.parts?.[0]?.body?.data;
    const id = email?.data?.id;

    let emailBody = "";
    if (body) {
      emailBody = Buffer.from(body, "base64").toString("utf-8");
    }

    return new Response(
      JSON.stringify({
        message: "Unread email found",
        subject,
        from,
        to,
        body: emailBody,
        id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch email",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
