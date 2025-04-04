
// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { MoreVertical, Maximize2 } from "lucide-react";
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// // const mockData = {
// //   categories: [
// //     { category: "Civil", amount: 550000 },
// //     { category: "Electrical", amount: 0 },
// //     { category: "Excavation", amount: 0 },
// //     { category: "Plumbing", amount: 0 },
// //   ],
// //   comparison: [
// //     { name: "Total", boqAmount: 550000, orderAmount: 0 },
// //   ],
// //   itemTypes: [
// //     { name: "Type A", value: 100 },
// //   ]
// // };

// // const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// // export default function Boq() {
// //   const [activeTab, setActiveTab] = useState("cost-comparison");

// //   return (
// //     <div className="min-h-screen bg-background w-[1100px]">
// //       <div className="border-b border-gray-200 bg-white px-1 py-1">
// //         <div className="flex items-center justify-between">
// //           <h1 className="text-2xl font-semibold pl-4">BOQ</h1>
// //           <Button variant="ghost" size="icon">
// //             <MoreVertical className="h-5 w-5" />
// //           </Button>
// //         </div>
// //       </div>

// //       <div className="h-[calc(100vh-64px)] overflow-auto p-4">
// //         <div className="mx-auto max-w-7xl space-y-2">
// //           <Card className="border-gray-200">
// //             <Tabs defaultValue="cost-comparison" className="p-6" onValueChange={setActiveTab}>
// //               <div className="flex items-center gap-2 mb-6">
// //                 <TabsList>
// //                   <TabsTrigger value="budget-vs-boq">Budget vs BOQ vs Order</TabsTrigger>
// //                   <TabsTrigger value="cost-comparison">Cost Comparison</TabsTrigger>
// //                 </TabsList>
// //                 <Button variant="ghost" size="icon" className="ml-auto">
// //                   <MoreVertical className="h-5 w-5" />
// //                 </Button>
// //               </div>
// //             </Tabs>

// //             <CardContent className="space-y-6 mt-0">
// //               <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
// //                 <div className="flex gap-2">
// //                   <div className="relative flex-1">
// //                     <Select>
// //                       <SelectTrigger className="w-full pl-9">
// //                         <SelectValue placeholder="Project Name" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="project1">Project 1</SelectItem>
// //                         <SelectItem value="project2">Project 2</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 </div>

// //                 <div className="flex gap-2">
// //                   <div className="relative flex-1">
// //                     <Select>
// //                       <SelectTrigger className="w-full pl-9">
// //                         <SelectValue placeholder="Element Category" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="civil">Civil</SelectItem>
// //                         <SelectItem value="electrical">Electrical</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 </div>

// //                 <div className="flex gap-2">
// //                   <div className="relative flex-1">
// //                     <Select>
// //                       <SelectTrigger className="w-full pl-9">
// //                         <SelectValue placeholder="Element Item Type" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="type1">Type 1</SelectItem>
// //                         <SelectItem value="type2">Type 2</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 </div>

// //                 <div className="flex gap-2">
// //                   <div className="relative flex-1">
// //                     <Select>
// //                       <SelectTrigger className="w-full pl-9">
// //                         <SelectValue placeholder="Business Category" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="cat1">Category 1</SelectItem>
// //                         <SelectItem value="cat2">Category 2</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-2 gap-6 mt-6">
// //                 <Card className="p-6 overflow-auto">
// //                   <div className="flex items-center justify-between mb-6">
// //                     <h3 className="text-lg font-medium">Budget vs BOQ</h3>
// //                     <Button variant="ghost" size="icon">
// //                       <Maximize2 className="h-4 w-4" />
// //                     </Button>
// //                   </div>
// //                   <div className="h-[400px] flex items-center justify-center text-muted-foreground">
// //                     No results!
// //                   </div>
// //                 </Card>

// //                 <Card className="p-6 overflow-auto">
// //                   <div className="flex items-center justify-between mb-6">
// //                     <h3 className="text-lg font-medium">Budget vs Order</h3>
// //                     <Button variant="ghost" size="icon">
// //                       <Maximize2 className="h-4 w-4" />
// //                     </Button>
// //                   </div>
// //                   <div className="h-[400px] flex items-center justify-center text-muted-foreground">
// //                     No results!
// //                   </div>
// //                 </Card>
// //               </div>

