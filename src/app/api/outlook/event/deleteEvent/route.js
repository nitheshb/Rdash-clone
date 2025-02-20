import fetch from "node-fetch";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { searchParams } = new URL(req.url);
  const eventId = searchParams.get("eventId");

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
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error deleting event:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to delete event", details: errorData }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: `Event with ID ${eventId} deleted successfully`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting event:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
