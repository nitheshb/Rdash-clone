'use client'
import React from 'react';
import { FileText } from 'lucide-react';
import { useParams } from 'next/navigation';
import { sampleVendors } from '../../_components/Allvendors';
import { Header } from '../header';

export default function VendorPayments() {
  const paymentTabs = [
    'All Requests',
    'Pending Requests',
    'Approved Requests',
    'Payment Due',
    'Payment Entries'
  ];
 const params = useParams();
    const id = params.id
    const vendors = sampleVendors;
    const vendor = vendors.find((vendor) => vendor.id === id || "1");
  return (
    <div className="space-y-6">
        <Header vendor={vendor} />
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm text-gray-600">Payment Requested</span>
            </div>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">0</span>
          </div>
          <div className="mt-2 text-lg">₹ 0</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm text-gray-600">Payment Approved</span>
            </div>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">0</span>
          </div>
          <div className="mt-2 text-lg">₹ 0</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm text-gray-600">Pending Approval</span>
            </div>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">0</span>
          </div>
          <div className="mt-2 text-lg">₹ 0</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm text-gray-600">Payment Due</span>
            </div>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">0</span>
          </div>
          <div className="mt-2 text-lg">₹ 0</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm text-gray-600">Payments Done</span>
            </div>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">0</span>
          </div>
          <div className="mt-2 text-lg">₹ 0</div>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <div className="border-b">
          <div className="flex">
            {paymentTabs.map((tab) => (
              <button
                key={tab}
                className={`py-4 px-6 relative ${
                  tab === 'All Requests'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Sl.No</span>
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Request Date</span>
                    <input type="date" className="px-2 py-1 text-sm border rounded" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Request ID</span>
                    <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                  </div>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <select className="px-2 py-1 text-sm border rounded bg-white">
                    <option>Select Project</option>
                  </select>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <select className="px-2 py-1 text-sm border rounded bg-white">
                    <option>Select Request Type</option>
                  </select>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <select className="px-2 py-1 text-sm border rounded bg-white">
                    <option>Select Requested By</option>
                  </select>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <select className="px-2 py-1 text-sm border rounded bg-white">
                    <option>Select Status</option>
                  </select>
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <input type="text" placeholder="Search Amount" className="px-2 py-1 text-sm border rounded" />
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <input type="text" placeholder="Search Amount" className="px-2 py-1 text-sm border rounded" />
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                  <input type="text" placeholder="Search Amount" className="px-2 py-1 text-sm border rounded" />
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="flex flex-col items-center justify-center py-16">
          <FileText className="w-16 h-16 text-gray-200 mb-4" />
          <p className="text-gray-400">No Payment Request data to show</p>
        </div>

        <div className="border-t pt-4 mt-4">
          <button className="text-red-600 hover:text-red-700 text-sm">
            + Create Payment Request
          </button>
        </div>
      </div>
    </div>
  );
}