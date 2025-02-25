import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_FILE_DOWNLOAD = process.env.TELEGRAM_FILE_DOWNLOAD;

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const fileId = url.searchParams.get('file_id');

        if (!fileId) {
            return NextResponse.json(
                { error: 'file_id is required' },
                { status: 400 }
            );
        }

        const getFileUrl = `${TELEGRAM_API_URL}${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`;
        const fileRes = await axios.get(getFileUrl);

        if (!fileRes.data.ok) {
            throw new Error('Failed to get file from Telegram');
        }

        const filePath = fileRes.data.result.file_path;
        const fileDownloadUrl = `${TELEGRAM_FILE_DOWNLOAD}${TELEGRAM_BOT_TOKEN}/${filePath}`;
        const fileResponse = await axios.get(fileDownloadUrl, { responseType: 'arraybuffer' });

        return new NextResponse(fileResponse.data, {
            status: 200,
            headers: {
                'Content-Type': fileResponse.headers['content-type'] || 'application/octet-stream',
                'Content-Disposition': `attachment; filename=${filePath.split('/').pop()}`
            }
        });

    } catch (error: unknown) {
        console.error('Error getting Telegram file:', error);
        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : 'An unknown error occurred.'
            },
            { status: 500 }
        );
    }
}
