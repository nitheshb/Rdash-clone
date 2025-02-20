import { NextResponse } from "next/server"; // Import NextResponse

export async function GET(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { searchParams } = new URL(req.url);
  const folderId = searchParams.get("folderId");

  console.log("The fodler Id", folderId);

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  if (!folderId) {
    return new NextResponse(
      JSON.stringify({ error: "Folder ID is required" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/mailFolders/${folderId}`,
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
          error: "Failed to retrieve folder",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const folder = await response.json();
    return new NextResponse(JSON.stringify({ folder }), { status: 200 });
  } catch (error) {
    console.error("Error retrieving folder:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
