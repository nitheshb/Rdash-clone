import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'
import { Connection } from './types'
import { ActionEventF, ConditionCheckF, CopenaiResponseF, CustomWebhookEventF, DiscordMessageF, GemailConnectionF, GoogleCalendarEventF, GoogleDriveActionF, NotionEntryF, SlackNotificationF, TconnectTelegramF, TgetRecentMessageF, TriggerEventF, TsendMessageF, WaitEventF } from './function-utils'

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

export const products = [
  {
    title: 'Moonbeam',
    link: 'https://gomoonbeam.com',
    thumbnail: '/p1.png',
  },
  {
    title: 'Cursor',
    link: 'https://cursor.so',
    thumbnail: '/p2.png',
  },
  {
    title: 'Rogue',
    link: 'https://userogue.com',
    thumbnail: '/p3.png',
  },

  {
    title: 'Editorially',
    link: 'https://editorially.org',
    thumbnail: '/p4.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://editrix.ai',
    thumbnail: '/p5.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://app.pixelperfect.quest',
    thumbnail: '/p6.png',
  },

  {
    title: 'Algochurn',
    link: 'https://algochurn.com',
    thumbnail: '/p1.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://ui.aceternity.com',
    thumbnail: '/p2.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://tailwindmasterkit.com',
    thumbnail: '/p3.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://smartbridgetech.com',
    thumbnail: '/p4.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://renderwork.studio',
    thumbnail: '/p5.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://cremedigital.com',
    thumbnail: '/p6.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://goldenbellsacademy.com',
    thumbnail: '/p1.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://invoker.lol',
    thumbnail: '/p2.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://efreeinvoice.com',
    thumbnail: '/p3.png',
  },
]

export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },
  { name: 'Billing', Component: Payment, href: '/billing' },
  { name: 'Templates', Component: Templates, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]

export const EditorCanvasDefaultCardTypes = {
  Email: { description: 'Send an email to a user', type: 'Action', myFunction: GemailConnectionF, status: 'idle' },
  Condition: { description: 'Boolean operator that creates different conditions lanes.', type: 'Action', myFunction: ConditionCheckF, status: 'idle' },
  'Open AI': { description: 'Use Open AI to summarize, respond, create and much more.', type: 'Action', myFunction: (params?: any) => CopenaiResponseF(params),  status: 'idle' },
  Slack: { description: 'Send a notification to Slack', type: 'Action', myFunction: SlackNotificationF, status: 'idle' },
  'Google Drive': { description: 'Connect with Google Drive for actions', type: 'Trigger', myFunction: GoogleDriveActionF, status: 'idle' },
  Notion: { description: 'Create entries in Notion.', type: 'Action', myFunction: NotionEntryF, status: 'idle' },
  'Custom Webhook': { description: 'Send data to an application via API.', type: 'Action', myFunction: CustomWebhookEventF, status: 'idle' },
  Discord: { description: 'Post messages to Discord', type: 'Action', myFunction: DiscordMessageF, status: 'idle' },
  'Google Calendar': { description: 'Create a calendar invite.', type: 'Action', myFunction: GoogleCalendarEventF, status: 'idle' },
  Telegram: { description: 'Send messages via Telegram', type: 'Trigger', myFunction: TconnectTelegramF, status: 'idle' },
  'Get Recent Message': { description: 'Retrieve recent messages from Telegram', type: 'Action' , myFunction: () => TgetRecentMessageF(), status: 'idle'},
  'Send Message': { description: 'Send a message to Telegram', type: 'Action', myFunction: (params?: any) => TsendMessageF(params), status: 'idle' },
  Trigger: { description: 'An event that starts the workflow.', type: 'Trigger', myFunction: TriggerEventF, status: 'idle' },
  Action: { description: 'An event after workflow begins', type: 'Action', myFunction: ActionEventF, status: 'idle' },
  Wait: { description: 'Delay the next action.', type: 'Action', myFunction: WaitEventF, status: 'idle' },
}


export const CONNECTIONS: Connection[] = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/googleDrive.svg',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.svg',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.svg',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.svg',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
  {
    title: 'Telegram',
    description:
      'Use Telegram to send notifications or messages to users through your own custom bot.',
    image: '/telegram.svg',
    connectionKey: 'telegramNode',
    accessTokenKey: 'TelegramAccessToken',
  },
]
