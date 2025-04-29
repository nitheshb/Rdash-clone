'use client';
import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Header } from '../header';
import { sampleVendors } from '../../_components/Allvendors';
import { useParams } from 'next/navigation';

type InvoiceTabType = 'invoices' | 'credit-note';

export default function VendorInvoices() {
  const [activeInvoiceTab, setActiveInvoiceTab] = useState<InvoiceTabType>('invoices');
    const params = useParams();
    const id = params.id
    const vendors = sampleVendors;
    const vendor = vendors.find((vendor) => vendor.id === id || "1");

  return (
    <div>
        <Header vendor={vendor} />
      <div className="border-b mb-6">
        <div className="flex">
          <button
            onClick={() => setActiveInvoiceTab('invoices')}
            className={`py-4 px-6 relative ${
              activeInvoiceTab === 'invoices'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Invoices
          </button>
          <button
            onClick={() => setActiveInvoiceTab('credit-note')}
            className={`py-4 px-6 relative ${
              activeInvoiceTab === 'credit-note'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Credit Note
          </button>
        </div>
      </div>

      {activeInvoiceTab === 'invoices' ? (
        <>
          <div className="grid grid-cols-3 gap-4 mb-6 mx-3">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Invoice Uploaded</span>
                </div>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">0</span>
              </div>
              <div className="mt-2 text-lg">₹ 0</div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm text-gray-600">Invoice Approved</span>
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
          </div>

          <div className="bg-white rounded-lg mx-3">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Sl.No</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>Invoice Number</span>
                        <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <select className="px-2 py-1 text-sm border rounded bg-white">
                        <option>Select Option</option>
                      </select>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <select className="px-2 py-1 text-sm border rounded bg-white">
                        <option>Select</option>
                      </select>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <select className="px-2 py-1 text-sm border rounded bg-white">
                        <option>Select</option>
                      </select>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <input type="date" className="px-2 py-1 text-sm border rounded" />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <select className="px-2 py-1 text-sm border rounded bg-white">
                        <option>Select</option>
                      </select>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <select className="px-2 py-1 text-sm border rounded bg-white">
                        <option>Select Option</option>
                      </select>
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                      <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="flex flex-col items-center justify-center py-16 mx-3">
              <FileText className="w-16 h-16 text-gray-200 mb-4" />
              <p className="text-gray-400">No Invoice data to show</p>
            </div>

            <div className="border-t pt-4 mt-4 mx-3">
              <button className="text-red-600 hover:text-red-700 text-sm">
                + Add New Invoice
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg mx-3">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Sl.No</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <select className="px-2 py-1 text-sm border rounded bg-white">
                      <option>Select</option>
                    </select>
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <select className="px-2 py-1 text-sm border rounded bg-white">
                      <option>Select</option>
                    </select>
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <select className="px-2 py-1 text-sm border rounded bg-white">
                      <option>Select Option</option>
                    </select>
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <select className="px-2 py-1 text-sm border rounded bg-white">
                      <option>Select Option</option>
                    </select>
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">
                    <input type="text" placeholder="Search" className="px-2 py-1 text-sm border rounded" />
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center py-16">
            <FileText className="w-16 h-16 text-gray-200 mb-4" />
            <p className="text-gray-400">No Credit Note data to show</p>
          </div>

          <div className="border-t pt-4 mt-4">
            <button className="text-red-600 hover:text-red-700 text-sm">
              + Add New Credit Note
            </button>
          </div>
        </div>
      )}
    </div>
  );
}