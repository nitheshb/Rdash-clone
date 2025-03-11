import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
    
    if (!OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key is missing" }, { status: 500 });
    }

    const response = await axios.get("https://api.openai.com/v1/assistants", {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return NextResponse.json(response.data, { status: 200 });

  } catch (error) {
    console.error("Error fetching OpenAI assistants:", error);

    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json({ error: error.response.data }, { status: error.response.status });
    }

    return NextResponse.json({ error: "Failed to fetch assistants" }, { status: 500 });
  }
}
