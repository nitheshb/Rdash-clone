// // components/VendorInfo.js

"use client"

import { useRouter } from "next/router";
import { sampleVendors } from "../../_components/Allvendors";
import { Header } from "../header";
import { VendorInfo } from "./vendor-info";
import { useParams } from "next/navigation";

// import React from 'react';

// const VendorInfo = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">
//       {/* Vendor Info Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-gray-800">All Vendors / Hitech Tech</h1>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//           Edit
//         </button>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="flex space-x-6 mb-6">
//         <button className="text-lg text-gray-600 hover:text-gray-800">Vendor Info</button>
//         <button className="text-lg text-gray-600 hover:text-gray-800">Vendor Users</button>
//         <button className="text-lg text-gray-600 hover:text-gray-800">Other Details</button>
//         <button className="text-lg text-gray-600 hover:text-gray-800">Vendor Invoices</button>
//         <button className="text-lg text-gray-600 hover:text-gray-800">Vendor Payments</button>
//       </div>

//       {/* Vendor Details Section */}
//       <div className="space-y-6 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Vendor Details</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <div className="font-medium text-gray-600">Company Registration Name</div>
//               <div className="text-gray-800">Hitech Tech</div>
//             </div>
//             <div className="flex justify-between">
//               <div className="font-medium text-gray-600">Addresses</div>
//               <div className="text-gray-800">ABC, Bangalore, Karnataka, Zip Code: 560102, India</div>
//             </div>
//             <div className="flex justify-between">
//               <div className="font-medium text-gray-600">Base State</div>
//               <div className="text-gray-800">Karnataka</div>
//             </div>
//           </div>
//           <div className="flex justify-end mt-4">
//             <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
//               Edit
//             </button>
//           </div>
//         </div>

//         {/* KYC Details Section */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">KYC Details</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <div className="font-medium text-gray-600">PAN Number</div>
//               <div className="text-gray-800">ACPMF4325S</div>
//             </div>
//             <div className="flex justify-between">
//               <div className="font-medium text-gray-600">PAN Certificate</div>
//               <div className="text-gray-800">-</div>
//             </div>
//           </div>
//           <div className="flex justify-between mt-4">
//             <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
//               Edit
//             </button>
//             <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
//               Request Documents
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorInfo;



// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function ClientInfo() {
//   const router = useRouter();
//   interface KYCDetail {
//     type: string;
//     value: string;
//   }

//   const [client, setClient] = useState<{
//     id: string;
//     name: string;
//     company: string;
//     registrationName: string;
//     address: string;
//     baseState: string;
//     kycDetails: KYCDetail[];
//   }>({
//     id: "default-id",
//     name: "Hitech Tech",
//     company: "RDASH",
//     registrationName: "Hitech Tech",
//     address: "ABC, Bangalore, Karnataka, Zip Code: 560102, India",
//     baseState: "Karnataka",
//     kycDetails: [],
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const queryParams = new URLSearchParams(window.location.search);
//       const id = queryParams.get("id") || "default-id";
//       const name = queryParams.get("name") || "Hitech Tech";
//       const company = queryParams.get("company") || "RDASH";
//       const registrationName = queryParams.get("registrationName") || "Hitech Tech";

//       setClient((prev) => ({
//         ...prev,
//         id,
//         name: decodeURIComponent(name),
//         company: decodeURIComponent(company),
//         registrationName: decodeURIComponent(registrationName),
//       }));
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <header className="flex items-center justify-between p-4 bg-white border-b shadow">
//         <div className="flex items-center">
//           <Link href="/clients" className="text-gray-500 hover:text-gray-700">
//             All Vendors
//           </Link>
//           <span className="mx-2 text-gray-500">/</span>
//           <h1 className="text-red-600 text-xl font-bold">{client.name}</h1>
//         </div>
//         <div className="flex items-center space-x-2">
//           <div className="relative w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center text-xs">10</div>
//           <div className="flex items-center space-x-1">
//             <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm">N</div>
//             <span className="text-sm font-medium">Nithesh</span>
//           </div>
//         </div>
//       </header>

//       <div className="p-3">
//         <div className="flex items-center mb-3 text-sm">
//           {/* <Link href="/clients" className="text-blue-600 hover:underline mr-2">
//             All Clients
//           </Link> */}
//           {/* <span>/</span>
//           <span className="ml-2 font-semibold text-black">{client.name}</span> */}
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-3">
//           <nav className="flex border-b mb-3 text-xs">
//             <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
//               Vendor Info
//             </button>
            
//             <Link href={`/manage-vendors/${client.id}/Vendor-users?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
//               <button className="px-3 py-2 font-medium text-gray-600">
//               Vendor Users
//               </button>
//             </Link>
            
//             <Link href={`/clients/${client.id}/other-details?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
//               <button className="px-3 py-2 font-medium text-gray-600">
//                 Other Details
//               </button>
//             </Link>
            
//             <Link href={`/clients/${client.id}/client-invoices?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
//               <button className="px-3 py-2 font-medium text-gray-600">
//               Vendor Invoices
//               </button>
//             </Link>
            
//             <Link href={`/clients/${client.id}/payments-from-client?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
//               <button className="px-3 py-2 font-medium text-gray-600">
//                  Vendor Payments
//               </button>
//             </Link>
//           </nav>

//           <div className="bg-white border rounded-lg overflow-hidden mb-3 shadow-sm">
//             <div className="flex items-center justify-between p-3 border-b bg-gray-50">
//               <h3 className="text-sm font-semibold text-black">Vendor Details</h3>
//               <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Edit</button>
//             </div>

//             <div className="p-3 text-xs">
//               <div className="mb-3">
//                 <div className="text-gray-500">Company Registration Name</div>
//                 <div className="font-medium text-black">{client.registrationName}</div>
//               </div>

//               <div className="bg-gray-200 p-2 mb-3 font-medium text-black rounded">Addresses</div>

//               <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <div className="text-gray-500">Company Base Address</div>
//                   <div className="font-medium text-black">{client.address}</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-500">Base State</div>
//                   <div className="font-medium text-black">{client.baseState}</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
//             <div className="flex items-center justify-between p-3 border-b bg-gray-50">
//               <h3 className="text-sm font-semibold text-black">KYC Details</h3>
//               <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Add</button>
//             </div>

//             <div className="p-3 text-xs">
//             <div className="bg-gray-200 p-2 mb-3 font-medium text-black rounded">Pan</div>

//               {client.kycDetails && client.kycDetails.length > 0 ? (
//                 <ul>
//                   {client.kycDetails.map((kyc, index) => (
//                     <li key={index} className="mb-2 p-2 border rounded bg-gray-100">
//                       <div className="text-gray-500">{kyc.type}</div>
//                       <div className="font-medium text-black">{kyc.value}</div>
                      
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <div className="text-gray-500">Pan Number</div>
//                   <div className="font-medium text-black">ACPMF432SS</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-500">Pan Certificate</div>
//                   <div className="font-medium text-black">-</div>
//                 </div>
//               </div>
              
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


const Page = () => {
  
  const params = useParams();
  const id = params.id
  const vendors = sampleVendors;
  const currentVendor = vendors.find((vendor) => vendor.id === id ||"1");

  

  console.log("Current Vendor:", currentVendor);
  console.log("Query Params:", id);
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      {/* Header integrated directly in Page.tsx */}
      <Header vendor={currentVendor} />
      {/* AllVendors component */}
      <VendorInfo vendor={currentVendor} />
    </div>
  );
};

export default Page;