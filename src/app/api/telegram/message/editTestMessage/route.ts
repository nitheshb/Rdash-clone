import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { chat_id, message_id, text } = body;

        if (!chat_id || !message_id || !text) {
            return NextResponse.json(
                { error: 'chat_id, message_id, and text are required' },
                { status: 400 }
            );
        }

        const editMessageUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/editMessageText`;
        const res = await axios.post(editMessageUrl, {
            chat_id,
            message_id,
            text,
            parse_mode: "Markdown"
        });
        const data = res.data;
        if (data.ok) {
            return NextResponse.json(
                { ok: true, result: data.result },
                { status: 200 }
            );
        } else {
            throw new Error('Failed to edit message.');
        }
    } catch (error: unknown) {
        console.error('Error editing message:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.'
            },
            { status: 500 }
        );
    }
}
