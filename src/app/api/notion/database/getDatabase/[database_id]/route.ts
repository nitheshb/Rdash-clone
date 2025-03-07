import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function GET(req: NextRequest, { params }: { params: { database_id: string } }) {
    const { database_id } = params;

    if (!database_id) {
        return NextResponse.json({ error: "Database Id is required" },{ status: 400});
      }
    try {
        const response = await axios.get(
            `https://api.notion.com/v1/databases/${database_id}`,
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                },
            }
        );
        return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (error: any) {
        console.error('Error fetching database:', error.response?.data || error.message);
        return NextResponse.json({ error: error.response?.data || 'Failed to fetch database' }, { status: error.response?.status || 500 }
        );
    }
}
