import { NextResponse } from "next/server";

export async function DELETE(req) {
  const token = process.env.OUTLOOK_ACCESS_TOKEN;
  const { searchParams } = new URL(req.url);
  const folderId = searchParams.get("folderId");

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
        method: "DELETE",
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
          error: "Failed to delete folder",
          details: errorData,
        }),
        { status: response.status }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: `Folder with ID ${folderId} deleted successfully`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting folder:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
