import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function GET(req: NextRequest, { params }: { params: { chat_id: string } }) {
  try {
    const { chat_id } = params;
    if (!chat_id) {
      return NextResponse.json(
        { error: 'chat_id is required' },
        { status: 400 }
      );
    }

    const getChatUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/getChat?chat_id=${chat_id}`;
    const res = await axios.get(getChatUrl);
    const data = res.data;

    if (data.ok) {
      return NextResponse.json(
        { ok: true, chat: data.result },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to fetch chat information.');
    }
  } catch (error: unknown) {
    console.error('Error occurred while fetching chat info:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An unknown error occurred.',
      },
      { status: 500 }
    );
  }
}
