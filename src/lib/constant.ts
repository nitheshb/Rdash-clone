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
    value: "T_telegram_connection",
  },
  "Get a chat": {
    description: "Get a chat from Telegram",
    type: "Action",
    myFunction: TgetChatF,
    status: "idle",
    value: "T_get_a_chat",
  },
  "Get all administrators in a chat": {
    description: "Get all administrators in a chat",
    type: "Action",
    myFunction: TgetAllAdministratorsInChatF,
    status: "idle",
    value: "T_get_all_admins_in_chat",
  },
  "Get a member in a chat": {
    description: "Get a member in a chat",
    type: "Action",
    myFunction: TgetMemberInChatF,
    status: "idle",
    value: "T_get_member_in_chat",
  },
  "Leave a chat": {
    description: "Leave a chat",
    type: "Action",
    myFunction: TleaveChatF,
    status: "idle",
    value: "T_leave_a_chat",
  },
  "Set description on a chat": {
    description: "Set description on a chat",
    type: "Action",
    myFunction: TsetDescriptionOnChatF,
    status: "idle",
    value: "T_set_description_on_chat",
  },
  "Set a title on a chat": {
    description: "Set a title on a chat",
    type: "Action",
    myFunction: TsetTitleOnChatF,
    status: "idle",
    value: "T_set_title_on_chat",
  },
  "Answer query a callback": {
    description: "Answer query callback",
    type: "Action",
    myFunction: TanswerQueryACallbackF,
    status: "idle",
    value: "T_answer_query_a_callback",
  },
  "Answer an inline query callback": {
    description: "Answer inline query callback",
    type: "Action",
    myFunction: TanswerInlineQueryACallbackF,
    status: "idle",
    value: "T_answer_inline_query_a_callback",
  },
  "Get a file": {
    description: "Get a file from Telegram",
    type: "Action",
    myFunction: TgetFileF,
    status: "idle",
    value: "T_get_file",
  },
  "Delete a chat message": {
    description: "Delete a chat message",
    type: "Action",
    myFunction: TdeleteChatMessageF,
    status: "idle",
    value: "T_delete_chat_message",
  },
  "Edit a test message": {
    description: "Edit a test message",
    type: "Action",
    myFunction: TeditTestMessageF,
    status: "idle",
    value: "T_edit_test_message",
  },
  "Pin a chat message": {
    description: "Pin a chat message",
    type: "Action",
    myFunction: TpinChatMessageF,
    status: "idle",
    value: "T_pin_chat_message",
  },
  "Send a media group message": {
    description: "Send a media group message to Telegram",
    type: "Action",
    myFunction: TsendMediaGroupMessageF,
    status: "idle",
    value: "T_send_media_group_message",
  },
  "Send a text message": {
    description: "Send a text message to Telegram",
    type: "Action",
    myFunction: TsendTextMessageF,
    status: "idle",
    value: "T_send_text_message",
  },
  "Send a photo message": {
    description: "Send a photo message to Telegram",
    type: "Action",
    myFunction: TsendPhotoMessageF,
    status: "idle",
    value: "T_send_photo_message",
  },
  "Send an animated file": {
    description: "Send an animated file to Telegram",
    type: "Action",
    myFunction: TsendAnimatedFileF,
    status: "idle",
    value: "T_send_animated_file",
  },
  "Send an audio file": {
    description: "Send an audio file to Telegram",
    type: "Action",
    myFunction: TsendAudioFileF,
    status: "idle",
    value: "T_send_audio_file",
  },
  "Send a sticker": {
    description: "Send a sticker to Telegram",
    type: "Action",
    myFunction: TsendStickerF,
    status: "idle",
    value: "T_send_sticker",
  },
  "Send a video": {
    description: "Send a video to Telegram",
    type: "Action",
    myFunction: TsendVideoF,
    status: "idle",
    value: "T_send_video",
  },
  "Send a chat action": {
    description: "Send a chat action to Telegram",
    type: "Action",
    myFunction: TsendChatActionF,
    status: "idle",
    value: "T_send_chat_action",
  },
  "Unpin a chat message": {
    description: "Unpin a chat message",
    type: "Action",
    myFunction: TunpinChatMessageF,
    status: "idle",
    value: "T_unpin_chat_message",
  },
  "On message": {
    description: "Retrieve recent messages from Telegram",
    type: "Trigger",
    myFunction: TonMessageF,
    status: "idle",
    value: "T_on_message",
  },
  "Open AI": {
    description: "Use Open AI to summarize, respond, create and much more.",
    type: "Node",
    myFunction: CopenaiResponseF,
    status: "idle",
    value: "O_open_ai",
  },
  "Jira Connection": {
    description: "Connect with Jira for actions",
    type: "Node",
    myFunction: JiraConnectionF,
    status: "idle",
    value: "J_jira_connection",
  },
  "Get many issues": {
    description: "Get issues from Jira",
    type: "Action",
    myFunction: JgetManyIssuesF,
    status: "idle",
    value: "J_get_many_issues",
  },
  "Get an issue": {
    description: "Get single issue from Jira",
    type: "Action",
    myFunction: JgetIssueF,
    status: "idle",
    value: "J_get_an_issue",
  },
  "Create an issue": {
    description: "Create an issue in Jira",
    type: "Action",
    myFunction: JcreateIssueF,
    status: "idle",
    value: "J_create_an_issue",
  },
  "Delete an issue": {
    description: "Delete an issue in Jira",
    type: "Action",
    myFunction: JdeleteIssueF,
    status: "idle",
    value: "J_delete_an_issue",
  },
  "Update an issue": {
    description: "Update an issue in Jira",
    type: "Action",
    myFunction: JupdateIssueF,
    status: "idle",
    value: "J_update_an_issue",
  },
  "Get the status of an issue": {
    description: "Get the status of an jira issue",
    type: "Action",
    myFunction: JgetIssueStatusF,
    status: "idle",
    value: "J_get_the_status_of_an_issue",
  },
  "Get an issue changelog": {
    description: "Get an issue changelog from jira",
    type: "Action",
    myFunction: JgetIssueChangelogF,
    status: "idle",
    value: "J_get_an_issue_changelog",
  },
  "Create an email notifications for an issue": {
    description: "Create an email notification for an jira issue",
    type: "Action",
    myFunction: JcreateEmailNotificationF,
    status: "idle",
    value: "J_create_email_notification_for_an_issue",
  },
  "Add an attachment to an issue": {
    description: "Add an attachment to an issue",
    type: "Action",
    myFunction: JaddAttachmentF,
    status: "idle",
    value: "J_add_an_attachment_to_an_issue",
  },
  "Get an attachment from an issue": {
    description: "Get an attachment from an issue",
    type: "Action",
    myFunction: JgetAttachmentF,
    status: "idle",
    value: "J_get_an_attachment_from_an_issue",
  },
  "Get many issue attachments": {
    description: "Get many issue attachments from jira",
    type: "Action",
    myFunction: JgetManyAttachmentsF,
    status: "idle",
    value: "J_get_many_issue_attachments",
  },
  "Remove an attachment from an issue": {
    description: "Remove an attachment from jira",
    type: "Action",
    myFunction: JremoveAttachmentF,
    status: "idle",
    value: "J_remove_an_attachment_from_an_issue",
  },
  "Add a comment": {
    description: "Add a comment in jira",
    type: "Action",
    myFunction: JaddCommentF,
    status: "idle",
    value: "J_add_a_comment",
  },
  "Get a comment": {
    description: "Get a comment from jira",
    type: "Action",
    myFunction: JgetCommentF,
    status: "idle",
    value: "J_get_a_comment",
  },
  "Get many comments": {
    description: "Get many comments from jira",
    type: "Action",
    myFunction: JgetManyCommentsF,
    status: "idle",
    value: "J_get_many_comments",
  },
  "Remove a comment": {
    description: "Remove a comment from jira",
    type: "Action",
    myFunction: JremoveCommentF,
    status: "idle",
    value: "J_remove_a_comment",
  },
  "Update a comment": {
    description: "Update a comment in jira",
    type: "Action",
    myFunction: JupdateCommentF,
    status: "idle",
    value: "J_update_a_comment",
  },
  "Create a user": {
    description: "Create a user in jira",
    type: "Action",
    myFunction: JcreateUserF,
    status: "idle",
    value: "J_create_a_user",
  },
  "Delete a user": {
    description: "Delete a user in jira",
    type: "Action",
    myFunction: JdeleteUserF,
    status: "idle",
    value: "J_delete_a_user",
  },
  "Get a user": {
    description: "Get a user in jira",
    type: "Action",
    myFunction: JgetUserF,
    status: "idle",
    value: "J_get_a_user",
  },
  "Get all users": {
    description: "Get all users in jira",
    type: "Action",
    myFunction: JgetAllUsersF,
    status: "idle",
    value: "J_get_all_users",
  },
  ["Connect To Gmail"]: {
    description: "Use this to connect to your Gmail",
    type: "Node",
    myFunction: GconnectGmailF,
    status: "idle",
    value: "G_connect_gmail",
  },
  ["Get Latest Email"]: {
    description: "Use this to get the latest unread email from your inbox.",
    type: "Action",
    myFunction: GfetchGmailF,
    status: "idle",
    value: "G_get_latest_email",
  },
  ["Send Message To Draft"]: {
    description:
      "By Using this action a draft email will be sent to your account",
    type: "Action",
    myFunction: GdraftGmailF,
    status: "idle",
    value: "G_send_message_to_draft",
  },
  ["Connect To Outlook"]: {
    description: "Connect to Outlook",
    type: "Node",
    myFunction: GconnectOutlookF,
    status: "idle",
    value: "O_connect_to_outlook",
  },
  ["Get a message outlook"]: {
    description: "Get the Latest Unread Email",
    type: "Action",
    myFunction: OfetchOutlookF,
    status: "idle",
    value: "O_get_a_message",
  },
  ["Get many messages outlook"]: {
    description: "Get many message",
    type: "Action",
    myFunction: OfetchManyOutlookF,
    status: "idle",
    value: "O_get_many_messages",
  },
  ["Delete message outlook"]: {
    description: "Delete message",
    type: "Action",
    myFunction: OdeleteMessageOutlookF,
    status: "idle",
    value: "O_delete_message",
  },
  ["Create a draft outlook"]: {
    description: "Create a draft message",
    type: "Action",
    myFunction: OcreateDraftOutlookF,
    status: "idle",
    value: "O_create_a_draft",
  },
  ["Get the draft outlook"]: {
    description: "Get the draft message",
    type: "Action",
    myFunction: OgetDraftOutlookF,
    status: "idle",
    value: "O_get_the_draft",
  },
  ["Delete draft outlook"]: {
    description: "Delete draft",
    type: "Action",
    myFunction: OdeleteDraftOutlookF,
    status: "idle",
    value: "O_delete_draft",
  },
  ["Update draft outlook"]: {
    description: "Update draft",
    type: "Action",
    myFunction: OupdateDraftOutlookF,
    status: "idle",
    value: "O_update_draft",
  },
  ["Send mail outlook"]: {
    description: "send mail",
    type: "Action",
    myFunction: OsendMailOutlookF,
    status: "idle",
    value: "O_send_mail",
  },
  ["Create Folder Outlook"]: {
    description: "Create Folder",
    type: "Action",
    myFunction: OfolderCreateOutlookF,
    status: "idle",
    value: "O_create_folder",
  },
  ["Get a Folder Outlook"]: {
    description: "Get a Folder",
    type: "Action",
    myFunction: OfolderGetOutlookF,
    status: "idle",
    value: "O_get_a_folder",
  },
  ["Get Many Folders Outlook"]: {
    description: "Get Many Folder",
    type: "Action",
    myFunction: OfolderGetManyOutlookF,
    status: "idle",
    value: "O_get_many_folders",
  },
  ["Update Folder Outlook"]: {
    description: "Update Folder",
    type: "Action",
    myFunction: OfolderUpdateOutlookF,
    status: "idle",
    value: "O_update_folder",
  },
  ["Delete Folder Outlook"]: {
    description: "Delete Folder",
    type: "Action",
    myFunction: OfolderDeleteOutlookF,
    status: "idle",
    value: "O_delete_folder",
  },
  ["Create Contact Outlook"]: {
    description: "Create Contact",
    type: "Action",
    myFunction: OcontactCreateOutlookF,
    status: "idle",
    value: "O_create_contact",
  },
  ["Get Contact Outlook"]: {
    description: "Get Contact",
    type: "Action",
    myFunction: OcontactGetOutlookF,
    status: "idle",
    value: "O_get_contact",
  },
  ["Get All Contacts Outlook"]: {
    description: "Get All Contacts",
    type: "Action",
    myFunction: OcontactGetAllOutlookF,
    status: "idle",
    value: "O_get_all_contacts",
  },
  ["Delete Contact Outlook"]: {
    description: "Update Contact",
    type: "Action",
    myFunction: OcontactDeleteOutlookF,
    status: "idle",
    value: "O_delete_contact",
  },
  ["Update Contact Outlook"]: {
    description: "Update Contact",
    type: "Action",
    myFunction: OcontactUpdateOutlookF,
    status: "idle",
    value: "O_update_contact",
  },
  ["Create Calendar Outlook"]: {
    description: "Create Calendar",
    type: "Action",
    myFunction: OcalendarCreateOutlookF,
    status: "idle",
    value: "O_create_calendar",
  },
  ["Get Calendar Outlook"]: {
    description: "Get Calendar",
    type: "Action",
    myFunction: OcalendarGetOutlookF,
    status: "idle",
    value: "O_get_calendar",
  },
  ["Get All Calendars Outlook"]: {
    description: "Get All Calendars",
    type: "Action",
    myFunction: OcalendarGetAllOutlookF,
    status: "idle",
    value: "O_get_all_calendars",
  },
  ["Delete Calendar Outlook"]: {
    description: "Delete Calendar",
    type: "Action",
    myFunction: OcalendarDeleteOutlookF,
    status: "idle",
    value: "O_delete_calendar",
  },
  ["Update Calendar Outlook"]: {
    description: "Update Calendar",
    type: "Action",
    myFunction: OcalendarUpdateOutlookF,
    status: "idle",
    value: "O_update_calendar",
  },
  ["Create Event Outlook"]: {
    description: "Create Event",
    type: "Action",
    myFunction: OeventCreateOutlookF,
    status: "idle",
    value: "O_create_event",
  },
  ["Get Event Outlook"]: {
    description: "Get Event",
    type: "Action",
    myFunction: OeventGetOutlookF,
    status: "idle",
    value: "O_get_event",
  },
  ["Get All Events Outlook"]: {
    description: "Get All Events",
    type: "Action",
    myFunction: OeventGetAllOutlookF,
    status: "idle",
    value: "O_get_all_events",
  },
  ["Delete Event Outlook"]: {
    description: "Update Event",
    type: "Action",
    myFunction: OeventDeleteOutlookF,
    status: "idle",
    value: "O_delete_event",
  },
  ["Update Event Outlook"]: {
    description: "Update Event",
    type: "Action",
    myFunction: OeventUpdateOutlookF,
    status: "idle",
    value: "O_update_event",
  },
  ["Add Attachment Outlook"]: {
    description: "Add Attachment",
    type: "Action",
    myFunction: OaddAttachmentOutlookF,
    status: "idle",
    value: "O_add_attachment",
  },
  ["Get Attachment Outlook"]: {
    description: "Get Attachment",
    type: "Action",
    myFunction: OgetAttachmentOutlookF,
    status: "idle",
    value: "O_get_attachment",
  },
  ["Get All Attachments Outlook"]: {
    description: "Get All Attachments",
    type: "Action",
    myFunction: OgetAllAttachmentOutlookF,
    status: "idle",
    value: "O_get_all_attachments",
  },
  ["Download Attachment Outlook"]: {
    description: "Download Attachment",
    type: "Action",
    myFunction: OdownloadAttachmentOutlookF,
    status: "idle",
    value: "O_download_attachment",
  },
  Slack: {
    description: "Send a notification to Slack",
    type: "Node",
    myFunction: SlackNotificationF,
    status: "idle",
    value: "S_slack",
  },
  "Google Drive": {
    description: "Connect with Google Drive for actions",
    type: "Node",
    myFunction: GoogleDriveActionF,
    status: "idle",
    value: "G_google_drive",
  },
  Notion: {
    description: "Create entries in Notion.",
    type: "Node",
    myFunction: NotionEntryF,
    status: "idle",
    value: "N_notion",
  },
  Discord: {
    description: "Post messages to Discord",
    type: "Node",
    myFunction: DiscordMessageF,
    status: "idle",
    value: "D_discord",
  },
  "Google Calendar": {
    description: "Create a calendar invite.",
    type: "Node",
    myFunction: GoogleCalendarEventF,
    status: "idle",
    value: "G_google_calendar",
  },
  Condition: {
    description: "Boolean operator that creates different conditions lanes.",
    type: "Node",
    myFunction: ConditionCheckF,
    status: "idle",
    value: "C_condition_check",
  },
  "Custom Webhook": {
    description: "Send data to an application via API.",
    type: "Node",
    myFunction: CustomWebhookEventF,
    status: "idle",
    value: "C_custom_webhook_event",
  },
  Trigger: {
    description: "An event that starts the workflow.",
    type: "Node",
    myFunction: TriggerEventF,
    status: "idle",
    value: "T_trigger_event",
  },
  Action: {
    description: "An event after workflow begins",
    type: "Node",
    myFunction: ActionEventF,
    status: "idle",
    value: "A_action_event",
  },
  Wait: {
    description: "Delay the next action.",
    type: "Node",
    myFunction: WaitEventF,
    status: "idle",
    value: "W_wait_event",
  },
};
export const actionHeadings = [{ "label": "Chat Actions", "value": "chat_actions", },
{ "label": "Callback Actions", "value": "callback_actions" },
{ "label": "File Actions", "value": "file_actions" },
{ "label": "Message Actions", "value": "message_actions" },
{ "label": "Draft Actions", "value": "draft_actions" },
{ "label": "Issue Actions", "value": "issue_actions" },
{ "label": "Issue Attachment Actions", "value": "issue_attachment_actions" },
{ "label": "Issue Comment Actions", "value": "issue_comment_actions" },
{ "label": "User Actions", "value": "user_actions" },
{ "label": "Calendar Actions", "value": "calendar_actions" },
{ "label": "Contact Actions", "value": "contact_actions" },
{ "label": "Event Actions", "value": "event_actions" },
{ "label": "Folder Actions", "value": "folder_actions" },
{ "label": "Message Attachment Actions", "value": "message_attachment_actions" },
]

