import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;

  if (!code) {
    return new NextResponse(
      JSON.stringify({ error: "No authorization code provided" }),
      { status: 400 }
    );
  }

  try {
    const tokenUrl = "https://oauth2.googleapis.com/token";
    const requestBody = new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    });

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: requestBody,
    });

    const data = await response.json();

    if (!data.access_token) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to get access token" }),
        { status: 401 }
      );
    }

    return NextResponse.redirect(
      `http://localhost:3000/connections?google_token=${data.access_token}`
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
