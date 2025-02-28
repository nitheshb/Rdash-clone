"use client";
import { ConnectionTypes } from "@/lib/types";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import TelegramConnectForm from "@/components/forms/telegram-connect-form";

type Props = {
  type: ConnectionTypes;
  icon: string;
  title: ConnectionTypes;
  description: string;
  callback?: () => void;
  connected: {} & any;
};

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  const [showTelegramForm, setShowTelegramForm] = useState(false);

  const handleConnectClick = (e: React.MouseEvent) => {
    if (title === "Telegram") {
      e.preventDefault();
      setShowTelegramForm(true);
    }
  };
  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Image
            src={icon}
            alt={title}
            height={30}
            width={30}
            className="object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        {connected[`${type.split(" ")[0]}`] ? (
          <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-black dark:text-white">
            Connected
          </div>
        ) : (
          <Link
            href={
              title == "Discord"
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == "Notion"
                ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                : title == "Slack"
                ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                : title === "Outlook"
                ? process.env.NEXT_PUBLIC_OUTLOOK_AUTH_URL!
                : title === "Google Calendar"
                ? process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL!
                : "#"
            }
            onClick={title === "Telegram" ? handleConnectClick : undefined}
            className=" rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}
      </div>
      {showTelegramForm && (
        <TelegramConnectForm onClose={() => setShowTelegramForm(false)} />
      )}
    </Card>
  );
};

export default ConnectionCard;
