
// // 'use client';

// // import { Suspense, useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { ChevronDown, ChevronUp, MoreVertical, CheckCircle2 } from "lucide-react";
// // import { EmptyState } from "./_components/emptystate";
// // import { FilterBar } from "./_components/filterbar";
// // import { InfoBar } from "./_components/infobar";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { SidebarNav } from "./_components/sidebarnav";


// // export default function InsightsPage() {
// //   const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
// //     Design: false,
// //     "Task Manager": false,
// //     "DPR tracker": false,
// //     "Project Tracker": false,
// //     "GRN Tracker": false,
// //     "Order / intent": false,
// //     BOQ: false,
// //     Schedule: false,
// //     Planning: false,
// //   });

// //   const toggleExpansion = (title: string) => {
// //     setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
// //   };

// //   const sidebarNavItems = [
// //     {
// //       title: "Design",
// //       items: [
// //         { title: "Design Files", content: <div>Design Files Content</div>, path: "/design/files" },
// //       ],
// //     },
// //     {
// //       title: "Task Manager",
// //       items: [
// //         { title: "Task Tracker", content: <div>Task Tracker Content</div>, path: "/task-manager/tracker" },
// //       ],
// //     },
// //     {
// //       title: "DPR tracker",
// //       items: [
// //         { title: "DPR", content: <div>DPR Content</div>, path: "/dpr-tracker" },
// //       ],
// //     },
// //     {
// //       title: "Project Tracker",
// //       items: [
// //         { title: "Material Inventory", content: <div>Material Inventory Content</div>, path: "/project-tracker/material-inventory" },
// //       ],
// //     },
// //     {
// //       title: "GRN Tracker",
// //       items: [
// //         { title: "Material Inventory", content: <div>Material Inventory Content</div>, path: "/grn-tracker/material-inventory" },
// //       ],
// //     },
// //     {
// //       title: "Order / intent",
// //       items: [
// //         { title: "Order Value Bifurcation", content: <div>Order Value Bifurcation Content</div>, path: "/order-intent/order-value" },
// //         { title: "Vendor Payments", content: <div>Vendor Payments Content</div>, path: "/order-intent/vendor-payments" },
// //       ],
// //     },
// //     {
// //       title: "BOQ",
// //       items: [
// //         { title: "Budget vs BOQ vs Actual", content: <div>Budget vs BOQ vs Actual Content</div>, path: "/boq/budget-vs-boq" },
// //         { title: "BOQ", content: <div>BOQ Content</div>, path: "/boq" },
// //       ],
// //     },
// //     {
// //       title: "Schedule",
// //       items: [
// //         { title: "Activity Schedule", content: <div>Activity Schedule Content</div>, path: "/schedule/activity" },
// //       ],
// //     },
// //     {
// //       title: "Planning",
// //       items: [
// //         { title: "DPR", content: <div>DPR Content</div>, path: "/planning/dpr" },
// //       ],
// //     },
// //   ];

// //   return (
// //     <Suspense fallback={<div>Loading...</div>}>
// //     <div className="flex flex-col min-h-screen overflow-hidden">
// //       <div className="overflow-hidden">
// //       <InfoBar />
// //       </div>
// //       <div className="flex flex-1 p-6 border-t border-gray-200 bg-gray-100  rounded">
// //        <div className="border border-gray-300 rounded-lg flex max-auto w-full bg-white">
// //         <div className="w-64 border-r bg-white overflow-hidden">
// //           <div className="p-6">
// //             {/* <div >
// //               {sidebarNavItems.map((item) => (
// //                 <div key={item.title} className="mb-2">
// //                   <div className="flex justify-between items-center">
// //                     <Button
// //                       variant="ghost"
// //                       className="text-left w-full text-sm"  
// //                       onClick={() => toggleExpansion(item.title)}
// //                     >
// //                       <span>{item.title}</span>
// //                     </Button>
// //                     {expanded[item.title] ? (
// //                       <ChevronUp className="h-4 w-4" />
// //                     ) : (
// //                       <ChevronDown className="h-4 w-4" />
// //                     )}
// //                   </div>
// //                   {expanded[item.title] && (
// //                     <div className="pl-6 mt-2">
// //                       {item.items.map((subItem) => (
// //                         <div
// //                           key={subItem.title}
// //                           className="flex items-center text-sm cursor-pointer"
// //                         >
// //                           <span className="mr-2 text-lg">•</span> 
// //                           {subItem.title}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   )}
// //                 </div>
// //               ))}
// //             </div> */}
// //              <div className="w- border-r bg-white overflow-hidden">
// //             <SidebarNav items={sidebarNavItems} className="p-6" />
// //           </div>
            
