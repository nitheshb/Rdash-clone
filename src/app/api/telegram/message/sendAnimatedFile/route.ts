import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const chat_id = formData.get("chat_id");
        const animation = formData.get("animation");
        const caption = formData.get("caption") || "";
        const parse_mode = formData.get("parse_mode") || "Markdown";

        if (!chat_id || !animation) {
            return NextResponse.json(
                { error: 'chat_id and animation file are required' },
                { status: 400 }
            );
        }
        const sendAnimationUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendAnimation`;
        const res = await axios.post(sendAnimationUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
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
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
    } catch (error: unknown) {
        console.error('Error sending animation:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.',
            },
            { status: 500 }
        );
    }
}
