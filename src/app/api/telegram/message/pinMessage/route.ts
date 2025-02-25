import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { chat_id, message_id, disable_notification = true } = body;

        if (!chat_id || !message_id) {
            return NextResponse.json(
                { error: 'chat_id and message_id are required' },
                { status: 400 }
            );
        }
        const pinMessageUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/pinChatMessage`;
        const res = await axios.post(pinMessageUrl, {
            chat_id,
            message_id,
            disable_notification
        });
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
        console.error('Error pinning message:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.'
            },
            { status: 500 }
        );
    }
}
