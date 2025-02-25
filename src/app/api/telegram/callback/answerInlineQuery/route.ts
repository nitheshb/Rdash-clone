import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { inline_query_id, results, cache_time = 0, is_personal = false, next_offset = '' } = body;

        if (!inline_query_id || !results) {
            return NextResponse.json(
                { error: 'inline_query_id and results are required' },
                { status: 400 }
            );
        }
        const answerInlineQueryUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/answerInlineQuery`;
        const res = await axios.post(answerInlineQueryUrl, {
            inline_query_id,
            results,
            cache_time,
            is_personal,
            next_offset
        });

        const data = res.data;
        if (data.ok) {
            return NextResponse.json(
                { ok: true, result: data.result },
                { status: 200 }
            );
        } else {
            throw new Error('Failed to answer inline query.');
        }
    } catch (error: unknown) {
        console.error('Error answering inline query:', error);
        return NextResponse.json(
            {error: error instanceof Error ? error.message : 'An unknown error occurred.'},
            { status: 500 }
        );
    }
}
