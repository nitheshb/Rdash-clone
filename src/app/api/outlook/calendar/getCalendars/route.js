import { NextResponse } from "next/server";

export async function GET(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;

  try {
    if (!token) {
      return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
        status: 400,
      });
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/calendars",
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
      console.error("Error getting calendars:", errorData);
      return new NextResponse(
        JSON.stringify({
          error: "Failed to get calendars",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const calendars = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Calendars fetched successfully", calendars }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting calendars:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
