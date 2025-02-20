import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import { Connection, NodeActions, NodeTriggers } from "./types";
import {
  ActionEventF,
  ConditionCheckF,
  CustomWebhookEventF,
  DiscordMessageF,
  GconnectGmailF,
  GconnectOutlookF,
  GemailConnectionF,
  GoogleCalendarEventF,
  GoogleDriveActionF,
  JiraConnectionF,
  NotionEntryF,
  SlackNotificationF,
  TconnectTelegramF,
  TriggerEventF,
  WaitEventF,
} from "./function-utils";
import {
  JaddAttachmentF,
  JaddCommentF,
  JcreateEmailNotificationF,
  JcreateIssueF,
  JcreateUserF,
  JdeleteIssueF,
  JdeleteUserF,
  JgetAllUsersF,
  JgetAttachmentF,
  JgetCommentF,
  JgetIssueChangelogF,
  JgetIssueF,
  JgetIssueStatusF,
  JgetManyAttachmentsF,
  JgetManyCommentsF,
  JgetManyIssuesF,
  JgetUserF,
  JremoveAttachmentF,
  JremoveCommentF,
  JupdateCommentF,
  JupdateIssueF,
} from "./jira-functions";
import { CopenaiResponseF } from "./openai-functions";
import { GdraftGmailF, GfetchGmailF } from "./gmail-functions";
import {
  OaddAttachmentOutlookF,
  OcalendarCreateOutlookF,
  OcalendarDeleteOutlookF,
  OcalendarGetAllOutlookF,
  OcalendarGetOutlookF,
  OcalendarUpdateOutlookF,
  OcontactCreateOutlookF,
  OcontactDeleteOutlookF,
  OcontactGetAllOutlookF,
  OcontactGetOutlookF,
  OcontactUpdateOutlookF,
  OcreateDraftOutlookF,
  OdeleteDraftOutlookF,
  OdeleteMessageOutlookF,
  OdownloadAttachmentOutlookF,
  OeventCreateOutlookF,
  OeventDeleteOutlookF,
  OeventGetAllOutlookF,
  OeventGetOutlookF,
  OeventUpdateOutlookF,
  OfetchManyOutlookF,
  OfetchOutlookF,
  OfolderCreateOutlookF,
  OfolderDeleteOutlookF,
  OfolderGetManyOutlookF,
  OfolderGetOutlookF,
  OfolderUpdateOutlookF,
  OgetAllAttachmentOutlookF,
  OgetAttachmentOutlookF,
  OgetDraftOutlookF,
  OsendMailOutlookF,
  OupdateDraftOutlookF,
} from "./outlook-functions";
import { TgetChatF, TgetAllAdministratorsInChatF, TgetMemberInChatF, TleaveChatF, TsetDescriptionOnChatF, TsetTitleOnChatF, TanswerQueryACallbackF, TanswerInlineQueryACallbackF, TgetFileF, TdeleteChatMessageF, TeditTestMessageF, TpinChatMessageF, TsendMediaGroupMessageF, TsendTextMessageF, TsendPhotoMessageF, TsendAnimatedFileF, TsendAudioFileF, TsendStickerF, TsendVideoF, TsendChatActionF, TunpinChatMessageF, TonMessageF } from "./telegram-functions";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];

