"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PaymentsFromClient() {
  const router = useRouter();

  const [client, setClient] = useState({
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

  // Status summaries with counts
  const statusSummaries = [
    { title: "Payment Requested", count: 0, amount: 0 },
    { title: "Payment Approved", count: 0, amount: 0 },
    { title: "Pending Approval", count: 0, amount: 0 },
    { title: "Payment Due", amount: 0 },
    { title: "Payments Done", count: 0, amount: 0 },
  ];

  // Tab options
  const tabs = [
    "All Requests",
    "Pending Requests",
    "Approved Requests",
    "Payment Due",
    "Payment Entries"
  ];

  const [activeTab, setActiveTab] = useState("All Requests");
  const [filters, setFilters] = useState({
    dateRange: "",
    requestType: "",
    status: "",
  });

  // Table headers
  const tableHeaders = [
    { label: "Sl No", key: "slNo" },
    { label: "Request Date", key: "requestDate" },
    { label: "Request ID", key: "requestId" },
    { label: "Project Name", key: "projectName" },
    { label: "Request Type", key: "requestType" },
    { label: "Requested By", key: "requestedBy" },
    { label: "Status", key: "status" },
    { label: "Requested Amount (₹)", key: "requestedAmount" },
    { label: "Payment Due (₹)", key: "paymentDue" },
    { label: "Payment Done (₹)", key: "paymentDone" },
  ];

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

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
            
            <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
              Payments From Client
            </button>
          </nav>

          {/* Currency selector */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center text-sm">
              <span className="mr-1">Currency:</span>
              <select className="border rounded p-1">
                <option>INR</option>
              </select>
            </div>
          </div>

          {/* Status cards */}
          <div className="grid grid-cols-5 gap-4 mb-4">
            {statusSummaries.map((summary, index) => (
              <div key={index} className="border rounded p-4 bg-white shadow-sm">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gray-500">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M3 10h18" />
                  </svg>
                  <span className="text-sm">{summary.title}</span>
                  {summary.count !== undefined && (
                    <span className="ml-1 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {summary.count}
                    </span>
                  )}
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-medium">₹ {summary.amount}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sub tabs */}
          <div className="border-t border-b mb-4">
            <ul className="flex text-sm">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`px-4 py-2 cursor-pointer ${
                    activeTab === tab ? "border-b-2 border-red-500 text-red-500 font-medium" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Table */}
          <div className="mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  {tableHeaders.map((header) => (
                    <th key={header.key} className="py-2 text-left font-medium">
                      {header.label}
                    </th>
                  ))}
                </tr>
                {/* Filter row - added under the header row */}
                <tr className="bg-gray-50">
                  <td className="py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mx-auto text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0114 13v5.586a1 1 0 01-.293.707l-2 2A1 1 0 0110 20.586V13a1 1 0 01.293-.707L16.707 6.707A1 1 0 0017 6V5a1 1 0 00-1-1H4a1 1 0 00-1 1z" />
                  </svg>
                  </td>
                  <td className="py-2">
                    <select 
                      className="w-full border rounded p-1 text-xs"
                      value={filters.dateRange}
                      onChange={(e) => handleFilterChange("dateRange", e.target.value)}
                    >
                      <option value="">All Dates</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="quarter">This Quarter</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <input 
                      type="text" 
                      placeholder="Search ID" 
                      className="w-full border rounded p-1 text-xs"
                    />
                  </td>
                  <td className="py-2">
                    <input 
                      type="text" 
                      placeholder="Search Project" 
                      className="w-full border rounded p-1 text-xs" 
                    />
                  </td>
                  <td className="py-2">
                    <select 
                      className="w-full border rounded p-1 text-xs"
                      value={filters.requestType}
                      onChange={(e) => handleFilterChange("requestType", e.target.value)}
                    >
                      <option value="">All Types</option>
                      <option value="advance">Advance</option>
                      <option value="regular">Regular</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <input 
                      type="text" 
                      placeholder="Search User" 
                      className="w-full border rounded p-1 text-xs"
                    />
                  </td>
                  <td className="py-2">
                    <select 
                      className="w-full border rounded p-1 text-xs"
                      value={filters.status}
                      onChange={(e) => handleFilterChange("status", e.target.value)}
                    >
                      <option value="">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <input 
                      type="text" 
                      placeholder="Min Amount" 
                      className="w-full border rounded p-1 text-xs"
                    />
                  </td>
                  <td className="py-2">
                    <input 
                      type="text" 
                      placeholder="Min Due" 
                      className="w-full border rounded p-1 text-xs"
                    />
                  </td>
                  <td className="py-2">
                    <input 
                      type="text" 
                      placeholder="Min Paid" 
                      className="w-full border rounded p-1 text-xs"
                    />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={tableHeaders.length}>
                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="mb-4 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 15h8" />
                          <path d="M9 9h.01" />
                          <path d="M15 9h.01" />
                        </svg>
                      </div>
                      <p className="text-gray-400">No Payment Request data to show</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Create payment request button */}
          <div className="border-t pt-4">
            <button className="text-red-500 hover:text-red-600 text-sm font-medium">
              + Create Payment Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}