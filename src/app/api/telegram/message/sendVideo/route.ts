import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const chat_id = formData.get("chat_id");
        const video = formData.get("video");
        const caption = formData.get("caption") || "";
        const duration = formData.get("duration") || undefined;
        const width = formData.get("width") || undefined;
        const height = formData.get("height") || undefined;
        const supports_streaming = formData.get("supports_streaming") || "true";

        if (!chat_id || !video) {
            return NextResponse.json(
                { error: 'chat_id and video file are required' },
                { status: 400 }
            );
        }
        const sendVideoUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendVideo`;
        const res = await axios.post(sendVideoUrl, formData, {
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
        console.error('Error sending video:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.',
            },
            { status: 500 }
        );
    }
}
