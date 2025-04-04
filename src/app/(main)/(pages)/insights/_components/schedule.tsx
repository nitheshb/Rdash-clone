"use client";

import { Calendar, Filter, MoreVertical } from "lucide-react";
import { Select } from "@/components/select";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scrollarea";

export default function Schedule() {
  return (
    <ScrollArea className="h-[100vh]">
      <main className="min-h-screen bg-background p-4">
        <div className="max-w-[1400px] mx-auto space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Schedule</h1>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Activity Schedule</h2>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex gap-2">
                  <div className="h-10 w-10 flex items-center justify-center border rounded-md">
                    <Filter className="h-5 w-5" />
                  </div>
                  <Select>
                    <select className="w-full h-10 px-3 rounded-md border bg-background">
                      <option>Project Name</option>
                    </select>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <div className="h-10 w-10 flex items-center justify-center border rounded-md">
                    <Filter className="h-5 w-5" />
                  </div>
                  <Select>
                    <select className="w-full h-10 px-3 rounded-md border bg-background">
                      <option>Assignee</option>
                    </select>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <div className="h-10 w-10 flex items-center justify-center border rounded-md">
                    <Filter className="h-5 w-5" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Planned Start Date Range"
                      className="w-full h-10 px-3 rounded-md border bg-background"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="h-10 w-10 flex items-center justify-center border rounded-md">
                    <Filter className="h-5 w-5" />
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Planned End Date Range"
                      className="w-full h-10 px-3 rounded-md border bg-background"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="h-10 w-10 flex items-center justify-center border rounded-md">
                    <Filter className="h-5 w-5" />
                  </div>
                  <Select>
                    <select className="w-full h-10 px-3 rounded-md border bg-background">
                      <option>Stage</option>
                    </select>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <div className="h-10 w-10 flex items-center justify-center border rounded-md">
                    <Filter className="h-5 w-5" />
                  </div>
                  <Select>
                    <select className="w-full h-10 px-3 rounded-md border bg-background">
                      <option>Status</option>
                    </select>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Resource Workload Summary</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <ScrollArea className="h-[400px] overflow-auto">
                    <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                      <img
                        src="https://images.unsplash.com/photo-1529119513315-c7c361862fc7?w=800&auto=format&fit=crop&q=60"
                        alt="No results"
                        className="w-32 h-32 opacity-50"
                      />
                      <p className="text-muted-foreground mt-4">No results!</p>
                    </div>
                  </ScrollArea>
                </Card>

                <Card className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Activity Schedule Summary</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <ScrollArea className="h-[400px] overflow-auto">
                    <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                      <img
                        src="https://images.unsplash.com/photo-1529119513315-c7c361862fc7?w=800&auto=format&fit=crop&q=60"
                        alt="No results"
                        className="w-32 h-32 opacity-50"
                      />
                      <p className="text-muted-foreground mt-4">No results!</p>
                    </div>
                  </ScrollArea>
                </Card>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Weekly Resource Workload</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <ScrollArea className="h-[400px] overflow-auto">
                <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                  <img
                    src="https://images.unsplash.com/photo-1529119513315-c7c361862fc7?w=800&auto=format&fit=crop&q=60"
                    alt="No results"
                    className="w-32 h-32 opacity-50"
                  />
                  <p className="text-muted-foreground mt-4">No results!</p>
                </div>
              </ScrollArea>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">My Activities</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <ScrollArea className="h-[400px] overflow-auto">
                <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                  <img
                    src="https://images.unsplash.com/photo-1529119513315-c7c361862fc7?w=800&auto=format&fit=crop&q=60"
                    alt="No results"
                    className="w-32 h-32 opacity-50"
                  />
                  <p className="text-muted-foreground mt-4">No results!</p>
                </div>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </main>
    </ScrollArea>
  );
}