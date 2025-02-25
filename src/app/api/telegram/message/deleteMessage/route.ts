import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        const { chat_id, message_id } = body;

        if (!chat_id || !message_id) {
            return NextResponse.json(
                { error: 'chat_id and message_id are required' },
                { status: 400 }
            );
        }
        const deleteMessageUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/deleteMessage`;
        const res = await axios.post(deleteMessageUrl, { chat_id, message_id });

        const data = res.data;
        if (data.ok) {
            return NextResponse.json(
                { ok: true, result: data.result },
                { status: 200 }
            );
        } else {
            throw new Error('Failed to delete message.');
        }
    } catch (error: unknown) {
        console.error('Error deleting message:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.'
            },
            { status: 500 }
        );
    }
}
