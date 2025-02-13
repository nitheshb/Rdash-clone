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
        console.log("OpenAI Response:", data.response);
        return data.response || "No response text found.";
    } catch (error) {
        console.error("Error fetching OpenAI response:", error);
        throw error;
    }
  };
  
  
  