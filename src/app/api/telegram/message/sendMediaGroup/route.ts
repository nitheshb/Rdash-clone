import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const chat_id = formData.get("chat_id");
        const mediaFiles = formData.getAll("media");

        if (!chat_id || mediaFiles.length === 0) {
            return NextResponse.json(
                JSON.stringify({ error: 'chat_id and at least one media file are required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
        const files = mediaFiles.filter(file => file instanceof File) as File[];

        if (files.length === 0) {
            return NextResponse.json(
                { error: 'No valid files found in media' },
                { status: 400 }
            );
        }
        const mediaArray = files.map((file, index) => ({
            type: file.type.startsWith("image") ? "photo" : "video",
            media: `attach://${file.name}`,
            caption: `Media ${index + 1}`
        }));
        files.forEach(file => {
            formData.append(file.name, file);
        });
        formData.append("media", JSON.stringify(mediaArray));
        
        const sendMediaGroupUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/sendMediaGroup`;
        const res = await axios.post(sendMediaGroupUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
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
        console.error('Error sending media group:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.',
            },
            { status: 500 }
        );
    }
}
