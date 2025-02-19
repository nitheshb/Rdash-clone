'use client'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { CONNECTIONS, EditorCanvasDefaultCardTypes, nodeActions } from '@/lib/constant'
import {
  fetchBotSlackChannels,
  onConnections,
  onDragStart,
} from '@/lib/editor-utils'
import EditorCanvasIconHelper from './editor-canvas-card-icon-hepler'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import RenderConnectionAccordion from './render-connection-accordion'
import RenderOutputAccordion from './render-output-accordian'
import { useFuzzieStore } from '@/store'
import { ArrowLeft, Search, X } from 'lucide-react'

type Props = {
  nodes: EditorNodeType[]
  onClose: () => void
}

const EditorCanvasSidebar = ({ nodes, onClose }: Props) => {
  const { state } = useEditor()
  const { nodeConnection } = useNodeConnections()
  const { googleFile, setSlackChannels } = useFuzzieStore()

  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null)
  const [searchTriggers, setSearchTriggers] = useState<string>('')
  const [searchActions, setSearchActions] = useState<string>('')

  useEffect(() => {
    if (state) {
      onConnections(nodeConnection, state, googleFile)
    }
  }, [state])

  useEffect(() => {
    if (nodeConnection.slackNode.slackAccessToken) {
      fetchBotSlackChannels(
        nodeConnection.slackNode.slackAccessToken,
        setSlackChannels
      )
    }
  }, [nodeConnection])

  const handleTriggerDrop = (triggerType: string) => {
    setSelectedTrigger(triggerType)
  }

  const handleBack = () => {
    setSelectedTrigger(null)
  }

  const filteredCardTypes = Object.entries(EditorCanvasDefaultCardTypes)
    .filter(([cardKey]) => cardKey.toLowerCase().includes(searchTriggers.toLowerCase()) && EditorCanvasDefaultCardTypes[cardKey as keyof typeof EditorCanvasDefaultCardTypes].type === 'Trigger')

  const filteredActions = selectedTrigger && nodeActions[selectedTrigger]
    ? nodeActions[selectedTrigger].filter(action => action.toLowerCase().includes(searchActions.toLowerCase()))
    : []

  const shouldShowActionsTab = !selectedTrigger || (selectedTrigger && filteredActions.length < 1)

  return (
    <aside>
      {shouldShowActionsTab ? (
        <Tabs
          defaultValue="actions"
          className="h-screen overflow-scroll pb-24"
        >
          <TabsList className="bg-transparent px-3 py-7 flex justify-between items-center">
            <div className="flex gap-4">
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </div>
            <button className="text-gray-500 hover:text-black text-2xl dark:hover:text-white"
              onClick={onClose}>
              <X />
            </button>
          </TabsList>
          <Separator />
          <TabsContent
            value="actions"
            className="flex flex-col gap-3 p-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search Nodes..."
                value={searchTriggers}
                onChange={(e) => setSearchTriggers(e.target.value)}
                className="p-2 pl-10 border border-gray-300 rounded w-full"
              />
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {filteredCardTypes.map(([cardKey]) => (
              <div
                key={cardKey}
                draggable
                className="w-full cursor-pointer"
                onClick={() => handleTriggerDrop(cardKey)}
              >
                <div className="flex flex-row items-center gap-3 p-1">
                  <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes} />
                  <p className="text-md">{cardKey}</p>
                </div>
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="settings"
            className="-mt-7"
          >
            <div className="px-2 py-4 text-center text-xl font-bold">
              {state.editor.selectedNode.data.title}
            </div>

            <Accordion type="multiple">
              <AccordionItem
                value="Options"
                className="border-y-[1px] px-2"
              >
                <AccordionTrigger className="!no-underline">
                  Account
                </AccordionTrigger>
                <AccordionContent>
                  {CONNECTIONS.map((connection) => (
                    <RenderConnectionAccordion
                      key={connection.title}
                      state={state}
                      connection={connection}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="Expected Output"
                className="px-2"
              >
                <AccordionTrigger className="!no-underline">
                  Action
                </AccordionTrigger>
                <RenderOutputAccordion
                  state={state}
                  nodeConnection={nodeConnection}
                />
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      ) : (
        <Tabs className="h-screen overflow-scroll pb-24">
          <TabsList className="bg-transparent px-3 py-7 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-black dark:hover:text-white" onClick={handleBack}>
                <ArrowLeft size={24} />
              </button>
              <div className="flex items-center gap-3 p-1">
                <EditorCanvasIconHelper type={selectedTrigger as EditorCanvasTypes} />
                <p className="text-lg font-semibold">{selectedTrigger}</p>
              </div>
            </div>
          </TabsList>
          <Separator />
          <TabsContent
            value="actions"
            className="flex flex-col gap-3 p-4">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search ${selectedTrigger} Actions...`}
                value={searchActions}
                onChange={(e) => setSearchActions(e.target.value)}
                className="p-2 pl-10 border border-gray-300 rounded w-full"
              />
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {filteredActions.map(action => (
              <div
                key={action}
                draggable
                className="w-full cursor-grab"
                onDragStart={(event) => onDragStart(event, action as EditorCanvasTypes)}
              >
                <div className="flex flex-row items-center gap-3 p-1">
                  <EditorCanvasIconHelper type={action as EditorCanvasTypes} />
                  <p className="text-md">{action}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      )}
    </aside>
  )
}

export default EditorCanvasSidebar
