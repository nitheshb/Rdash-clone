import { getUpdatesFromTelegram } from '@/utils/telegram'; 

export const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''; 

export async function GET() {
  try {
    const updates = await getUpdatesFromTelegram(TELEGRAM_BOT_TOKEN);
    return new Response(JSON.stringify(updates), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error("Error occurred while fetching updates:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'An unknown error occurred.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}