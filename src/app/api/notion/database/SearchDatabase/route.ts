import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function POST(req: NextRequest) {
    const { query } = await req.json();

    if (!query) {
        return NextResponse.json({ error: "Search query is required" }, { status: 400 });
    }

    try {
        const response = await axios.post(
            'https://api.notion.com/v1/search',
            {
                query,
                filter: {
                    property: 'object',
                    value: 'database',
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                },
            }
        );

        const databases = response.data.results;

        return NextResponse.json({ success: true, data: databases }, { status: 200 });
    } catch (error: any) {
        console.error('Error searching databases:', error.response?.data || error.message);
        return NextResponse.json({ error: error.response?.data || 'Failed to search databases' }, { status: error.response?.status || 500 });
    }
}
