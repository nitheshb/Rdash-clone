import { google } from "googleapis";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  const { tokenKey: token } = await getTokenByAppName("Google");
  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }
  try {
    const { recipient, subject, body } = await req.json();
    const rawMessage = [
      `To: ${recipient}`,
      `Subject: ${subject}`,
      `Content-Type: text/plain; charset="UTF-8"`,
      "",
      body,
    ].join("\n");
    const encodedMessage = Buffer.from(rawMessage).toString("base64");

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oAuth2Client.setCredentials({ access_token: token });

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const result = await gmail.users.drafts.create({
      userId: "me",
      requestBody: {
        message: { raw: encodedMessage },
      },
    });

    console.log("The result for draft:", result);
    return new Response(
      JSON.stringify({ message: "Draft saved successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving draft:", error);
    return new Response(JSON.stringify({ error: "Failed to save draft" }), {
      status: 500,
    });
  }
}
