"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

      <div className="p-3">
        <div className="flex items-center mb-3 text-sm">
          {/* <Link href="/clients" className="text-blue-600 hover:underline mr-2">
            All Clients
          </Link>
          <span>/</span>
          <span className="ml-2 font-semibold text-black">{client.name}</span> */}
        </div>

        <div className="bg-white rounded-lg shadow-md p-3">
          <nav className="flex border-b mb-3 text-xs">
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
          </nav>

          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
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