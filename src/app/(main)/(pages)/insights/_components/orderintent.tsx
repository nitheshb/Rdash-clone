// // // // "use client";

// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// // // // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // // import { Filter, MoreVertical, Maximize2, Calendar } from "lucide-react";
// // // // import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// // // // import { PieChart, Pie, Cell } from "recharts";

// // // // const orderData = [
// // // //   {
// // // //     name: "total",
// // // //     "Total Order": 3400000,
// // // //     "Order Value pending": 386000,
// // // //     "Order Value shared": 797000,
// // // //   },
// // // // ];

// // // // const invoiceData = [
// // // //   { name: "Final", value: 620100 }
// // // // ];

// // // // const COLORS = ["hsl(var(--chart-2))"];

// // // // export default function OrderIntent() {
// // // //   return (
// // // //     <main className="min-h-screen bg-background p-8">
// // // //       <div className="space-y-4 max-w-[1400px] mx-auto">
// // // //         <div className="flex items-center justify-between">
// // // //           <h1 className="text-2xl font-semibold">Order / intent</h1>
// // // //           <MoreVertical className="h-5 w-5" />
// // // //         </div>

// // // //         {/* Order Value Bifurcation Section */}
// // // //         <Card>
// // // //           <CardHeader className="space-y-4">
// // // //             <div className="flex items-center gap-2">
// // // //               <h2 className="text-xl">Order Value Bifurcation</h2>
// // // //               <span className="bg-muted text-sm px-2 py-1 rounded">Tracker</span>
// // // //               <span className="bg-muted text-sm px-2 py-1 rounded">Bifurcation</span>
// // // //               <span className="bg-muted text-sm px-2 py-1 rounded">Order</span>
// // // //               <MoreVertical className="h-5 w-5 ml-auto" />
// // // //             </div>

// // // //             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Project Name" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Projects</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Vendor Name" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Vendors</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Order Type" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Types</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Order Status" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Statuses</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //             </div>
// // // //           </CardHeader>

// // // //           <CardContent className="grid md:grid-cols-2 gap-6">
// // // //             <Card>
// // // //               <CardHeader className="flex flex-row items-center justify-between">
// // // //                 <CardTitle>Order Value Tracker</CardTitle>
// // // //                 <Maximize2 className="h-4 w-4" />
// // // //               </CardHeader>
// // // //               <CardContent>
// // // //                 <div className="h-[300px]">
// // // //                   <ResponsiveContainer width="100%" height="100%">
// // // //                     <BarChart data={orderData}>
// // // //                       <XAxis dataKey="name" />
// // // //                       <YAxis />
// // // //                       <Bar dataKey="Total Order" fill="hsl(var(--chart-1))" />
// // // //                       <Bar dataKey="Order Value pending" fill="hsl(var(--chart-4))" />
// // // //                       <Bar dataKey="Order Value shared" fill="hsl(var(--chart-2))" />
// // // //                     </BarChart>
// // // //                   </ResponsiveContainer>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card>
// // // //               <CardHeader className="flex flex-row items-center justify-between">
// // // //                 <CardTitle>Category wise Order Value</CardTitle>
// // // //                 <Maximize2 className="h-4 w-4" />
// // // //               </CardHeader>
// // // //               <CardContent className="flex items-center justify-center h-[300px]">
// // // //                 <div className="text-center text-muted-foreground">
// // // //                   <img 
// // // //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // // //                     alt="No results"
// // // //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// // // //                   />
// // // //                   <p>No results!</p>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </CardContent>
// // // //         </Card>

// // // //         {/* Item Type and Invoice Type Section */}
// // // //         <div className="grid md:grid-cols-2 gap-4">
// // // //           <Card>
// // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // //               <CardTitle>Item Type wise Order Value</CardTitle>
// // // //               <Maximize2 className="h-4 w-4" />
// // // //             </CardHeader>
// // // //             <CardContent className="flex items-center justify-center h-[300px]">
// // // //               <div className="text-center text-muted-foreground">
// // // //                 <img 
// // // //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // // //                   alt="No results"
// // // //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// // // //                 />
// // // //                 <p>No results!</p>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>

