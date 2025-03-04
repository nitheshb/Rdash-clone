import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_FILE_API_URL = process.env.OPENAI_FILE_API_URL;

export async function GET(req: NextRequest) {
    try {
        const response = await axios.get(
            `${OPENAI_FILE_API_URL}`, 
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );
        return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error?.response?.data || 'Error fetching files' }, { status: 500 });
    }
}
