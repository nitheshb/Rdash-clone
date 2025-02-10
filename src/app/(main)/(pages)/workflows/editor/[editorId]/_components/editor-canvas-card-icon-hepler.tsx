'use client'
import React from 'react'
import {
  GitBranch,
  MousePointerClickIcon,
  Timer,
  Webhook,
  Zap,
} from 'lucide-react'
import { EditorCanvasTypes } from '@/lib/types'

type Props = { type: EditorCanvasTypes }

const EditorCanvasIconHelper = ({ type }: Props) => {
  switch (type) {
    case 'Email':
      return (
        <img
          src='/gmail.svg'
          alt='Gmail'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    case 'Condition':
      return (
        <GitBranch
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Open AI':
      return (
        <img
          src='/openai.svg'
          alt='Open AI'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    case 'Slack':
      return (
        <img
          src='/slack.svg'
          alt='Telegram'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    case 'Google Drive':
      return (
        <img
          src='/googleDrive.svg'
          alt='Google Drive'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    case 'Notion':
      return (
        <img
          src='/notion.svg'
          alt='Notion'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
      case 'Discord':
      return (
        <img
          src='/discord.svg'
          alt='Discord'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    case 'Custom Webhook':
      return (
        <Webhook
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Google Calendar':
      return (
        <img
          src='/googleCalendar.svg'
          alt='Google Calendar'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    case 'Trigger':
      return (
        <MousePointerClickIcon
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Action':
      return (
        <Zap
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Wait':
      return (
        <Timer
          className="flex-shrink-0"
          size={30}
        />
      )
    case 'Telegram':
    case 'Get Recent Message':
    case 'Send Message':
      return (
        <img
          src='/telegram.svg'
          alt='Telegram'
          className='flex-shrink-0'
          width={30}
          height={30}
        />
      )
    default:
      return (
        <Zap
          className="flex-shrink-0"
          size={30}
        />
      )
  }
}

export default EditorCanvasIconHelper