// // // //           <Card>
// // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // //               <CardTitle>Invoice Type Summary Value</CardTitle>
// // // //               <Maximize2 className="h-4 w-4" />
// // // //             </CardHeader>
// // // //             <CardContent>
// // // //               <div className="h-[300px] flex items-center justify-center">
// // // //                 <ResponsiveContainer width="100%" height="100%">
// // // //                   <PieChart>
// // // //                     <Pie
// // // //                       data={invoiceData}
// // // //                       innerRadius={60}
// // // //                       outerRadius={80}
// // // //                       fill="#8884d8"
// // // //                       paddingAngle={5}
// // // //                       dataKey="value"
// // // //                     >
// // // //                       {invoiceData.map((entry, index) => (
// // // //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // // //                       ))}
// // // //                     </Pie>
// // // //                   </PieChart>
// // // //                 </ResponsiveContainer>
// // // //                 <div className="absolute text-center">
// // // //                   <div className="text-2xl font-bold">620,100</div>
// // // //                   <div className="text-sm text-muted-foreground">TOTAL</div>
// // // //                 </div>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>
// // // //         </div>

// // // //         {/* Vendor Payments Section */}
// // // //         <Card>
// // // //           <CardHeader>
// // // //             <div className="flex items-center gap-2">
// // // //               <h2 className="text-xl">Vendor Payments</h2>
// // // //               <Tabs defaultValue="request" className="ml-4">
// // // //                 <TabsList>
// // // //                   <TabsTrigger value="request">Request</TabsTrigger>
// // // //                   <TabsTrigger value="payments">Payments</TabsTrigger>
// // // //                   <TabsTrigger value="vendor">Vendor</TabsTrigger>
// // // //                 </TabsList>
// // // //               </Tabs>
// // // //               <MoreVertical className="h-5 w-5 ml-auto" />
// // // //             </div>

// // // //             <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Project Name" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Projects</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Vendor Name" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Vendors</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Requested By" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Business Category" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Categories</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // // //                 <Filter className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Status" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Statuses</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // // //                 <Calendar className="h-4 w-4" />
// // // //                 <Select>
// // // //                   <SelectTrigger>
// // // //                     <SelectValue placeholder="Uploaded At" />
// // // //                   </SelectTrigger>
// // // //                   <SelectContent>
// // // //                     <SelectItem value="all">All Dates</SelectItem>
// // // //                   </SelectContent>
// // // //                 </Select>
// // // //               </div>
// // // //             </div>
// // // //           </CardHeader>

// // // //           <CardContent className="grid md:grid-cols-2 gap-6">
// // // //             <Card>
// // // //               <CardHeader className="flex flex-row items-center justify-between">
// // // //                 <CardTitle>Vendor Payment Requests</CardTitle>
// // // //                 <Maximize2 className="h-4 w-4" />
// // // //               </CardHeader>
// // // //               <CardContent className="flex items-center justify-center h-[300px]">
// // // //                 <div className="text-center text-muted-foreground">
// // // //                   <img 
// // // //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // // //                     alt="No results"
// // // //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// // // //                   />
// // // //                   <p>No results!</p>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>

// // // //             <Card>
// // // //               <CardHeader className="flex flex-row items-center justify-between">
// // // //                 <CardTitle>Other Expense Requests</CardTitle>
// // // //                 <Maximize2 className="h-4 w-4" />
// // // //               </CardHeader>
// // // //               <CardContent className="flex items-center justify-center h-[300px]">
// // // //                 <div className="text-center text-muted-foreground">
// // // //                   <img 
// // // //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // // //                     alt="No results"
// // // //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// // // //                   />
// // // //                   <p>No results!</p>
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           </CardContent>
// // // //         </Card>

// // // //         {/* Category Expense and Vendor Invoice Section */}
// // // //         <div className="grid md:grid-cols-2 gap-4">
// // // //           <Card>
// // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // //               <CardTitle>Category wise Expense</CardTitle>
// // // //               <Maximize2 className="h-4 w-4" />
// // // //             </CardHeader>
// // // //             <CardContent className="flex items-center justify-center h-[300px]">
// // // //               <div className="text-center text-muted-foreground">
// // // //                 <img 
// // // //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // // //                   alt="No results"
// // // //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// // // //                 />
// // // //                 <p>No results!</p>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>

// // // //           <Card>
// // // //             <CardHeader className="flex flex-row items-center justify-between">
// // // //               <CardTitle>Vendor Invoice</CardTitle>
// // // //               <Maximize2 className="h-4 w-4" />
// // // //             </CardHeader>
// // // //             <CardContent className="flex items-center justify-center h-[300px]">
// // // //               <div className="text-center text-muted-foreground">
// // // //                 <img 
// // // //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // // //                   alt="No results"
// // // //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// // // //                 />
// // // //                 <p>No results!</p>
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>
// // // //         </div>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // "use client";

// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// // // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // // import { Filter, MoreVertical, Maximize2, Calendar } from "lucide-react";
// // // import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// // // import { PieChart, Pie, Cell } from "recharts";

// // // const orderData = [
// // //   {
// // //     name: "total",
// // //     "Total Order": 3400000,
// // //     "Order Value pending": 386000,
// // //     "Order Value shared": 797000,
// // //   },
// // // ];

// // // const invoiceData = [
// // //   { name: "Final", value: 620100 }
// // // ];

// // // const COLORS = ["hsl(var(--chart-2))"];

// // // export default function OrderIntent() {
// // //   return (
// // //     <main className=" bg-background p-8">
// // //       <div className="space-y-4 max-w-[1400px] mx-auto overflow-auto">
// // //         <div className="flex items-center justify-between">
// // //           <h1 className="text-2xl font-semibold">Order / intent</h1>
// // //           <MoreVertical className="h-5 w-5" />
// // //         </div>

// // //         {/* Order Value Bifurcation Section */}
// // //         <Card>
// // //           <CardHeader className="space-y-4">
// // //             <div className="flex items-center gap-2">
// // //               <h2 className="text-xl">Order Value Bifurcation</h2>
// // //               <span className="bg-muted text-sm px-2 py-1 rounded">Tracker</span>
// // //               <span className="bg-muted text-sm px-2 py-1 rounded">Bifurcation</span>
// // //               <span className="bg-muted text-sm px-2 py-1 rounded">Order</span>
// // //               <MoreVertical className="h-5 w-5 ml-auto" />
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Project Name" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Projects</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Vendor Name" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Vendors</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Order Type" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Types</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Order Status" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Statuses</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //             </div>
// // //           </CardHeader>

// // //           <CardContent className="grid md:grid-cols-2 gap-6">
// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between">
// // //                 <CardTitle>Order Value Tracker</CardTitle>
// // //                 <Maximize2 className="h-4 w-4" />
// // //               </CardHeader>
// // //               <CardContent>
// // //                 <div className="h-[300px]">
// // //                   <ResponsiveContainer width="100%" height="100%">
// // //                     <BarChart data={orderData}>
// // //                       <XAxis dataKey="name" />
// // //                       <YAxis />
// // //                       <Bar dataKey="Total Order" fill="hsl(var(--chart-1))" />
// // //                       <Bar dataKey="Order Value pending" fill="hsl(var(--chart-4))" />
// // //                       <Bar dataKey="Order Value shared" fill="hsl(var(--chart-2))" />
// // //                     </BarChart>
// // //                   </ResponsiveContainer>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>

// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between">
// // //                 <CardTitle>Category wise Order Value</CardTitle>
// // //                 <Maximize2 className="h-4 w-4" />
// // //               </CardHeader>
// // //               <CardContent className="flex items-center justify-center h-[300px]">
// // //                 <div className="text-center text-muted-foreground">
// // //                   <img 
// // //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // //                     alt="No results"
// // //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// // //                   />
// // //                   <p>No results!</p>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </CardContent>
// // //         </Card>

// // //         {/* Item Type and Invoice Type Section */}
// // //         <div className="grid md:grid-cols-2 gap-4">
// // //           <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //               <CardTitle>Item Type wise Order Value</CardTitle>
// // //               <Maximize2 className="h-4 w-4" />
// // //             </CardHeader>
// // //             <CardContent className="flex items-center justify-center h-[300px]">
// // //               <div className="text-center text-muted-foreground">
// // //                 <img 
// // //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // //                   alt="No results"
// // //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// // //                 />
// // //                 <p>No results!</p>
// // //               </div>
// // //             </CardContent>
// // //           </Card>

