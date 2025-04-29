"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientInfo() {
  const router = useRouter();
  interface KYCDetail {
    type: string;
    value: string;
  }

  const [client, setClient] = useState<{
    id: string;
    name: string;
    company: string;
    registrationName: string;
    address: string;
    baseState: string;
    kycDetails: KYCDetail[];
  }>({
    id: "default-id",
    name: "ESP1-VILLA",
    company: "RDASH",
    registrationName: "ESP1-VILLA",
    address: "Subha Ecostone Suryanagar Phase 1, Suryanagar, adjacent to Triu...",
    baseState: "Karnataka",
    kycDetails: [],
  });

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
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="flex items-center justify-between p-4 bg-white border-b shadow">
        <div className="flex items-center">
          <Link href="/clients" className="text-gray-500 hover:text-gray-700">
            All Clients
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <h1 className="text-red-600 text-xl font-bold">{client.name}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center text-xs">10</div>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm">N</div>
            <span className="text-sm font-medium">Nithesh</span>
          </div>
        </div>
      </header>

      <div className="p-3 w-full md:w-1/2">

        <div className="flex items-center mb-3 text-sm">
          {/* <Link href="/clients" className="text-blue-600 hover:underline mr-2">
            All Clients
          </Link> */}
          {/* <span>/</span>
          <span className="ml-2 font-semibold text-black">{client.name}</span> */}
        </div>

        <div className="bg-white rounded-lg shadow-md p-3">
          <nav className="flex border-b mb-3 text-xs">
            <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
              Client Info
            </button>

            <Link href={`/clients/${client.id}/client-users?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Client Users
              </button>
            </Link>

            <Link href={`/clients/${client.id}/other-details?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Other Details
              </button>
            </Link>

            <Link href={`/clients/${client.id}/client-invoices?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Client Invoices
              </button>
            </Link>

            <Link href={`/clients/${client.id}/payments-from-client?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                payments From Client
              </button>
            </Link>
          </nav>

          <div className="bg-white border rounded-lg overflow-hidden mb-3 shadow-sm">
            <div className="flex items-center justify-between p-3 border-b bg-gray-50">
              <h3 className="text-sm font-semibold text-black">Client Details</h3>
              <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Edit</button>
            </div>

            <div className="p-3 text-xs">
              <div className="mb-3">
                <div className="text-gray-500">Company Registration Name</div>
                <div className="font-medium text-black">{client.registrationName}</div>
              </div>

              <div className="bg-gray-200 p-2 mb-3 font-medium text-black rounded">Addresses</div>
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <div className="grid grid-cols-2 text-gray-500 font-medium mb-1">
                    <span>Company Base Address</span>
                    <span>Base State</span>
                  </div>
                  <div className="grid grid-cols-2 text-black font-medium">
                    <span>{client.address}</span>
                    <span>{client.baseState}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-3 border-b bg-gray-50">
              <h3 className="text-sm font-semibold text-black">KYC Details</h3>
              <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">Add</button>
            </div>

            <div className="p-3 text-xs">
              {client.kycDetails && client.kycDetails.length > 0 ? (
                <ul>
                  {client.kycDetails.map((kyc, index) => (
                    <li key={index} className="mb-2 p-2 border rounded bg-gray-100">
                      <div className="text-gray-500">{kyc.type}</div>
                      <div className="font-medium text-black">{kyc.value}</div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No KYC details available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}