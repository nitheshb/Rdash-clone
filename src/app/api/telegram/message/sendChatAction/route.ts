import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { chat_id, action } = body;

        if (!chat_id || !action) {
            return NextResponse.json(
                { error: 'chat_id and action are required' },
                { status: 400 }
            );
        }
        const sendChatActionUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendChatAction`;
        const res = await axios.post(sendChatActionUrl, { chat_id, action });
        const data = res.data;
        if (data.ok) {
            return NextResponse.json(
                { ok: true, result: data.result },
                { status: 200 }
            );
        } else {
            console.error('Telegram API Error:', data);
            return NextResponse.json(
                { error: data.description },
                { status: 400 }
            );
        }
    } catch (error: unknown) {
        console.error('Error sending chat action:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.',
            },
            { status: 500 }
        );
    }
}
