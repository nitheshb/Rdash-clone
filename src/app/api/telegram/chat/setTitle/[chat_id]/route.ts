import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest, { params }: { params: { chat_id: string } }) {
  try {
    const { chat_id } = params;
    const body = await req.json();
    const { title } = body;

    if (!title) {
      return NextResponse.json(
        { error: 'title is required' },
        { status: 400 }
      );
    }
    const setTitleUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/setChatTitle`;
    const res = await axios.post(setTitleUrl, {
      chat_id,
      title,
    });

    const data = res.data;

    if (data.ok) {
      return NextResponse.json(
        { ok: true, result: data.result },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to update chat title.');
    }
  } catch (error: unknown) {
    console.error('Error setting chat title:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An unknown error occurred.',
      },
      { status: 500 }
    );
  }
}
