import { NextResponse } from "next/server";
import axios from "axios";

export async function DELETE(req: Request) {
  try {
    const { assistantId } = await req.json();

    if (!assistantId) {
      return NextResponse.json({ error: "Assistant ID is required" }, { status: 400 });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
    
    const response = await axios.delete(`https://api.openai.com/v1/assistants/${assistantId}`, {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json({ message: "Assistant deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting OpenAI assistant:", error);

    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json({ error: error.response.data }, { status: error.response.status });
    }

    return NextResponse.json({ error: "Failed to delete assistant" }, { status: 500 });
  }
}
