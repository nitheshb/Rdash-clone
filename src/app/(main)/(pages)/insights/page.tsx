
// 'use client';

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronUp, MoreVertical, CheckCircle2 } from "lucide-react";
// import { EmptyState } from "./_components/emptystate";
// import { FilterBar } from "./_components/filterbar";
// import { InfoBar } from "./_components/infobar";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function InsightsPage() {
//   const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
//     Design: false,
//     "Task Manager": false,
//     "DPR tracker": false,
//     "Project Tracker": false,
//     "GRN Tracker": false,
//     "Order / intent": false,
//     BOQ: false,
//     Schedule: false,
//     Planning: false,
//   });

//   const toggleExpansion = (title: string) => {
//     setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   const sidebarNavItems = [
//     {
//       title: "Design",
//       items: [{ title: "Design Files" }],
//     },
//     {
//       title: "Task Manager",
//       items: [{ title: "Task Tracker" }],
//     },
//     {
//       title: "DPR tracker",
//       items: [{ title: "DPR" }],
//     },
//     {
//       title: "Project Tracker",
//       items: [{ title: "Material Inventory" }],
//     },
//     {
//       title: "GRN Tracker",
//       items: [{ title: "Material Inventory" }],
//     },
//     {
//       title: "Order / intent",
//       items: [
//         { title: "Order Value Bifurcation" },
//         { title: "Vendor Payments" },
//       ],
//     },
//     {
//       title: "BOQ",
//       items: [
//         { title: "Budget vs BOQ vs Actual" },
//         { title: "BOQ" },
//       ],
//     },
//     {
//       title: "Schedule",
//       items: [{ title: "Activity Schedule" }],
//     },
//     {
//       title: "Planning",
//       items: [{ title: "DPR" }],
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <InfoBar />
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <div className="w-64 border-r bg-gray-50 overflow-hidden">
//           <div className="p-6">
//             <div>
//               {sidebarNavItems.map((item) => (
//                 <div key={item.title} className="mb-2">
//                   <div className="flex justify-between items-center">
//                     <Button
//                       variant="ghost"
//                       className="text-left w-full text-sm"  // Removed bold and color classes
//                       onClick={() => toggleExpansion(item.title)}
//                     >
//                       <span>{item.title}</span>
//                     </Button>
//                     {expanded[item.title] ? (
//                       <ChevronUp className="h-4 w-4" />
//                     ) : (
//                       <ChevronDown className="h-4 w-4" />
//                     )}
//                   </div>
//                   {expanded[item.title] && (
//                     <div className="pl-6 mt-2">
//                       {item.items.map((subItem) => (
//                         <div
//                           key={subItem.title}
//                           className="flex items-center text-sm cursor-pointer"
//                         >
//                           <span className="mr-2 text-lg">•</span> {/* Dot */}
//                           {subItem.title}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             {/* Create Button */}
//             <div className="mt-4">
//               <Button
//                 variant="default"
//                 size="sm"
//                 className="w-full bg-red-600 text-white hover:bg-red-600 active:bg-red-600 focus:outline-none"
//               >
//                 + Create
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 overflow-hidden">
//           <div className="p-8">
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-semibold">Design</h1>
//               <Button variant="ghost" size="icon">
//                 <MoreVertical className="h-5 w-5" />
//               </Button>
//             </div>

//             <div className="bg-white rounded-lg">
//               <Tabs defaultValue="design-files" className="w-full">
//                 <div className="border-b px-6">
//                   <TabsList className="border-b-0">
//                     <TabsTrigger value="design-files">Design Files</TabsTrigger>
//                     <TabsTrigger value="design-file">Design File</TabsTrigger>
//                   </TabsList>
//                 </div>

//                 <TabsContent value="design-files" className="p-6">
//                   <FilterBar />
//                   <div className="rounded-lg border">
//                     <div className="flex items-center justify-between p-4 border-b">
//                       <h2 className="text-lg font-medium">Design File Status</h2>
//                       <div className="flex gap-2">
//                         <Button variant="outline" size="icon">
//                           <CheckCircle2 className="h-4 w-4" />
//                         </Button>
//                         <Button variant="ghost" size="icon">
//                           <MoreVertical className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>
//                     <EmptyState />
//                   </div>
//                 </TabsContent>
//                 <TabsContent value="design-file">
//                   {/* Design File content here */}
//                 </TabsContent>
//               </Tabs>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function InsightsPage() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    Design: true, // Design is expanded by default
    "Task Manager": false,
    "DPR tracker": false,
    "Project Tracker": false,
    "GRN Tracker": false,
    "Order / intent": false,
    BOQ: false,
    Schedule: false,
    Planning: false,
  });

  const toggleExpansion = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const sidebarNavItems = [
    {
      title: "Design",
      items: [{ title: "Design Files" }],
    },
    {
      title: "Task Manager",
      items: [{ title: "Task Tracker" }],
    },
    {
      title: "DPR tracker",
      items: [{ title: "DPR" }],
    },
    {
      title: "Project Tracker",
      items: [{ title: "Material Inventory" }],
    },
    {
      title: "GRN Tracker",
      items: [{ title: "Material Inventory" }],
    },
    {
      title: "Order / intent",
      items: [
        { title: "Order Value Bifurcation" },
        { title: "Vendor Payments" },
      ],
    },
    {
      title: "BOQ",
      items: [
        { title: "Budget vs BOQ vs Actual" },
        { title: "BOQ" },
      ],
    },
    {
      title: "Schedule",
      items: [{ title: "Activity Schedule" }],
    },
    {
      title: "Planning",
      items: [{ title: "DPR" }],
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          {sidebarNavItems.map((item) => (
            <div key={item.title} className="mb-2">
              <button
                className={`flex justify-between items-center w-full px-2 py-1.5 text-left rounded-md hover:bg-gray-50 ${
                  expanded[item.title] ? 'bg-gray-50' : ''
                }`}
                onClick={() => toggleExpansion(item.title)}
              >
                <span className={`text-sm ${
                  item.title === "Design" ? 'text-blue-600 font-medium' : 'text-gray-900'
                }`}>
                  {item.title}
                </span>
                {expanded[item.title] ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>
              {expanded[item.title] && (
                <div className="mt-1 ml-4 space-y-1">
                  {item.items.map((subItem) => (
                    <button
                      key={subItem.title}
                      className={`flex items-center w-full px-2 py-1.5 text-sm rounded-md ${
                        item.title === "Design"
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">•</span>
                      {subItem.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            + Create
          </button>
        </div>
      </div>

      {/* Main content area - empty for now */}
      <div className="flex-1 p-8">
        <p>Select an item from the sidebar to view content</p>
      </div>
    </div>
  );
}

export default InsightsPage;