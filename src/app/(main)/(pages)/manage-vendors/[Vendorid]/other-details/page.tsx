
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { sampleVendors } from "../../_components/Allvendors";
import { Header } from "../header";

export default function OtherDetails() {
  const router = useRouter();

  const [client, setClient] = useState<{
    id: string;
    name: string;
    company: string;
    registrationName: string;
  }>({
    id: "default-id",
    name: "ESP1-VILLA",
    company: "RDASH",
    registrationName: "ESP1-VILLA",
  });

  const params = useParams();
  const id = params.id
  const vendors = sampleVendors;
  const vendor = vendors.find((vendor) => vendor.id === id || "1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get("id") || "default-id";
      const name = queryParams.get("name") || "ESP1-VILLA";
      const company = queryParams.get("company") || "RDASH";
      const registrationName = queryParams.get("registrationName") || "ESP1-VILLA";

      setClient((prev) => ({
        ...prev,
        id,
        name: decodeURIComponent(name),
        company: decodeURIComponent(company),
        registrationName: decodeURIComponent(registrationName),
      }));
    }
  }, []);

  return (
    <div className="">
      <Header vendor={vendor} />
      {/* <header className="flex items-center justify-between p-2 bg-white border-b shadow-md">
        <div className="text-red-600 text-lg font-bold">{client.company}</div>
        <div className="flex items-center">
          <div className="relative mr-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">10</div>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm">N</div>
            <span className="ml-1 text-sm font-medium">Nithesh</span>
          </div>
        </div>
      </header> */}




      {/* <div className="flex items-center mb-3 text-sm">
          <Link href="/clients" className="text-blue-600 hover:underline mr-2">
            All Clients
          </Link>
          <span>/</span>
          <span className="ml-2 font-semibold text-black">{client.name}</span>
        </div> */}

      {/* <nav className="flex border-b mb-3 text-xs">
            <Link href={`/clients/${client.id}/client-info?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Client Info
              </button>
            </Link>
            
            <Link href={`/clients/${client.id}/client-users?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Client Users
              </button>
            </Link>
            
            <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
              Other Details
            </button>
            
            <Link href={`/clients/${client.id}/client-invoices?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Client Invoices
              </button>
            </Link>
            
            <Link href={`/clients/${client.id}/payments-from-client?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Payments From Client
              </button>
            </Link>
          </nav> */}

      <div className="space-y-6 p-3">
        <div className="rounded-lg w-2/3">

          <div className="bg-white border rounded-lg overflow-hidden mb-3 shadow-sm">
            <div className="flex items-center justify-between p-3 border-b bg-gray-50">
              <h3 className="text-sm font-semibold text-black">Vendor Tags</h3>
              <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Edit</button>
            </div>

            {/* <div className="grid grid-cols-2 gap-2 p-3">
              <div>
                <div className="text-gray-500">PAN Number</div>
                <div className="font-medium text-black">{vendor?.panNumber}</div>
              </div>
              <div>
                <div className="text-gray-500">PAN Certificate</div>
                <div className="font-medium text-black">-</div>
              </div>
            </div> */}

            <div className="flex gap-2 p-2">
              {vendor?.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden mb-3 shadow-sm">
            <div className="flex items-center justify-between p-3 border-b bg-gray-50">
              <h3 className="text-sm font-semibold text-black">Bank Details</h3>
              <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Edit</button>
            </div>
            <div className="bg-gray-200 p-2 mb-3 font-medium text-black">Primary Bank Account</div>

            <div className="text-xs">



              <div className="grid grid-cols-3 gap-2 p-3">
                <div>
                  <div className="text-gray-500">Account Holder Name</div>
                  <div className="font-medium text-black">{vendor?.bankDetails?.accountHolder}</div>
                </div>
                <div>
                  <div className="text-gray-500">Bank Name</div>
                  <div className="font-medium text-black">{vendor?.bankDetails?.bankName}</div>
                </div>
                <div>
                  <div className="text-gray-500">Account Number</div>
                  <div className="text-gray-900">{vendor?.bankDetails?.accountNumber}</div>
                </div>
                <div>
                  <div className="text-gray-500">IFSC Code</div>
                  <div className="font-medium text-black">{vendor?.bankDetails?.ifscCode}</div>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Cancelled Cheque</label>
                  <div className="text-gray-900">-</div>
                </div>
              </div>
            </div>
          </div>

          <div className=" border rounded-lg overflow-hidden shadow-sm">
            <div className="p-3">
              <h3 className="text-sm font-semibold text-black mb-4">Documents and attachments</h3>

              <div className="mt-2">
                <button className="text-xs text-red-500 hover:text-red-600 flex items-center">
                  <span className="mr-1">+</span> Add New Document
                </button>
              </div>

              {/* Empty state or document list would go here */}
              <div className="py-6 text-center text-gray-500 text-xs">
                {/* You could add an empty state message here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}