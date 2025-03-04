import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_FILE_API_URL = process.env.OPENAI_FILE_API_URL;

export async function DELETE(req: NextRequest) {
    try {
        const { fileId } = await req.json();

        if (!fileId) {
            return NextResponse.json({ error: 'File ID is required' }, { status: 400 });
        }
        const response = await axios.delete(
            `${OPENAI_FILE_API_URL}/${fileId}`,
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error?.response?.data || 'Error deleting file' }, { status: 500 });
    }
}
