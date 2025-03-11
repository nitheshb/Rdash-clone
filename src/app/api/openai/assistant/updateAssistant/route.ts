import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { assistantId, newName, newDescription } = req.body;

    if (!assistantId || !newName || !newDescription) {
      return res.status(400).json({ error: 'Assistant ID, name, and description are required' });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const OPENAI_API_URL = process.env.OPENAI_API_URL; // Example endpoint; adjust based on your needs

    if (!OPENAI_API_KEY) {
      return res.status(500).json({ error: 'Missing OpenAI API key in environment' });
    }

    const response = await axios.put(
      `${OPENAI_API_URL}/${assistantId}`, 
      {
        name: newName,
        description: newDescription,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 200) {
      return res.status(200).json({ success: true, message: 'Assistant updated successfully' });
    }

    return res.status(500).json({ error: 'Failed to update assistant' });
  } catch (error: any) {
    console.error('Error updating assistant:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Unexpected error occurred while updating assistant',
    });
  }
}
