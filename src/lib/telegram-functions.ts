import axios from "axios";

export const TonMessageF = async () => {
  try {
    const response = await axios.get("/api/telegram/triggers/onMessage", {
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    console.log("Telegram Recent Message Response:", data.message?.text);
    return data.message?.text || "No new messages found.";
  } catch (error) {
    console.error("Error fetching recent message:", error);
    throw error;
  }
};

export const TsendTextMessageF = async (message: string) => {
  try {
    const response = await axios.post("/api/telegram/message/sendTextMessage", {
      message
    },{
      headers: { "Content-Type": "application/json" },
    });

    const data = response.data;
    console.log("Telegram Send Message Response:", data.result.text);
    return data.result.text;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const TgetChatF = async (chat: { chatId: string }) => {
  try {
    const { chatId } = chat;
    const response = await axios.get(`/api/telegram/chat/getChat/${chatId}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = response.data;

    if (data.ok) {
      console.log('Telegram Chat Information:', data.chat);
      return data.chat;
    } else {
      console.error('Failed to fetch chat info:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error fetching chat info:', error);
    throw error;
  }
};

export const TgetAllAdministratorsInChatF = async (chat: { chatId: string }) => {
    try {
      const { chatId } = chat;
      const response = await axios.get(`/api/telegram/chat/getAdministrators/${chatId}`, {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = response.data;
      if (data.ok) {
        console.log('Telegram Chat Administrators:', data.administrators);
        return data.administrators;
      } else {
        console.error('Failed to fetch chat administrators:', data.error);
        return null;
      }
    } catch (error) {
      console.error('Error fetching chat administrators:', error);
      throw error;
    }
  };  

export const TgetMemberInChatF = async (chat: {chatId: string, userId: string}) => {
    try {
      const { chatId, userId } = chat;
      const response = await axios.get(`/api/telegram/chat/getMember/${chatId}?user_id=${userId}`, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      const data = response.data;
  
      if (data.ok) {
        console.log('Telegram Chat Member Info:', data.member);
        return data.member;  
      } else {
        console.error('Failed to fetch chat member:', data.error);
        return null;
      }
    } catch (error) {
      console.error('Error fetching chat member:', error);
      throw error;
    }
  };
  

export const TleaveChatF = async () => {
}

export const TsetDescriptionOnChatF = async (description: string) => {
}

export const TsetTitleOnChatF = async (title: string) => {
}

export const TanswerQueryACallbackF = async (callbackQueryId: string, text: string) => {
}

export const TanswerInlineQueryACallbackF = async (callbackQueryId: string, text: string) => {
}

export const TgetFileF = async (fileId: string) => {
}

export const TdeleteChatMessageF = async (messageId: string) => {
}

export const TeditTestMessageF = async (messageId: string, text: string) => {
}

export const TpinChatMessageF = async (messageId: string) => {
}

export const TsendAnimatedFileF = async (file: string) => {
}

export const TsendAudioFileF = async (file: string) => {
}

export const TsendChatActionF = async (action: string) => {
}

export const TsendMediaGroupMessageF = async (media: Array<object>) => {
}

export const TsendPhotoMessageF = async (photo: string) => {
}

export const TsendStickerF = async (sticker: string) => {
}

export const TsendVideoF = async (video: string) => {
}

export const TunpinChatMessageF = async (messageId: string) => {
}

