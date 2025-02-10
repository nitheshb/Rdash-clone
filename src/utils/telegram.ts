const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || '';

// Function to get chat ID from Telegram updates
export const getChatIdFromUpdates = async (accessToken: string) => {
  const url = `${TELEGRAM_API_URL}${accessToken}/getUpdates`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.ok && data.result.length > 0) {
      const chatId = data.result[0]?.message?.chat?.id; 
      
      if (chatId) {
        return chatId;
      } else {
        throw new Error('No chat_id found in the updates.');
      }
    } else {
      throw new Error('Failed to fetch updates or no messages yet.');
    }
  } catch (error) {
    console.error("Error fetching chat_id:", error); 
    if (error instanceof Error) {
      throw new Error(`Error fetching chat_id: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while fetching chat_id');
    }
  }
};

// Function to get Telegram updates
let lastUpdateId = 0;
export const getUpdatesFromTelegram = async (accessToken: string) => {
    const url = `${TELEGRAM_API_URL}${accessToken}/getUpdates?offset=${lastUpdateId + 1}`;
  
    try {
      const res = await fetch(url);
       // Ensure response is JSON
       const contentType = res.headers.get('content-type');

       if (!contentType || !contentType.includes('application/json')) {
           const errorText = await res.text(); // Read response as text
           console.error('Unexpected response from Telegram API:', errorText);
           throw new Error('Received non-JSON response from Telegram');
       }

      const data = await res.json();

      if (data.ok && data.result.length > 0) {
        const latestUpdate = data.result[data.result.length - 1];
      
        const message = latestUpdate.message;
        lastUpdateId = latestUpdate.update_id;
      
      return { ok: true, message, lastUpdateId };
    }

    // return { ok: true, message: null, lastUpdateId };
    else {
      throw new Error('Failed to fetch updates.');
    }
    } catch (error) {
      console.error('Error fetching updates from Telegram API:', error);
      throw new Error('Failed to fetch updates');
    }
  }

// Function to send message to the Telegram chat
export const sendMessageToTelegram = async (accessToken: string, chatId: string, message: string) => {
  const url = `${TELEGRAM_API_URL}${accessToken}/sendMessage`;

  const body = {
    chat_id: chatId,
    text: message,
  };

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (data.ok) {
      return data.result;
    } else {
      throw new Error('Failed to send message.');
    }
  } catch (error) {
    console.error("Error sending message:", error); 
    if (error instanceof Error) {
      throw new Error(`Error sending message: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while sending message');
    }
  }
};

