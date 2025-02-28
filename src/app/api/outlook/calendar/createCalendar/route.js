import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function POST(req) {
  const { calendarName } = await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    if (!calendarName) {
      return new NextResponse(
        JSON.stringify({ error: "Calendar name is required" }),
        { status: 400 }
      );
    }

    // Create calendar via Microsoft Graph API
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/calendars",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: calendarName,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating calendar:", errorData);
      return new NextResponse(
        JSON.stringify({
          error: "Failed to create calendar",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const calendar = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Calendar created successfully", calendar }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating calendar:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
