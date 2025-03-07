import { NextResponse } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function GET() {
    try {
        const response = await axios.post(
            'https://api.notion.com/v1/search',
            {
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

        return NextResponse.json({ success: true, data: response.data.results }, { status: 200 });
    } catch (error: any) {
        console.error('Error fetching databases:', error.response?.data || error.message);
        return NextResponse.json({ error: error.response?.data || 'Failed to fetch databases' }, { status: error.response?.status || 500 }
        );
    }
}
