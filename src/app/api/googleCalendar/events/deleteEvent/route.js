import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function DELETE(req) {
  const { eventId } = await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  if (!token || !eventId) {
    return new NextResponse(JSON.stringify({ error: "Missing eventId" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete event", details: errorData }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Event deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error", details: error }),
      { status: 500 }
    );
  }
}