// //               <Card className="p-6 mt-6 overflow-auto">
// //                 <div className="flex items-center justify-between mb-6">
// //                   <h3 className="text-lg font-medium">Category wise BOQ Amount</h3>
// //                   <Button variant="ghost" size="icon">
// //                     <Maximize2 className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //                 <div className="h-[400px]">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <BarChart data={mockData.categories}>
// //                       <CartesianGrid strokeDasharray="3 3" />
// //                       <XAxis dataKey="category" />
// //                       <YAxis />
// //                       <Tooltip />
// //                       <Bar dataKey="amount" fill="#82ca9d" />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </Card>

// //               <Card className="p-6 mt-6 overflow-auto">
// //                 <div className="flex items-center justify-between mb-6">
// //                   <h3 className="text-lg font-medium">Item Type wise BOQ Amount</h3>
// //                   <Button variant="ghost" size="icon">
// //                     <Maximize2 className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //                 <div className="h-[400px]">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <PieChart>
// //                       <Pie
// //                         data={mockData.itemTypes}
// //                         cx="50%"
// //                         cy="50%"
// //                         innerRadius={60}
// //                         outerRadius={80}
// //                         fill="#8884d8"
// //                         dataKey="value"
// //                       >
// //                         {mockData.itemTypes.map((entry, index) => (
// //                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                         ))}
// //                       </Pie>
// //                       <Tooltip />
// //                     </PieChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </Card>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>

// //       {/* Footer Section */}
// //       <footer className="bg-white text-center py-4 mt-8 shadow-md">
// //         <p className="text-sm text-gray-600">© 2025 Your Company. All Rights Reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }



"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoreVertical, Maximize2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const mockData = {
  categories: [
    { category: "Civil", amount: 550000 },
    { category: "Electrical", amount: 0 },
    { category: "Excavation", amount: 0 },
    { category: "Plumbing", amount: 0 },
  ],
  comparison: [
    { name: "Total", boqAmount: 550000, orderAmount: 0 },
  ],
  itemTypes: [
    { name: "Type A", value: 100 },
  ]
};

