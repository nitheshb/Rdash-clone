import axios from 'axios';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || '';
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

    // Get chatId from Telegram updates
    const getChatIdUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/getUpdates`;

    const getChatIdResponse = await axios.get(getChatIdUrl);
    const getChatIdData = getChatIdResponse.data;

    if (getChatIdData.ok && getChatIdData.result.length > 0) {
      const chatId = getChatIdData.result[0]?.message?.chat?.id; 

      if (!chatId) {
        throw new Error('No chat_id found in the updates.');
      }

      // Send message to Telegram chat
      const sendMessageUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendMessage`;
      const sendMessageBody = { chat_id: chatId, text: message };

      const sendMessageResponse = await axios.post(sendMessageUrl, sendMessageBody, {
        headers: { 'Content-Type': 'application/json' },
      });

      const sendMessageData = sendMessageResponse.data;

      if (sendMessageData.ok) {
        return new Response(
          JSON.stringify({ success: true, result: sendMessageData.result }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        throw new Error('Failed to send message.');
      }
    } else {
      throw new Error('Failed to fetch updates or no messages yet.');
    }

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
