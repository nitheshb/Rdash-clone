import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function PATCH(req) {
  const { eventId, summary, description, startTime, endTime } =
    await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  if (!token || !eventId || !summary || !startTime || !endTime) {
    return new NextResponse(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary,
          description,
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
        JSON.stringify({ error: "Failed to update event", details: errorData }),
        { status: response.status }
      );
    }

    const updatedEvent = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Event updated successfully",
        event: updatedEvent,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error", details: error }),
      { status: 500 }
    );
  }
}
