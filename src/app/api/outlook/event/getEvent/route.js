import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const eventId = searchParams.get("eventId");
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!eventId) {
      return new NextResponse(
        JSON.stringify({ error: "Event ID is required" }),
        {
          status: 400,
        }
      );
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/events/${eventId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching event:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch event", details: errorData }),
        { status: response.status }
      );
    }

    const event = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Event fetched successfully", event }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching event:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
