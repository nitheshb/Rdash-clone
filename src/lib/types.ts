import { ConnectionProviderProps } from "@/providers/connections-provider";
import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  name: z.string().min(1, "Required"),
});

export const WorkflowFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});

export type ConnectionTypes =
  | "Google Drive"
  | "Notion"
  | "Slack"
  | "Discord"
  | "Telegram"
  | "Jira"
  | "Gmail"
  | "Outlook";

export type Connection = {
  title: ConnectionTypes;
  description: string;
  image: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};

export type EditorCanvasTypes =
  | "Email"
  | "Condition"
  | "Open AI"
  | "Slack"
  | "Google Drive"
  | "Notion"
  | "Custom Webhook"
  | "Google Calendar"
  | "Trigger"
  | "Action"
  | "Wait"
  | "Discord"
  | "Telegram Connection"
  | "Get Recent Message"
  | "Send Message"
  | "Jira Connection"
  | "Get Many Issues"
  | "Get an Issue"
  | "Create an Issue"
  | "Delete an Issue"
  | "Update an Issue"
  | "Get Issue Status"
  | "Get an Issue Changelog"
  | "Create Email Notification"
  | "Add an Attachment"
  | "Get an Attachment"
  | "Get Many Attachments"
  | "Remove an Attachment"
  | "Add a Comment"
  | "Get a Comment"
  | "Get Many Comments"
  | "Remove a Comment"
  | "Update a Comment"
  | "Create a User"
  | "Delete a User"
  | "Get a User"
  | "Get all Users"
  | "Connect To Gmail"
  | "Get Latest Email"
  | "Send Message To Draft"
  | "Connect To Outlook"
  | "Get a message outlook"
  | "Get many messages outlook"
  | "Delete message outlook"
  | "Create a draft outlook"
  | "Get the draft outlook"
  | "Delete draft outlook"
  | "Update draft outlook"
  | "Send mail outlook"
  | "Create Folder Outlook"
  | "Get a Folder Outlook"
  | "Get Many Folders Outlook"
  | "Update Folder Outlook"
  | "Delete Folder Outlook"
  | "Create Contact Outlook"
  | "Get Contact Outlook"
  | "Get All Contacts Outlook"
  | "Delete Contact Outlook"
  | "Update Contact Outlook"
  | "Create Calendar Outlook"
  | "Get Calendar Outlook"
  | "Get All Calendars Outlook"
  | "Delete Calendar Outlook"
  | "Update Calendar Outlook"
  | "Create Event Outlook"
  | "Get Event Outlook"
  | "Get All Events Outlook"
  | "Delete Event Outlook"
  | "Update Event Outlook"
  | "Add Attachment Outlook"
  | "Get Attachment Outlook"
  | "Get All Attachments Outlook"
  | "Download Attachment Outlook";

export type EditorCanvasStatus = "idle" | "loading" | "success" | "failure";

export type EditorCanvasCardType = {
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
  metadata: any;
  type: EditorCanvasTypes;
  status: EditorCanvasStatus;
};

export type NodeActions = {
  [key: string]: string[];
};

export type EditorNodeType = {
  id: string;
  type: EditorCanvasCardType["type"];
  myFunction: () => void;
  position: {
    x: number;
    y: number;
  };
  data: EditorCanvasCardType;
};

export type EditorNode = EditorNodeType;

export type EditorActions =
  | {
      type: "LOAD_DATA";
      payload: {
        elements: EditorNode[];
        edges: {
          id: string;
          source: string;
          target: string;
        }[];
      };
    }
  | {
      type: "UPDATE_NODE";
      payload: {
        elements: EditorNode[];
      };
    }
  | { type: "REDO" }
  | { type: "UNDO" }
  | {
      type: "SELECTED_ELEMENT";
      payload: {
        element: EditorNode;
      };
    };

export const nodeMapper: Record<string, string> = {
  Notion: "notionNode",
  Slack: "slackNode",
  Discord: "discordNode",
  Telegram: "telegramNode",
  "Google Drive": "googleNode",
};