// //             <div className="mt-4">
// //               <Button
// //                 variant="default"
// //                 size="sm"
// //                 className="w-full bg-red-600 text-white hover:bg-red-600 active:bg-red-600 focus:outline-none"
// //               >
// //                 + Create
// //               </Button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="flex-1 overflow-hidden">
// //           <div className="p-6">
// //             <div className="flex justify-between items-center mb-6 border-b ">
// //               <h1 className="text-2xl font-semibold">Design</h1>
// //               <Button variant="ghost" size="icon">
// //                 <MoreVertical className="h-5 w-5" />
// //               </Button>
// //             </div>

// //             <div className="bg-white rounded-lg border border-gray-200 overflow-y-auto ">
// //               <Tabs defaultValue="design-files" className="w-full">
// //                 <div className=" px-6 mt-4">
// //                   <h2 className="text-lg font-medium">Design
// //                     <span className=" bg-gray-200 text-black-100 p-1 border rounded m-5 ">Design Files</span>
// //                   </h2>
// //                 </div>

// //                 <TabsContent value="design-files" className="p-6">
// //                   <FilterBar />
// //                   <div className="rounded-lg border">
// //                     <div className="flex items-center justify-between p-4 border-b">
// //                       <h2 className="text-lg font-medium">Design File Status</h2>
// //                       <div className="flex gap-2">
// //                         <Button variant="outline" size="icon">
// //                           <CheckCircle2 className="h-4 w-4" />
// //                         </Button>
// //                         <Button variant="ghost" size="icon">
// //                           <MoreVertical className="h-4 w-4" />
// //                         </Button>
// //                       </div>
// //                     </div>
// //                     <EmptyState />
// //                   </div>
// //                 </TabsContent>
// //                 <TabsContent value="design-file">
// //                   {/* Design File content here */}
// //                 </TabsContent>
// //               </Tabs>
// //             </div>
// //           </div>
// //         </div>
// //         </div>
// //       </div>
// //     </div>
// //     </Suspense>
// //   );
// // }



// // // "use client";

// // // import { Suspense, useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { MoreVertical } from "lucide-react";
// // // import { SidebarNav } from "./_components/sidebarnav"; // Import SidebarNav component
// // // import { FilterBar } from "./_components/filterbar";
// // // import { InfoBar } from "./_components/infobar";
// // // import { Tabs, TabsContent } from "@/components/ui/tabs";

// // // const sidebarNavItems = [
// // //   {
// // //     title: "Design",
// // //     href: "/design",
// // //     items: [{ title: "Design Files", href: "/design/files" }],
// // //   },
// // //   {
// // //     title: "Task Manager",
// // //     href: "/task-manager",
// // //     items: [{ title: "Task Tracker", href: "/task-manager/tracker" }],
// // //   },
// // //   {
// // //     title: "DPR tracker",
// // //     href: "/dpr-tracker",
// // //     items: [{ title: "DPR", href: "/dpr-tracker" }],
// // //   },
// // //   {
// // //     title: "Project Tracker",
// // //     href: "/project-tracker",
// // //     items: [{ title: "Material Inventory", href: "/project-tracker/material-inventory" }],
// // //   },
// // //   {
// // //     title: "GRN Tracker",
// // //     href: "/grn-tracker",
// // //     items: [{ title: "Material Inventory", href: "/grn-tracker/material-inventory" }],
// // //   },
// // //   {
// // //     title: "Order / intent",
// // //     href: "/order-intent",
// // //     items: [
// // //       { title: "Order Value Bifurcation", href: "/order-intent/order-value" },
// // //       { title: "Vendor Payments", href: "/order-intent/vendor-payments" },
// // //     ],
// // //   },
// // //   {
// // //     title: "BOQ",
// // //     href: "/boq",
// // //     items: [
// // //       { title: "Budget vs BOQ vs Actual", href: "/boq/budget-vs-boq" },
// // //       { title: "BOQ", href: "/boq" },
// // //     ],
// // //   },
// // //   {
// // //     title: "Schedule",
// // //     href: "/schedule",
// // //     items: [{ title: "Activity Schedule", href: "/schedule/activity" }],
// // //   },
// // //   {
// // //     title: "Planning",
// // //     href: "/planning",
// // //     items: [{ title: "DPR", href: "/planning/dpr" }],
// // //   },
// // // ];

// // // export default function InsightsPage() {
// // //   return (
// // //     <Suspense fallback={<div>Loading...</div>}>
// // //       <div className="flex flex-col min-h-screen overflow-hidden">
// // //         <div className="overflow-hidden">
// // //           <InfoBar />
// // //         </div>
// // //         <div className="flex flex-1 p-6 border-t border-gray-200 bg-gray-100 rounded">
// // //           {/* Sidebar */}
// // //           <div className="w-64 border-r bg-white overflow-hidden">
// // //             <SidebarNav items={sidebarNavItems} className="p-6" />
// // //           </div>

