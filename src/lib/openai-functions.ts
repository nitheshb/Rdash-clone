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