export const menuOptions = [
  { name: "Dashboard", Component: Home, href: "/dashboard" },
  { name: "Workflows", Component: Workflows, href: "/workflows" },
  { name: "Settings", Component: Settings, href: "/settings" },
  { name: "Connections", Component: Category, href: "/connections" },
  // { name: "Billing", Component: Payment, href: "/billing" },
  // { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];

export const EditorCanvasDefaultCardTypes = {
  "Telegram Connection": {
    description: "Connect with Telegram for actions",
    type: "Node",
    myFunction: TconnectTelegramF,
    status: "idle",
  },
  "Get a chat": {
    description: "Get a chat from Telegram",
    type: "Action",
    myFunction: TgetChatF,
    status: "idle",
  },
  "Get all administrators in a chat": {
    description: "Get all administrators in a chat",
    type: "Action",
    myFunction: TgetAllAdministratorsInChatF,
    status: "idle",
  },
  "Get a member in a chat": {
    description: "Get a member in a chat",
    type: "Action",
    myFunction: TgetMemberInChatF,
    status: "idle",
  },
  "Leave a chat": {
    description: "Leave a chat",
    type: "Action",
    myFunction: TleaveChatF,
    status: "idle",
  },
  "Set description on a chat": {
    description: "Set description on a chat",
    type: "Action",
    myFunction: TsetDescriptionOnChatF,
    status: "idle",
  },
  "Set a title on a chat": {
    description: "Set a title on a chat",
    type: "Action",
    myFunction: TsetTitleOnChatF,
    status: "idle",
  },
  "Answer query a callback": {
    description: "Answer query callback",
    type: "Action",
    myFunction: TanswerQueryACallbackF,
    status: "idle",
  },
  "Answer an inline query callback": {
    description: "Answer inline query callback",
    type: "Action",
    myFunction: TanswerInlineQueryACallbackF,
    status: "idle",
  },
  "Get a file": {
    description: "Get a file from Telegram",
    type: "Action",
    myFunction: TgetFileF,
    status: "idle",
  },
  "Delete a chat message": {
    description: "Delete a chat message",
    type: "Action",
    myFunction: TdeleteChatMessageF,
    status: "idle",
  },
  "Edit a test message": {
    description: "Edit a test message",
    type: "Action",
    myFunction: TeditTestMessageF,
    status: "idle",
  },
  "Pin a chat message": {
    description: "Pin a chat message",
    type: "Action",
    myFunction: TpinChatMessageF,
    status: "idle",
  },
  "Send a media group message": {
    description: "Send a media group message to Telegram",
    type: "Action",
    myFunction: TsendMediaGroupMessageF,
    status: "idle",
  },
  "Send a text message": {
    description: "Send a text message to Telegram",
    type: "Action",
    myFunction: TsendTextMessageF,
    status: "idle",
  },
  "Send a photo message": {
    description: "Send a photo message to Telegram",
    type: "Action",
    myFunction: TsendPhotoMessageF,
    status: "idle",
  },
  "Send an animated file": {
    description: "Send an animated file to Telegram",
    type: "Action",
    myFunction: TsendAnimatedFileF,
    status: "idle",
  },
  "Send an audio file": {
    description: "Send an audio file to Telegram",
    type: "Action",
    myFunction: TsendAudioFileF,
    status: "idle",
  },
  "Send a sticker": {
    description: "Send a sticker to Telegram",
    type: "Action",
    myFunction: TsendStickerF,
    status: "idle",
  },
  "Send a video": {
    description: "Send a video to Telegram",
    type: "Action",
    myFunction: TsendVideoF,
    status: "idle",
  },
  "Send a chat action": {
    description: "Send a chat action to Telegram",
    type: "Action",
    myFunction: TsendChatActionF,
    status: "idle",
  },
  "Unpin a chat message": {
    description: "Unpin a chat message",
    type: "Action",
    myFunction: TunpinChatMessageF,
    status: "idle",
  },
  "On message": {
    description: "Retrieve recent messages from Telegram",
    type: "Trigger",
    myFunction: TonMessageF,
    status: "idle",
  },
  "Open AI": {
    description: "Use Open AI to summarize, respond, create and much more.",
    type: "Node",
    myFunction: CopenaiResponseF,
    status: "idle",
  },
  "Jira Connection": {
    description: "Connect with Jira for actions",
    type: "Node",
    myFunction: JiraConnectionF,
    status: "idle",
  },
  "Get many issues": {
    description: "Get issues from Jira",
    type: "Action",
    myFunction: JgetManyIssuesF,
    status: "idle",
  },
  "Get an issue": {
    description: "Get single issue from Jira",
    type: "Action",
    myFunction: JgetIssueF,
    status: "idle",
  },
  "Create an issue": {
    description: "Create an issue in Jira",
    type: "Action",
    myFunction: JcreateIssueF,
    status: "idle",
  },
  "Delete an issue": {
    description: "Delete an issue in Jira",
    type: "Action",
    myFunction: JdeleteIssueF,
    status: "idle",
  },
  "Update an issue": {
    description: "Update an issue in Jira",
    type: "Action",
    myFunction: JupdateIssueF,
    status: "idle",
  },
  "Get the status of an issue": {
    description: "Get the status of an jira issue",
    type: "Action",
    myFunction: JgetIssueStatusF,
    status: "idle",
  },
  "Get an issue changelog": {
    description: "Get an issue changelog from jira",
    type: "Action",
    myFunction: JgetIssueChangelogF,
    status: "idle",
  },
  "Create an email notifications for an issue": {
    description: "Create an email notification for an jira issue",
    type: "Action",
    myFunction: JcreateEmailNotificationF,
    status: "idle",
  },
  "Add an attachment to an issue": {
    description: "Add an attachment to an issue",
    type: "Action",
    myFunction: JaddAttachmentF,
    status: "idle",
  },
  "Get an attachment from an issue": {
    description: "Get an attachment from an issue",
    type: "Action",
    myFunction: JgetAttachmentF,
    status: "idle",
  },
  "Get many issue attachments": {
    description: "Get many issue attachments from jira",
    type: "Action",
    myFunction: JgetManyAttachmentsF,
    status: "idle",
  },
  "Remove an attachment from an issue": {
    description: "Remove an attachment from jira",
    type: "Action",
    myFunction: JremoveAttachmentF,
    status: "idle",
  },
  "Add a comment": {
    description: "Add a comment in jira",
    type: "Action",
    myFunction: JaddCommentF,
    status: "idle",
  },
  "Get a comment": {
    description: "Get a comment from jira",
    type: "Action",
    myFunction: JgetCommentF,
    status: "idle",
  },
  "Get many comments": {
    description: "Get many comments from jira",
    type: "Action",
    myFunction: JgetManyCommentsF,
    status: "idle",
  },
  "Remove a comment": {
    description: "Remove a comment from jira",
    type: "Action",
    myFunction: JremoveCommentF,
    status: "idle",
  },
  "Update a comment": {
    description: "Update a comment in jira",
    type: "Action",
    myFunction: JupdateCommentF,
    status: "idle",
  },
  "Create a user": {
    description: "Create a user in jira",
    type: "Action",
    myFunction: JcreateUserF,
    status: "idle",
  },
  "Delete a user": {
    description: "Delete a user in jira",
    type: "Action",
    myFunction: JdeleteUserF,
    status: "idle",
  },
  "Get a user": {
    description: "Get a user in jira",
    type: "Action",
    myFunction: JgetUserF,
    status: "idle",
  },
  "Get all users": {
    description: "Get all users in jira",
    type: "Action",
    myFunction: JgetAllUsersF,
    status: "idle",
  },
  ["Connect To Gmail"]: {
    description: "Use this to connect to your Gmail",
    type: "Node",
    myFunction: GconnectGmailF,
    status: "idle",
  },
  ["Get Latest Email"]: {
    description: "Use this to get the latest unread email from your inbox.",
    type: "Action",
    myFunction: GfetchGmailF,
    status: "idle",
  },
  ["Send Message To Draft"]: {
    description:
      "By Using this action a draft email will be sent to your account",
    type: "Action",
    myFunction: GdraftGmailF,
    status: "idle",
  },
  ["Connect To Outlook"]: {
    description: "Connect to Outlook",
    type: "Node",
    myFunction: GconnectOutlookF,
    status: "idle",
  },
  ["Get a message outlook"]: {
    description: "Get the Latest Unread Email",
    type: "Action",
    myFunction: OfetchOutlookF,
    status: "idle",
  },
  ["Get many messages outlook"]: {
    description: "Get many message",
    type: "Action",
    myFunction: OfetchManyOutlookF,
    status: "idle",
  },
  ["Delete message outlook"]: {
    description: "Delete message",
    type: "Action",
    myFunction: OdeleteMessageOutlookF,
    status: "idle",
  },
  ["Create a draft outlook"]: {
    description: "Create a draft message",
    type: "Action",
    myFunction: OcreateDraftOutlookF,
    status: "idle",
  },
  ["Get the draft outlook"]: {
    description: "Get the draft message",
    type: "Action",
    myFunction: OgetDraftOutlookF,
    status: "idle",
  },
  ["Delete draft outlook"]: {
    description: "Delete draft",
    type: "Action",
    myFunction: OdeleteDraftOutlookF,
    status: "idle",
  },
  ["Update draft outlook"]: {
    description: "Update draft",
    type: "Action",
    myFunction: OupdateDraftOutlookF,
    status: "idle",
  },
  ["Send mail outlook"]: {
    description: "send mail",
    type: "Action",
    myFunction: OsendMailOutlookF,
    status: "idle",
  },
  ["Create Folder Outlook"]: {
    description: "Create Folder",
    type: "Action",
    myFunction: OfolderCreateOutlookF,
    status: "idle",
  },
  ["Get a Folder Outlook"]: {
    description: "Get a Folder",
    type: "Action",
    myFunction: OfolderGetOutlookF,
    status: "idle",
  },
  ["Get Many Folders Outlook"]: {
    description: "Get Many Folder",
    type: "Action",
    myFunction: OfolderGetManyOutlookF,
    status: "idle",
  },
  ["Update Folder Outlook"]: {
    description: "Update Folder",
    type: "Action",
    myFunction: OfolderUpdateOutlookF,
    status: "idle",
  },
  ["Delete Folder Outlook"]: {
    description: "Delete Folder",
    type: "Action",
    myFunction: OfolderDeleteOutlookF,
    status: "idle",
  },
  ["Create Contact Outlook"]: {
    description: "Create Contact",
    type: "Action",
    myFunction: OcontactCreateOutlookF,
    status: "idle",
  },
  ["Get Contact Outlook"]: {
    description: "Get Contact",
    type: "Action",
    myFunction: OcontactGetOutlookF,
    status: "idle",
  },
  ["Get All Contacts Outlook"]: {
    description: "Get All Contacts",
    type: "Action",
    myFunction: OcontactGetAllOutlookF,
    status: "idle",
  },
  ["Delete Contact Outlook"]: {
    description: "Update Contact",
    type: "Action",
    myFunction: OcontactDeleteOutlookF,
    status: "idle",
  },
  ["Update Contact Outlook"]: {
    description: "Update Contact",
    type: "Action",
    myFunction: OcontactUpdateOutlookF,
    status: "idle",
  },
  ["Create Calendar Outlook"]: {
    description: "Create Calendar",
    type: "Action",
    myFunction: OcalendarCreateOutlookF,
    status: "idle",
  },
  ["Get Calendar Outlook"]: {
    description: "Get Calendar",
    type: "Action",
    myFunction: OcalendarGetOutlookF,
    status: "idle",
  },
  ["Get All Calendars Outlook"]: {
    description: "Get All Calendars",
    type: "Action",
    myFunction: OcalendarGetAllOutlookF,
    status: "idle",
  },
  ["Delete Calendar Outlook"]: {
    description: "Delete Calendar",
    type: "Action",
    myFunction: OcalendarDeleteOutlookF,
    status: "idle",
  },
  ["Update Calendar Outlook"]: {
    description: "Update Calendar",
    type: "Action",
    myFunction: OcalendarUpdateOutlookF,
    status: "idle",
  },
  ["Create Event Outlook"]: {
    description: "Create Event",
    type: "Action",
    myFunction: OeventCreateOutlookF,
    status: "idle",
  },
  ["Get Event Outlook"]: {
    description: "Get Event",
    type: "Action",
    myFunction: OeventGetOutlookF,
    status: "idle",
  },
  ["Get All Events Outlook"]: {
    description: "Get All Events",
    type: "Action",
    myFunction: OeventGetAllOutlookF,
    status: "idle",
  },
  ["Delete Event Outlook"]: {
    description: "Update Event",
    type: "Action",
    myFunction: OeventDeleteOutlookF,
    status: "idle",
  },
  ["Update Event Outlook"]: {
    description: "Update Event",
    type: "Action",
    myFunction: OeventUpdateOutlookF,
    status: "idle",
  },
  ["Add Attachment Outlook"]: {
    description: "Add Attachment",
    type: "Action",
    myFunction: OaddAttachmentOutlookF,
    status: "idle",
  },
  ["Get Attachment Outlook"]: {
    description: "Get Attachment",
    type: "Action",
    myFunction: OgetAttachmentOutlookF,
    status: "idle",
  },
  ["Get All Attachments Outlook"]: {
    description: "Get All Attachments",
    type: "Action",
    myFunction: OgetAllAttachmentOutlookF,
    status: "idle",
  },
  ["Download Attachment Outlook"]: {
    description: "Download Attachment",
    type: "Action",
    myFunction: OdownloadAttachmentOutlookF,
    status: "idle",
  },
  Email: {
    description: "Send an email to a user",
    type: "Node",
    myFunction: GemailConnectionF,
    status: "idle",
  },
  Slack: {
    description: "Send a notification to Slack",
    type: "Node",
    myFunction: SlackNotificationF,
    status: "idle",
  },
  "Google Drive": {
    description: "Connect with Google Drive for actions",
    type: "Node",
    myFunction: GoogleDriveActionF,
    status: "idle",
  },
  Notion: {
    description: "Create entries in Notion.",
    type: "Node",
    myFunction: NotionEntryF,
    status: "idle",
  },
  Discord: {
    description: "Post messages to Discord",
    type: "Node",
    myFunction: DiscordMessageF,
    status: "idle",
  },
  "Google Calendar": {
    description: "Create a calendar invite.",
    type: "Node",
    myFunction: GoogleCalendarEventF,
    status: "idle",
  },
  Condition: {
    description: "Boolean operator that creates different conditions lanes.",
    type: "Node",
    myFunction: ConditionCheckF,
    status: "idle",
  },
  "Custom Webhook": {
    description: "Send data to an application via API.",
    type: "Node",
    myFunction: CustomWebhookEventF,
    status: "idle",
  },
  Trigger: {
    description: "An event that starts the workflow.",
    type: "Node",
    myFunction: TriggerEventF,
    status: "idle",
  },
  Action: {
    description: "An event after workflow begins",
    type: "Node",
    myFunction: ActionEventF,
    status: "idle",
  },
  Wait: {
    description: "Delay the next action.",
    type: "Node",
    myFunction: WaitEventF,
    status: "idle",
  },
};

export const nodeActions: NodeActions = {
  "Telegram Connection": {
    "Chat Actions": [
      "Get a chat",
      "Get all administrators in a chat",
      "Get a member in a chat",
      "Leave a chat",
      "Set description on a chat",
      "Set a title on a chat",
    ],
    "Callback Actions": [
      "Answer query a callback",
      "Answer an inline query callback",
    ],
    "File Actions": ["Get a file"],
    "Message Actions": [
      "Delete a chat message",
      "Edit a test message",
      "Pin a chat message",
      "Send an animated file",
      "Send an audio file",
      "Send a chat action",
      "Send a media group message",
      "Send a text message",
      "Send a photo message",
      "Send a sticker",
      "Send a video",
      "Unpin a chat message",
    ],
  },
  "Connect To Gmail": {
    "Message Actions": ["Get Latest Email"],
    "Draft Actions": ["Send Message To Draft"],
  },
  "Jira Connection": {
    "Issue Actions": ["Get an issue changelog", "Create an issue", "Delete an issue", "Get an issue",
      "Get many issues", "Create an email notifications for an issue", "Get the status of an issue",
      "Update an issue"
    ],
    "Issue Attachment Actions": ["Add an attachment to an issue", "Get an attachment from an issue",
      "Get many issue attachments", "Remove an attachment from an issue"
    ],
    "Issue Comment Actions": ["Add a comment", "Get a comment", "Get many comments", "Remove a comment", "Update a comment"
    ],
    "User Actions": ["Create a user", "Delete a user", "Get a user", "Get all users"],
  },
  "Connect To Outlook": { 
    "Message Actions": ["Get a message outlook", "Get many messages outlook", "Delete message outlook"], 
    "Draft Actions": ["Create a draft outlook", "Get the draft outlook", "Delete draft outlook", "Update draft outlook", "Send mail outlook"], 
    "Calendar Actions": ["Create Calendar Outlook", "Delete Calendar Outlook", "Get Calendar Outlook", "Get All Calendars Outlook", "Update Calendar Outlook"], 
    "Contact Actions": ["Create Contact Outlook", "Delete Contact Outlook", "Get Contact Outlook", "Get All Contacts Outlook", "Update Contact Outlook"], 
    "Event Actions": ["Create Event Outlook", "Delete Event Outlook", "Get All Events Outlook", "Update Event Outlook"], 
    "Folder Actions": ["Create Folder Outlook", "Delete Folder Outlook", "Get a Folder Outlook", "Get Many Folders Outlook", "Update Folder Outlook"], 
    // "Folder Message Actions": ["Get many folder messages"], 
    "Message Attachment Actions": ["Add Attachment Outlook", "Download Attachment Outlook", "Get Attachment Outlook", "Get All Attachments Outlook"] 
  },
};

export const nodeTriggers: NodeTriggers = {
  "Telegram Connection": ["On message"],
};


export const CONNECTIONS: Connection[] = [
  {
    title: "Google Drive",
    description: "Connect your google drive to listen to folder changes",
    image: "/googleDrive.svg",
    connectionKey: "googleNode",
    alwaysTrue: true,
  },
  {
    title: "Discord",
    description: "Connect your discord to send notification and messages",
    image: "/discord.svg",
    connectionKey: "discordNode",
    accessTokenKey: "webhookURL",
  },
  {
    title: "Notion",
    description: "Create entries in your notion dashboard and automate tasks.",
    image: "/notion.svg",
    connectionKey: "notionNode",
    accessTokenKey: "accessToken",
  },
  {
    title: "Slack",
    description:
      "Use slack to send notifications to team members through your own custom bot.",
    image: "/slack.svg",
    connectionKey: "slackNode",
    accessTokenKey: "slackAccessToken",
    slackSpecial: true,
  },
  {
    title: "Telegram",
    description:
      "Use Telegram to send notifications or messages to users through your own custom bot.",
    image: "/telegram.svg",
    connectionKey: "telegramNode",
    accessTokenKey: "TelegramAccessToken",
  },
  {
    title: "Jira",
    description:
      "Integrate with Jira to automate issue tracking, status updates, and project management.",
    image: "/jira.svg",
    connectionKey: "jiraNode",
    accessTokenKey: "jiraApiToken",
  },
  {
    title: "Gmail",
    description:
      "Use Gmail to get the latest email and generate reply as a draft",
    image: "/gmail.svg",
    connectionKey: "gmailNode",
    accessTokenKey: "gmailAccessToken",
  },
  {
    title: "Outlook",
    description: "Use Outlook to get the latest email",
    image: "/outlook.png",
    connectionKey: "outlookNode",
    accessTokenKey: "outlookAccessToken",
  },
];
