import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_API_URL = process.env.OPENAI_API_URL || '';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Classify the following message for any violations such as inappropriate language, discrimination, or harmful content:\n\n${message}`,
          },
        ],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const data = response.data;

    if (data.choices && data.choices.length > 0) {
      const openAiMessage = data.choices[0].message.content.trim();
      
      return new Response(
        JSON.stringify({ classification: openAiMessage }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      throw new Error('No response from OpenAI');
    }
  } catch (error: unknown) {
    console.error("Error while processing the OpenAI request:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Error calling OpenAI',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
