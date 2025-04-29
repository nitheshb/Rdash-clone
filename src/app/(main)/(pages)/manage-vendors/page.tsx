// 'use client';

// import { Suspense, useState } from "react";
// import { Button } from "@/components/ui/button";

// import { Bell, Settings } from "lucide-react";
// import { Sheet } from "@/components/ui/sheet";
// import { SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
// import AllVendorsTable from "./_components/Allvendors";
// import Tasks from "@/components/icons/mytasks";

// const AllVendorsPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     vendorName: "",
//     primaryUser: "",
//     vendorTags: "",
//     UID: "",
//     inviteStatus: "Not Invited",
//     status: "Active",
//   });

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Vendor submitted:", formData);
//     setIsModalOpen(false);
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
//         {/* Fixed Header */}
//         {/* <header className="bg-white border-b sticky top-0 z-30">
//           <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
//             <h1 className="text-xl font-semibold">All Vendors</h1>
//             <div className="flex items-center gap-4">
//               <Button variant="ghost" size="icon">
//                 <Settings className="h-4 w-4" />
//               </Button>
//               <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2" onClick={handleOpenModal}>
//                 Add New Vendor
//               </Button>
//             </div>
//           </div>
//         </header> */}

//         <header className="bg-white border-b sticky top-0 z-30">
//                   <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
//                     <h1 className="text-xl font-semibold">My Vendors</h1>
//                     <div className="flex items-center gap-4">
//                       <Button variant="ghost" size="icon">
//                         <Tasks selected={false} width={19} height={19} />
//                       </Button>
//                       <Button variant="ghost" size="icon">
//                         <Bell className="h-5 w-5" />
//                       </Button>
//                       <div className="flex items-center gap-2">
//                         <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
//                           N
//                         </div>
//                         <span>Nithesh</span>
//                       </div>
//                     </div>
//                   </div>
//                 </header>

//         {/* Main Content */}
//         <main className="flex-1 py-6">
//           <div className="max-w-[1600px] mx-auto px-6">
//             {/* Table Section */}
//             <AllVendorsTable />
//           </div>
//         </main>

//         {/* Add Vendor Modal */}
//         <Sheet open={isModalOpen}>
//           <SheetContent className="py-0 w-[650px] max-h-[100vh] overflow-y-auto">
//             <SheetHeader>
//               <SheetTitle className="py-4">Create Vendor</SheetTitle>
//             </SheetHeader>
//             <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 py-2">
//               <div className="mb-4">
//                 <label className="block mb-2">Vendor Name *</label>
//                 <input
//                   type="text"
//                   name="vendorName"
//                   value={formData.vendorName}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter Vendor Name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Primary User *</label>
//                 <input
//                   type="text"
//                   name="primaryUser"
//                   value={formData.primaryUser}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter Primary User"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Vendor Tags *</label>
//                 <input
//                   type="text"
//                   name="vendorTags"
//                   value={formData.vendorTags}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter Vendor Tags"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">UID *</label>
//                 <input
//                   type="text"
//                   name="UID"
//                   value={formData.UID}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter UID"
//                   required
//                 />
//               </div>

//               <SheetFooter className="sticky bottom-0 bg-white">
//                 <div className="flex justify-end gap-4 col-span-2 pb-3">
//                   <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-100 rounded-lg">
//                     Cancel
//                   </button>
//                   <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg">
//                     Create Vendor
//                   </button>
//                 </div>
//               </SheetFooter>
//             </form>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </Suspense>
//   );
// };

// export default AllVendorsPage;


// 'use client';

// import { Suspense, useState } from "react";
// import { Button } from "@/components/ui/button";

// import { Bell, Settings } from "lucide-react";
// import { Search } from "lucide-react";
// import { Sheet } from "@/components/ui/sheet";
// import { SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
// // Removed invalid Input import
// import AllVendorsTable from "./_components/Allvendors";

// const AllVendorsPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     vendorName: "",
//     primaryUser: "",
//     vendorTags: "",
//     UID: "",
//     inviteStatus: "Not Invited",
//     status: "Active",
//   });

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => setIsModalOpen(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Vendor submitted:", formData);
//     setIsModalOpen(false);
//   };

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
//         {/* Fixed Header */}
//         <header className="bg-white border-b sticky top-0 z-30">
//           <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
//             <h1 className="text-xl font-semibold">All Vendors</h1>
//             <div className="flex items-center gap-4">
//               <Button variant="ghost" size="icon">
//                 <Settings className="h-4 w-4" />
//               </Button>
//               <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2" onClick={handleOpenModal}>
//                 Add New Vendor
//               </Button>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 py-6">
//           <div className="max-w-[1600px] mx-auto px-6">
//             {/* Search and Filter Section */}
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center gap-2">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="h-9 pl-10 pr-4 border rounded-md w-full"
//                   />
//                 </div>
//                 <select
//                   className="h-9 border rounded-md px-4"
//                   name="vendorTags"
//                   value={formData.vendorTags}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Vendor Tag</option>
//                   <option value="rmc supplier">RMC Supplier</option>
//                   <option value="Electrical Supplier">Electrical Supplier</option>
//                   <option value="Steel Supplier">Steel Supplier</option>
//                 </select>
//                 <select
//                   className="h-9 border rounded-md px-4"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                 >
//                   <option value="">Select Status</option>
//                   <option value="Active">Active</option>
//                   <option value="Onboarded">Onboarded</option>
//                 </select>
//               </div>
//             </div>

//             {/* Vendor Table Section */}
//             <AllVendorsTable />
//           </div>
//         </main>

//         {/* Add Vendor Modal */}
//         <Sheet open={isModalOpen}>
//           <SheetContent className="py-0 w-[650px] max-h-[100vh] overflow-y-auto">
//             <SheetHeader>
//               <SheetTitle className="py-4">Create Vendor</SheetTitle>
//             </SheetHeader>
//             <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 py-2">
//               <div className="mb-4">
//                 <label className="block mb-2">Vendor Name *</label>
//                 <input
//                   type="text"
//                   name="vendorName"
//                   value={formData.vendorName}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter Vendor Name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Primary User *</label>
//                 <input
//                   type="text"
//                   name="primaryUser"
//                   value={formData.primaryUser}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter Primary User"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Vendor Tags *</label>
//                 <input
//                   type="text"
//                   name="vendorTags"
//                   value={formData.vendorTags}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter Vendor Tags"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">UID *</label>
//                 <input
//                   type="text"
//                   name="UID"
//                   value={formData.UID}
//                   onChange={handleChange}
//                   className="w-full p-3 border rounded-md"
//                   placeholder="Enter UID"
//                   required
//                 />
//               </div>

//               <SheetFooter className="sticky bottom-0 bg-white">
//                 <div className="flex justify-end gap-4 col-span-2 pb-3">
//                   <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-100 rounded-lg">
//                     Cancel
//                   </button>
//                   <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg">
//                     Create Vendor
//                   </button>
//                 </div>
//               </SheetFooter>
//             </form>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </Suspense>
//   );
// };

// export default AllVendorsPage;





'use client';
import React from 'react';
import { Bell, User } from 'lucide-react';
import AllVendors from './_components/Allvendors';

const Page = () => {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Header integrated directly in Page.tsx */}
      <div className="h-16 w-full bg-white border-b flex items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">All Vendors</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Bell size={20} className="text-gray-500" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px]">10</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
              N
            </div>
            <span className="font-medium">Nithesh</span>
          </div>
        </div>
      </div>
      
      {/* AllVendors component */}
      <AllVendors />
    </div>
  );
};

export default Page;