// // //           <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //               <CardTitle>Invoice Type Summary Value</CardTitle>
// // //               <Maximize2 className="h-4 w-4" />
// // //             </CardHeader>
// // //             <CardContent>
// // //               <div className="h-[300px] flex items-center justify-center">
// // //                 <ResponsiveContainer width="100%" height="100%">
// // //                   <PieChart>
// // //                     <Pie
// // //                       data={invoiceData}
// // //                       innerRadius={60}
// // //                       outerRadius={80}
// // //                       fill="#8884d8"
// // //                       paddingAngle={5}
// // //                       dataKey="value"
// // //                     >
// // //                       {invoiceData.map((entry, index) => (
// // //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// // //                       ))}
// // //                     </Pie>
// // //                   </PieChart>
// // //                 </ResponsiveContainer>
// // //                 <div className="absolute text-center">
// // //                   <div className="text-2xl font-bold">620,100</div>
// // //                   <div className="text-sm text-muted-foreground">TOTAL</div>
// // //                 </div>
// // //               </div>
// // //             </CardContent>
// // //           </Card>
// // //         </div>

// // //         {/* Vendor Payments Section */}
// // //         <Card>
// // //           <CardHeader>
// // //             <div className="flex items-center gap-2">
// // //               <h2 className="text-xl">Vendor Payments</h2>
// // //               <Tabs defaultValue="request" className="ml-4">
// // //                 <TabsList>
// // //                   <TabsTrigger value="request">Request</TabsTrigger>
// // //                   <TabsTrigger value="payments">Payments</TabsTrigger>
// // //                   <TabsTrigger value="vendor">Vendor</TabsTrigger>
// // //                 </TabsList>
// // //               </Tabs>
// // //               <MoreVertical className="h-5 w-5 ml-auto" />
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
// // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Project Name" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Projects</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Vendor Name" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Vendors</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Requested By" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Business Category" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Categories</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // //                 <Filter className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Status" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Statuses</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
// // //                 <Calendar className="h-4 w-4" />
// // //                 <Select>
// // //                   <SelectTrigger>
// // //                     <SelectValue placeholder="Uploaded At" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     <SelectItem value="all">All Dates</SelectItem>
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //             </div>
// // //           </CardHeader>

// // //           <CardContent className="grid md:grid-cols-2 gap-6">
// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between">
// // //                 <CardTitle>Vendor Payment Requests</CardTitle>
// // //                 <Maximize2 className="h-4 w-4" />
// // //               </CardHeader>
// // //               <CardContent className="flex items-center justify-center h-[300px]">
// // //                 <div className="text-center text-muted-foreground">
// // //                   <img 
// // //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // //                     alt="No results"
// // //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// // //                   />
// // //                   <p>No results!</p>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>

// // //             <Card>
// // //               <CardHeader className="flex flex-row items-center justify-between">
// // //                 <CardTitle>Other Expense Requests</CardTitle>
// // //                 <Maximize2 className="h-4 w-4" />
// // //               </CardHeader>
// // //               <CardContent className="flex items-center justify-center h-[300px]">
// // //                 <div className="text-center text-muted-foreground">
// // //                   <img 
// // //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // //                     alt="No results"
// // //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// // //                   />
// // //                   <p>No results!</p>
// // //                 </div>
// // //               </CardContent>
// // //             </Card>
// // //           </CardContent>
// // //         </Card>

// // //         {/* Category Expense and Vendor Invoice Section */}
// // //         <div className="grid md:grid-cols-2 gap-4">
// // //           <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //               <CardTitle>Category wise Expense</CardTitle>
// // //               <Maximize2 className="h-4 w-4" />
// // //             </CardHeader>
// // //             <CardContent className="flex items-center justify-center h-[300px]">
// // //               <div className="text-center text-muted-foreground">
// // //                 <img 
// // //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // //                   alt="No results"
// // //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// // //                 />
// // //                 <p>No results!</p>
// // //               </div>
// // //             </CardContent>
// // //           </Card>

// // //           <Card>
// // //             <CardHeader className="flex flex-row items-center justify-between">
// // //               <CardTitle>Vendor Invoice</CardTitle>
// // //               <Maximize2 className="h-4 w-4" />
// // //             </CardHeader>
// // //             <CardContent className="flex items-center justify-center h-[300px]">
// // //               <div className="text-center text-muted-foreground">
// // //                 <img 
// // //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// // //                   alt="No results"
// // //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// // //                 />
// // //                 <p>No results!</p>
// // //               </div>
// // //             </CardContent>
// // //           </Card>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }



// // "use client";

// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// // import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Filter, MoreVertical, Maximize2, Calendar } from "lucide-react";
// // import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// // import { PieChart, Pie, Cell } from "recharts";

