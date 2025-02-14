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
        messages: [{ role: 'user', content: message }],
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

      if (message.toLowerCase().includes("mail")) {
        const regex = /Subject:\s*(.*?)\n\nDear\s(.*?)\s*,\n\n(.*)/;
        const match = openAiMessage.match(regex);
        if (match) {
          const [, subject, to, body] = match;
          return new Response(
            JSON.stringify({
              subject: subject.trim(),
              to: to.trim(),
              body: body.trim(),
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }
      } else if (message.toLowerCase().includes("jira")) {
        const issueTypeMatch = openAiMessage.match(/Issue Type:\s*(.*?)(?:\n|$)/i);
        const summaryMatch = openAiMessage.match(/(?:Summary|Title):\s*(.*?)(?:\n|$)/i);
        const descriptionMatch = openAiMessage.match(/Description:\s*(.*?)(?:\n|$)/i);

        const issueType = issueTypeMatch ? issueTypeMatch[1].trim() : "Task"; 
        const summary = summaryMatch ? summaryMatch[1].trim() : "No summary found";
        const description = descriptionMatch ? descriptionMatch[1].trim() : "No description available";

        return new Response(
          JSON.stringify({
            summary: summary,
            description: description,
            issueType: issueType,
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        return new Response(JSON.stringify({ response: openAiMessage }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
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
