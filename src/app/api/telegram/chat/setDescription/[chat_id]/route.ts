import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest, { params }: { params: { chat_id: string } }) {
  try {
    const { chat_id } = params;
    const body = await req.json();
    const { description } = body;

    if (!description) {
      return NextResponse.json(
        { error: 'description is required' },
        { status: 400 }
      );
    }
    const setDescriptionUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/setChatDescription`;
    const res = await axios.post(setDescriptionUrl, {
      chat_id,
      description,
    });

    const data = res.data;

    if (data.ok) {
      return NextResponse.json(
        { ok: true, result: data.result },
        { status: 200 }
      );
    } else {
      throw new Error('Failed to update chat description.');
    }
  } catch (error: unknown) {
    console.error('Error setting chat description:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'An unknown error occurred.',
      },
      { status: 500 }
    );
  }
}
