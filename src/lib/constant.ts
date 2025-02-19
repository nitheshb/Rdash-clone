import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import { Connection, NodeActions } from "./types";
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
import { TgetRecentMessageF, TsendMessageF } from "./telegram-functions";
import { CopenaiResponseF } from "./openai-functions";
import { GdraftGmailF, GfetchGmailF } from "./gmail-functions";
import {
  OcreateDraftOutlookF,
  OdeleteDraftOutlookF,
  OfetchManyOutlookF,
  OfetchOutlookF,
  OgetDraftOutlookF,
} from "./outlook-functions";

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
  { name: "Billing", Component: Payment, href: "/billing" },
  { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];

export const EditorCanvasDefaultCardTypes = {
  "Telegram Connection": {
    description: "Connect with Telegram for actions",
    type: "Trigger",
    myFunction: TconnectTelegramF,
    status: "idle",
  },
  "Get Recent Message": {
    description: "Retrieve recent messages from Telegram",
    type: "Action",
    myFunction: TgetRecentMessageF,
    status: "idle",
  },
  "Send Message": {
    description: "Send a message to Telegram",
    type: "Action",
    myFunction: TsendMessageF,
    status: "idle",
  },
  "Open AI": {
    description: "Use Open AI to summarize, respond, create and much more.",
    type: "Trigger",
    myFunction: CopenaiResponseF,
    status: "idle",
  },
  "Jira Connection": {
    description: "Connect with Jira for actions",
    type: "Trigger",
    myFunction: JiraConnectionF,
    status: "idle",
  },
  "Get Many Issues": {
    description: "Get issues from Jira",
    type: "Action",
    myFunction: JgetManyIssuesF,
    status: "idle",
  },
  "Get an Issue": {
    description: "Get single issue from Jira",
    type: "Action",
    myFunction: JgetIssueF,
    status: "idle",
  },
  "Create an Issue": {
    description: "Create an issue in Jira",
    type: "Action",
    myFunction: JcreateIssueF,
    status: "idle",
  },
  "Delete an Issue": {
    description: "Delete an issue in Jira",
    type: "Action",
    myFunction: JdeleteIssueF,
    status: "idle",
  },
  "Update an Issue": {
    description: "Update an issue in Jira",
    type: "Action",
    myFunction: JupdateIssueF,
    status: "idle",
  },
  "Get Issue Status": {
    description: "Get the status of an jira issue",
    type: "Action",
    myFunction: JgetIssueStatusF,
    status: "idle",
  },
  "Get an Issue Changelog": {
    description: "Get an issue changelog from jira",
    type: "Action",
    myFunction: JgetIssueChangelogF,
    status: "idle",
  },
  "Create Email Notification": {
    description: "Create an email notification for an jira issue",
    type: "Action",
    myFunction: JcreateEmailNotificationF,
    status: "idle",
  },
  "Add an Attachment": {
    description: "Add an attachment to an issue",
    type: "Action",
    myFunction: JaddAttachmentF,
    status: "idle",
  },
  "Get an Attachment": {
    description: "Get an attachment from an issue",
    type: "Action",
    myFunction: JgetAttachmentF,
    status: "idle",
  },
  "Get Many Attachments": {
    description: "Get many issue attachments from jira",
    type: "Action",
    myFunction: JgetManyAttachmentsF,
    status: "idle",
  },
  "Remove an Attachment": {
    description: "Remove an attachment from jira",
    type: "Action",
    myFunction: JremoveAttachmentF,
    status: "idle",
  },
  "Add a Comment": {
    description: "Add a comment in jira",
    type: "Action",
    myFunction: JgetCommentF,
    status: "idle",
  },
  "Get a Comment": {
    description: "Get a comment from jira",
    type: "Action",
    myFunction: JgetCommentF,
    status: "idle",
  },
  "Get Many Comments": {
    description: "Get many comments from jira",
    type: "Action",
    myFunction: JgetManyCommentsF,
    status: "idle",
  },
  "Remove a Comment": {
    description: "Remove a comment from jira",
    type: "Action",
    myFunction: JremoveCommentF,
    status: "idle",
  },
  "Update a Comment": {
    description: "Update a comment in jira",
    type: "Action",
    myFunction: JupdateCommentF,
    status: "idle",
  },
  "Create a User": {
    description: "Create a user in jira",
    type: "Action",
    myFunction: JcreateUserF,
    status: "idle",
  },
  "Delete a User": {
    description: "Delete a user in jira",
    type: "Action",
    myFunction: JdeleteUserF,
    status: "idle",
  },
  "Get a User": {
    description: "Get a user in jira",
    type: "Action",
    myFunction: JgetUserF,
    status: "idle",
  },
  "Get all Users": {
    description: "Get all users in jira",
    type: "Action",
    myFunction: JgetAllUsersF,
    status: "idle",
  },
  ["Connect To Gmail"]: {
    description: "Use this to connect to your Gmail",
    type: "Trigger",
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
    type: "Trigger",
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
  Email: {
    description: "Send an email to a user",
    type: "Action",
    myFunction: GemailConnectionF,
    status: "idle",
  },
  Slack: {
    description: "Send a notification to Slack",
    type: "Trigger",
    myFunction: SlackNotificationF,
    status: "idle",
  },
  "Google Drive": {
    description: "Connect with Google Drive for actions",
    type: "Trigger",
    myFunction: GoogleDriveActionF,
    status: "idle",
  },
  Notion: {
    description: "Create entries in Notion.",
    type: "Trigger",
    myFunction: NotionEntryF,
    status: "idle",
  },
  Discord: {
    description: "Post messages to Discord",
    type: "Trigger",
    myFunction: DiscordMessageF,
    status: "idle",
  },
  "Google Calendar": {
    description: "Create a calendar invite.",
    type: "Trigger",
    myFunction: GoogleCalendarEventF,
    status: "idle",
  },
  Condition: {
    description: "Boolean operator that creates different conditions lanes.",
    type: "Trigger",
    myFunction: ConditionCheckF,
    status: "idle",
  },
  "Custom Webhook": {
    description: "Send data to an application via API.",
    type: "Trigger",
    myFunction: CustomWebhookEventF,
    status: "idle",
  },
  Trigger: {
    description: "An event that starts the workflow.",
    type: "Trigger",
    myFunction: TriggerEventF,
    status: "idle",
  },
  Action: {
    description: "An event after workflow begins",
    type: "Trigger",
    myFunction: ActionEventF,
    status: "idle",
  },
  Wait: {
    description: "Delay the next action.",
    type: "Trigger",
    myFunction: WaitEventF,
    status: "idle",
  },
};

export const nodeActions: NodeActions = {
  "Telegram Connection": ["Get Recent Message", "Send Message"],
  "Connect To Gmail": ["Get Latest Email", "Send Message To Draft"],
  "Jira Connection": ["Get Many Issues", "Create an Issue", "Get an Issue", "Delete an Issue", "Update an Issue", "Get Issue Status", "Get an Issue Changelog", "Create Email Notification", "Add an Attachment", "Get an Attachment", "Get Many Attachments", "Remove an Attachment", "Add a Comment", "Get a Comment", "Get Many Comments", "Remove a Comment", "Update a Comment", "Create a User", "Delete a User", "Get a User", "Get all Users"],
  "Connect To Outlook": ["Get a message outlook", "Get many messages outlook", "Create a draft outlook", "Get the draft outlook", "Delete draft outlook"],
}

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
