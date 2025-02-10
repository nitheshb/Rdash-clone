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
  edges: any[]
  nodes: any[]
  onClose: () => void 
}

const FlowInstance = ({ children, edges, nodes, onClose }: Props) => {
  const pathname = usePathname()
  const [isFlow, setIsFlow] = useState([])
  const { nodeConnection } = useNodeConnections()

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split('/').pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    )

    if (flow) toast.message(flow.message)
  }, [nodeConnection])

  const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if (response) toast.message(response)
  }, [])

  const onAutomateFlow = async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows)
  }

  useEffect(() => {
    onAutomateFlow()
  }, [edges])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button
          onClick={onFlowAutomation}
          disabled={isFlow.length < 1}
        >
          Save
        </Button>
        <Button
          disabled={isFlow.length < 1}
          onClick={onPublishWorkflow}
        >
          Publish
        </Button>
      </div>
      <button className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl dark:hover:text-white"
      onClick={onClose}>
          <X />
        </button>
      {children}
    </div>
  )
}

export default FlowInstance
