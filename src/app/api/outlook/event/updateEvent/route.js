import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  // const { searchParams } = new URL(req.url);
  // const eventId = searchParams.get("eventId");
  const { eventId, subject, body, location, startDateTime, endDateTime } =
    await req.json();

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
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject,
          body: {
            contentType: "Text",
            content: body,
          },
          location: {
            displayName: location,
          },
          start: {
            dateTime: startDateTime,
            timeZone: "UTC",
          },
          end: {
            dateTime: endDateTime,
            timeZone: "UTC",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error updating event:", errorData);
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
    console.error("Error updating event:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
