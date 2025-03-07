import axios from "axios";

// export const TonMessageF = async () => {
//   const timeoutDuration = 30000;
//   const pollingInterval = 5000;
//   console.log("on Message function is listening");
//   try {
//     const startTime = Date.now();
//     let latestMessage = null;

//     while (Date.now() - startTime < timeoutDuration) {
//       const response = await axios.get("/api/telegram/webhook");
//       const data = response.data;

//       if (data && data.text) {
//         console.log("Processing message:", data.text);
//         latestMessage = data;
//         break; // Exit loop if new message found
//       }

//       console.log("Waiting for new message...");
//       await new Promise((resolve) => setTimeout(resolve, pollingInterval));
//     }

//     if (latestMessage) {
//       return { chatId: latestMessage.chatId, text: latestMessage.text };
//     } else {
//       console.log("No new messages within 30 seconds.");
//       return "No new message received in 30 seconds.";
//     }
//   } catch (error) {
//     console.error("Error fetching recent message", error);
//     throw error;
//   }
// };

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
    }, {
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

export const TgetChatF = async (chat: { chatId: string | number }) => {
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

export const TgetAllAdministratorsInChatF = async (chat: { chatId: string | number }) => {
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

export const TgetMemberInChatF = async (chat: { chatId: string | number, userId: string }) => {
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

export const TleaveChatF = async (chat: { chatId: string | number }) => {
  try {
    const { chatId } = chat;
    if (!chatId) {
      throw new Error("chatId is required");
    }
    const response = await axios.post(`/api/telegram/chat/leaveChat`, {
      chat_id: chatId
    });
    if (response.data.ok) {
      console.log('Bot left the chat successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to leave chat:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error leaving chat:', error);
    throw error;
  }
};

export const TsetDescriptionOnChatF = async (chat: { chatId: string | number; description: string }) => {
  try {
    const { chatId, description } = chat;
    const response = await axios.post(`/api/telegram/chat/setDescription/${chatId}`,
      { description },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const data = response.data;

    if (data.ok) {
      console.log('Chat description updated successfully:', data.result);
      return data.result;
    } else {
      console.error('Failed to update chat description:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error updating chat description:', error);
    throw error;
  }
};

export const TsetTitleOnChatF = async (chat: { chatId: string | number; title: string }) => {
  try {
    const { chatId, title } = chat;
    const response = await axios.post(`/api/telegram/chat/setTitle/${chatId}`,
      { title },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const data = response.data;

    if (data.ok) {
      console.log('Chat title updated successfully:', data.result);
      return data.result;
    } else {
      console.error('Failed to update chat title:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error updating chat title:', error);
    throw error;
  }
};

export const TanswerQueryACallbackF = async (callback: { callbackQueryId: string; text: string; showAlert?: boolean }) => {
  try {
    const { callbackQueryId, text, showAlert = false } = callback;
    const response = await axios.post(`/api/telegram/callback/answerQuery/${callbackQueryId}`,
      { text, show_alert: showAlert },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const data = response.data;
    if (data.ok) {
      console.log('Callback query answered successfully:', data.result);
      return data.result;
    } else {
      console.error('Failed to answer callback query:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error answering callback query:', error);
    throw error;
  }
};

export const TanswerInlineQueryACallbackF = async (inlineQuery: {
  inlineQueryId: string;
  results: any[];
  cacheTime?: number;
  isPersonal?: boolean;
  nextOffset?: string
}) => {
  try {
    const { inlineQueryId, results, cacheTime = 0, isPersonal = false, nextOffset = '' } = inlineQuery;

    const response = await axios.post(`/api/telegram/callback/answerInlineQuery`, {
      inline_query_id: inlineQueryId,
      results,
      cache_time: cacheTime,
      is_personal: isPersonal,
      next_offset: nextOffset
    }, {
      headers: { 'Content-Type': 'application/json' }
    });

    const data = response.data;
    if (data.ok) {
      console.log('Inline query answered successfully:', data.result);
      return data.result;
    } else {
      console.error('Failed to answer inline query:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error answering inline query:', error);
    throw error;
  }
};

export const TgetFileF = async (file: { fileId: string }) => {
  try {
    const { fileId } = file;
    if (!fileId) throw new Error("fileId is required");
    const response = await axios.get(`/api/telegram/file/getFile?file_id=${fileId}`, {
      responseType: 'blob'
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.href = url;
    a.download = fileId;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    console.log('File downloaded successfully');
    return response.data;

  } catch (error) {
    console.error('Error fetching file:', error);
    throw error;
  }
};

export const TdeleteChatMessageF = async (chat: { chatId: string | number, messageId: number }) => {
  try {
    const { chatId, messageId } = chat;
    if (!chatId || !messageId) throw new Error("chatId and messageId are required");

    const response = await axios.delete(`/api/telegram/message/deleteMessage`, {
      data: { chat_id: chatId, message_id: messageId },
      headers: { 'Content-Type': 'application/json' }
    });

    const data = response.data;
    if (data.ok) {
      console.log('Message deleted successfully:', data.result);
      return data.result;
    } else {
      console.error('Failed to delete message:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
};

export const TeditTestMessageF = async (chat: { chatId: string | number, messageId: number, text: string }) => {
  try {
    const { chatId, messageId, text } = chat;
    if (!chatId || !messageId || !text) throw new Error("chatId, messageId, and text are required");
    const response = await axios.post(`/api/telegram/message/editTestMessage`, {
      chat_id: chatId,
      message_id: messageId,
      text
    }, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = response.data;
    if (data.ok) {
      console.log('Message edited successfully:', data.result);
      return data.result;
    } else {
      console.error('Failed to edit message:', data.error);
      return null;
    }
  } catch (error) {
    console.error('Error editing message:', error);
    throw error;
  }
};

export const TpinChatMessageF = async (chat: { chatId: string | number, messageId: number, disableNotification?: boolean }) => {
  try {
    const { chatId, messageId, disableNotification = true } = chat;

    if (!chatId || !messageId) {
      throw new Error("chatId and messageId are required");
    }
    const response = await axios.post(`/api/telegram/message/pinMessage`, {
      chat_id: chatId,
      message_id: messageId,
      disable_notification: disableNotification
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.data.ok) {
      console.log('Message pinned successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to pin message:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error pinning message:', error);
    throw error;
  }
};

export const TsendAnimatedFileF = async (chat: { chatId: string | number, animation: File, caption?: string, parseMode?: string }) => {
  try {
    const { chatId, animation, caption = "", parseMode = "Markdown" } = chat;
    if (!chatId || !animation) {
      throw new Error("chatId and animation are required");
    }
    const formData = new FormData();
    formData.append("chat_id", chatId.toString());
    formData.append("animation", animation);
    if (caption) formData.append("caption", caption);
    formData.append("parse_mode", parseMode);
    const response = await axios.post(`/api/telegram/message/sendAnimatedFile`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (response.data.ok) {
      console.log('Animation sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send animation:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending animation:', error);
    throw error;
  }
};

export const TsendAudioFileF = async (chat: { chatId: string | number, audio: File, caption?: string, duration?: number, performer?: string, title?: string }) => {
  try {
    const { chatId, audio, caption = "", duration, performer, title } = chat;

    if (!chatId || !audio) {
      throw new Error("chatId and audio are required");
    }
    const formData = new FormData();
    formData.append("chat_id", chatId.toString());
    formData.append("audio", audio);
    if (caption) formData.append("caption", caption);
    if (duration) formData.append("duration", duration.toString());
    if (performer) formData.append("performer", performer);
    if (title) formData.append("title", title);
    const response = await axios.post(`/api/telegram/message/sendAudioFile`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (response.data.ok) {
      console.log('Audio sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send audio:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending audio:', error);
    throw error;
  }
};

export const TsendChatActionF = async (chat: { chatId: string | number, action: string }) => {
  try {
    const { chatId, action } = chat;
    if (!chatId || !action) {
      throw new Error("chatId and action are required");
    }
    const response = await axios.post(`/api/telegram/message/sendChatAction`, {
      chat_id: chatId,
      action
    });
    if (response.data.ok) {
      console.log('Chat action sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send chat action:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending chat action:', error);
    throw error;
  }
};

export const TsendMediaGroupMessageF = async (chat: { chatId: string | number, mediaFiles: File[] }) => {
  try {
    const { chatId, mediaFiles } = chat;
    if (!chatId || mediaFiles.length === 0) {
      throw new Error("chatId and at least one media file are required");
    }
    const formData = new FormData();
    formData.append("chat_id", chatId.toString());
    mediaFiles.forEach((file, index) => {
      formData.append("media", file);
    });
    const response = await axios.post(`/api/telegram/message/sendMediaGroup`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (response.data.ok) {
      console.log('Media group sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send media group:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending media group:', error);
    throw error;
  }
};

export const TsendPhotoMessageF = async (chat: { chatId: string | number, photo: File, caption?: string, parseMode?: string }) => {
  try {
    const { chatId, photo, caption = "", parseMode = "Markdown" } = chat;
    if (!chatId || !photo) {
      throw new Error("chatId and photo are required");
    }
    const formData = new FormData();
    formData.append("chat_id", chatId.toString());
    formData.append("photo", photo);
    if (caption) formData.append("caption", caption);
    formData.append("parse_mode", parseMode);
    const response = await axios.post(`/api/telegram/message/sendPhoto`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (response.data.ok) {
      console.log('Photo sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send photo:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending photo:', error);
    throw error;
  }
};

export const TsendStickerF = async (chat: { chatId: string | number, sticker: File }) => {
  try {
    const { chatId, sticker } = chat;
    if (!chatId || !sticker) {
      throw new Error("chatId and sticker are required");
    }
    const formData = new FormData();
    formData.append("chat_id", chatId.toString());
    formData.append("sticker", sticker);
    const response = await axios.post(`/api/telegram/message/sendSticker`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (response.data.ok) {
      console.log('Sticker sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send sticker:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending sticker:', error);
    throw error;
  }
};

export const TsendVideoF = async (chat: { chatId: string | number, video: File, caption?: string, duration?: number, width?: number, height?: number, supportsStreaming?: boolean }) => {
  try {
    const { chatId, video, caption = "", duration, width, height, supportsStreaming = true } = chat;
    if (!chatId || !video) {
      throw new Error("chatId and video are required");
    }
    const formData = new FormData();
    formData.append("chat_id", chatId.toString());
    formData.append("video", video);
    if (caption) formData.append("caption", caption);
    if (duration) formData.append("duration", duration.toString());
    if (width) formData.append("width", width.toString());
    if (height) formData.append("height", height.toString());
    formData.append("supports_streaming", supportsStreaming.toString());

    const response = await axios.post(`/api/telegram/message/sendVideo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    if (response.data.ok) {
      console.log('Video sent successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to send video:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error sending video:', error);
    throw error;
  }
};

export const TunpinChatMessageF = async (chat: { chatId: string | number, messageId?: number }) => {
  try {
    const { chatId, messageId } = chat;

    if (!chatId) {
      throw new Error("chatId is required");
    }
    const response = await axios.post(`/api/telegram/message/unpinMessage`, {
      chat_id: chatId,
      message_id: messageId
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.data.ok) {
      console.log('Message unpinned successfully:', response.data.result);
      return response.data.result;
    } else {
      console.error('Failed to unpin message:', response.data.error);
      return null;
    }
  } catch (error) {
    console.error('Error unpinning message:', error);
    throw error;
  }
};

export const TonCallbackQueryF = async () => { };

export const TonChannelPostF = async () => { };

export const TonEditedChannelPostF = async () => { };

export const TonEditedMessageF = async () => {
};

export const TonInlineQueryF = async () => { };

export const TonPollChangeF = async () => { };

export const TonPreCheckoutQueryF = async () => { };

export const TonShippingQueryF = async () => { };


