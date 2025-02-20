import { NextResponse } from "next/server";

export async function POST(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  try {
    const { folderName } = await req.json();

    if (!folderName) {
      return new NextResponse(
        JSON.stringify({ error: "Folder name is required" }),
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://graph.microsoft.com/v1.0/me/mailFolders",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: folderName || "No Name Folder",
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to create folder",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const folder = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: "Folder created successfully",
        folderId: folder.id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating folder:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
