'use client';

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Filter, MoreVertical } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function DprTracker() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="h-screen overflow-hidden bg-gray-50 mb-10">
           <div className="border-b border-gray-200 bg-white px-1 py-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">DPR Tracker</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Export Data</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="h-[calc(100vh-64px)] overflow-auto p-4">
        <div className="mx-auto max-w-7xl space-y-2">
        <Card className="border-gray-200 p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-muted/30 rounded-lg px-2 py-1">
                <Button className="text-black font-medium bg-white ">DPR</Button>
              </div>
              <Button className="text-black font-medium p-2 bg-gray-200">Tracker</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Project Name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project1">Project 1</SelectItem>
                    <SelectItem value="project2">Project 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>DPR Creation date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Business Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="category1">Category 1</SelectItem>
                    <SelectItem value="category2">Category 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 h-[650px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">DPR Count</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[300px]">

                <div className="w-24 h-24 mb-4">
  <Image 
    src="/sailboat.svg" 
    alt="No results" 
    width={96}  // Set the width of the image (24 * 4)
    height={96}  // Set the height of the image (24 * 4)
    className="w-full h-full opacity-20"  // Add additional styling
  />
</div>                  <p className="text-muted-foreground">No results!</p>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Manpower Count</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="flex items-center justify-center h-[300px]">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full border-8 border-muted" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">0</div>
                        <div className="text-sm text-muted-foreground">TOTAL</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
      </div>
      </div>
    </div>
  );
}