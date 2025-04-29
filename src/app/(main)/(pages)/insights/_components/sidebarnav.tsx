

// // // // "use client";

// // // // import { useState } from "react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

// // // // interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
// // // //   items: {
// // // //     title: string;
// // // //     items?: { title: string }[];
// // // //   }[];
// // // // }

// // // // export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
// // // //   const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

// // // //   const toggleExpansion = (title: string) => {
// // // //     setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
// // // //   };

// // // //   return (
// // // //     <nav className="flex flex-col gap-2" {...props}>
// // // //       {items.map((item) => {
// // // //         const isExpanded = expandedItems[item.title];
// // // //         return (
// // // //           <div key={item.title}>
// // // //             <Button
// // // //               variant="ghost"
// // // //               className="w-full justify-between font-normal hover:bg-gray-100"
// // // //               onClick={() => toggleExpansion(item.title)}
// // // //             >
// // // //               <span>{item.title}</span>
// // // //               {item.items && (
// // // //                 <>
// // // //                   {isExpanded ? (
// // // //                     <ChevronDown className="h-4 w-4" />
// // // //                   ) : (
// // // //                     <ChevronRight className="h-4 w-4" />
// // // //                   )}
// // // //                 </>
// // // //               )}
// // // //             </Button>
// // // //             {isExpanded && item.items && (
// // // //               <div className="ml-4 mt-2 flex flex-col gap-2">
// // // //                 {item.items.map((subItem) => (
// // // //                   <Button
// // // //                     key={subItem.title}
// // // //                     variant="ghost"
// // // //                     className="justify-start font-normal hover:bg-gray-100"
// // // //                   >
// // // //                     {subItem.title}
// // // //                   </Button>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         );
// // // //       })}
// // // //       <Button className="mt-4 w-full" variant="outline">
// // // //         <PlusCircle className="mr-2 h-4 w-4" />
// // // //         Create
// // // //       </Button>
// // // //     </nav>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState } from "react";
// // // import { Button } from "@/components/ui/button";
// // // import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

// // // interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
// // //   items: {
// // //     title: string;
// // //     items?: { title: string }[];
// // //   }[];
// // // }

// // // export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
// // //   const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

// // //   const toggleExpansion = (title: string) => {
// // //     setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
// // //   };

// // //   return (
// // //     <nav className="flex flex-col gap-2" {...props}>
// // //       {items.map((item) => {
// // //         const isExpanded = expandedItems[item.title];
// // //         const isActive = isExpanded; // Active when expanded

// // //         return (
// // //           <div key={item.title} >
// // //             <Button
// // //               variant="ghost"
// // //               className={`w-[210px] justify-between font-normal ${isActive ? "bg-gray-200" : ""}`}
// // //               onClick={() => toggleExpansion(item.title)}
// // //             >
// // //               <span>{item.title}</span>
// // //               {item.items && (
// // //                 <>
// // //                   {isExpanded ? (
// // //                     <ChevronDown className="h-4 w-4" />
// // //                   ) : (
// // //                     <ChevronRight className="h-4 w-4" />
// // //                   )}
// // //                 </>
// // //               )}
// // //             </Button>
// // //             {isExpanded && item.items && (
// // //               <div className="ml-4 mt-2 flex flex-col gap-2 w-[210px]">
// // //                 {item.items.map((subItem) => (
// // //                   <Button
// // //                     key={subItem.title}
// // //                     variant="ghost"
// // //                     className={`justify-start font-normal ${isActive ? "bg-gray-200" : ""}`}
// // //                   >
// // //                     • {subItem.title}
// // //                   </Button>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </div>
// // //         );
// // //       })}
// // //       <Button className="mt-4 w-full" variant="outline">
// // //         <PlusCircle className="mr-2 h-4 w-4" />
// // //         Create
// // //       </Button>
// // //     </nav>
// // //   );
// // // }



// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

// // interface SidebarNavProps {
// //   items: {
// //     title: string;
// //     items?: { title: string; content: string }[]; // Add content to each subitem
// //   }[];
// //   onSubItemClick: (content: string) => void; // Callback when subitem is clicked
// // }

// // export function SidebarNav({ items, onSubItemClick }: SidebarNavProps) {
// //   const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

// //   const toggleExpansion = (title: string) => {
// //     setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
// //   };

