import { NextResponse } from "next/server";

export async function DELETE(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { searchParams } = new URL(req.url);
  const calendarId = searchParams.get("calendarId");

  console.log("The id of the calendar", calendarId);

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!calendarId) {
      return new NextResponse(
        JSON.stringify({ error: "Calendar ID is required" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/calendars/${calendarId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error deleting calendar:", errorData);
      return new NextResponse(
        JSON.stringify({
          error: "Failed to delete calendar",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "Calendar deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting calendar:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
