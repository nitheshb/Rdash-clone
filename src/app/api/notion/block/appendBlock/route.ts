import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function PATCH(req: NextRequest) {
  try {
    const { parentId, content } = await req.json();

    if (!parentId || !content) {
      return NextResponse.json({ error: 'parentId and content are required' }, { status: 400 });
    }

    const response = await axios.patch(
      `https://api.notion.com/v1/blocks/${parentId}/children`,
      {
        children: [
          {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              rich_text: [
                {
                  type: 'text',
                  text: {
                    content: content,
                  },
                },
              ],
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      }
    );

    return NextResponse.json({ success: true, data: response.data }, { status: 200 });
  } catch (error: any) {
    console.error("Error appending Notion block:", error.response?.data || error.message);
    return NextResponse.json({ error: error.response?.data || "Failed to append block." }, { status: error.response?.status || 500});
}
}
