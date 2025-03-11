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
        (node) => node.type === "T_trigger_event"
      );

      if (type === "T_trigger_event" && triggerAlreadyExists) {
        toast("Only one trigger can be added to automations at the moment");
        return;
      }

      const title = Object.keys(EditorCanvasDefaultCardTypes).find(
        (key) =>
          EditorCanvasDefaultCardTypes[
            key as keyof typeof EditorCanvasDefaultCardTypes
          ].value === type
      );
      const cardType =
        EditorCanvasDefaultCardTypes[
          title as keyof typeof EditorCanvasDefaultCardTypes
        ];

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
        myFunction: cardType.myFunction,
        data: {
          title: title,
          description: cardType.description,
          completed: false,
          current: false,
          metadata: {},
          type: type,
          status: cardType.status,
          value: cardType.value,
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
            type: "T_trigger_event",
            status: "idle",
            value: "",
          },
          id: "",
          position: { x: 0, y: 0 },
          type: "T_trigger_event",
          myFunction: () => {},
        },
      },
    });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: { edges, elements: nodes } });
  }, [nodes, edges, dispatch]);

  const nodeTypes = useMemo(
    () => ({
      A_action_event: EditorCanvasCardSingle,
      T_trigger_event: EditorCanvasCardSingle,
      C_condition_check: EditorCanvasCardSingle,
      O_open_ai: EditorCanvasCardSingle,
      O_upload_file: EditorCanvasCardSingle,
      O_list_file: EditorCanvasCardSingle,
      O_delete_file: EditorCanvasCardSingle,
      O_message_model: EditorCanvasCardSingle,
      O_create_assistant : EditorCanvasCardSingle,
      O_list_assistants : EditorCanvasCardSingle,
      O_delete_assistant : EditorCanvasCardSingle,
      O_update_assistant : EditorCanvasCardSingle,
      O_classify_text : EditorCanvasCardSingle,
      O_analyze_image : EditorCanvasCardSingle,
      O_generate_image : EditorCanvasCardSingle,
      O_generate_audio : EditorCanvasCardSingle,
      O_transcribe_audio : EditorCanvasCardSingle,
      O_translate_audio : EditorCanvasCardSingle,
      O_generate_video : EditorCanvasCardSingle,
      S_slack: EditorCanvasCardSingle,
      G_google_drive: EditorCanvasCardSingle,
      N_notion: EditorCanvasCardSingle,
      N_append_block: EditorCanvasCardSingle,
      N_get_many_child_blocks: EditorCanvasCardSingle,
      N_get_database: EditorCanvasCardSingle,
      N_get_many_databases: EditorCanvasCardSingle,
      N_search_database: EditorCanvasCardSingle,
      N_create_database_page: EditorCanvasCardSingle,
      N_get_database_page: EditorCanvasCardSingle,
      D_discord: EditorCanvasCardSingle,
      C_custom_webhook_event: EditorCanvasCardSingle,
      G_google_calendar: EditorCanvasCardSingle,
      W_wait_event: EditorCanvasCardSingle,
      T_telegram_connection: EditorCanvasCardSingle,
      T_get_a_chat: EditorCanvasCardSingle,
      T_get_all_admins_in_chat: EditorCanvasCardSingle,
      T_get_member_in_chat: EditorCanvasCardSingle,
      T_leave_a_chat: EditorCanvasCardSingle,
      T_set_description_on_chat: EditorCanvasCardSingle,
      T_set_title_on_chat: EditorCanvasCardSingle,
      T_answer_query_a_callback: EditorCanvasCardSingle,
      T_answer_inline_query_a_callback: EditorCanvasCardSingle,
      T_get_file: EditorCanvasCardSingle,
      T_delete_chat_message: EditorCanvasCardSingle,
      T_edit_test_message: EditorCanvasCardSingle,
      T_pin_chat_message: EditorCanvasCardSingle,
      T_send_text_message: EditorCanvasCardSingle,
      T_send_media_group_message: EditorCanvasCardSingle,
      T_send_photo_message: EditorCanvasCardSingle,
      T_send_animated_file: EditorCanvasCardSingle,
      T_send_audio_file: EditorCanvasCardSingle,
      T_send_chat_action: EditorCanvasCardSingle,
      T_send_sticker: EditorCanvasCardSingle,
      T_send_video: EditorCanvasCardSingle,
      T_unpin_chat_message: EditorCanvasCardSingle,
      T_on_message: EditorCanvasCardSingle,
      T_on_callback_query: EditorCanvasCardSingle,
      T_on_channel_post: EditorCanvasCardSingle,
      T_on_edited_channel_post: EditorCanvasCardSingle,
      T_on_edited_message: EditorCanvasCardSingle,
      T_on_inline_query: EditorCanvasCardSingle,
      T_on_poll_change: EditorCanvasCardSingle,
      T_on_pre_checkout_query: EditorCanvasCardSingle,
      T_on_shipping_query: EditorCanvasCardSingle,
      J_jira_connection: EditorCanvasCardSingle,
      J_get_many_issues: EditorCanvasCardSingle,
      J_get_an_issue: EditorCanvasCardSingle,
      J_create_an_issue: EditorCanvasCardSingle,
      J_delete_an_issue: EditorCanvasCardSingle,
      J_update_an_issue: EditorCanvasCardSingle,
      J_get_the_status_of_an_issue: EditorCanvasCardSingle,
      J_get_an_issue_changelog: EditorCanvasCardSingle,
      J_create_email_notification_for_an_issue: EditorCanvasCardSingle,
      J_add_an_attachment_to_an_issue: EditorCanvasCardSingle,
      J_get_an_attachment_from_an_issue: EditorCanvasCardSingle,
      J_get_many_issue_attachments: EditorCanvasCardSingle,
      J_remove_an_attachment_from_an_issue: EditorCanvasCardSingle,
      J_add_a_comment: EditorCanvasCardSingle,
      J_get_a_comment: EditorCanvasCardSingle,
      J_get_many_comments: EditorCanvasCardSingle,
      J_remove_a_comment: EditorCanvasCardSingle,
      J_update_a_comment: EditorCanvasCardSingle,
      J_create_a_user: EditorCanvasCardSingle,
      J_delete_a_user: EditorCanvasCardSingle,
      J_get_a_user: EditorCanvasCardSingle,
      J_get_all_users: EditorCanvasCardSingle,
      G_connect_gmail: EditorCanvasCardSingle,
      G_get_latest_email: EditorCanvasCardSingle,
      G_send_message_to_draft: EditorCanvasCardSingle,
      O_connect_to: EditorCanvasCardSingle,
      O_get_a_message: EditorCanvasCardSingle,
      O_get_many_messages: EditorCanvasCardSingle,
      O_delete_message: EditorCanvasCardSingle,
      O_create_a_draft: EditorCanvasCardSingle,
      O_get_the_draft: EditorCanvasCardSingle,
      O_delete_draft: EditorCanvasCardSingle,
      O_update_draft: EditorCanvasCardSingle,
      O_send_mail: EditorCanvasCardSingle,
      O_create_folder: EditorCanvasCardSingle,
      O_get_a_folder: EditorCanvasCardSingle,
      O_get_many_folders: EditorCanvasCardSingle,
      O_update_folder: EditorCanvasCardSingle,
      O_delete_folder: EditorCanvasCardSingle,
      O_create_contact: EditorCanvasCardSingle,
      O_delete_contact: EditorCanvasCardSingle,
      O_get_contact: EditorCanvasCardSingle,
      O_get_all_contacts: EditorCanvasCardSingle,
      O_update_contact: EditorCanvasCardSingle,
      O_create_calendar: EditorCanvasCardSingle,
      O_delete_calendar: EditorCanvasCardSingle,
      O_get_calendar: EditorCanvasCardSingle,
      O_get_all_calendars: EditorCanvasCardSingle,
      O_update_calendar: EditorCanvasCardSingle,
      O_create_event: EditorCanvasCardSingle,
      O_delete_event: EditorCanvasCardSingle,
      O_get_event: EditorCanvasCardSingle,
      O_get_all_events: EditorCanvasCardSingle,
      O_update_event: EditorCanvasCardSingle,
      O_add_attachment: EditorCanvasCardSingle,
      O_download_attachment: EditorCanvasCardSingle,
      O_get_attachment: EditorCanvasCardSingle,
      O_get_all_attachments: EditorCanvasCardSingle,
      GL_get_availability_in_a_calendar: EditorCanvasCardSingle,
      GL_create_an_event: EditorCanvasCardSingle,
      GL_get_an_event: EditorCanvasCardSingle,
      GL_get_many_events: EditorCanvasCardSingle,
      GL_update_an_event: EditorCanvasCardSingle,
      GL_delete_an_event: EditorCanvasCardSingle,
    }),
    []
  );
  
  const onGetWorkFlow = useCallback(async () => {
    setIsWorkFlowLoading(true);
    const response = await onGetNodesEdges(pathname.split("/").pop()!);
    if (response) {
      setEdges(JSON.parse(response.edges!));
      setNodes(JSON.parse(response.nodes!));
      setIsWorkFlowLoading(false);
    }
    setIsWorkFlowLoading(false);
  }, [pathname]);

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
  }, [pathname]);

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
  }, [onGetWorkFlow]);

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={close ? 100 : 80}>
        <div className="flex h-full items-center justify-center">
          <div className="relative w-full h-full pb-[70px]">
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
                    {loading ? "Testing" : "Test Workflow"}
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
