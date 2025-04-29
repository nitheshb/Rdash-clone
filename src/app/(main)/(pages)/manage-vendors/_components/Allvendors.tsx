






import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Plus } from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

// Define the vendor data structure
// export interface Vendor {
//   id: number;
//   name: string;
//   code: string;
//   primaryUser: {
//     name: string;
//     email: string;
//     phone?: string;
//   } | null;
//   tags: string[];
//   uid: string;
//   panNumber?: string;
  // inviteStatus: 'Not Invited' | 'Invited';
  // status: 'Active' | 'Onboarded' | 'Inactive';
// }

export interface Vendor {
  id: string;
  name: string;
  code: string;
  primaryUser: {
    name: string;
    email: string;
    phoneNumber?: string;
  };
  tags: string[];
  uid: string;
  inviteStatus: 'Not Invited' | 'Invited';
  status: 'Active' | 'Onboarded' | 'Inactive';
  panNumber?: string;
  address?: {
    company: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  bankDetails?: {
    accountHolder: string;
    bankName: string;
    accountNumber: string;
    ifscCode: string;
  };
}

// Sample data
// export const sampleVendors: Vendor[] = [
//   {
//     id: 1,
//     name: "Hitech Tech",
//     code: "MVDR18882",
//     primaryUser: {
//       name: "-",
//       email: "procurementexecutive@subhabuilders.com"
//     },
//     tags: ["rmc supplier"],
//     uid: "ACPMF4325S",
//     panNumber: "PAN Number",
//     inviteStatus: "Not Invited",
//     status: "Active"
//   },
//   {
//     id: 2,
//     name: "SHIVAM VENDOR",
//     code: "MVDR7321",
//     primaryUser: {
//       name: "Manoj Babu",
//       email: "manoj_babu@subhabuilders.com",
//       phone: "+91-8100671819"
//     },
//     tags: ["rmc supplier", "Electrical Supplier"],
//     uid: "ABCDE1234F",
//     panNumber: "PAN Number",
//     inviteStatus: "Not Invited",
//     status: "Active"
//   },
//   {
//     id: 3,
//     name: "Test",
//     code: "MVDR26678",
//     primaryUser: {
//       name: "-",
//       email: ""
//     },
//     tags: [],
//     uid: "-",
//     inviteStatus: "Not Invited",
//     status: "Onboarded"
//   },
//   {
//     id: 4,
//     name: "Test Vendor",
//     code: "MVDR8845",
//     primaryUser: {
//       name: "-",
//       email: "ashish.kumar@rdash.io"
//     },
//     tags: ["Electrical Supplier"],
//     uid: "-",
//     inviteStatus: "Not Invited",
//     status: "Active"
//   },
//   {
//     id: 5,
//     name: "VENDOR - 01",
//     code: "MVDR26625",
//     primaryUser: {
//       name: "Abinesh Sivaraman",
//       email: "abinesh_sivaraman@subhabuilders.com",
//       phone: "+91-9306621900"
//     },
//     tags: ["Steel Supplier"],
//     uid: "ABCDE1235F",
//     panNumber: "PAN Number",
//     inviteStatus: "Not Invited",
//     status: "Active"
//   }
// ];

export const sampleVendors: Vendor[] = [
  {
    id: '1',
    name: 'Hitech Tech',
    code: 'MVD348852',
    primaryUser: {
      name: "",
      email: 'procurementexecutive@subhabuilders.com',
      phoneNumber:""
    },
    tags: ['rmc supplier'],
    uid: 'ACPMF432SS',
    inviteStatus: 'Not Invited',
    status: 'Active',
    panNumber: 'ACPMF432SS',
    address: {
      company: 'Hitech Tech',
      street: 'ABC, Bangalore',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560102',
      country: 'India'
    },
    bankDetails: {
      accountHolder: 'anish',
      bankName: 'icici bank',
      accountNumber: '111255633663',
      ifscCode: 'ICIC0001905'
    }
  },
  {
    id: '2',
    name: 'SHIVAM VENDOR',
    code: 'MVD348853',
    primaryUser: {
      name: 'Manoj Babu',
      email: 'manoj.babu@example.com'
    },
    tags: ['rmc supplier', 'Electrical Supplier'],
    uid: 'ABCDE1234F',
    inviteStatus: 'Not Invited',
    status: 'Active',
    panNumber: 'ABCDE1234F',
    address: {
      company: 'SHIVAM VENDOR',
      street: 'XYZ Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    },
    bankDetails: {
      accountHolder: 'Manoj Babu',
      bankName: 'hdfc bank',
      accountNumber: '987654321',
      ifscCode: 'HDFC0001234'
    }
  }
];

const AllVendors = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('My Vendors');
  
  // Selected filters
  const [selectedVendorTags, setSelectedVendorTags] = useState<string>("Select");
  const [selectedInviteStatus, setSelectedInviteStatus] = useState<string>("Select status");
  const [selectedStatus, setSelectedStatus] = useState<string>("Select status");
  
  // Search states
  const [vendorSearch, setVendorSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [uidSearch, setUidSearch] = useState("");

  // Filter vendors based on search and filter criteria
  const filteredVendors = sampleVendors.filter(vendor => {
    // Filter by vendor name or code
    const vendorNameMatch = vendor.name.toLowerCase().includes(vendorSearch.toLowerCase()) || 
                           vendor.code.toLowerCase().includes(vendorSearch.toLowerCase());
    
    // Filter by primary user
    const userMatch = !userSearch || 
                     (vendor.primaryUser?.name.toLowerCase().includes(userSearch.toLowerCase()) || 
                      vendor.primaryUser?.email.toLowerCase().includes(userSearch.toLowerCase()));
    
    // Filter by UID
    const uidMatch = !uidSearch || vendor.uid.toLowerCase().includes(uidSearch.toLowerCase());
    
    // Filter by vendor tags
    const tagMatch = selectedVendorTags === "Select" || 
                    vendor.tags.some(tag => tag.toLowerCase() === selectedVendorTags.toLowerCase());
    
    // Filter by invite status
    const inviteStatusMatch = selectedInviteStatus === "Select status" || 
                             vendor.inviteStatus === selectedInviteStatus;
    
    // Filter by status
    const statusMatch = selectedStatus === "Select status" || 
                       vendor.status === selectedStatus;
    
    return vendorNameMatch && userMatch && uidMatch && tagMatch && inviteStatusMatch && statusMatch;
  });

  // Handle adding new vendor
  const handleAddVendor = () => {
    alert("Add New Vendor functionality will be implemented here");
  };

  // Handle vendor action button click
  const handleVendorActionClick = (vendorId: string) => {
    alert(`Action clicked for vendor ${vendorId}`);
  };

  return (<>
    <div className="bg-white">
        <div className="flex border-b">
          <button
            className={`px-6 py-4 font-medium ${activeTab === 'My Vendors' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('My Vendors')}
          >
            My Vendors
          </button>
        </div>
      </div>
    <div className="flex-1 bg-gray-50 flex flex-col h-screen m-4">
      {/* Tabs */}
      
      
      {/* Table */}
      <div className="flex-1 overflow-auto m-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>SI.No</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>Vendor Name & Code</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>Primary User</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>Vendor Tags</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>UID</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>Invite Status</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700">
                <div className="flex items-center">
                  <span>Status</span>
                </div>
              </TableHead>
              <TableHead className="text-left p-4 font-medium text-gray-700"></TableHead>
            </TableRow>
            <TableRow className="border-b">
              <TableHead className="p-2">
                <div className="flex items-center justify-center">
                  <Filter size={16} className="text-gray-400" />
                </div>
              </TableHead>
              <TableHead className="p-2">
                <div className="flex items-center border rounded px-2 py-1 bg-gray-50">
                  <Search size={16} className="text-gray-400 mr-1" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-sm w-full"
                    value={vendorSearch}
                    onChange={(e) => setVendorSearch(e.target.value)}
                  />
                </div>
              </TableHead>
              <TableHead className="p-2">
                <div className="flex items-center border rounded px-2 py-1 bg-gray-50">
                  <Search size={16} className="text-gray-400 mr-1" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-sm w-full"
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                  />
                </div>
              </TableHead>
              <TableHead className="p-2">
                <select
                  className="w-full border rounded px-2 py-1 text-sm bg-gray-50 outline-none"
                  value={selectedVendorTags}
                  onChange={(e) => setSelectedVendorTags(e.target.value)}
                >
                  <option>Select</option>
                  <option>rmc supplier</option>
                  <option>Electrical Supplier</option>
                  <option>Steel Supplier</option>
                </select>
              </TableHead>
              <TableHead className="p-2">
                <div className="flex items-center border rounded px-2 py-1 bg-gray-50">
                  <Search size={16} className="text-gray-400 mr-1" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none text-sm w-full"
                    value={uidSearch}
                    onChange={(e) => setUidSearch(e.target.value)}
                  />
                </div>
              </TableHead>
              <TableHead className="p-2">
                <select
                  className="w-full border rounded px-2 py-1 text-sm bg-gray-50 outline-none"
                  value={selectedInviteStatus}
                  onChange={(e) => setSelectedInviteStatus(e.target.value)}
                >
                  <option>Select status</option>
                  <option>Not Invited</option>
                  <option>Invited</option>
                </select>
              </TableHead>
              <TableHead className="p-2">
                <select
                  className="w-full border rounded px-2 py-1 text-sm bg-gray-50 outline-none"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option>Select status</option>
                  <option>Active</option>
                  <option>Onboarded</option>
                  <option>Inactive</option>
                </select>
              </TableHead>
              <TableHead className="p-2"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVendors.map((vendor) => (
              <TableRow key={vendor.id} className="border-b hover:bg-gray-50">
                <TableCell className="p-4 text-gray-700">{vendor.id}.</TableCell>
                <TableCell className="p-4">
                  <div>
                    <div className="font-medium"><Link href={`/manage-vendors/${vendor.id}/vendor-info`} className="text-gray-500 hover:underline">{vendor.name}</Link></div>
                    <div className="text-gray-500 text-sm">{vendor.code}</div>
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  {vendor.primaryUser?.name !== "-" ? (
                    <div>
                      <div className="flex items-center gap-2">
                        {vendor.primaryUser?.phoneNumber ? (
                          <div className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs">
                            {vendor.primaryUser?.name.split(" ")[0][0]}
                          </div>
                        ) : "-"}
                        <span className="font-medium">{vendor.primaryUser?.name}</span>
                      </div>
                      <div className="text-gray-500 text-sm">{vendor.primaryUser?.email}</div>
                    </div>
                  ) : (
                    <div className="text-gray-500">-</div>
                  )}
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {vendor.tags.map((tag, index) => {
                      let bgClass = "bg-orange-100";
                      if (tag.toLowerCase().includes("electrical")) {
                        bgClass = "bg-blue-100";
                      } else if (tag.toLowerCase().includes("steel")) {
                        bgClass = "bg-green-100";
                      }
                      
                      return (
                        <span key={index} className={`text-xs px-2 py-1 rounded ${bgClass}`}>
                          {tag}
                        </span>
                      );
                    })}
                    {vendor.tags.length === 0 && <span className="text-gray-500">-</span>}
                  </div>
                </TableCell>
                <TableCell className="p-4">
                  {vendor.uid !== "-" ? (
                    <div>
                      <div className="font-medium">{vendor.uid}</div>
                      <div className="text-gray-500 text-xs">{vendor.panNumber}</div>
                    </div>
                  ) : (
                    <div className="text-gray-500">-</div>
                  )}
                </TableCell>
                <TableCell className="p-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {vendor.inviteStatus}
                  </span>
                </TableCell>
                <TableCell className="p-4">
                  <span className={`${vendor.status === 'Active' ? 'text-green-700' : 'text-blue-700'}`}>
                    {vendor.status}
                  </span>
                </TableCell>
                <TableCell className="p-4">
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleVendorActionClick(vendor.id)}
                  >
                    <MoreVertical size={18} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Add new vendor button */}
      <div className="p-4 border-t bg-white">
        <Button 
          onClick={handleAddVendor}
          className="flex items-center text-red-500 font-medium bg-transparent hover:bg-red-50"
        >
          <Plus className="mr-1" size={18} /> Add New Vendor
        </Button>
      </div>
    </div>
    </>
  );
};

export default AllVendors;