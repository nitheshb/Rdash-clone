import axios from 'axios';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || '';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

let lastUpdateId = 0;

export async function GET() {
  try {
    const url = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${lastUpdateId + 1}`;

    const res = await axios.get(url);

    const data = res.data;

    if (data.ok && data.result.length > 0) {
      const latestUpdate = data.result[data.result.length - 1];

      const message = latestUpdate.message;
      lastUpdateId = latestUpdate.update_id; 

      return new Response(
        JSON.stringify({ ok: true, message, lastUpdateId }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } else {
      throw new Error('No updates found or failed to fetch updates.');
    }
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
