// "use client";


// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Filter, MoreVertical, Sailboat } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export default function GprTracker() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white p-4 flex justify-between items-center border-b">
//         <h1 className="text-xl font-semibold">GRN Tracker</h1>
//         <Button variant="ghost" size="icon">
//           <MoreVertical className="h-5 w-5" />
//         </Button>
//       </header>

//       {/* Main Content */}
//       <main className="p-4 max-w-7xl mx-auto">
//         {/* Tags */}
//         <div className="flex gap-2 mb-6">
//           <Badge variant="secondary" className="bg-white">
//             Material Inventory
//           </Badge>
//           <Badge variant="secondary" className="bg-gray-200">
//             Material
//           </Badge>
//           <Badge variant="secondary" className="bg-gray-200">
//             GRN
//           </Badge>
//           <Badge variant="secondary" className="bg-gray-200">
//             Inventory
//           </Badge>
//         </div>

//         {/* Filters */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//               <Filter className="h-4 w-4 text-gray-400" />
//             </div>
//             <select className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//               <option>Project Name</option>
//             </select>
//           </div>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//               <Filter className="h-4 w-4 text-gray-400" />
//             </div>
//             <select className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//               <option>Material Source</option>
//             </select>
//           </div>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//               <Filter className="h-4 w-4 text-gray-400" />
//             </div>
//             <select className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//               <option>Business Category</option>
//             </select>
//           </div>
//         </div>

//         {/* Tracker Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Overall Material Tracker */}
//           <Card className="bg-white">
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Overall Material Tracker</CardTitle>
//               <div className="flex gap-2">
//                 <Button variant="ghost" size="icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-4 w-4"
//                   >
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                     <polyline points="7 10 12 15 17 10" />
//                     <line x1="12" y1="15" x2="12" y2="3" />
//                   </svg>
//                 </Button>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon">
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>Export</DropdownMenuItem>
//                     <DropdownMenuItem>Share</DropdownMenuItem>
//                     <DropdownMenuItem>Settings</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
//               <Sailboat className="h-16 w-16 text-gray-200" />
//               <p className="text-gray-500 mt-4">No results!</p>
//             </CardContent>
//           </Card>

//           {/* Source wise Material Tracker */}
//           <Card className="bg-white">
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Source wise Material Tracker</CardTitle>
//               <div className="flex gap-2">
//                 <Button variant="ghost" size="icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-4 w-4"
//                   >
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//                     <polyline points="7 10 12 15 17 10" />
//                     <line x1="12" y1="15" x2="12" y2="3" />
//                   </svg>
//                 </Button>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon">
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent>
//                     <DropdownMenuItem>Export</DropdownMenuItem>
//                     <DropdownMenuItem>Share</DropdownMenuItem>
//                     <DropdownMenuItem>Settings</DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </CardHeader>
//             <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
//               <Sailboat className="h-16 w-16 text-gray-200" />
//               <p className="text-gray-500 mt-4">No results!</p>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }



"use client";


import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, MoreVertical, Sailboat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scrollarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function GrnTracker() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white p-2 flex justify-between items-center border-b shrink-0">
        <h1 className="text-xl font-semibold">GRN Tracker</h1>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <ScrollArea className="flex-1">
        <main className="p-4 max-w-7xl mx-auto">
          {/* Tags */}
          <div className="flex gap-2 mb-6">
            <Badge variant="secondary" className="bg-white">
              Material Inventory
            </Badge>
            <Badge variant="secondary" className="bg-gray-200">
              Material
            </Badge>
            <Badge variant="secondary" className="bg-gray-200">
              GRN
            </Badge>
            <Badge variant="secondary" className="bg-gray-200">
              Inventory
            </Badge>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Project Name</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Material Source</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
              <select className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Business Category</option>
              </select>
            </div>
          </div>

          {/* Tracker Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[670px]">
            {/* Overall Material Tracker */}
            <Card className="bg-white ">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Overall Material Tracker</CardTitle>
                <div className="flex gap-2">
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                <Sailboat className="h-16 w-16 text-gray-200" />
                <p className="text-gray-500 mt-4">No results!</p>
              </CardContent>
            </Card>

            {/* Source wise Material Tracker */}
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Source wise Material Tracker</CardTitle>
                <div className="flex gap-2">
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Export</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center min-h-[400px]">
                <Sailboat className="h-16 w-16 text-gray-200" />
                <p className="text-gray-500 mt-4">No results!</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </ScrollArea>
    </div>
  );
}