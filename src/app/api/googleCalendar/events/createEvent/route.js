import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  const { summary, description, location, startTime, endTime } =
    await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  if (!token || !summary || !startTime || !endTime) {
    return new NextResponse(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary,
          description,
          location,
          start: {
            dateTime: startTime,
            timeZone: "UTC",
          },
          end: {
            dateTime: endTime,
            timeZone: "UTC",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({ error: "Failed to create event", details: errorData }),
        { status: response.status }
      );
    }

    const event = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Event created successfully", event }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error", details: error }),
      { status: 500 }
    );
  }
}
