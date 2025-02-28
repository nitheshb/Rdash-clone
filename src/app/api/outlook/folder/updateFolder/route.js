import { NextResponse } from "next/server";
import { getTokenByAppName } from "@/lib/token-connections";

export async function PATCH(req) {
  const { folderId, newFolderName } = await req.json();
  const { tokenKey: token } = await getTokenByAppName("Outlook");

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