// // const orderData = [
// //   {
// //     name: "total",
// //     "Total Order": 3400000,
// //     "Order Value pending": 386000,
// //     "Order Value shared": 797000,
// //   },
// // ];

// // const invoiceData = [
// //   { name: "Final", value: 620100 }
// // ];

// // const COLORS = ["hsl(var(--chart-2))"];

// // export default function OrderIntent() {
// //   return (
// //     <main className="min-h-screen bg-background p-8">
// //       <div className="space-y-4 max-w-[1400px] mx-auto">
// //         <div className="flex items-center justify-between">
// //           <h1 className="text-2xl font-semibold">Order / intent</h1>
// //           <MoreVertical className="h-5 w-5" />
// //         </div>

// //         {/* Order Value Bifurcation Section */}
// //         <Card>
// //           <CardHeader className="space-y-4">
// //             <div className="flex items-center gap-2">
// //               <h2 className="text-xl">Order Value Bifurcation</h2>
// //               <span className="bg-muted text-sm px-2 py-1 rounded">Tracker</span>
// //               <span className="bg-muted text-sm px-2 py-1 rounded">Bifurcation</span>
// //               <span className="bg-muted text-sm px-2 py-1 rounded">Order</span>
// //               <MoreVertical className="h-5 w-5 ml-auto" />
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //               <div className="flex items-center gap-2 border rounded-lg p-2">
// //                 <Filter className="h-4 w-4" />
// //                 <Select>
// //                   <SelectTrigger>
// //                     <SelectValue placeholder="Project Name" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     <SelectItem value="all">All Projects</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //               </div>
// //               <div className="flex items-center gap-2 border rounded-lg p-2">
// //                 <Filter className="h-4 w-4" />
// //                 <Select>
// //                   <SelectTrigger>
// //                     <SelectValue placeholder="Vendor Name" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     <SelectItem value="all">All Vendors</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //               </div>
// //               <div className="flex items-center gap-2 border rounded-lg p-2">
// //                 <Filter className="h-4 w-4" />
// //                 <Select>
// //                   <SelectTrigger>
// //                     <SelectValue placeholder="Order Type" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     <SelectItem value="all">All Types</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //               </div>
// //               <div className="flex items-center gap-2 border rounded-lg p-2">
// //                 <Filter className="h-4 w-4" />
// //                 <Select>
// //                   <SelectTrigger>
// //                     <SelectValue placeholder="Order Status" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     <SelectItem value="all">All Statuses</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //               </div>
// //             </div>
// //           </CardHeader>

// //           <CardContent className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto"> {/* Added overflow-y-auto and max-height */}
// //             <Card>
// //               <CardHeader className="flex flex-row items-center justify-between">
// //                 <CardTitle>Order Value Tracker</CardTitle>
// //                 <Maximize2 className="h-4 w-4" />
// //               </CardHeader>
// //               <CardContent>
// //                 <div className="h-[300px]">
// //                   <ResponsiveContainer width="100%" height="100%">
// //                     <BarChart data={orderData}>
// //                       <XAxis dataKey="name" />
// //                       <YAxis />
// //                       <Bar dataKey="Total Order" fill="hsl(var(--chart-1))" />
// //                       <Bar dataKey="Order Value pending" fill="hsl(var(--chart-4))" />
// //                       <Bar dataKey="Order Value shared" fill="hsl(var(--chart-2))" />
// //                     </BarChart>
// //                   </ResponsiveContainer>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             <Card>
// //               <CardHeader className="flex flex-row items-center justify-between">
// //                 <CardTitle>Category wise Order Value</CardTitle>
// //                 <Maximize2 className="h-4 w-4" />
// //               </CardHeader>
// //               <CardContent className="flex items-center justify-center h-[300px]">
// //                 <div className="text-center text-muted-foreground">
// //                   <img 
// //                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// //                     alt="No results"
// //                     className="w-24 h-24 mx-auto mb-4 opacity-50"
// //                   />
// //                   <p>No results!</p>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           </CardContent>
// //         </Card>

