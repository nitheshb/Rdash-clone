import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const NOTION_API_KEY = process.env.NOTION_API_KEY;

interface DatabaseColumn {
    type: string;
    name: string;
    options?: { name: string; id: string }[]; 
    status?: { options: { name: string; id: string }[] };
    select?: { options: { name: string; id: string }[] };
}

interface DatabaseSchema {
    [columnName: string]: DatabaseColumn;
}

const getFieldIdByName = (value: string, options: { name: string; id: string }[]) => {
    const option = options.find(opt => opt.name === value);
    return option ? option.id : null;
};

const getDatabaseSchema = async (databaseId: string): Promise<DatabaseSchema> => {
    try {
        const response = await axios.get(
            `https://api.notion.com/v1/databases/${databaseId}`,
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                },
            }
        );
        return response.data.properties;
    } catch (error: any) {
        throw new Error('Failed to fetch database schema: ' + error.message);
    }
};

const createProperty = (columnName: string, columnValue: string, columnDetails: DatabaseColumn, schema: DatabaseSchema) => {
    const { type } = columnDetails;

    switch (type) {
        case 'rich_text':
            return { "rich_text": [{ "text": { "content": columnValue } }] };
        case 'status':
            const statusId = getFieldIdByName(columnValue, columnDetails.status?.options || []);
            if (statusId) {
                return { "status": { "id": statusId } };
            }
            console.error(`Status value "${columnValue}" not found in options for ${columnName}`);
            return null;
        case 'select':
            const selectId = getFieldIdByName(columnValue, columnDetails.select?.options || []);
            if (selectId) {
                return { "select": { "id": selectId } };
            }
            console.error(`Select value "${columnValue}" not found in options for ${columnName}`);
            return null;
        case 'date':
            return { "date": { "start": columnValue } };
        case 'number':
            return { "number": columnValue };
        case 'checkbox':
            return { "checkbox": columnValue === 'true' };
        default:
            console.warn(`Unsupported property type for ${columnName}: ${type}`);
            return null;
    }
};

export async function POST(req: NextRequest) {
    const { database_id, name, ...otherFields } = await req.json();

    if (!database_id || !name) {
        return NextResponse.json({ error: "Missing required fields: database_id and name" }, { status: 400 });
    }

    try {
        const schema: DatabaseSchema = await getDatabaseSchema(database_id);

        const properties: Record<string, any> = {
            "Name": { "title": [{ "text": { "content": name } }] },
        };

        for (const [columnName, columnDetails] of Object.entries(schema)) {
            if (columnName === "Name") continue;

            const columnValue = otherFields[columnName];

            if (!columnValue) continue;

            const property = createProperty(columnName, columnValue, columnDetails, schema);

            if (property) {
                properties[columnName] = property;
            }
        }

        const response = await axios.post(
            `https://api.notion.com/v1/pages`,
            {
                parent: { database_id },
                properties,
            },
            {
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    'Notion-Version': '2022-06-28',
                },
            }
        );

        return NextResponse.json({ success: true, data: response.data }, { status: 200 });
    } catch (error: any) {
        console.error('Error creating page:', error.response?.data || error.message);
        return NextResponse.json({ error: error.response?.data || 'Failed to create page' }, { status: error.response?.status || 500 });
    }
}
