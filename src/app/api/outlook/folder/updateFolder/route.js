import { NextResponse } from "next/server";

export async function PATCH(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { folderId, newFolderName } = await req.json();

  if (!token) {
    return new NextResponse(JSON.stringify({ error: "Token is missing" }), {
      status: 400,
    });
  }

  if (!folderId || !newFolderName) {
    return new NextResponse(
      JSON.stringify({ error: "Folder ID and new name are required" }),
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/mailFolders/${folderId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: newFolderName,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return new NextResponse(
        JSON.stringify({
          error: "Failed to update folder",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    const updatedFolder = await response.json();
    return new NextResponse(
      JSON.stringify({
        message: `Folder with ID ${folderId} updated successfully`,
        updatedFolder,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating folder:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
