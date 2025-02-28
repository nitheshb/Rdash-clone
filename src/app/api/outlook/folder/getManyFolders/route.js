import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function GET(req) {
  const { tokenKey: token } = await getTokenByAppName("Outlook");

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  try {
    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/mailFolders",
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
      return new NextResponse(
        JSON.stringify({
          error: "Failed to retrieve folders",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const folders = await response.json();
    return new NextResponse(JSON.stringify({ folders }), { status: 200 });
  } catch (error) {
    console.error("Error retrieving folders:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
