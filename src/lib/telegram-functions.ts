import axios from "axios";

export const TgetRecentMessageF = async () => {
  try {
    const response = await axios.get("/api/telegram/getRecentMessage", {
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

export const TsendMessageF = async (message: string) => {
  try {
    const response = await axios.post("/api/telegram/sendMessage", {
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