const COLORS = ['#D3D3D3','#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Boq() {
  const [activeTab, setActiveTab] = useState("cost-comparison");

  return (
    <div className="min-h-screen bg-background w-[1100px]">
      <div className="border-b border-gray-200 bg-white px-1 py-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold pl-4">BOQ</h1>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="h-[calc(100vh-64px)] overflow-auto p-4">
        <div className="mx-auto max-w-7xl space-y-2">
          <Card className="border-gray-200">
            <Tabs defaultValue="cost-comparison" className="p-6" onValueChange={setActiveTab}>
              <div className="flex items-center gap-2 mb-6">
                <TabsList>
                  <TabsTrigger value="budget-vs-boq">Budget vs BOQ vs Order</TabsTrigger>
                  <TabsTrigger value="cost-comparison">Cost Comparison</TabsTrigger>
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
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Project Name" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project1">Project 1</SelectItem>
                        <SelectItem value="project2">Project 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Element Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="civil">Civil</SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Element Item Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                        <SelectItem value="type2">Type 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Select>
                      <SelectTrigger className="w-full pl-9">
                        <SelectValue placeholder="Business Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cat1">Category 1</SelectItem>
                        <SelectItem value="cat2">Category 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <Card className="p-6 overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Budget vs BOQ</h3>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    No results!
                  </div>
                </Card>

                <Card className="p-6 overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Budget vs Order</h3>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    No results!
                  </div>
                </Card>
              </div>

              {/* Add new comparison cards below Budget vs Order and Budget vs BOQ */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <Card className="p-6 overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">BOQ vs Order</h3>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2 mb-6">
                    <span className="text-sm text-yellow-500">BOQ Amount</span>
                    <span className="text-sm text-cyan-500">Order Amount</span>
                  </div>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    {/* You can replace this with actual chart */}
                    No results!
                  </div>
                </Card>

                <Card className="p-6 overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Order vs BOQ</h3>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2 mb-6">
                    <span className="text-sm text-indigo-500">Order Value</span>
                    <span className="text-sm text-orange-500">BOQ Value</span>
                  </div>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    {/* You can replace this with actual chart */}
                    No results!
                  </div>
                </Card>
              </div>

             
              <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Status wise BOQ Amount Card */}
                <Card className="p-6 overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Status wise BOQ Amount</h3>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    <span className="text-muted-foreground">No results!</span>
                  </div>
                </Card>

                {/* Category wise BOQ Amount Card */}
                <Card className="p-6 overflow-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Category wise BOQ Amount</h3>
                    <Button variant="ghost" size="icon">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={mockData.categories}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>

              <Card className="p-6 mt-6 overflow-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Item Type wise BOQ Amount</h3>
                  <Button variant="ghost" size="icon">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mockData.itemTypes}
                        cx="50%"
                        cy="50%"
                        innerRadius={120}
                        outerRadius={200}
                        fill="#D3D3D3"
                        dataKey="value"
                      >
                        {mockData.itemTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-xl text-muted-foreground">0</span>
                    <p className="text-sm text-muted-foreground">TOTAL</p>
                  </div>
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



// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { MoreVertical, Maximize2 } from "lucide-react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// const mockData = {
//   categories: [
//     { category: "Civil", amount: 550000 },
//     { category: "Electrical", amount: 0 },
//     { category: "Excavation", amount: 0 },
//     { category: "Plumbing", amount: 0 },
//   ],
//   comparison: [
//     { name: "Total", boqAmount: 550000, orderAmount: 0 },
//   ],
//   itemTypes: [
//     { name: "Type A", value: 100 },
//   ]
// };

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// export default function Boq() {
//   const [activeTab, setActiveTab] = useState("cost-comparison");

//   return (
//     <div className="min-h-screen bg-background w-[1100px]">
//       <div className="border-b border-gray-200 bg-white px-1 py-1">
//         <div className="flex items-center justify-between">
//           <h1 className="text-2xl font-semibold pl-4">BOQ</h1>
//           <Button variant="ghost" size="icon">
//             <MoreVertical className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       <div className="h-[calc(100vh-64px)] overflow-auto p-4">
//         <div className="mx-auto max-w-7xl space-y-2">
//           <Card className="border-gray-200">
//             <Tabs defaultValue="cost-comparison" className="p-6" onValueChange={setActiveTab}>
//               <div className="flex items-center gap-2 mb-6">
//                 <TabsList>
//                   <TabsTrigger value="budget-vs-boq">Budget vs BOQ vs Order</TabsTrigger>
//                   <TabsTrigger value="cost-comparison">Cost Comparison</TabsTrigger>
//                 </TabsList>
//                 <Button variant="ghost" size="icon" className="ml-auto">
//                   <MoreVertical className="h-5 w-5" />
//                 </Button>
//               </div>
//             </Tabs>

//             <CardContent className="space-y-6 mt-0">
//               <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
//                 <div className="flex gap-2">
//                   <div className="relative flex-1">
//                     <Select>
//                       <SelectTrigger className="w-full pl-9">
//                         <SelectValue placeholder="Project Name" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="project1">Project 1</SelectItem>
//                         <SelectItem value="project2">Project 2</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <div className="relative flex-1">
//                     <Select>
//                       <SelectTrigger className="w-full pl-9">
//                         <SelectValue placeholder="Element Category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="civil">Civil</SelectItem>
//                         <SelectItem value="electrical">Electrical</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <div className="relative flex-1">
//                     <Select>
//                       <SelectTrigger className="w-full pl-9">
//                         <SelectValue placeholder="Element Item Type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="type1">Type 1</SelectItem>
//                         <SelectItem value="type2">Type 2</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <div className="relative flex-1">
//                     <Select>
//                       <SelectTrigger className="w-full pl-9">
//                         <SelectValue placeholder="Business Category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="cat1">Category 1</SelectItem>
//                         <SelectItem value="cat2">Category 2</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-6 mt-6">
//                 {/* Status wise BOQ Amount Card */}
//                 <Card className="p-6 overflow-auto">
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-lg font-medium">Status wise BOQ Amount</h3>
//                     <Button variant="ghost" size="icon">
//                       <Maximize2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                   <div className="h-[400px] flex items-center justify-center text-muted-foreground">
//                     <span className="text-muted-foreground">No results!</span>
//                   </div>
//                 </Card>

//                 {/* Category wise BOQ Amount Card */}
//                 <Card className="p-6 overflow-auto">
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="text-lg font-medium">Category wise BOQ Amount</h3>
//                     <Button variant="ghost" size="icon">
//                       <Maximize2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                   <div className="h-[400px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={mockData.categories}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="category" />
//                         <YAxis />
//                         <Tooltip />
//                         <Bar dataKey="amount" fill="#82ca9d" />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </Card>
//               </div>

//               <Card className="p-6 mt-6 overflow-auto">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-lg font-medium">Item Type wise BOQ Amount</h3>
//                   <Button variant="ghost" size="icon">
//                     <Maximize2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 <div className="h-[400px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={mockData.itemTypes}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={60}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         dataKey="value"
//                       >
//                         {mockData.itemTypes.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </Card>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-white text-center py-4 mt-8 shadow-md">
//         <p className="text-sm text-gray-600">© 2025 Your Company. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }
