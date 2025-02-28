import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "No authorization code provided" },
      { status: 400 }
    );
  }

  try {
    const tokenUrl =
      "https://login.microsoftonline.com/common/oauth2/v2.0/token";

    const requestBody = new URLSearchParams({
      client_id: process.env.OUTLOOK_CLIENT_ID || "",
      client_secret: process.env.OUTLOOK_CLIENT_SECRET || "",
      code: code,
      grant_type: "authorization_code",
      redirect_uri: process.env.OUTLOOK_REDIRECT_URI || "",
    });

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: requestBody,
    });

    const data = await response.json();

    if (!data.access_token) {
      console.error("≡ƒÜ¿ Failed to get access token:", data);
      return NextResponse.json(
        { error: "Failed to get access token", details: data },
        { status: 401 }
      );
    }

    return NextResponse.redirect(
      `http://localhost:3000/connections?outlook_token=${data.access_token}`
    );
  } catch (error) {
    console.error("≡ƒÜ¿ OAuth Token Exchange Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
