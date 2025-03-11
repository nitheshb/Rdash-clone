import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import FormData from "form-data";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_API_URL = "https://api.openai.com/v1/audio/transcriptions";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData(); // Get the form data
    const file = formData.get("audio") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "Audio file is required" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer()); // Convert file to buffer

    const form = new FormData();
    form.append("file", buffer, "audio.mp3"); // Adjust filename/extension if needed
    form.append("model", "whisper-1");
    form.append("language", "en"); // Optional: specify the language if needed

    const response = await axios.post(OPENAI_API_URL, form, {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        ...form.getHeaders(),
      },
    });

    return NextResponse.json({ transcription: response.data.text });
  } catch (error: any) {
    console.error("Error transcribing audio:", error);
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
}