export const nodeActions: NodeActions = {
  "T_telegram_connection": {
    "chat_actions": [
      "T_get_a_chat", "T_get_all_admins_in_chat", "T_get_member_in_chat", "T_leave_a_chat", "T_set_description_on_chat",
      "T_set_title_on_chat"
    ],
    "callback_actions": ["T_answer_query_a_callback", "T_answer_inline_query_a_callback"],
    "file_actions": ["T_get_file"],
    "message_actions": ["T_delete_chat_message", "T_edit_test_message", "T_pin_chat_message", "T_send_animated_file", "T_send_audio_file",
      "T_send_chat_action", "T_send_media_group_message", "T_send_text_message", "T_send_photo_message", "T_send_sticker",
      "T_send_video", "T_unpin_chat_message"]
  },
  "G_connect_gmail": { "message_actions": ["G_get_latest_email"], "draft_actions": ["G_send_message_to_draft"] },
  "J_jira_connection": {
    "issue_actions": [
      "J_get_an_issue_changelog", "J_create_an_issue", "J_delete_an_issue", "J_get_an_issue", "J_get_many_issues",
      "J_create_email_notification_for_an_issue", "J_get_the_status_of_an_issue", "J_update_an_issue"
    ],
    "issue_attachment_actions": [
      "J_add_an_attachment_to_an_issue", "J_get_an_attachment_from_an_issue", "J_get_many_issue_attachments",
      "J_remove_an_attachment_from_an_issue"],
    "issue_comment_actions": ["J_add_a_comment", "J_get_a_comment", "J_get_many_comments", "J_remove_a_comment", "J_update_a_comment"],
    "user_actions": ["J_create_a_user", "J_delete_a_user", "J_get_a_user", "J_get_all_users"]
  },
  "O_connect_to_outlook": {
    "message_actions": ["O_get_a_message", "O_get_many_messages", "O_delete_message"],
    "draft_actions": ["O_create_a_draft", "O_get_the_draft", "O_delete_draft", "O_update_draft", "O_send_mail"],
    "calendar_actions": ["O_create_calendar", "O_delete_calendar", "O_get_calendar", "O_get_all_calendars", "O_update_calendar"],
    "contact_actions": ["O_create_contact", "O_delete_contact", "O_get_contact", "O_get_all_contacts", "O_update_contact"],
    "event_actions": ["O_create_event", "O_delete_event", "O_get_all_events", "O_update_event"],
    "folder_actions": ["O_create_folder", "O_delete_folder", "O_get_a_folder", "O_get_many_folders", "O_update_folder"],
    "message_attachment_actions": ["O_add_attachment", "O_download_attachment", "O_get_attachment", "O_get_all_attachments"]
  },
};

export const nodeTriggers: NodeTriggers = {
  "T_telegram_connection": ["T_on_message"],
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
