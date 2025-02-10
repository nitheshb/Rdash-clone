import { openAIRequest } from '@/utils/openai'; 

export async function POST(req: Request) {
  try {
    const { message } = await req.json(); 
    
    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const openAIResponse = await openAIRequest(message);
    return new Response(
      JSON.stringify({ response: openAIResponse }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error while processing the OpenAI request:", error);

    return new Response(
      JSON.stringify({ error: 'Error calling OpenAI' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
