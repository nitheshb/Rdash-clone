"use client";

import { CheckCircle2, Bell } from "lucide-react";

import Tasks from "@/components/icons/mytasks";
import { Button } from "@/components/ui/button";

export function InfoBar() {
  return (
    <header className="bg-white border-b sticky top-0 z-30">
    <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Insights</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Tasks selected={false} width={19} height={19} />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
            N
          </div>
          <span>Nithesh</span>
        </div>
      </div>
    </div>
  </header>
  );
}