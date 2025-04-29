"use client";

import React, { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Filter } from "lucide-react";

export default function ClientInvoicesPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const clientId = params.clientId as string;
  const clientName = "ESP1-VILLA";
  
  // Get the current view from URL or default to "invoices"
  const view = searchParams.get("view") || "invoices";

  const [activeMainTab, setActiveMainTab] = useState("client-invoices");

  // Function to handle tab changes
  const handleViewChange = (newView: string) => {
    router.push(`/clients/${clientId}/client-invoices?view=${newView}`);
  };

  return (
    <div className="bg-gray-50 p-4 text-sm w-full">
      <header className="flex items-center justify-between p-4 bg-white border-b shadow">
        <div className="flex items-center">
          <Link href="/clients" className="text-gray-500 hover:text-gray-700">
            All Clients
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <h1 className="text-red-600 text-xl font-bold">{clientName}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative w-6 h-6 bg-red-500 rounded-full text-white flex items-center justify-center text-xs">10</div>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm">N</div>
            <span className="text-sm font-medium">Nithesh</span>
          </div>
        </div>
      </header>

      <div className="mt-4">
        <nav className="flex space-x-6 border-b">
          {["Client Info", "Client Users", "Other Details", "Client Invoices", "Payments From Client"].map((tab) => (
            <Link 
              key={tab} 
              href={`/clients/${clientId}/${tab.toLowerCase().replace(/ /g, "-")}`}
              className={`py-3 px-4 text-sm font-medium ${
                activeMainTab === tab.toLowerCase().replace(/ /g, "-") 
                  ? "border-b-2 border-red-500 text-gray-900" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveMainTab(tab.toLowerCase().replace(/ /g, "-"))}
            >
              {tab}
            </Link>
          ))}
        </nav>

        <div className="bg-white shadow-sm rounded-lg p-4 mt-6 flex flex-col">
          <div className="flex space-x-6 border-b pb-2">
            <button
              className={`py-2 text-sm font-medium ${
                view === "invoices" ? "border-b-2 border-red-500 text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleViewChange("invoices")}
            >
              Invoices
            </button>
            <button
              className={`py-2 text-sm font-medium ${
                view === "credit-note" ? "border-b-2 border-red-500 text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleViewChange("credit-note")}
            >
              Credit Note
            </button>
          </div>
        </div>

        {/* Show appropriate content based on the active view */}
        {view === "invoices" ? (
          <InvoicesView clientId={clientId} />
        ) : (
          <CreditNotesView clientId={clientId} />
        )}
      </div>
    </div>
  );
}

// Component for the Invoices view
function InvoicesView({ clientId }: { clientId: string }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <StatusCard title="Invoice Uploaded" count="0" amount="0" />
        <StatusCard title="Invoice Approved" count="0" amount="0" />
        <StatusCard title="Pending Approval" count="0" amount="0" />
      </div>

      {/* Table Container - Removed fixed height constraint */}
      <div className="bg-white shadow-sm rounded-lg p-4 mt-6 flex flex-col">
        <div className="w-full overflow-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 border">
                  S.No <Filter className="inline ml-2 w-4 h-4" />
                </th>
                <th className="p-2 border">
                  Invoice Number <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
                <th className="p-2 border">
                  Invoice Type{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select Option</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Project Name{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Order No.{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Order Amount (₹) <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
                <th className="p-2 border">
                  Invoice Date <input type="date" className="border rounded p-1 w-full" />
                </th>
                <th className="p-2 border">
                  Uploaded By{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Status{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select Option</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Invoice Amount (₹) <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
                <th className="p-2 border">
                  Credit Note Amount (₹) <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={11} className="text-center text-gray-500 p-4">
                  <div className="flex flex-col items-center justify-center py-6">
                    <img src="/api/placeholder/80/80" alt="No data" className="mb-4" />
                    <p>No Invoice data to show</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* "+ Add New Invoice" Button Below the Table */}
      <div className="flex justify-start mt-4">
        <button className="flex items-center text-red-600 font-medium hover:text-red-800">
          <span className="text-xl mr-1">+</span> Add New Invoice
        </button>
      </div>
    </>
  );
}

// Component for the Credit Notes view
function CreditNotesView({ clientId }: { clientId: string }) {
  return (
    <>
      {/* Table Container - Removed fixed height constraint */}
      <div className="bg-white shadow-sm rounded-lg p-4 mt-6 flex flex-col">
        <div className="w-full overflow-auto">
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2 border">
                  S.No <Filter className="inline ml-2 w-4 h-4" />
                </th>
                <th className="p-2 border">
                  Credit Note No. <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
                <th className="p-2 border">
                  Ref. Invoice No.{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Created By{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Attachments <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
                <th className="p-2 border">
                  Verification Status{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select Option</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Status{" "}
                  <select className="w-full text-xs p-1 border rounded">
                    <option>Select Option</option>
                  </select>
                </th>
                <th className="p-2 border">
                  Remark <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
                <th className="p-2 border">
                  Amount (₹) <input type="text" className="border rounded p-1 w-full" placeholder="Search" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={9} className="text-center text-gray-500 p-4">
                  <div className="flex flex-col items-center justify-center py-6">
                    <img src="/api/placeholder/80/80" alt="No data" className="mb-4" />
                    <p>No Credit Note data to show</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* "+ Add New Credit Note" Button Below the Table */}
      <div className="flex justify-start mt-4">
        <button className="flex items-center text-red-600 font-medium hover:text-red-800">
          <span className="text-xl mr-1">+</span> Add New Credit Note
        </button>
      </div>
    </>
  );
}

interface StatusCardProps {
  title: string;
  count: string | number;
  amount: string | number;
}

function StatusCard({ title, count, amount }: StatusCardProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
      <div className="text-gray-700 font-medium">{title}</div>
      <div className="text-lg font-bold">₹ {amount}</div>
    </div>
  );
}