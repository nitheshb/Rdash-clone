"use client";
import { CONNECTIONS } from "@/lib/constant";
import ConnectionCard from "./connection-card";

import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { memo, useEffect, useMemo, useState } from "react";
import {
  deleteExpiredToken,
  onCreateTokenKey,
  onGetTokens,
} from "@/lib/token-connections";

type Props = {
  connections: {} & any;
};

const initialTokens: {
  id: string;
  tokenName: string;
  tokenKey: string;
  userId: string;
  appName: string;
  createdAt: Date;
  updatedAt: Date;
  has_expiry: boolean;
}[] = [];

// const ConnectionsContainer = ({ connections }: Props) => {
const ConnectionsContainer = () => {
  const searchParams = useSearchParams();
  const [tokens, setTokens] = useState(initialTokens);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const getTokens = async () => {
      const data = await onGetTokens();
      setTokens(data || []);
    };

    const deleteExpiredTokens = async () => {
      const data = await deleteExpiredToken();
      if (data) {
        toast.success(data.message);
      }
    };

    getTokens();
    deleteExpiredTokens();
  }, []);

  useEffect(() => {
    const outlookToken = searchParams.get("outlook_token");
    const googleToken = searchParams.get("google_token");

    const handleTokenCreation = async (
      token: string,
      tokenName: string,
      appName: string,
      hasExpiry: boolean = false
    ) => {
      const data = await onCreateTokenKey(token, tokenName, appName, hasExpiry);
      if (data?.message) {
        toast.success(data?.message);
        const updatedTokens = await onGetTokens();
        setTokens(updatedTokens);
      }
    };

    if (outlookToken) {
      handleTokenCreation(outlookToken, "Outlook Token", "Outlook", true);
      window.history.replaceState(null, "", "/connections");
    }

    if (googleToken) {
      handleTokenCreation(googleToken, "Google Token", "Google", true);
      window.history.replaceState(null, "", "/connections");
    }
  }, [searchParams]);

  const connections = useMemo(() => {
    return tokens.reduce((acc, el) => {
      return { ...acc, [`${el.appName}`]: true };
    }, {});
  }, [tokens]);

  return (
    <>
      {CONNECTIONS.map((connection) => (
        <ConnectionCard
          key={connection.title}
          description={connection.description}
          title={connection.title}
          icon={connection.image}
          type={connection.title}
          connected={connections}
        />
      ))}
    </>
  );
};

export default memo(ConnectionsContainer);
