import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function GET(req: NextRequest, { params }: { params: { parentId: string } }) {
    try {
        const { parentId } = params;

        if (!parentId) {
            return NextResponse.json({ error: 'parentId is required' }, { status: 400 });
        }
        
        const response = await axios.get(
            `https://api.notion.com/v1/blocks/${parentId}/children`,
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                },
            }
        );

        return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (error: any) {
        console.error('Error fetching child blocks:', error.response?.data || error.message);
        return NextResponse.json({ error: error.response?.data || 'Failed to fetch child blocks' }, { status: error.response?.status || 500 }
        );
    }
}