// //   return (
// //     <nav className="flex flex-col gap-2">
// //       {items.map((item) => {
// //         const isExpanded = expandedItems[item.title];
// //         return (
// //           <div key={item.title}>
// //             <Button
// //               variant="ghost"
// //               className={`w-full justify-between font-normal ${isExpanded ? "bg-gray-200" : ""}`}
// //               onClick={() => toggleExpansion(item.title)}
// //             >
// //               <span>{item.title}</span>
// //               {item.items && (
// //                 <>
// //                   {isExpanded ? (
// //                     <ChevronDown className="h-4 w-4" />
// //                   ) : (
// //                     <ChevronRight className="h-4 w-4" />
// //                   )}
// //                 </>
// //               )}
// //             </Button>
            
// //             {/* Subitems */}
// //             {isExpanded && item.items && (
// //               <div className="ml-4 mt-2 flex flex-col gap-2">
// //                 {item.items.map((subItem) => (
// //                   <Button
// //                     key={subItem.title}
// //                     variant="ghost"
// //                     className="justify-start font-normal bg-gray-300"
// //                     onClick={() => onSubItemClick(subItem.content)} // Call onSubItemClick when clicked
// //                   >
// //                     • {subItem.title}
// //                   </Button>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         );
// //       })}
// //       <Button className="mt-4 w-full bg-red-600 text-white hover:bg-red-600 active:bg-red-600">
// //         <PlusCircle className="mr-2 h-4 w-4" />
// //         Create
// //       </Button>
// //     </nav>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";
// import Link from "next/link";

// interface SidebarNavProps {
//   items: {
//     title: string;
//     items?: { title: string; content: JSX.Element; path: string }[]; // Added content and path for each subitem
//   }[];
//   onSubItemClick: (content: JSX.Element) => void; // Callback when subitem is clicked
// }

// export function SidebarNav({ items, onSubItemClick }: SidebarNavProps) {
//   const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

//   const toggleExpansion = (title: string) => {
//     setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
//   };

//   return (
//     <nav className="flex flex-col gap-2">
//       {items.map((item) => {
//         const isExpanded = expandedItems[item.title];
//         return (
//           <div key={item.title}>
//             <Button
//               variant="ghost"
//               className={`w-full justify-between font-normal ${isExpanded ? "bg-gray-200" : ""}`}
//               onClick={() => toggleExpansion(item.title)}
//             >
//               <span>{item.title}</span>
//               {item.items && (
//                 <>
//                   {isExpanded ? (
//                     <ChevronDown className="h-4 w-4" />
//                   ) : (
//                     <ChevronRight className="h-4 w-4" />
//                   )}
//                 </>
//               )}
//             </Button>

//             {/* Subitems */}
//             {isExpanded && item.items && (
//               <div className="ml-4 mt-2 flex flex-col gap-2">
//                 {item.items.map((subItem) => (
//                   <Button
//                     key={subItem.title}
//                     variant="ghost"
//                     className="justify-start font-normal bg-gray-300"
//                     onClick={() => onSubItemClick(subItem.content)} // Call onSubItemClick when clicked
//                   >
//                     • {subItem.title}
//                   </Button>
//                 ))}
//               </div>
//             )}
//           </div>
//         );
//       })}
//       <Button className="mt-4 w-full bg-red-600 text-white hover:bg-red-600 active:bg-red-600">
//         <PlusCircle className="mr-2 h-4 w-4" />
//         Create
//       </Button>
//     </nav>
//   );
// }



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

interface SidebarNavProps {
  items: {
    title: string;
    items?: { title: string; content: JSX.Element }[]; // Ensure content is passed
  }[];
  onSubItemClick: (content: JSX.Element) => void; // Callback when subitem is clicked
}

export function SidebarNav({ items, onSubItemClick }: SidebarNavProps) {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpansion = (title: string) => {
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <nav className="flex flex-col gap-2 p-4">
      {items.map((item) => {
        const isExpanded = expandedItems[item.title];
        return (
          <div key={item.title}>
            <Button
              variant="ghost"
              className={`w-full justify-between font-normal ${isExpanded ? "bg-gray-200" : ""}`}
              onClick={() => toggleExpansion(item.title)}
            >
              <span>{item.title}</span>
              {item.items && (
                <>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </>
              )}
            </Button>

            {/* Subitems */}
            {isExpanded && item.items && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {item.items.map((subItem) => (
                  <Button
                    key={subItem.title}
                    variant="ghost"
                    className="justify-start font-normal bg-gray-300"
                    onClick={() => onSubItemClick(subItem.content)} // Call onSubItemClick when clicked
                  >
                    • {subItem.title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <Button className="mt-4 w-full bg-red-600 text-white hover:bg-red-600 active:bg-red-600">
        Create
      </Button>
    </nav>
  );
}
