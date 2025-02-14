"use client";
import { createContext, useContext, useState } from "react";

export type ConnectionProviderProps = {
  discordNode: {
    webhookURL: string;
    content: string;
    webhookName: string;
    guildName: string;
  };
  gmailNode: {};
  outlookNode: {};
  setDiscordNode: React.Dispatch<React.SetStateAction<any>>;
  googleNode: {}[];
  setGoogleNode: React.Dispatch<React.SetStateAction<any>>;
  notionNode: {
    accessToken: string;
    databaseId: string;
    workspaceName: string;
    content: "";
  };
  workflowTemplate: {
    discord?: string;
    notion?: string;
    slack?: string;
    telegram?: string;
  };
  setNotionNode: React.Dispatch<React.SetStateAction<any>>;
  slackNode: {
    appId: string;
    authedUserId: string;
    authedUserToken: string;
    slackAccessToken: string;
    botUserId: string;
    teamId: string;
    teamName: string;
    content: string;
  };
  setSlackNode: React.Dispatch<React.SetStateAction<any>>;
  telegramNode: {
    botAccessToken: string;
    content: string;
  };
  setTelegramNode: React.Dispatch<React.SetStateAction<any>>;
  jiraNode: {
    jiraApiToken: string;
    jiraDomain: string;
    projectKey: string;
  };
  setJiraNode: React.Dispatch<React.SetStateAction<any>>;
  setWorkFlowTemplate: React.Dispatch<
    React.SetStateAction<{
      discord?: string;
      notion?: string;
      slack?: string;
    }>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type ConnectionWithChildProps = {
  children: React.ReactNode;
};

const InitialValues: ConnectionProviderProps = {
  discordNode: {
    webhookURL: "",
    content: "",
    webhookName: "",
    guildName: "",
  },
  gmailNode: {},
  outlookNode: {},
  googleNode: [],
  notionNode: {
    accessToken: "",
    databaseId: "",
    workspaceName: "",
    content: "",
  },
  workflowTemplate: {
    discord: "",
    notion: "",
    slack: "",
    telegram: "",
  },
  slackNode: {
    appId: "",
    authedUserId: "",
    authedUserToken: "",
    slackAccessToken: "",
    botUserId: "",
    teamId: "",
    teamName: "",
    content: "",
  },
  telegramNode: {
    botAccessToken: "",
    content: "",
  },
  jiraNode: {
    jiraApiToken: "",
    jiraDomain: "",
    projectKey: "",
  },
  isLoading: false,
  setGoogleNode: () => undefined,
  setDiscordNode: () => undefined,
  setNotionNode: () => undefined,
  setSlackNode: () => undefined,
  setTelegramNode: () => undefined,
  setJiraNode: () => undefined,
  setIsLoading: () => undefined,
  setWorkFlowTemplate: () => undefined,
};

const ConnectionsContext = createContext(InitialValues);
const { Provider } = ConnectionsContext;

export const ConnectionsProvider = ({ children }: ConnectionWithChildProps) => {
  const [discordNode, setDiscordNode] = useState(InitialValues.discordNode);
  const [googleNode, setGoogleNode] = useState(InitialValues.googleNode);
  const [notionNode, setNotionNode] = useState(InitialValues.notionNode);
  const [slackNode, setSlackNode] = useState(InitialValues.slackNode);
  const [gmailNode, setGmailNode] = useState(InitialValues.gmailNode);
  const [outlookNode, setOutlookNode] = useState(InitialValues.outlookNode);
  const [telegramNode, setTelegramNode] = useState(InitialValues.telegramNode);
  const [jiraNode, setJiraNode] = useState(InitialValues.jiraNode);
  const [isLoading, setIsLoading] = useState(InitialValues.isLoading);
  const [workflowTemplate, setWorkFlowTemplate] = useState(
    InitialValues.workflowTemplate
  );

  const values = {
    discordNode,
    setDiscordNode,
    googleNode,
    setGoogleNode,
    gmailNode,
    setGmailNode,
    outlookNode,
    setOutlookNode,
    notionNode,
    setNotionNode,
    slackNode,
    setSlackNode,
    telegramNode,
    setTelegramNode,
    jiraNode,
    setJiraNode,
    isLoading,
    setIsLoading,
    workflowTemplate,
    setWorkFlowTemplate,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useNodeConnections = () => {
  const nodeConnection = useContext(ConnectionsContext);
  return { nodeConnection };
};