// //         {/* Item Type and Invoice Type Section */}
// //         <div className="grid md:grid-cols-2 gap-4">
// //           <Card>
// //             <CardHeader className="flex flex-row items-center justify-between">
// //               <CardTitle>Item Type wise Order Value</CardTitle>
// //               <Maximize2 className="h-4 w-4" />
// //             </CardHeader>
// //             <CardContent className="flex items-center justify-center h-[300px]">
// //               <div className="text-center text-muted-foreground">
// //                 <img 
// //                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
// //                   alt="No results"
// //                   className="w-24 h-24 mx-auto mb-4 opacity-50"
// //                 />
// //                 <p>No results!</p>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           <Card>
// //             <CardHeader className="flex flex-row items-center justify-between">
// //               <CardTitle>Invoice Type Summary Value</CardTitle>
// //               <Maximize2 className="h-4 w-4" />
// //             </CardHeader>
// //             <CardContent>
// //               <div className="h-[300px] flex items-center justify-center">
// //                 <ResponsiveContainer width="100%" height="100%">
// //                   <PieChart>
// //                     <Pie
// //                       data={invoiceData}
// //                       innerRadius={60}
// //                       outerRadius={80}
// //                       fill="#8884d8"
// //                       paddingAngle={5}
// //                       dataKey="value"
// //                     >
// //                       {invoiceData.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                       ))}
// //                     </Pie>
// //                   </PieChart>
// //                 </ResponsiveContainer>
// //                 <div className="absolute text-center">
// //                   <div className="text-2xl font-bold">620,100</div>
// //                   <div className="text-sm text-muted-foreground">TOTAL</div>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }



// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Filter, MoreVertical, Maximize2, Calendar } from "lucide-react";
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { PieChart, Pie, Cell } from "recharts";

// const orderData = [
//   {
//     name: "total",
//     "Total Order": 3400000,
//     "Order Value pending": 386000,
//     "Order Value shared": 797000,
//   },
// ];

// const invoiceData = [
//   { name: "Final", value: 620100 }
// ];

// const COLORS = ["hsl(var(--chart-2))"];

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background p-8">
//       <div className="space-y-4 max-w-[1400px] mx-auto">
//         <div className="flex items-center justify-between shrink-0 border-b ">
//           <h1 className="text-xl font-semibold">Order / intent</h1>
//           <MoreVertical className="h-5 w-5" />
//         </div>

//         {/* Order Value Bifurcation Section */}
//         <Card>
//           <CardHeader className="space-y-4">
//             <div className="flex items-center gap-2">
//               <h2 className="text-xl">Order Value Bifurcation</h2>
//               <span className="bg-muted text-sm px-2 py-1 rounded">Tracker</span>
//               <span className="bg-muted text-sm px-2 py-1 rounded">Bifurcation</span>
//               <span className="bg-muted text-sm px-2 py-1 rounded">Order</span>
//               <MoreVertical className="h-5 w-5 ml-auto" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="flex items-center gap-2 border rounded-lg p-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Project Name" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Projects</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Vendor Name" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Vendors</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Order Type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Types</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Order Status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Statuses</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </CardHeader>

