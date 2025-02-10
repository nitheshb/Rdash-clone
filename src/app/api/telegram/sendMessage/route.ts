import { getChatIdFromUpdates, sendMessageToTelegram } from '@/utils/telegram';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    const chatId = await getChatIdFromUpdates(TELEGRAM_BOT_TOKEN);

    const result = await sendMessageToTelegram(TELEGRAM_BOT_TOKEN, chatId, message);
    return new Response(
      JSON.stringify({ success: true, result }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'An unknown error occurred.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
