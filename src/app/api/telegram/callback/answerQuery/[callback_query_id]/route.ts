import axios from 'axios';
import { NextResponse, NextRequest } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest, { params }: { params: { callback_query_id: string } }) {
    try {
        const { callback_query_id } = params;
        const body = await req.json();
        const { text, show_alert } = body;

        if (!text) {
            return NextResponse.json(
                { error: 'text is required' },
                { status: 400 }
            );
        }
        const answerCallbackUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`;
        const res = await axios.post(answerCallbackUrl, {
            callback_query_id,
            text,
            show_alert,
        });

        const data = res.data;
        if (data.ok) {
            return NextResponse.json(
                { ok: true, result: data.result },
                { status: 200 }
            );
        } else {
            throw new Error('Failed to answer callback query.');
        }
    } catch (error: unknown) {
        console.error('Error answering callback query:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.',
            },
            { status: 500 }
        );
    }
}
