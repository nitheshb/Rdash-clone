import axios from "axios";

export const OmessageModelF = async (message: string) => {
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

export const OcreateAssistantF = async (messages: { role: string; content: string }[]) => {
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

export const OuploadFileF = async (message: { file: File }) => {
    const { file } = message;
    if (!file) {
        throw new Error("file is required.");
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
        const response = await axios.post("/api/openai/file/uploadFile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        const data = response.data;
        if (data.success) {
            console.log("File uploaded successfully:", data);
            return data;
        }
        throw new Error("Failed to upload file.");
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

export const OlistFilesF = async () => {
    try {
        const response = await axios.get("/api/openai/file/listFiles");

        const data = response.data;
        if (data.success) {
            console.log("Files listed successfully:", data.data);
            return data.data;
        }
        throw new Error("Failed to list files.");
    } catch (error) {
        console.error("Error listing files:", error);
        throw error;
    }
};

export const OdeleteFileF = async (file: { fileId: string | number }) => {
    const { fileId } = file;
    if (!fileId) {
        throw new Error("fileId is required.");
    }
    try {
        const response = await axios.delete("/api/openai/file/deleteFile", {
            data: { fileId },
        });
        const data = response.data;
        if (data.success) {
            console.log("File deleted successfully:", data);
            return data;
        }
        throw new Error("Failed to delete file.");
    } catch (error) {
        console.error("Error deleting file:", error);
        throw error;
    }
};

export const OdeleteAssistantF = async (assistantId: string) => {
    try {
      const response = await axios.delete("/api/openai/assistant/deleteAssistant", {
        data: { assistantId },
      });
  
      console.log("Assistant deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error deleting assistant:", error);
      throw error;
    }
  };
  
  export const OlistAssistantsF = async () => {
    try {
      const response = await axios.get("/api/openai/assistant/listAssistants", {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("OpenAI Assistants:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching OpenAI assistants:", error);
      throw error;
    }
  };
  
  interface UpdateAssistantData {
    assistantId: string;
    newName: string;
    newDescription: string;
  }
  
  export const OupdateAssistantF = async (data: UpdateAssistantData) => {
    try {
      const response = await axios.put('/api/openai/assistant/updateAssistant', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.success) {
        console.log('Assistant updated successfully:', response.data);
        return response.data;
      } else {
        console.error('Failed to update assistant:', response.data.error);
        return { error: response.data.error };
      }
    } catch (error) {
      console.error('Error updating assistant:', error);
      throw error;
    }
  };
  
  export const OclassifyTextF = async (message: string) => {
    try {
      const response = await axios.post("/api/openai/text/classifyText", {
        message,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      console.log("OpenAI Classification Response:", data);
      return data.classification;
    } catch (error) {
      console.error("Error fetching OpenAI classification response:", error);
      throw error;
    }
  };
  
  export const OanalyzeImageF = async (imageUrl: string) => {
    try {
      const response = await axios.post(
        "/api/openai/image/analyzeImage",
        { imageUrl },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("OpenAI Image Analysis:", response.data);
      return response.data.analysis;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error analyzing image:", error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error("Unexpected Error:", error.message);
      } else {
        console.error("Unknown Error:", error);
      }
      throw error;
    }
  };
  
  export const OgenerateImageF = async (prompt: string) => {
    try {
      const response = await axios.post(
        "/api/openai/image/generateImage",
        { prompt },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("OpenAI Image Generation Response:", response.data);
      return response.data.imageUrl;
    } catch (error) {
      console.error("Error generating image:", error);
      throw error;
    }
  };
  
  export const OgenerateAudioF = async (text: string, voice: string = "alloy") => {
    try {
      const response = await axios.post(
        "/api/openai/audio/generateAudio",
        { text, voice },
        {
          headers: { "Content-Type": "application/json" },
          responseType: "blob", // Get raw MP3 data
        }
      );
  
      return URL.createObjectURL(response.data);
    } catch (error) {
      console.error("Error generating audio:", error);
      throw error;
    }
  };
  
  export const OtranscribeAudioF = async (input: string | File) => {
    try {
      let file: File;
  
      // Check if input is a Blob URL, then fetch and convert to File
      if (typeof input === "string") {
        const response = await fetch(input);
        const blob = await response.blob();
  
        // Get correct MIME type (defaulting to mp3)
        const mimeType = blob.type || "audio/mp3";
        file = new File([blob], "audio.mp3", { type: mimeType });
      } else {
        file = input;
      }
  
      const formData = new FormData();
      formData.append("audio", file);
  
      const response = await axios.post("/api/openai/audio/transcribeRecording", formData);
  
      return response.data.transcription; // Return transcribed text
    } catch (error: any) {
      console.error("Error transcribing audio:", error.response?.data || error.message);
      throw error;
    }
  };
  
  export const OtranslateAudioF = async (blobUrl: string) => {
    try {
      // Fetch the blob from the URL and convert it to a file object
      const response = await fetch(blobUrl);
      const blob = await response.blob(); // Get the blob from the URL
  
      // Convert the Blob to a File object
      const file = new File([blob], "audio.mp3", { type: "audio/mp3" }); // Adjust the filename and mime type if needed
  
      const formData = new FormData();
      formData.append("audio", file); // Send the actual file object
  
      // Call the backend API to translate the audio
      const backendResponse = await axios.post("/api/openai/audio/translateRecording", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      return backendResponse.data.translation;  // Return the translated text from the API response
    } catch (error) {
      console.error("Error translating audio:", error);
      throw error;
    }
  };

  export const generateVideo = async (prompt: string) => {
    try {
      const response = await axios.post(
        "/api/openai/video/generateVideo",
        { prompt },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("OpenAI Video Generation Response:", response.data);
      return response.data.videoUrl;
    } catch (error) {
      console.error("Error generating video:", error);
      throw error;
    }
  };