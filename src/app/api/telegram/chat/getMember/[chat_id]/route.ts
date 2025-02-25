import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function GET(req: NextRequest, { params }: { params: { chat_id: string } }) {
  try {
    const { chat_id } = params;
    const url = new URL(req.url);
    const userId = url.searchParams.get('user_id');

    if (!userId) {
      return NextResponse.json(
        { error: 'user_id is required' },
        { status: 400 }
      );
    }

    const getChatMemberUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/getChatMember?chat_id=${chat_id}&user_id=${userId}`;
    const res = await axios.get(getChatMemberUrl);
    const data = res.data;

    if (data.ok) {
      return NextResponse.json(
        { ok: true, member: data.result },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to fetch chat member information.');
    }
  } catch (error: unknown) {
    console.error('Error occurred while fetching chat member info:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An unknown error occurred.'
      },
      { status: 500 }
    );
  }
}
