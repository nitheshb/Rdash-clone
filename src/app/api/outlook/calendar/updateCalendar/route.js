import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function PATCH(req) {
  const { calendarId, calendarName } = await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!calendarId || !calendarName) {
      return new NextResponse(
        JSON.stringify({ error: "Calendar ID and new name are required" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/calendars/${calendarId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: calendarName }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error updating calendar:", errorData);
      return new NextResponse(
        JSON.stringify({
          error: "Failed to update calendar",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const updatedCalendar = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Calendar updated successfully",
        updatedCalendar,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating calendar:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
