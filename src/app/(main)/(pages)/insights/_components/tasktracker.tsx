"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, MoreVertical, Sailboat } from "lucide-react";
import { InfoBar } from "./infobar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 w-[1200px] ">
          
      {/* Header */}
      <div className="border-b border-gray-200 bg-white ">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">Task Manager</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-64px)] overflow-auto p-4">
        <div className="mx-auto max-w-7xl space-y-2">
          <Card className="border-gray-200">
            <Tabs defaultValue="tracker" className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <TabsList>
                  <TabsTrigger value="tracker">Task Tracker</TabsTrigger>
                  <TabsTrigger value="tasks">Tasks</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>

              <TabsContent value="tracker" className="space-y-6 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Project Name" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project1">Project 1</SelectItem>
                        <SelectItem value="project2">Project 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Assigned To" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Created By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user1">User 1</SelectItem>
                        <SelectItem value="user2">User 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Type of Task" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bug">Bug</SelectItem>
                        <SelectItem value="feature">Feature</SelectItem>
                        <SelectItem value="improvement">Improvement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-gray-200 h-[450px]">
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                      <h2 className="text-xl font-semibold text-gray-700">Tasks Bifurcation</h2>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Filter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 p-4">
                      <Sailboat className="h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500">No results!</p>
                    </div>
                  </Card>

                  <Card className="border-gray-200">
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                      <h2 className="text-xl font-semibold text-gray-700">Open Tasks User Wise</h2>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Filter className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-64 p-4">
                      <Sailboat className="h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500">No results!</p>
                    </div>
                  </Card>
                </div>

                <Card className="border-gray-200 h-[550px] ">
                  <div className="flex items-center justify-between border-b border-gray-200 p-4">
                    <h2 className="text-xl font-semibold text-gray-700">User wise Completed/Pending tasks</h2>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center h-64 p-4">
                    <Sailboat className="h-16 w-16 text-gray-300 mb-4" />
                    <p className="text-gray-500">No results!</p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="tasks">
                <div className="flex flex-col items-center justify-center h-64">
                  <Sailboat className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500">No tasks available!</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}