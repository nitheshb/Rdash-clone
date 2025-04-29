// "use client"

// import Link from "next/link";
// import { Vendor } from "../_components/Allvendors";
// import { Bell } from "lucide-react";

// interface VendorInfoProps {
//     vendor?: Vendor;
// }

// export function Header({ vendor }: VendorInfoProps) {
//     return (
//         <div className="flex flex-col w-full overflow-hidden">
//       {/* Header integrated directly in Page.tsx */}
//       <div className="h-16 w-full bg-white border-b flex items-center justify-between px-4">
//         <div className="flex items-center">
//           <h1 className="text-xl font-bold">All Vendors</h1>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="relative cursor-pointer">
//             <Bell size={20} className="text-gray-500" />
//             <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
//               <span className="text-white text-[10px]">10</span>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 cursor-pointer">
//             <div className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
//               N
//             </div>
//             <span className="font-medium">Nithesh</span>
//           </div>
//         </div>
//       </div>
//         <nav className="flex border-b mb-3 text-xs">
//             <Link href={`/manage-vendors/${vendor?.id}/vendor-users?id=${vendor?.id}`}>
//             <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
//                 Vendor Info
//             </button>
//             </Link>

//             <Link href={`/manage-vendors/${vendor?.id}/vendor-users?id=${vendor?.id}`}>
//                 <button className="px-3 py-2 font-medium text-gray-600">
//                     Vendor Users
//                 </button>
//             </Link>

//             <Link href={`/clients/${vendor?.id}/other-details?id=${vendor?.id}`}>
//                 <button className="px-3 py-2 font-medium text-gray-600">
//                     Other Details
//                 </button>
//             </Link>

//             <Link href={`/clients/${vendor?.id}/vendor-invoices?id=${vendor?.id}`}>
//                 <button className="px-3 py-2 font-medium text-gray-600">
//                     Client Invoices
//                 </button>
//             </Link>

//             <Link href={`/clients/${vendor?.id}/payments-from-vendor?id=${vendor?.id}`}>
//                 <button className="px-3 py-2 font-medium text-gray-600">
//                     payments From Client
//                 </button>
//             </Link>
//         </nav>
//         </div>
//     )
// }


'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Vendor } from '../_components/Allvendors';
import { Bell } from 'lucide-react';

interface VendorInfoProps {
  vendor?: Vendor;
}

export function Header({ vendor }: VendorInfoProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Vendor Info',
      href: `/manage-vendors/${vendor?.id}/vendor-info`,
    },
    {
      label: 'Vendor Users',
      href: `/manage-vendors/${vendor?.id}/vendor-users`,
    },
    {
      label: 'Other Details',
      href: `/manage-vendors/${vendor?.id}/other-details`,
    },
    {
      label: 'Vendor Invoices',
      href: `/manage-vendors/${vendor?.id}/vendor-invoices`,
    },
    {
      label: 'Vendor Payments',
      href: `/manage-vendors/${vendor?.id}/vendor-payments`,
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
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

      <nav className="flex border-b mb-3 text-xs">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const baseClass = 'px-3 py-2 font-medium';
          const activeClass = 'border-b-2 border-red-500 text-red-500';
          const inactiveClass = 'text-gray-600';

          return (
            <Link key={item.label} href={item.href}>
              <button className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}>
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
