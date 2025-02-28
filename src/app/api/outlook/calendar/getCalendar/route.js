import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const calendarId = searchParams.get("calendarId");
  const { tokenKey: token } = await getTokenByAppName("Outlook");

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
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error getting calendar:", errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to get calendar", details: errorData }),
        { status: response.status }
      );
    }

    const calendar = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Calendar fetched successfully", calendar }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting calendar:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
