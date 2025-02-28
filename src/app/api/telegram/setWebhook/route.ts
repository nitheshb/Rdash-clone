import { NextResponse } from 'next/server';
import axios from 'axios';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; 
const TELEGRAM_WEBHOOK_URL = process.env.TELEGRAM_WEBHOOK_URL;

export async function POST() {
  try {
    const url = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/setWebhook`;
    const response = await axios.post(url, {
      url: TELEGRAM_WEBHOOK_URL,
    });
    console.log('Telegram API Response:', response.data);
    
    if (response.data.ok) {
      console.log('Webhook successfully set!');
      return NextResponse.json({ ok: true, message: 'Webhook set successfully' }, { status: 200 });
    } else {
      throw new Error('Failed to set webhook: ' + response.data.description);
    }
  } catch (error) {
    console.error('Error setting webhook:', error);
    return NextResponse.json({ error: 'Failed to set webhook' }, { status: 500 });
  }
}
