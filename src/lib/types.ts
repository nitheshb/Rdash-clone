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
  | "Outlook"
  | "Google Calendar";

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
  | "C_condition_check"
  | "O_open_ai"
  | "S_slack"
  | "G_google_drive"
  | "N_notion"
  | "C_custom_webhook_event"
  | "GL_google_calendar"
  | "GL_get_availability_in_a_calendar"
  | "GL_create_an_event"
  | "GL_get_an_event"
  | "GL_get_many_events"
  | "GL_update_an_event"
  | "GL_delete_an_event"
  | "T_trigger_event"
  | "A_action_event"
  | "W_wait_event"
  | "D_discord"
  | "T_telegram_connection"
  | "T_get_a_chat"
  | "T_get_all_admins_in_chat"
  | "T_get_member_in_chat"
  | "T_leave_a_chat"
  | "T_set_description_on_chat"
  | "T_set_title_on_chat"
  | "T_answer_query_a_callback"
  | "T_answer_inline_query_a_callback"
  | "T_get_file"
  | "T_delete_chat_message"
  | "T_edit_test_message"
  | "T_send_text_message"
  | "T_send_media_group_message"
  | "T_send_photo_message"
  | "T_send_animated_file"
  | "T_send_audio_file"
  | "T_send_chat_action"
  | "T_send_sticker"
  | "T_send_video"
  | "T_pin_chat_message"
  | "T_unpin_chat_message"
  | "T_on_message"
  | "T_on_callback_query"
  | "T_on_channel_post"
  | "T_on_edited_channel_post"
  | "T_on_edited_message"
  | "T_on_inline_query"
  | "T_on_poll_change"
  | "T_on_pre_checkout_query"
  | "T_on_shipping_query"
  | "J_jira_connection"
  | "J_get_many_issues"
  | "J_get_an_issue"
  | "J_create_an_issue"
  | "J_delete_an_issue"
  | "J_update_an_issue"
  | "J_get_the_status_of_an_issue"
  | "J_get_an_issue_changelog"
  | "J_create_email_notification_for_an_issue"
  | "J_add_an_attachment_to_an_issue"
  | "J_get_an_attachment_from_an_issue"
  | "J_get_many_issue_attachments"
  | "J_remove_an_attachment_from_an_issue"
  | "J_add_a_comment"
  | "J_get_a_comment"
  | "J_get_many_comments"
  | "J_remove_a_comment"
  | "J_update_a_comment"
  | "J_create_a_user"
  | "J_delete_a_user"
  | "J_get_a_user"
  | "J_get_all_users"
  | "G_connect_gmail"
  | "G_get_latest_email"
  | "G_send_message_to_draft"
  | "O_connect_to_outlook"
  | "O_get_a_message"
  | "O_get_many_messages"
  | "O_delete_message"
  | "O_create_a_draft"
  | "O_get_the_draft"
  | "O_delete_draft"
  | "O_update_draft"
  | "O_send_mail"
  | "O_create_folder"
  | "O_get_a_folder"
  | "O_get_many_folders"
  | "O_update_folder"
  | "O_delete_folder"
  | "O_create_contact"
  | "O_delete_contact"
  | "O_get_contact"
  | "O_get_all_contacts"
  | "O_update_contact"
  | "O_create_calendar"
  | "O_delete_calendar"
  | "O_get_calendar"
  | "O_get_all_calendars"
  | "O_update_calendar"
  | "O_create_event"
  | "O_delete_event"
  | "O_get_all_events"
  | "O_update_event"
  | "O_get_event"
  | "O_add_attachment"
  | "O_download_attachment"
  | "O_get_attachment"
  | "O_get_all_attachments";

export type EditorCanvasStatus = "idle" | "loading" | "success" | "failure";

export type EditorCanvasCardType = {
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
  metadata: any;
  type: EditorCanvasTypes;
  status: EditorCanvasStatus;
  value: string;
};

export type NodeActions = {
  [key: string]: {
    [actionHeading: string]: string[];
  };
};

export type NodeTriggers = {
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
