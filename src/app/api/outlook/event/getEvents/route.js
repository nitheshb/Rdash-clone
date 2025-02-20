import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN; // Retrieve the token from environment variables

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const response = await fetch("https://graph.microsoft.com/v1.0/me/events", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching events:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch events", details: errorData }),
        { status: response.status }
      );
    }

    const events = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Events fetched successfully", events }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