// // //           {/* Main Content */}
// // //           <div className="flex-1 overflow-hidden">
// // //             <div className="p-6">
// // //               <div className="flex justify-between items-center mb-6 border-b">
// // //                 <h1 className="text-2xl font-semibold">Design</h1>
// // //                 <Button variant="ghost" size="icon">
// // //                   <MoreVertical className="h-5 w-5" />
// // //                 </Button>
// // //               </div>

// // //               <div className="bg-white rounded-lg border border-gray-200 overflow-y-auto">
// // //                 <Tabs defaultValue="design-files" className="w-full">
// // //                   <div className=" px-6 mt-4">
// // //                     <h2 className="text-lg font-medium">
// // //                       Design
// // //                       <span className="bg-gray-200 text-black-100 p-1 border rounded m-5">
// // //                         Design Files
// // //                       </span>
// // //                     </h2>
// // //                   </div>

// // //                   <TabsContent value="design-files" className="p-6">
// // //                     <FilterBar />
// // //                     <div className="rounded-lg border">
// // //                       <div className="flex items-center justify-between p-4 border-b">
// // //                         <h2 className="text-lg font-medium">Design File Status</h2>
// // //                       </div>
// // //                     </div>
// // //                   </TabsContent>
// // //                 </Tabs>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </Suspense>
// // //   );
// // // }
// "use client";

// import { Suspense, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { MoreVertical, CheckCircle2 } from "lucide-react";
// import { EmptyState } from "./_components/emptystate";
// import { FilterBar } from "./_components/filterbar";
// import { InfoBar } from "./_components/infobar";
// import { Tabs, TabsContent } from "@/components/ui/tabs";
// import { SidebarNav } from "./_components/sidebarnav";
// import Link from "next/link";
// import TaskTracker from "./_components/tasktracker";

// // Data for sidebar and subitems, now includes paths for subitems
// const sidebarNavItems = [
//   {
//     title: "Design",
//     items: [
//       { title: "Design Files", path: "/design/files", content: <div>Design Files Content</div> },
//     ],
//   },
//   {
//     title: "Task Manager",
//     items: [
//       { title: "Task Tracker", path: "/task-manager/tracker", content: <TaskTracker /> }, // Linking TaskTracker component
//     ],
//   },
//   {
//     title: "DPR tracker",
//     items: [
//       { title: "DPR", path: "/dpr-tracker", content: <div>DPR Content</div> },
//     ],
//   },
//   {
//     title: "Project Tracker",
//     items: [
//       { title: "Material Inventory", path: "/project-tracker/material-inventory", content: <div>Material Inventory Content</div> },
//     ],
//   },
//   {
//     title: "GRN Tracker",
//     items: [
//       { title: "Material Inventory", path: "/grn-tracker/material-inventory", content: <div>Material Inventory Content</div> },
//     ],
//   },
//   {
//     title: "Order / intent",
//     items: [
//       { title: "Order Value Bifurcation", path: "/order-intent/order-value", content: <div>Order Value Bifurcation Content</div> },
//       { title: "Vendor Payments", path: "/order-intent/vendor-payments", content: <div>Vendor Payments Content</div> },
//     ],
//   },
//   {
//     title: "BOQ",
//     items: [
//       { title: "Budget vs BOQ vs Actual", path: "/boq/budget-vs-boq", content: <div>Budget vs BOQ vs Actual Content</div> },
//       { title: "BOQ", path: "/boq", content: <div>BOQ Content</div> },
//     ],
//   },
//   {
//     title: "Schedule",
//     items: [
//       { title: "Activity Schedule", path: "/schedule/activity", content: <div>Activity Schedule Content</div> },
//     ],
//   },
//   {
//     title: "Planning",
//     items: [
//       { title: "DPR", path: "/planning/dpr", content: <div>DPR Content</div> },
//     ],
//   },
// ];

// export default function InsightsPage() {
//   const [activeContent, setActiveContent] = useState<React.ReactNode>(null); // State to store the content of the active subitem
//   const handleSubItemClick = (content: JSX.Element) => {
//     setActiveContent(content); // Set content when a subitem is clicked
//   };
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div className="flex flex-col min-h-screen overflow-hidden">
//         <div className="overflow-hidden">
//           <InfoBar />
//         </div>
//         <div className="flex flex-1 p-6 border-t border-gray-200 bg-gray-100 rounded">
//           {/* Sidebar */}
//           <div className="w-64 border-r bg-white overflow-hidden">
//             <SidebarNav items={sidebarNavItems} onSubItemClick={handleSubItemClick} />
//           </div>
          

//           {/* Main Content */}
//           {/* <div className="flex-1 overflow-hidden">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-6 border-b">
//                 <h1 className="text-2xl font-semibold">Design</h1>
//                 <Button variant="ghost" size="icon">
//                   <MoreVertical className="h-5 w-5" />
//                 </Button>
//               </div> */}

