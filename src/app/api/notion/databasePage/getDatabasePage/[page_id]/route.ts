import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function GET(req: NextRequest, { params }: { params: { page_id: string } }) {
    const { page_id } = params;

    if (!page_id) {
        return NextResponse.json({ error: "Page Id is required" }, { status: 400 });
    }

    try {
        const response = await axios.get(
            `https://api.notion.com/v1/pages/${page_id}`,
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                },
            }
        );

        return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (error: any) {
        console.error('Error fetching page:', error.response?.data || error.message);
        return NextResponse.json({ error: error.response?.data || 'Failed to fetch page' }, { status: error.response?.status || 500 });
    }
}
