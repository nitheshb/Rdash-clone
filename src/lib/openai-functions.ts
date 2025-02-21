import axios from "axios";

export const CopenaiResponseF = async (message: string) => {
    try {
        const response = await axios.post("/api/openai/response", {
            message
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = response.data;
        console.log("OpenAI Response:", data);
        const { summary, description, issueType } = data;

        if (summary && description && issueType) {
            return { summary, description, issueType };
        }
        return data.response;
    } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        throw error;
    }
};

export const OaskOpenAIAssistantF = async (messages: { role: string; content: string }[]) => {
    try {
        const response = await axios.post("/api/openai/assistant/createAssistant", { messages }, {
            headers: { "Content-Type": "application/json" },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        throw error;
    }
};
