'use client'
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import React, { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import { actionHeadings, CONNECTIONS, EditorCanvasDefaultCardTypes, nodeActions, nodeTriggers } from '@/lib/constant'
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
import { ArrowLeft, ArrowRight, Search, X } from 'lucide-react'

type Props = {
  nodes: EditorNodeType[]
  onClose: () => void
}

const EditorCanvasSidebar = ({ nodes, onClose }: Props) => {
  const { state } = useEditor()
  const { nodeConnection } = useNodeConnections()
  const { googleFile, setSlackChannels } = useFuzzieStore()

  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [searchNodes, setSearchNodes] = useState<string>('')
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

  const handleNodeDrop = (nodeType: string) => {
    setSelectedNode(nodeType)
  }

  const handleBack = () => {
    setSelectedNode(null)
  }

  const filteredCardTypes = Object.entries(EditorCanvasDefaultCardTypes)
    .filter(([cardKey]) => cardKey.toLowerCase().includes(searchNodes.toLowerCase()) &&
      EditorCanvasDefaultCardTypes[cardKey as keyof typeof EditorCanvasDefaultCardTypes].type === 'Node'
    )

  const filteredActions = selectedNode && nodeActions[selectedNode]
    ? Object.entries(nodeActions[selectedNode]).flatMap(([heading, actions]) => ({
      heading,
      actions: actions.filter(action => action.toLowerCase().includes(searchActions.toLowerCase()))
    }))
    : [];

  const totalActions = filteredActions.reduce((acc, { actions }) => acc + actions.length, 0)

  const filteredTriggers = selectedNode && nodeTriggers[selectedNode]
    ? nodeTriggers[selectedNode].filter(trigger => trigger.toLowerCase().includes(searchActions.toLowerCase()))
    : []

  const shouldShowActionsTab = !selectedNode || (selectedNode && filteredActions.length < 1)

   const cardType = Object.keys(EditorCanvasDefaultCardTypes).find(
        (key) => EditorCanvasDefaultCardTypes[key as keyof typeof EditorCanvasDefaultCardTypes].value === selectedNode
      );

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
                value={searchNodes}
                onChange={(e) => setSearchNodes(e.target.value)}
                className="p-2 pl-10 border border-gray-300 rounded w-full"
              />
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {filteredCardTypes.map(([cardKey, cardData]) => {
              const hasActions = nodeActions[cardData.value] && Object.values(nodeActions[cardData.value]).flat().length > 0;
              return (
                <div
                  key={cardData.value}
                  className="w-full cursor-pointer"
                  draggable={!hasActions}
                  onClick={hasActions ? () => handleNodeDrop(cardData.value) : undefined}
                  onDragStart={!hasActions ? (event) => onDragStart(event, cardData.value as EditorCanvasTypes) : undefined}
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className='flex flex-row items-center gap-3 p-1'>
                      <EditorCanvasIconHelper type={cardData.value as EditorCanvasTypes} />
                      <p className="text-md font-medium">{cardKey}</p>
                    </div>
                    {hasActions && <ArrowRight size={20} className="text-gray-400" />}
                  </div>
                </div>
              )
            })}
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
                <EditorCanvasIconHelper type={selectedNode as EditorCanvasTypes} />
                <p className="text-lg font-semibold dark:text-white">{cardType}</p>
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
                placeholder={`Search ${cardType} Actions...`}
                value={searchActions}
                onChange={(e) => setSearchActions(e.target.value)}
                className="p-2 pl-10 border border-gray-300 rounded w-full"
              />
              <Search className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <Accordion type="multiple" defaultValue={["Options", "Expected Output"]}>
              <AccordionItem
                value="Options"
                className="px-2"
              >
                <AccordionTrigger className="!no-underline">
                  Actions ({totalActions})
                </AccordionTrigger>
                <AccordionContent>
                  {filteredActions.map(({ heading, actions }) => (
                    <div key={heading} className="w-full">
                      <div className="font-semibold text-md text-gray-700 dark:text-gray-500">{actionHeadings.find(item => item.value === heading)?.label}</div>
                      {actions.map((action) => {
                        const cardKey = Object.keys(EditorCanvasDefaultCardTypes).find(
                          (key) => EditorCanvasDefaultCardTypes[key as keyof typeof EditorCanvasDefaultCardTypes].value === action
                        );
                        return (
                          <div
                            key={action}
                            draggable
                            className="w-full cursor-grab"
                            onDragStart={(event) => onDragStart(event, action as EditorCanvasTypes)}
                          >
                            <div className="flex flex-row items-center gap-3 p-2">
                              <EditorCanvasIconHelper type={action as EditorCanvasTypes} />
                              <p className="text-md font-medium">{cardKey}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              {filteredTriggers.length > 0 && (
                <AccordionItem
                  value="Expected Output"
                  className="px-2"
                >
                  <AccordionTrigger className="!no-underline">
                    Triggers ({filteredTriggers.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    {filteredTriggers.map(trigger => {
                        const cardKey = Object.keys(EditorCanvasDefaultCardTypes).find(
                          (key) => EditorCanvasDefaultCardTypes[key as keyof typeof EditorCanvasDefaultCardTypes].value === trigger
                        );
                        return (
                      <div key={trigger}
                        draggable
                        className="w-full cursor-grab"
                        onDragStart={(event) => onDragStart(event, trigger as EditorCanvasTypes)}
                      >
                        <div className="flex flex-row items-center gap-3 p-2">
                          <EditorCanvasIconHelper type={trigger as EditorCanvasTypes} />
                          <p className="text-md font-medium">{cardKey}</p>
                        </div>
                      </div>
                   );
                  })}
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </TabsContent>
        </Tabs>
      )}
    </aside>
  )
}

export default EditorCanvasSidebar