//               {/* <div className="bg-white rounded-lg border border-gray-200 overflow-y-auto">
//                 <Tabs defaultValue="design-files" className="w-full">
//                   <div className="px-6 mt-4">
//                     <h3 className="text-lg font-medium">
//                       Design
//                       <span className="bg-gray-200 text-black-100 p-1 border rounded m-5">Design Files</span>
//                     </h3>
//                   </div>

//                   <TabsContent value="design-files" className="p-6">
//                     <FilterBar />
//                     <div className="rounded-lg border">
//                       <div className="flex items-center justify-between p-4 border-b">
//                         <h2 className="text-lg font-medium">Design File Status</h2>
//                         <div className="flex gap-2">
//                           <Button variant="outline" size="icon">
//                             <CheckCircle2 className="h-4 w-4" />
//                           </Button>
//                           <Button variant="ghost" size="icon">
//                             <MoreVertical className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </div>
                      
//                       <div className="p-4">
//                         {activeContent ? activeContent : <EmptyState />}
//                       </div>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </div> */}
//               <div className="p-4">
//                         {activeContent ? activeContent : <EmptyState />}
//                       </div>
              
//             </div>
            
//           </div>
        
      
//     </Suspense>
//   );
// }



"use client";

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreVertical, CheckCircle2 } from "lucide-react";
import { InfoBar } from "./_components/infobar";
import { SidebarNav } from "./_components/sidebarnav";
import TaskTracker from "./_components/tasktracker"; // Import TaskTracker component
import { EmptyState } from "./_components/emptystate"; // Import EmptyState if no content is selected
import DesignFiles from "./_components/designfiles";
import DprTracker from "./_components/dprtracker";
import MaterialInventory from "./_components/materialinventory";
import GprTracker from "./_components/gprtracker";
import GrnTracker from "./_components/gprtracker";
import OrderIntent from "./_components/orderintent";
import Boq from "./_components/boq";
import Schedule from "./_components/schedule";
import Planning from "./_components/planning";

// Data for sidebar and subitems, now includes paths for subitems
const sidebarNavItems = [
  {
    title: "Design",
    items: [
      { title: "Design Files", path: "/design/files", content: <DesignFiles/> },
    ],
  },
  {
    title: "Task Manager",
    items: [
      { title: "Task Tracker", path: "/task-manager/tracker", content: <TaskTracker /> }, // Linking TaskTracker component
    ],
  },
  {
    title: "DPR tracker",
    items: [
      { title: "DPR", path: "/dpr-tracker", content: <DprTracker/> },
    ],
  },
  {
    title: "Project Tracker",
    items: [
      { title: "Material Inventory", path: "/project-tracker/material-inventory", content: <MaterialInventory/> },
    ],
  },
  {
    title: "GRN Tracker",
    items: [
      { title: "Material Inventory", path: "/grn-tracker/material-inventory", content: <GrnTracker/> },
    ],
  },
  {
    title: "Order / intent",
    items: [
      { title: "Order Value Bifurcation", path: "/order-intent/order-value", content: <OrderIntent/> },
      { title: "Vendor Payments", path: "/order-intent/vendor-payments", content: <div>Vendor Payments Content</div> },
    ],
  },
  {
    title: "BOQ",
    items: [
      { title: "Budget vs BOQ vs Actual", path: "/boq/budget-vs-boq", content: <Boq/> },
      { title: "BOQ", path: "/boq", content: <div>BOQ Content</div> },
    ],
  },
  {
    title: "Schedule",
    items: [
      { title: "Activity Schedule", path: "/schedule/activity", content: <Schedule/> },
    ],
  },
  {
    title: "Planning",
    items: [
      { title: "DPR", path: "/planning/dpr", content: <Planning/> },
    ],
  },
];

export default function InsightsPage() {
  const [activeContent, setActiveContent] = useState<React.ReactNode>(null); // State to store the content of the active subitem

  const handleSubItemClick = (content: JSX.Element) => {
    setActiveContent(content); // Set content when a subitem is clicked
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col min-h-screen overflow-hidden  h-full fixed top-0 w-[1465px]  ">
     
        {/* Fixed InfoBar */}
        <div className="sticky top-0 z-30">
          <InfoBar />
        </div>
        <div className="flex flex-1 p-6 border-t border-gray-200 bg-gray-100 rounded">
          {/* Sidebar */}
          <div className="w-64 border-r bg-white  ">
            <SidebarNav items={sidebarNavItems} onSubItemClick={handleSubItemClick} />
          </div>

          {/* Main Content */}
          <div className="flex-1 ">
            <div className="p-0">
              {/* Only show the active content */}
              <div className="bg-white  border border-gray-200 overflow-y-auto p-3 ">
                {/* Display the active content or EmptyState */}
                {activeContent || <EmptyState />} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
