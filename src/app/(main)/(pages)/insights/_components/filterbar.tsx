"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export function FilterBar() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex gap-2 mb-6">
      <Select>
        <SelectTrigger className="w-[200px]">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Project Name" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="project1">Project 1</SelectItem>
          <SelectItem value="project2">Project 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[200px]">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Section Name" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="section1">Section 1</SelectItem>
          <SelectItem value="section2">Section 2</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[200px]">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Uploaded By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="user1">User 1</SelectItem>
          <SelectItem value="user2">User 2</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-start text-left font-normal">
            <Filter className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Uploaded At</span>}
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
  );
}