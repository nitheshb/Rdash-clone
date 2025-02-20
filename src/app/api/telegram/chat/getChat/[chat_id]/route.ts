import axios from 'axios';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || '';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';

export async function GET(req: Request, { params }: { params: { chat_id: string } }) {
  try {
    const { chat_id } = params;
    
    if (!chat_id) {
      return new Response(
        JSON.stringify({ error: 'chat_id is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const getChatUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/getChat?chat_id=${chat_id}`;
    const res = await axios.get(getChatUrl);
    const data = res.data;

    if (data.ok) {
      return new Response(
        JSON.stringify({ ok: true, chat: data.result }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      throw new Error('Failed to fetch chat information.');
    }
  } catch (error: unknown) {
    console.error('Error occurred while fetching chat info:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'An unknown error occurred.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
