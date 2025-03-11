import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"; // Correct URL

export async function POST(req: Request) {
  try {
    const { imageUrl } = await req.json();

    if (!imageUrl) {
      return new Response(
        JSON.stringify({ error: "Image URL is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing OpenAI API Key" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Analyze this image and provide a description." },
              { type: "image_url", image_url: { url: imageUrl } }, // ✅ Correct format
            ],
          },
        ],
        max_tokens: 200,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const data = response.data;

    if (data.choices && data.choices.length > 0) {
      const analysis = data.choices[0].message.content.trim();
      return new Response(JSON.stringify({ analysis }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      throw new Error("No response from OpenAI");
    }
  } catch (error: any) {
    console.error("Error analyzing image:", error.response?.data || error.message);

    return new Response(
      JSON.stringify({ error: error.response?.data?.error?.message || "Error calling OpenAI" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
