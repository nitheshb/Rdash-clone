"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientUsers() {
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
     
        </div>

        <div className="bg-white rounded-lg shadow-md p-3">
          <nav className="flex border-b mb-3 text-xs">
            <Link href={`/clients/${client.id}/client-info?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
              <button className="px-3 py-2 font-medium text-gray-600">
                Client Info
              </button>
            </Link>
            
            <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
              Client Users
            </button>
            
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
                Payments From Client
              </button>
            </Link>
          </nav>

          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="flex items-center justify-between p-3 border-b bg-gray-50">
              <h3 className="text-sm font-semibold text-black">Client Users</h3>
              <button className="px-3 py-1 text-xs text-red-500 border border-red-500 rounded-md">+ Add New User</button>
            </div>

            <div className="p-3 text-xs">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-3 text-left border font-medium">Sl.No</th>
                    <th className="py-2 px-3 text-left border font-medium">User Name</th>
                    <th className="py-2 px-3 text-left border font-medium">Mobile Number</th>
                    <th className="py-2 px-3 text-left border font-medium">Email Address</th>
                    <th className="py-2 px-3 text-left border font-medium">Invite Status</th>
                    <th className="py-2 px-3 text-left border font-medium">Active Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-500">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span className="font-medium">No User Found</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}