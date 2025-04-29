// 'use client';

// import { Select } from "@/components/select";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Filter, MoreVertical, Maximize2 } from "lucide-react";
// import { Badge } from "@/components/ui/badge";

// export default function MaterialInventory() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6 overflow-auto">
//       <div className="max-w-[1400px] mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-semibold text-gray-900">Project Tracker</h1>
//           <Button variant="ghost" size="icon">
//             <MoreVertical className="h-5 w-5" />
//           </Button>
//         </div>

//         {/* Material Inventory Section */}
//         <Card className="p-6">
//           <div className="space-y-6">
//             {/* Tags */}
//             <div className="flex gap-2 items-center">
//               <h2 className="text-lg font-medium">Material Inventory</h2>
//               <Badge variant="secondary">Material</Badge>
//               <Badge variant="secondary">GRN</Badge>
//               <Badge variant="secondary">Inventory</Badge>
//               <div className="ml-auto">
//                 <Button variant="ghost" size="icon">
//                   <MoreVertical className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="flex items-center gap-2 bg-white border rounded-lg p-2">
//                 <Filter className="h-5 w-5 text-gray-500" />
//                 <select className="flex-1 bg-transparent outline-none text-gray-500">
//                   <option>Project Name</option>
//                 </select>
//               </div>
//               <div className="flex items-center gap-2 bg-white border rounded-lg p-2">
//                 <Filter className="h-5 w-5 text-gray-500" />
//                 <select className="flex-1 bg-transparent outline-none text-gray-500">
//                   <option>Material Source</option>
//                 </select>
//               </div>
//               <div className="flex items-center gap-2 bg-white border rounded-lg p-2">
//                 <Filter className="h-5 w-5 text-gray-500" />
//                 <select className="flex-1 bg-transparent outline-none text-gray-500">
//                   <option>Business Category</option>
//                 </select>
//               </div>
//             </div>

//             {/* Trackers Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Overall Material Tracker */}
//               <Card className="p-4 h-[600px]">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-semibold text-gray-700">Overall Material Tracker</h3>
//                   <div className="flex gap-2">
//                     <Button variant="ghost" size="icon">
//                       <Maximize2 className="h-5 w-5" />
//                     </Button>
//                     <Button variant="ghost" size="icon">
//                       <MoreVertical className="h-5 w-5" />
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center h-[400px] text-gray-400">
//                   {/* <img 
//                     src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=100&q=80" 
//                     alt="No results" 
//                     className="w-20 h-20 mb-4 opacity-50"
//                   /> */}
//                   <p>No results!</p>
//                 </div>
//               </Card>

//               {/* Source wise Material Tracker */}
//               <Card className="p-4 h-[600px]">
//                 <div className="flex justify-between items-center mb-6">
//                   <h3 className="text-lg font-semibold text-gray-700">Source wise Material Tracker</h3>
//                   <div className="flex gap-2">
//                     <Button variant="ghost" size="icon">
//                       <Maximize2 className="h-5 w-5" />
//                     </Button>
//                     <Button variant="ghost" size="icon">
//                       <MoreVertical className="h-5 w-5" />
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center h-[400px] text-gray-400">
//                   {/* <img 
//                     src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=100&q=80" 
//                     alt="No results" 
//                     className="w-20 h-20 mb-4 opacity-50"
//                   /> */}
//                   <p>No results!</p>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }


'use client';

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
import { Filter, MoreVertical, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MaterialInventory() {
  return (
    <div className="h-screen overflow-hidden bg-gray-50 mb-10">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white px-1 py-1">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">Material Inventory</h1>
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
              {/* Tabs List */}
              <div className="flex items-center gap-2 mb-6">
                <TabsList>
                  <TabsTrigger value="tracker">Material Tracker</TabsTrigger>
                  <TabsTrigger value="source">Source Tracker</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>

              {/* Filters Section */}
              <TabsContent value="tracker" className="space-y-6 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                        <SelectValue placeholder="Material Source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="source1">Source 1</SelectItem>
                        <SelectItem value="source2">Source 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Business Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="category1">Category 1</SelectItem>
                        <SelectItem value="category2">Category 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Trackers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Overall Material Tracker */}
                  <Card className="p-4 h-[650px] border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-700">Overall Material Tracker</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Maximize2 className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
                    <Button variant="ghost" size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </Button>
                      <p>No results!</p>
                    </div>
                  </Card>

                  {/* Source Wise Material Tracker */}
                  <Card className="p-4 h-[650px] border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-700">Source Wise Material Tracker</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Maximize2 className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
                       <Button variant="ghost" size="icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                          >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                          </svg>
                                        </Button>
                      <p>No results!</p>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="source">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4 h-[450px] border-gray-200">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg font-semibold text-gray-700">Material Source Tracker</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Maximize2 className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
                      <p>No results!</p>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
