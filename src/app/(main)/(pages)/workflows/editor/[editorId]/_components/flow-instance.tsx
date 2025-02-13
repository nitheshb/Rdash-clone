'use client'
import { Button } from '@/components/ui/button'
import { useNodeConnections } from '@/providers/connections-provider'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import {
  onCreateNodesEdges,
  onFlowPublish,
} from '../_actions/workflow-connections'
import { toast } from 'sonner'
import { X } from 'lucide-react'

type Props = {
  children: React.ReactNode
}

const FlowInstance = ({ children }: Props) => {


  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  )
}

export default FlowInstance
