// app/api/email/save-draft/route.js
import { google } from "googleapis";
import fs from "fs";
import path from "path";

const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

export async function POST(req) {
  try {
    const { recipient, subject, body } = await req.json();
    // const rawMessage = `To: ${recipient}\nSubject: ${subject}\n\n${body}`;
    const rawMessage = `${body}`;
    const encodedMessage = Buffer.from(rawMessage).toString("base64");

    // Load credentials
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8"));
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

    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    await gmail.users.drafts.create({
      userId: "me",
      requestBody: {
        message: { raw: encodedMessage },
      },
    });

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
