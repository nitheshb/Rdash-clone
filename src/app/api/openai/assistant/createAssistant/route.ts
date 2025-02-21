import axios from "axios";

export async function POST(req: Request) {
  const { model = "gpt-4-turbo", messages } = await req.json();

  const OPENAI_API_URL = process.env.OPENAI_API_URL!;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model,
        messages,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
