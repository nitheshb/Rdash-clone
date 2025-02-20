"use client";
import { EditorCanvasCardType, EditorNodeType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MiniMap,
  NodeChange,
  ReactFlowInstance,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import EditorCanvasCardSingle from "./editor-canvas-card-single";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { v4 } from "uuid";
import { EditorCanvasDefaultCardTypes } from "@/lib/constant";
import FlowInstance from "./flow-instance";
import EditorCanvasSidebar from "./editor-canvas-sidebar";
import { onGetNodesEdges } from "../../../_actions/workflow-connections";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  onCreateNodesEdges,
  onFlowPublish,
} from "../_actions/workflow-connections";
import { useNodeConnections } from "@/providers/connections-provider";

type Props = {};

const initialNodes: EditorNodeType[] = [];

const initialEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = (props: Props) => {
  const { dispatch, state } = useEditor();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [isWorkFlowLoading, setIsWorkFlowLoading] = useState<boolean>(false);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>();
  const [close, setClose] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const pathname = usePathname();
  const [isFlow, setIsFlow] = useState([]);
  const { nodeConnection } = useNodeConnections();

  const handleClose = () => {
    setClose(true);
  };

  const handleOpen = () => {
    setClose(false);
  };

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      //@ts-ignore
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      //@ts-ignore
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const type: EditorCanvasCardType["type"] = event.dataTransfer.getData(
        "application/reactflow"
      );

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const triggerAlreadyExists = state.editor.elements.find(
        (node) => node.type === "Trigger"
      );

      if (type === "Trigger" && triggerAlreadyExists) {
        toast("Only one trigger can be added to automations at the moment");
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      if (!reactFlowInstance) return;
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: v4(),
        type,
        position,
        myFunction: EditorCanvasDefaultCardTypes[type].myFunction,
        data: {
          title: type,
          description: EditorCanvasDefaultCardTypes[type].description,
          completed: false,
          current: false,
          metadata: {},
          type: type,
          status: EditorCanvasDefaultCardTypes[type].status,
        },
      };
      //@ts-ignore
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, state]
  );

  const handleClickCanvas = () => {
    dispatch({
      type: "SELECTED_ELEMENT",
      payload: {
        element: {
          data: {
            completed: false,
            current: false,
            description: "",
            metadata: {},
            title: "",
            type: "Trigger",
            status: "idle",
          },
          id: "",
          position: { x: 0, y: 0 },
          type: "Trigger",
          myFunction: () => {},
        },
      },
    });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: { edges, elements: nodes } });
  }, [nodes, edges]);

  const nodeTypes = useMemo(
    () => ({
      Action: EditorCanvasCardSingle,
      Trigger: EditorCanvasCardSingle,
      Email: EditorCanvasCardSingle,
      Condition: EditorCanvasCardSingle,
      "Open AI": EditorCanvasCardSingle,
      Slack: EditorCanvasCardSingle,
      "Google Drive": EditorCanvasCardSingle,
      Notion: EditorCanvasCardSingle,
      Discord: EditorCanvasCardSingle,
      "Custom Webhook": EditorCanvasCardSingle,
      "Google Calendar": EditorCanvasCardSingle,
      Wait: EditorCanvasCardSingle,
      "Telegram Connection": EditorCanvasCardSingle,
      "Get Recent Message": EditorCanvasCardSingle,
      "Send Message": EditorCanvasCardSingle,
      "Jira Connection": EditorCanvasCardSingle,
      "Get Many Issues": EditorCanvasCardSingle,
      "Get an Issue": EditorCanvasCardSingle,
      "Create an Issue": EditorCanvasCardSingle,
      "Delete an Issue": EditorCanvasCardSingle,
      "Update an Issue": EditorCanvasCardSingle,
      "Get Issue Status": EditorCanvasCardSingle,
      "Get an Issue Changelog": EditorCanvasCardSingle,
      "Create Email Notification": EditorCanvasCardSingle,
      "Add an Attachment": EditorCanvasCardSingle,
      "Get an Attachment": EditorCanvasCardSingle,
      "Get Many Attachments": EditorCanvasCardSingle,
      "Remove an Attachment": EditorCanvasCardSingle,
      "Add a Comment": EditorCanvasCardSingle,
      "Get a Comment": EditorCanvasCardSingle,
      "Get Many Comments": EditorCanvasCardSingle,
      "Remove a Comment": EditorCanvasCardSingle,
      "Update a Comment": EditorCanvasCardSingle,
      "Create a User": EditorCanvasCardSingle,
      "Delete a User": EditorCanvasCardSingle,
      "Get a User": EditorCanvasCardSingle,
      "Get all Users": EditorCanvasCardSingle,
      "Connect To Gmail": EditorCanvasCardSingle,
      "Get Latest Email": EditorCanvasCardSingle,
      "Send Message To Draft": EditorCanvasCardSingle,
      "Connect To Outlook": EditorCanvasCardSingle,
      "Get a message outlook": EditorCanvasCardSingle,
      "Get many messages outlook": EditorCanvasCardSingle,
      "Delete message outlook": EditorCanvasCardSingle,
      "Create a draft outlook": EditorCanvasCardSingle,
      "Get the draft outlook": EditorCanvasCardSingle,
      "Delete draft outlook": EditorCanvasCardSingle,
      "Update draft outlook": EditorCanvasCardSingle,
      "Send mail outlook": EditorCanvasCardSingle,
      "Create Folder Outlook": EditorCanvasCardSingle,
      "Get a Folder Outlook": EditorCanvasCardSingle,
      "Get Many Folders Outlook": EditorCanvasCardSingle,
      "Update Folder Outlook": EditorCanvasCardSingle,
      "Delete Folder Outlook": EditorCanvasCardSingle,
      "Create Contact Outlook": EditorCanvasCardSingle,
      "Get Contact Outlook": EditorCanvasCardSingle,
      "Get All Contacts Outlook": EditorCanvasCardSingle,
      "Delete Contact Outlook": EditorCanvasCardSingle,
      "Update Contact Outlook": EditorCanvasCardSingle,
      "Create Calendar Outlook": EditorCanvasCardSingle,
      "Get Calendar Outlook": EditorCanvasCardSingle,
      "Get All Calendars Outlook": EditorCanvasCardSingle,
      "Delete Calendar Outlook": EditorCanvasCardSingle,
      "Update Calendar Outlook": EditorCanvasCardSingle,
      "Create Event Outlook": EditorCanvasCardSingle,
      "Get Event Outlook": EditorCanvasCardSingle,
      "Get All Events Outlook": EditorCanvasCardSingle,
      "Delete Event Outlook": EditorCanvasCardSingle,
      "Update Event Outlook": EditorCanvasCardSingle,
      "Add Attachment Outlook": EditorCanvasCardSingle,
      "Get Attachment Outlook": EditorCanvasCardSingle,
      "Get All Attachments Outlook": EditorCanvasCardSingle,
      "Download Attachment Outlook": EditorCanvasCardSingle,
    }),
    []
  );

  const onGetWorkFlow = async () => {
    setIsWorkFlowLoading(true);
    const response = await onGetNodesEdges(pathname.split("/").pop()!);
    if (response) {
      setEdges(JSON.parse(response.edges!));
      setNodes(JSON.parse(response.nodes!));
      setIsWorkFlowLoading(false);
    }
    setIsWorkFlowLoading(false);
  };

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split("/").pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    );

    if (flow) toast.message(flow.message);
  }, [isFlow, edges, nodes, pathname]);

  const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split("/").pop()!, true);
    if (response) toast.message(response);
  }, []);

  const onAutomateFlow = useCallback(async () => {
    const flows: any = [];

    const connectedEdges = edges.map((edge) => edge.target);
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type);
        }
      });
    });

    setIsFlow(flows);
  }, [edges, nodes]);

  useEffect(() => {
    onAutomateFlow();
  }, [onAutomateFlow]);

  const onTestWorkFlow = async () => {
    setLoading(true);
    const executedNodes = new Set<string>();
    let nodeResponses: Record<string, any> = {};

    setNodes((prevNodes) =>
      prevNodes.map((node) => ({
        ...node,
        data: { ...node.data, status: "idle" },
      }))
    );

    const executeNode = async (node: any, input?: any) => {
      if (!node || executedNodes.has(node.id)) return true;

      executedNodes.add(node.id);
      setNodes((prevNodes) =>
        prevNodes.map((n) =>
          n.id === node.id
            ? { ...n, data: { ...n.data, status: "loading" } }
            : n
        )
      );

      try {
        const response =
          node.myFunction.length > 0
            ? await Promise.resolve(node.myFunction(input))
            : await Promise.resolve(node.myFunction());

        nodeResponses[node.id] = response;

        setNodes((prevNodes) =>
          prevNodes.map((n) =>
            n.id === node.id
              ? { ...n, data: { ...n.data, status: "success" } }
              : n
          )
        );

        return true;
      } catch (error) {
        setNodes((prevNodes) =>
          prevNodes.map((n) =>
            n.id === node.id
              ? { ...n, data: { ...n.data, status: "failure" } }
              : n
          )
        );
        console.warn(`Execution failed at node ${node.id}, stopping workflow.`);
        return false;
      }
    };

    for (const edge of edges) {
      const sourceNode = nodes.find((node) => node.id === edge.source);
      const targetNode = nodes.find((node) => node.id === edge.target);

      if (sourceNode && !(await executeNode(sourceNode))) return;

      if (targetNode) {
        const sourceResponse = sourceNode
          ? nodeResponses[sourceNode.id]
          : undefined;

        if (
          nodes.find((n) => n.id === edge.source)?.data.status !== "failure"
        ) {
          if (!(await executeNode(targetNode, sourceResponse))) {
            setLoading(false);
            return;
          }
        } else {
          console.warn(
            `Skipping execution for node ${targetNode.id} as previous node failed.`
          );
          setLoading(false);
          return;
        }
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    onGetWorkFlow();
  }, []);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={close ? 100 : 80}>
        <div className="flex h-full items-center justify-center">
          <div
            style={{ width: "100%", height: "100%", paddingBottom: "70px" }}
            className="relative"
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
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

                  <Button
                    disabled={loading || isFlow.length < 1}
                    onClick={onTestWorkFlow}
                  >
                    {" "}
                    {loading ? "Testing" : "Test Workflow"}{" "}
                  </Button>
                </div>
              </div>
            </div>
            {close && (
              <button
                className="absolute top-10 right-10 text-black hover:text-red-500 dark:text-white text-2xl cursor-pointer z-50"
                onClick={handleOpen}
              >
                <Settings className="w-6 h-6" />
              </button>
            )}
            {isWorkFlowLoading ? (
              <div className="absolute flex h-full w-full items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <ReactFlow
                className="w-[300px]"
                onDrop={onDrop}
                onDragOver={onDragOver}
                nodes={state.editor.elements}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                fitView
                onClick={handleClickCanvas}
                nodeTypes={nodeTypes}
              >
                <Controls position="top-left" />
                <MiniMap
                  position="bottom-left"
                  className="!bg-background"
                  zoomable
                  pannable
                />
                <Background
                  //@ts-ignore
                  variant="dots"
                  gap={12}
                  size={1}
                />
              </ReactFlow>
            )}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      {!close && (
        <ResizablePanel defaultSize={30} className="relative sm:block">
          {isWorkFlowLoading ? (
            <div className="absolute flex h-full w-full items-center justify-center">
              <svg
                aria-hidden="true"
                className="inline h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <FlowInstance>
              <EditorCanvasSidebar nodes={nodes} onClose={handleClose} />
            </FlowInstance>
          )}
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
};

export default EditorCanvas;
