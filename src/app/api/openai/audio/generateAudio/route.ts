// pages/api/generateAudio.ts
import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_API_URL = "https://api.openai.com/v1/audio/speech";

export async function POST(req: Request) {
  try {
    const { text, voice = "alloy" } = await req.json();

    if (!text) {
      return new Response(
        JSON.stringify({ error: "Text is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "tts-1",
        input: text,
        voice, // Choose from: "alloy", "echo", "fable", "onyx", "nova", "shimmer"
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        responseType: "arraybuffer", // Get raw audio data
      }
    );

    return new Response(response.data, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": response.data.byteLength.toString(),
      },
    });
  } catch (error: unknown) {
    console.error("Error generating audio:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Error calling OpenAI",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
