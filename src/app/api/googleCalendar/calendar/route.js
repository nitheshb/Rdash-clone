import fetch from "node-fetch";
import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const timeMin = searchParams.get("timeMin");
  const timeMax = searchParams.get("timeMax");
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  if (!token || !timeMin || !timeMax) {
    return new NextResponse(
      JSON.stringify({ error: "Missing token or time parameters" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/freeBusy",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timeMin,
          timeMax,
          items: [{ id: "primary" }],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to get availability",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const data = await response.json();
    return new NextResponse(
      JSON.stringify({ message: "Availability retrieved successfully", data }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error", details: error }),
      { status: 500 }
    );
  }
}
