"use client";
import React from "react";
import {
  GitBranch,
  MousePointerClickIcon,
  Timer,
  Webhook,
  Zap,
} from "lucide-react";
import { EditorCanvasTypes } from "@/lib/types";
import Image from "next/image";

type Props = { type: EditorCanvasTypes };

const EditorCanvasIconHelper = ({ type }: Props) => {
  switch (type) {
    case "C_condition_check":
      return <GitBranch className="flex-shrink-0" size={25} />;
    case "O_open_ai":
      return (
        <Image
          src="/openai.svg"
          alt="Open AI"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "S_slack":
      return (
        <Image
          src="/slack.svg"
          alt="Slack"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "G_google_drive":
      return (
        <Image
          src="/googleDrive.svg"
          alt="Google Drive"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "N_notion":
      return (
        <Image
          src="/notion.svg"
          alt="Notion"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "D_discord":
      return (
        <Image
          src="/discord.svg"
          alt="Discord"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "C_custom_webhook_event":
      return <Webhook className="flex-shrink-0" size={25} />;
    case "GL_google_calendar":
    case "GL_get_availability_in_a_calendar":
    case "GL_create_an_event":
    case "GL_get_an_event":
    case "GL_get_many_events":
    case "GL_update_an_event":
    case "GL_delete_an_event":
      return (
        <Image
          src="/googleCalendar.svg"
          alt="Google Calendar"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "T_trigger_event":
      return <MousePointerClickIcon className="flex-shrink-0" size={25} />;
    case "A_action_event":
      return <Zap className="flex-shrink-0" size={25} />;
    case "W_wait_event":
      return <Timer className="flex-shrink-0" size={25} />;
    case "T_telegram_connection":
    case "T_get_a_chat":
    case "T_get_all_admins_in_chat":
    case "T_get_member_in_chat":
    case "T_leave_a_chat":
    case "T_set_description_on_chat":
    case "T_set_title_on_chat":
    case "T_answer_query_a_callback":
    case "T_answer_inline_query_a_callback":
    case "T_get_file":
    case "T_delete_chat_message":
    case "T_edit_test_message":
    case "T_pin_chat_message":
    case "T_send_text_message":
    case "T_send_media_group_message":
    case "T_send_photo_message":
    case "T_send_animated_file":
    case "T_send_audio_file":
    case "T_send_chat_action":
    case "T_send_sticker":
    case "T_send_video":
    case "T_unpin_chat_message":
    case "T_on_message":
    case "T_on_callback_query":
    case "T_on_channel_post":
    case "T_on_edited_channel_post":
    case "T_on_edited_message":
    case "T_on_inline_query":
    case "T_on_poll_change":
    case "T_on_pre_checkout_query":
    case "T_on_shipping_query":
      return (
        <Image
          src="/telegram.svg"
          alt="Telegram"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "J_jira_connection":
    case "J_get_many_issues":
    case "J_get_an_issue":
    case "J_create_an_issue":
    case "J_delete_an_issue":
    case "J_update_an_issue":
    case "J_get_the_status_of_an_issue":
    case "J_get_an_issue_changelog":
    case "J_create_email_notification_for_an_issue":
    case "J_add_an_attachment_to_an_issue":
    case "J_get_an_attachment_from_an_issue":
    case "J_get_many_issue_attachments":
    case "J_remove_an_attachment_from_an_issue":
    case "J_add_a_comment":
    case "J_get_a_comment":
    case "J_get_many_comments":
    case "J_remove_a_comment":
    case "J_update_a_comment":
    case "J_create_a_user":
    case "J_delete_a_user":
    case "J_get_a_user":
    case "J_get_all_users":
      return (
        <Image
          src="/jira.svg"
          alt="Jira"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "G_connect_gmail":
    case "G_get_latest_email":
    case "G_send_message_to_draft":
      return (
        <Image
          src="/gmail.svg"
          alt="Gmail"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    case "O_connect_to_outlook":
    case "O_get_a_message":
    case "O_get_many_messages":
    case "O_delete_message":
    case "O_create_a_draft":
    case "O_get_the_draft":
    case "O_delete_draft":
    case "O_update_draft":
    case "O_send_mail":
    case "O_create_folder":
    case "O_get_a_folder":
    case "O_get_many_folders":
    case "O_update_folder":
    case "O_delete_folder":
    case "O_create_contact":
    case "O_delete_contact":
    case "O_get_contact":
    case "O_get_all_contacts":
    case "O_update_contact":
    case "O_create_calendar":
    case "O_delete_calendar":
    case "O_get_calendar":
    case "O_get_all_calendars":
    case "O_update_calendar":
    case "O_create_event":
    case "O_delete_event":
    case "O_get_all_events":
    case "O_update_event":
    case "O_add_attachment":
    case "O_download_attachment":
    case "O_get_attachment":
    case "O_get_all_attachments":
      return (
        <Image
          src="/outlook.svg"
          alt="Gmail"
          className="flex-shrink-0"
          width={25}
          height={25}
        />
      );
    default:
      return <Zap className="flex-shrink-0" size={25} />;
  }
};

export default EditorCanvasIconHelper;
