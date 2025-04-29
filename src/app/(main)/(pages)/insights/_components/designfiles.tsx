// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { CalendarIcon, Filter, MoreVertical, Sailboat } from "lucide-react";
// import { cn } from "@/lib/utils";

// export default function DesignFiles() {
//   const [activeTab, setActiveTab] = useState("design-files");

//   return (
//     <div className="min-h-screen bg-background p-3 w-[1200px]border border-gray-50  ">
//       {/* <div className="mx-auto max-w-[1400px] ">
//         <div className="mb-6 flex items-center justify-between ">
//           <h1 className="text-2xl font-semibold">Design</h1>
//           <Button variant="ghost" size="icon">
//             <MoreVertical className="h-5 w-5" />
//           </Button>
//         </div> */}
//          <div className="border-b border-gray-200 bg-white px-1 py-1">
//         <div className="flex items-center justify-between ">
//           <h1 className="text-2xl font-semibold">Design</h1>
//           <Button variant="ghost" size="icon">
//             <MoreVertical className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       <div className="h-[calc(100vh-64px)] overflow-auto p-4">
//         <div className="mx-auto max-w-7xl space-y-2">
//           <Card className="border-gray-200">
//           {/* <CardHeader className="pb-4"> */}
//             <Tabs defaultValue="design-files" className="p-6" onValueChange={setActiveTab}>
//             <div className="flex items-center gap-2 mb-6">
//               <TabsList >
//                 <TabsTrigger value="design-files">Design Files</TabsTrigger>
//                 <TabsTrigger value="design-file">Design File</TabsTrigger>
//               </TabsList>
//               <Button variant="ghost" size="icon" className="ml-auto">
//                   <MoreVertical className="h-5 w-5" />
//                 </Button>
//               </div>
//             </Tabs>
//           {/* </CardHeader> */}

//           <CardContent className="space-y-6 mt-0">
//             <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
//               <div className="flex gap-2">
//                 <div className="relative flex-1">
//                   <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Select>
//                     <SelectTrigger className="w-full pl-9">
//                       <SelectValue placeholder="Project Name" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Projects</SelectItem>
//                       <SelectItem value="project-1">Project 1</SelectItem>
//                       <SelectItem value="project-2">Project 2</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <div className="relative flex-1">
//                   <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Select>
//                     <SelectTrigger className="w-full pl-9">
//                       <SelectValue placeholder="Section Name" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Sections</SelectItem>
//                       <SelectItem value="section-1">Section 1</SelectItem>
//                       <SelectItem value="section-2">Section 2</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <div className="relative flex-1">
//                   <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Select>
//                     <SelectTrigger className="w-full pl-9">
//                       <SelectValue placeholder="Uploaded By" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Users</SelectItem>
//                       <SelectItem value="user-1">User 1</SelectItem>
//                       <SelectItem value="user-2">User 2</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div className="flex gap-2">
//                 <div className="relative flex-1">
//                   <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                   <Input type="date" className="pl-9" placeholder="Uploaded At" />
//                 </div>
//               </div>
//             </div>

//             <Card className={cn("mt-6 h-[600px]", activeTab === "design-files" ? "block" : "hidden")}>
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle>Design File Status</CardTitle>
//                 <div className="flex gap-2">
//                   <Button variant="ghost" size="icon">
//                     <MoreVertical className="h-5 w-5" />
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent className="flex flex-col items-center justify-center space-y-4 py-20">
//                 <Sailboat className="h-20 w-20 text-muted-foreground/50" />
//                 <p className="text-lg text-muted-foreground">No results!</p>
//               </CardContent>
//             </Card>
//           </CardContent>
//         </Card>
//         </div>
//         </div>
//       </div>
    
//   );
// }


"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Filter, MoreVertical, Sailboat } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DesignFiles() {
  const [activeTab, setActiveTab] = useState("design-files");

  return (
    <div className="min-h-screen bg-background  w-[1200px] ">
      <div className="border-b border-gray-200 bg-white px-1 py-1">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold pl-4 ">Design</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="h-[calc(100vh-64px)] overflow-auto p-4">
        <div className="mx-auto max-w-7xl space-y-2">
          <Card className="border-gray-200">
            <Tabs defaultValue="design-files" className="p-6" onValueChange={setActiveTab}>
              <div className="flex items-center gap-2 mb-6">
                <TabsList >
                  <TabsTrigger value="design-files">Design Files</TabsTrigger>
                  <TabsTrigger value="design-file">Design File</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </Tabs>

            <CardContent className="space-y-6 mt-0">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Project Name" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Projects</SelectItem>
                        <SelectItem value="project-1">Project 1</SelectItem>
                        <SelectItem value="project-2">Project 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Section Name" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Sections</SelectItem>
                        <SelectItem value="section-1">Section 1</SelectItem>
                        <SelectItem value="section-2">Section 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Uploaded By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="user-1">User 1</SelectItem>
                        <SelectItem value="user-2">User 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="date" className="pl-9" placeholder="Uploaded At" />
                  </div>
                </div>
              </div>

              <Card className={cn("mt-6 h-[600px]", activeTab === "design-files" ? "block" : "hidden")}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Design File Status</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center space-y-4 py-20">
                  <Sailboat className="h-20 w-20 text-muted-foreground/50" />
                  <p className="text-lg text-muted-foreground">No results!</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white text-center py-4 mt-8 shadow-md">
        <p className="text-sm text-gray-600">© 2025 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
