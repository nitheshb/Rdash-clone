import { NextRequest, NextResponse } from 'next/server';

interface Message {
  chatId: string | number;
  text: string;
}

let latestMessage: Message | null = null;

export async function POST(req: NextRequest) {
  try {
    const update = await req.json();

    if (update.message) {
      const { text, chat } = update.message;
      console.log(`Received message: ${text} from chat: ${chat.id}`);
      return NextResponse.json({ chatId: chat.id, text: text }, { status: 200 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ error: "An error occurred while processing the webhook" }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(latestMessage || { message: 'No recent message' }, { status: 200 });
  } catch (error) {
    console.error('Error fetching update:', error);
    return NextResponse.json({ error: 'Failed to fetch update' }, { status: 500 });
  }
}
