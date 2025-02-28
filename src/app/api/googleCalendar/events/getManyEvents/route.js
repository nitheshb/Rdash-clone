import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const timeMin = searchParams.get("timeMin");
  const timeMax = searchParams.get("timeMax");

  const { token } = await getTokenByAppName("Google");

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  if (!timeMin || !timeMax) {
    return new NextResponse(
      JSON.stringify({
        error: "Both timeMin and timeMax are required",
      }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({ error: "Failed to fetch events", details: errorData }),
        { status: response.status }
      );
    }

    const events = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Events fetched successfully", events }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching events:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