//           <CardContent className="grid md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle>Order Value Tracker</CardTitle>
//                 <Maximize2 className="h-4 w-4" />
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[300px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={orderData}>
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Bar dataKey="Total Order" fill="hsl(var(--chart-1))" />
//                       <Bar dataKey="Order Value pending" fill="hsl(var(--chart-4))" />
//                       <Bar dataKey="Order Value shared" fill="hsl(var(--chart-2))" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle>Category wise Order Value</CardTitle>
//                 <Maximize2 className="h-4 w-4" />
//               </CardHeader>
//               <CardContent className="flex items-center justify-center h-[300px]">
//                 <div className="text-center text-muted-foreground">
//                   <img 
//                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
//                     alt="No results"
//                     className="w-24 h-24 mx-auto mb-4 opacity-50"
//                   />
//                   <p>No results!</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </CardContent>
//         </Card>

//         {/* Item Type and Invoice Type Section */}
//         <div className="grid md:grid-cols-2 gap-4">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Item Type wise Order Value</CardTitle>
//               <Maximize2 className="h-4 w-4" />
//             </CardHeader>
//             <CardContent className="flex items-center justify-center h-[300px]">
//               <div className="text-center text-muted-foreground">
//                 <img 
//                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
//                   alt="No results"
//                   className="w-24 h-24 mx-auto mb-4 opacity-50"
//                 />
//                 <p>No results!</p>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Invoice Type Summary Value</CardTitle>
//               <Maximize2 className="h-4 w-4" />
//             </CardHeader>
//             <CardContent>
//               <div className="h-[300px] flex items-center justify-center">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={invoiceData}
//                       innerRadius={60}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       paddingAngle={5}
//                       dataKey="value"
//                     >
//                       {invoiceData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="absolute text-center">
//                   <div className="text-2xl font-bold">620,100</div>
//                   <div className="text-sm text-muted-foreground">TOTAL</div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Vendor Payments Section */}
//         <Card>
//           <CardHeader>
//             <div className="flex items-center gap-2">
//               <h2 className="text-xl">Vendor Payments</h2>
//               <Tabs defaultValue="request" className="ml-4">
//                 <TabsList>
//                   <TabsTrigger value="request">Request</TabsTrigger>
//                   <TabsTrigger value="payments">Payments</TabsTrigger>
//                   <TabsTrigger value="vendor">Vendor</TabsTrigger>
//                 </TabsList>
//               </Tabs>
//               <MoreVertical className="h-5 w-5 ml-auto" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
//               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Project Name" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Projects</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Vendor Name" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Vendors</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Requested By" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Business Category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Categories</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
//                 <Filter className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Statuses</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
//                 <Calendar className="h-4 w-4" />
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Uploaded At" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Dates</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </CardHeader>

//           <CardContent className="grid md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle>Vendor Payment Requests</CardTitle>
//                 <Maximize2 className="h-4 w-4" />
//               </CardHeader>
//               <CardContent className="flex items-center justify-center h-[300px]">
//                 <div className="text-center text-muted-foreground">
//                   <img 
//                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
//                     alt="No results"
//                     className="w-24 h-24 mx-auto mb-4 opacity-50"
//                   />
//                   <p>No results!</p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader className="flex flex-row items-center justify-between">
//                 <CardTitle>Other Expense Requests</CardTitle>
//                 <Maximize2 className="h-4 w-4" />
//               </CardHeader>
//               <CardContent className="flex items-center justify-center h-[300px]">
//                 <div className="text-center text-muted-foreground">
//                   <img 
//                     src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
//                     alt="No results"
//                     className="w-24 h-24 mx-auto mb-4 opacity-50"
//                   />
//                   <p>No results!</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </CardContent>
//         </Card>

//         {/* Category Expense and Vendor Invoice Section */}
//         <div className="grid md:grid-cols-2 gap-4">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Category wise Expense</CardTitle>
//               <Maximize2 className="h-4 w-4" />
//             </CardHeader>
//             <CardContent className="flex items-center justify-center h-[300px]">
//               <div className="text-center text-muted-foreground">
//                 <img 
//                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
//                   alt="No results"
//                   className="w-24 h-24 mx-auto mb-4 opacity-50"
//                 />
//                 <p>No results!</p>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Vendor Invoice</CardTitle>
//               <Maximize2 className="h-4 w-4" />
//             </CardHeader>
//             <CardContent className="flex items-center justify-center h-[300px]">
//               <div className="text-center text-muted-foreground">
//                 <img 
//                   src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
//                   alt="No results"
//                   className="w-24 h-24 mx-auto mb-4 opacity-50"
//                 />
//                 <p>No results!</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </main>
//   );
// }



"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, MoreVertical, Maximize2, Calendar } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";

const orderData = [
  {
    name: "total",
    "Total Order": 34000,
    "Order Value pending": 38600,
    "Order Value shared": 79700,
  },
];

const invoiceData = [
  { name: "Final", value: 620100 }
];

const COLORS = ["hsl(var(--chart-2))"];

export default function OrderIntent() {
  return (
    <main className="min-h-screen bg-background p-2">
      <div className="space-y-4 max-w-[1400px] mx-auto">
        {/* Fixed Header Section */}
        {/* <div className="flex items-center justify-between shrink-0 border-b bg-white text-black p-2 fixed top-20 w-full z-10">
          <h1 className="text-2xl font-semibold text-black">Order / intent</h1>
          <MoreVertical className="h-5 w-5" />
        </div> */}
        <header className="bg-white p-2 flex justify-between items-center border-b shrink-0">
        <h1 className="text-xl font-semibold">Order / intent</h1>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>

        {/* Content Section with Scrollable Area */}
        <div className="mt-16 overflow-y-auto max-h-screen">
          {/* Order Value Bifurcation Section */}
          <Card>
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl">Order Value Bifurcation</h2>
                <span className="bg-muted text-sm px-2 py-1 rounded">Tracker</span>
                <span className="bg-muted text-sm px-2 py-1 rounded">Bifurcation</span>
                <span className="bg-muted text-sm px-2 py-1 rounded">Order</span>
                <MoreVertical className="h-5 w-5 ml-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 border rounded-lg p-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Project Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Projects</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Vendor Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Vendors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Order Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Order Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>

            <CardContent className="grid md:grid-cols-2 gap-4">
              {/* <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Order Value Tracker</CardTitle>
                  <Maximize2 className="h-4 w-4" />
                </CardHeader>
                <CardContent>
                  <div className="h-[512px] w-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={orderData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="Total Order" fill="hsl(var(--chart-1))" />
                        <Bar dataKey="Order Value pending" fill="hsl(var(--chart-4))" />
                        <Bar dataKey="Order Value shared" fill="hsl(var(--chart-2))" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card> */}

<Card>
  <CardHeader className="flex flex-row items-center justify-between">
    <CardTitle>Order Value Tracker</CardTitle>
    <Maximize2 className="h-4 w-4" />
  </CardHeader>
  <CardContent>
    <div className="h-[512px] w-[320px] ml-[5px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={orderData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="Total Order" fill="#6a4cdb" /> {/* Purple */}
          <Bar dataKey="Order Value pending" fill="#f98f91" /> {/* Pink */}
          <Bar dataKey="Order Value shared" fill="#4caf50" /> {/* Green */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  </CardContent>
</Card>


              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Category wise Order Value</CardTitle>
                  <Maximize2 className="h-4 w-4" />
                </CardHeader>
                <CardContent className="flex items-center justify-center h-[300px]">
                  <div className="text-center text-muted-foreground">
                    <img 
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
                      alt="No results"
                      className="w-24 h-24 mx-auto mb-4 opacity-50"
                    />
                    <p>No results!</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Item Type and Invoice Type Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Item Type wise Order Value</CardTitle>
                <Maximize2 className="h-4 w-4" />
              </CardHeader>
              <CardContent className="flex items-center justify-center h-[300px]">
                <div className="text-center text-muted-foreground">
                  <img 
                    src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
                    alt="No results"
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
                  />
                  <p>No results!</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Invoice Type Summary Value</CardTitle>
                <Maximize2 className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={invoiceData}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {invoiceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center">
                    <div className="text-2xl font-bold">620,100</div>
                    <div className="text-sm text-muted-foreground">TOTAL</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vendor Payments Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <h2 className="text-xl">Vendor Payments</h2>
                <Tabs defaultValue="request" className="ml-4">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="payments">Payments</TabsTrigger>
                    <TabsTrigger value="vendor">Vendor</TabsTrigger>
                  </TabsList>
                </Tabs>
                <MoreVertical className="h-5 w-5 ml-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
                <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Project Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Projects</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Vendor Name" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Vendors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Requested By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Business Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
                  <Filter className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2 border rounded-lg p-2 md:col-span-2">
                  <Calendar className="h-4 w-4" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Uploaded At" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Dates</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>

            <CardContent className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Vendor Payment Requests</CardTitle>
                  <Maximize2 className="h-4 w-4" />
                </CardHeader>
                <CardContent className="flex items-center justify-center h-[300px]">
                  <div className="text-center text-muted-foreground">
                    <img 
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
                      alt="No results"
                      className="w-24 h-24 mx-auto mb-4 opacity-50"
                    />
                    <p>No results!</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Other Expense Requests</CardTitle>
                  <Maximize2 className="h-4 w-4" />
                </CardHeader>
                <CardContent className="flex items-center justify-center h-[300px]">
                  <div className="text-center text-muted-foreground">
                    <img 
                      src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
                      alt="No results"
                      className="w-24 h-24 mx-auto mb-4 opacity-50"
                    />
                    <p>No results!</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Category Expense and Vendor Invoice Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Category wise Expense</CardTitle>
                <Maximize2 className="h-4 w-4" />
              </CardHeader>
              <CardContent className="flex items-center justify-center h-[300px]">
                <div className="text-center text-muted-foreground">
                  <img 
                    src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
                    alt="No results"
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
                  />
                  <p>No results!</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Vendor Invoice</CardTitle>
                <Maximize2 className="h-4 w-4" />
              </CardHeader>
              <CardContent className="flex items-center justify-center h-[300px]">
                <div className="text-center text-muted-foreground">
                  <img 
                    src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/sailboat.svg" 
                    alt="No results"
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
                  />
                  <p>No results!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
