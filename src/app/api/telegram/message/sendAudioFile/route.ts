import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const chat_id = formData.get("chat_id");
        const audio = formData.get("audio");
        const caption = formData.get("caption") || "";
        const duration = formData.get("duration") || undefined;
        const performer = formData.get("performer") || undefined;
        const title = formData.get("title") || undefined;

        if (!chat_id || !audio) {
            return NextResponse.json(
                { error: 'chat_id and audio file are required' },
                { status: 400 }
            );
        }

        const sendAudioUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendAudio`;

        const res = await axios.post(sendAudioUrl, formData, {
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
                { status: 400 }
            );
        }
    } catch (error: unknown) {
        console.error('Error sending audio file:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.',
            },
            { status: 500 }
        );
    }
}
