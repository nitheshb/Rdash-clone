import axios from "axios";

export const NappendBlockF = async (block: { parentId: string; content: string; }) => {
    try {
        const { parentId, content } = block;
        if (!parentId || !content) {
            throw new Error("Content is required.");
        }
        const response = await axios.patch("/api/notion/block/appendBlock",
            { parentId, content },
            { headers: { "Content-Type": "application/json" } }
        );
        const data = response.data;
        if (data.success) {
            console.log("Block added successfully:", data);
            return data;
        }
        throw new Error("Failed to append block.");
    } catch (error) {
        console.error("Error appending Notion block:", error);
        throw error;
    }
};

export const NgetManyChildBlocksF = async (block: { parentId: string }) => {
    try {
        const { parentId } = block;
        if (!parentId) {
            throw new Error("parentId is required.");
        }
        const response = await axios.get(`/api/notion/block/getBlocks/${parentId}`);

        const data = response.data;
        if (data.success) {
            console.log("Child blocks retrieved successfully:", data.data);
            return data.data;
        }
        throw new Error("Failed to retrieve child blocks.");
    } catch (error) {
        console.error("Error fetching child blocks:", error);
        throw error;
    }
};

export const NgetDatabaseF = async (database: { databaseId: string }) => {
    try {
        const { databaseId } = database;
        const response = await axios.get(`/api/notion/database/getDatabase/${databaseId}`);
        const data = response.data;
        if (data.success) {
            console.log('Database retrieved successfully:', data.data);
            return data.data;
        }
        throw new Error('Failed to retrieve database.');
    } catch (error) {
        console.error('Error fetching Notion database:', error);
        throw error;
    }
};

export const NgetManyDatabasesF = async () => {
    try {
        const response = await axios.get('/api/notion/database/getDatabases');
        const data = response.data;
        if (data.success) {
            console.log('Databases retrieved successfully:', data.data);
            return data.data;
        }
        throw new Error('Failed to retrieve databases.');
    } catch (error) {
        console.error('Error fetching Notion databases:', error);
        throw error;
    }
};

export const NsearchDatabaseF = async (database: { query: string }) => {
    try {
        const { query } = database;
        const response = await axios.post(`/api/notion/database/SearchDatabase`, { query });
        const data = response.data;

        if (data.success) {
            console.log('Search results:', data.data);
            return data.data;
        }
        throw new Error('Failed to retrieve search results.');
    } catch (error) {
        console.error('Error searching Notion database:', error);
        throw error;
    }
};

export const NcreateDatabasePageF = async (page: { databaseId: string, name: string, properties: Record<string, any> }) => {
    try {
        const { databaseId, name, properties } = page;
        const payload = {
            database_id: databaseId,
            name,
            ...properties,
        };
        console.log("Payload being sent to create the page:", payload);

        const response = await axios.post('/api/notion/databasePage/createDatabasePage', payload);

        const data = response.data;
        if (data.success) {
            console.log('Page created successfully:', data.data);
            return data.data;
        } else {
            throw new Error('Failed to create page.');
        }
    } catch (error) {
        console.error('Error creating Notion page:', error);
        throw error;
    }
};

export const NgetDatabasePageF = async (page: { pageId: string }) => {
    try {
        const { pageId } = page;
        const response = await axios.get(`/api/notion/databasePage/getDatabasePage/${pageId}`);
        const data = response.data;

        if (data.success) {
            console.log('Page data retrieved successfully:', data.data);
            return data.data;
        } else {
            throw new Error('Failed to retrieve page data.');
        }
    } catch (error) {
        console.error('Error fetching Notion page:', error);
        throw error;
    }
};