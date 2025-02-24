import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import { Position, useNodeId } from "reactflow";
import EditorCanvasIconHelper from "./editor-canvas-card-icon-hepler";
import CustomHandle from "./custom-handle";
import { Badge } from "@/components/ui/badge";
import { Check, LoaderCircle, X } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);

  return (
    <>
      {data.type !== "T_trigger_event" && data.type !== "G_google_drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card
        onClick={(e) => {
          e.stopPropagation();
          const val = state.editor.elements.find((n) => n.id === nodeId);
          if (val)
            dispatch({
              type: "SELECTED_ELEMENT",
              payload: {
                element: val,
              },
            });
        }}
        className="relative max-w-[400px] dark:border-muted-foreground/70"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div>{logo}</div>
          <div>
            <CardTitle className="text-md">{data.title}</CardTitle>
            <CardDescription>
              <p className="text-xs text-muted-foreground/50">
                <b className="text-muted-foreground/80">ID: </b>
                {nodeId}
              </p>
              <p>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        {/* <Badge
          variant="secondary"
          className="absolute right-2 top-2"
        >
          {data.type}
        </Badge> */}

        <div className="absolute right-1 top-2 h-2 w-2 rounded-full">
          {data.status === "success" && (
            <>
              <Badge variant="secondary" className="absolute right-2 gap-1">
                <Check className="text-green-500" />
                Completed
              </Badge>
            </>
          )}
          {data.status === "loading" && (
            <>
              <Badge variant="secondary" className="absolute right-2 gap-1">
                <LoaderCircle className="w-6 h-6 text-orange-500 animate-spin" />
                Running
              </Badge>
            </>
          )}
          {data.status === "failure" && (
            <>
              <Badge variant="secondary" className="absolute right-2 gap-1">
                <X className="text-red-500" />
                Failed
              </Badge>
            </>
          )}
        </div>
      </Card>
      <CustomHandle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default EditorCanvasCardSingle;
