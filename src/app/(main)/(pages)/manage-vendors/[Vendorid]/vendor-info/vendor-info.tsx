"use client"

import { useRouter } from "next/router";
import { Vendor } from "../../_components/Allvendors";


interface VendorInfoProps {
  vendor?: Vendor;
}

export function VendorInfo({ vendor }: VendorInfoProps) {
    
  return (
    <div className="space-y-6 p-3">
      <div className="rounded-lg w-2/3">

        <div className="bg-white border rounded-lg overflow-hidden mb-3 shadow-sm">
          <div className="flex items-center justify-between p-3 border-b bg-gray-50">
            <h3 className="text-sm font-semibold text-black">Vendor Details</h3>
            <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Edit</button>
          </div>

          <div className="text-xs">
            <div className="mb-3 p-3">
              <div className="text-gray-500">Company Registration Name</div>
              <div className="font-medium text-black">{vendor?.name}</div>
            </div>

            <div className="bg-gray-200 p-2 mb-3 font-medium text-black">Addresses</div>

            <div className="grid grid-cols-2 gap-2 p-3">
              <div>
                <div className="text-gray-500">Company Base Address</div>
                <div className="font-medium text-black">{vendor?.address?.street}</div>
              </div>
              <div>
                <div className="text-gray-500">Base State</div>
                <div className="font-medium text-black">{vendor?.address?.state}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden mb-3 shadow-sm">
          <div className="flex items-center justify-between p-3 border-b bg-gray-50">
            <h3 className="text-sm font-semibold text-black">KYC Details</h3>
            <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Edit</button>
          </div>

          <div className="grid grid-cols-2 gap-2 p-3">
              <div>
                <div className="text-gray-500">PAN Number</div>
                <div className="font-medium text-black">{vendor?.panNumber}</div>
              </div>
              <div>
                <div className="text-gray-500">PAN Certificate</div>
                <div className="font-medium text-black">-</div>
              </div>
            </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-gray-600">
            Vendor can also add/update KYC documents. Request vendor to submit the documents.
            <button className=" ml-3 px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Request Documents</button>
          </p>
        </div>
      </div>
    </div>
  );
}