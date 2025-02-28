import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  const { subject, body, startDateTime, endDateTime, location, attendees } =
    await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const response = await fetch("https://graph.microsoft.com/v1.0/me/events", {
      method: "POST",
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
        start: {
          dateTime: startDateTime,
          timeZone: "UTC",
        },
        end: {
          dateTime: endDateTime,
          timeZone: "UTC",
        },
        location: {
          displayName: location || "Default Location",
        },
        attendees: attendees || [],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating event:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create event", details: errorData }),
        { status: response.status }
      );
    }

    const event = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Event created successfully",
        eventId: event.id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
