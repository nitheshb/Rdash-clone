import axios from "axios";

export const CopenaiResponseF = async (message: string) => {
    try {
        const response = await axios.post("/api/openai", {
          message
        },{
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = response.data;
        console.log("OpenAI Response:",data);
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
  
  
  