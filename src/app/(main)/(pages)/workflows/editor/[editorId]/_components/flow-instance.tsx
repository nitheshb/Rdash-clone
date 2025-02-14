"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const FlowInstance = ({ children }: Props) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default FlowInstance;
