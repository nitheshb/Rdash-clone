import { google } from "googleapis";
import fs from "fs";
import path from "path";

const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

export async function GET(req) {
  console.log("API route hit");

  try {
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8"));
    console.log("Credentials loaded successfully");

    const { client_secret, client_id, redirect_uris } = credentials.web;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );

    const token = fs.readFileSync(
      path.join(process.cwd(), "token.json"),
      "utf-8"
    );
    oAuth2Client.setCredentials(JSON.parse(token));
    console.log("OAuth2 client set up");

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const response = await gmail.users.messages.list({
      userId: "me",
      q: "is:unread",
      maxResults: 1,
    });
    console.log("Fetched emails:", response.data.messages);

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

    console.log("Email fetched successfully:", email.data);
    const headers = email.data.payload.headers;
    const subject =
      headers.find((header) => header.name === "Subject")?.value ||
      "No subject";
    const from =
      headers.find((header) => header.name === "From")?.value ||
      "Unknown sender";

    const to =
      headers.find((header) => header.name === "To")?.value ||
      "Unknown receiver";

    const body = email.data.payload.parts?.[0]?.body?.data;

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
