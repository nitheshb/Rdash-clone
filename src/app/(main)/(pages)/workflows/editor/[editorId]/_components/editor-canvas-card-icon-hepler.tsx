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
    case "Email":
      return (
        <Image
          src="/gmail.svg"
          alt="Gmail"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Condition":
      return <GitBranch className="flex-shrink-0" size={30} />;
    case "Open AI":
      return (
        <Image
          src="/openai.svg"
          alt="Open AI"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Slack":
      return (
        <Image
          src="/slack.svg"
          alt="Slack"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Google Drive":
      return (
        <Image
          src="/googleDrive.svg"
          alt="Google Drive"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Notion":
      return (
        <Image
          src="/notion.svg"
          alt="Notion"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Discord":
      return (
        <Image
          src="/discord.svg"
          alt="Discord"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Custom Webhook":
      return <Webhook className="flex-shrink-0" size={30} />;
    case "Google Calendar":
      return (
        <Image
          src="/googleCalendar.svg"
          alt="Google Calendar"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Trigger":
      return <MousePointerClickIcon className="flex-shrink-0" size={30} />;
    case "Action":
      return <Zap className="flex-shrink-0" size={30} />;
    case "Wait":
      return <Timer className="flex-shrink-0" size={30} />;
    case "Telegram Connection":
    case "Get a chat":
    case "Get all administrators in a chat":
    case "Get a member in a chat":
    case "Leave a chat":
    case "Set description on a chat":
    case "Set a title on a chat":
    case "Answer query a callback":
    case "Answer an inline query callback":
    case "Get a file":
    case "Delete a chat message":
    case "Edit a test message":
    case "Pin a chat message":
    case "Send a text message":
    case "Send a media group message":
    case "Send a photo message":
    case "Send an animated file":
    case "Send an audio file":
    case "Send a chat action":
    case "Send a sticker":
    case "Send a video":
    case "Unpin a chat message":
    case "On message":
      return (
        <Image
          src="/telegram.svg"
          alt="Telegram"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Jira Connection":
    case "Get many issues":
    case "Get an issue":
    case "Create an issue":
    case "Delete an issue":
    case "Update an issue":
    case "Get the status of an issue":
    case "Get an issue changelog":
    case "Create an email notifications for an issue":
    case "Add an attachment to an issue":
    case "Get an attachment from an issue":
    case "Get many issue attachments":
    case "Remove an attachment from an issue":
    case "Add a comment":
    case "Get a comment":
    case "Get many comments":
    case "Remove a comment":
    case "Update a comment":
    case "Create a user":
    case "Delete a user":
    case "Get a user":
    case "Get all users":
      return (
        <Image
          src="/jira.svg"
          alt="Jira"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Connect To Gmail":
    case "Get Latest Email":
    case "Send Message To Draft":
      return (
        <Image
          src="/gmail.svg"
          alt="Gmail"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    case "Connect To Outlook":
    case "Get a message outlook":
    case "Get many messages outlook":
    case "Delete message outlook":
    case "Create a draft outlook":
    case "Get the draft outlook":
    case "Delete draft outlook":
    case "Update draft outlook":
    case "Send mail outlook":
    case "Create Folder Outlook":
    case "Get a Folder Outlook":
    case "Get Many Folders Outlook":
    case "Update Folder Outlook":
    case "Delete Folder Outlook":
    case "Create Contact Outlook":
    case "Get Contact Outlook":
    case "Get All Contacts Outlook":
    case "Delete Contact Outlook":
    case "Update Contact Outlook":
    case "Create Calendar Outlook":
    case "Get Calendar Outlook":
    case "Get All Calendars Outlook":
    case "Delete Calendar Outlook":
    case "Update Calendar Outlook":
    case "Create Event Outlook":
    case "Get Event Outlook":
    case "Get All Events Outlook":
    case "Delete Event Outlook":
    case "Update Event Outlook":
    case "Add Attachment Outlook":
    case "Get Attachment Outlook":
    case "Get All Attachments Outlook":
    case "Download Attachment Outlook":
      return (
        <Image
          src="/outlook.svg"
          alt="Gmail"
          className="flex-shrink-0"
          width={30}
          height={30}
        />
      );
    default:
      return <Zap className="flex-shrink-0" size={30} />;
  }
};

export default EditorCanvasIconHelper;
