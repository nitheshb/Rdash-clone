import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const eventId = searchParams.get("eventId");

  const { token } = await getTokenByAppName("Google");
  console.log("The token here", token);

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  if (!eventId) {
    return new NextResponse(JSON.stringify({ error: "Event ID is required" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json(); // Get the response data

    if (!response.ok) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch event", details: data }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Event fetched successfully", event: data }),
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
