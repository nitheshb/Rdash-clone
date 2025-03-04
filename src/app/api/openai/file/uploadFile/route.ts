import { NextResponse, NextRequest } from 'next/server';
import FormData from 'form-data';
import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_FILE_API_URL = process.env.OPENAI_FILE_API_URL;

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const fileBuffer = Buffer.from(await file.arrayBuffer());

  const form = new FormData();
  form.append("file", fileBuffer, file.name); 
  form.append('purpose', 'fine-tune');

  try {
    const response = await axios.post(
      `${OPENAI_FILE_API_URL}`, 
      form, {
        headers: {
          ...form.getHeaders(),
          'Authorization': `Bearer ${OPENAI_API_KEY}`, 
        },
      }
    );
    return NextResponse.json({ success: true, data: response.data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.response?.data || 'Error uploading file' }, { status: 500 });
  }
}
