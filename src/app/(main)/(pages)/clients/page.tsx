"use client";

import { useState, useEffect } from "react";
import { Bell, ChevronDown, MoreVertical, Filter } from "lucide-react";
import Link from "next/link";

export default function ManageClients() {
  const initialClients = [
    { id: 1, name: "ESP1-VILLA", primaryUser: "", inviteStatus: "Not Invited", status: "Active" },
    { id: 2, name: "ESP1-VILLA 16", primaryUser: "", inviteStatus: "Not Invited", status: "Active" },
    { id: 3, name: "ESP1-VILLA 40", primaryUser: "", inviteStatus: "Not Invited", status: "Active" },
    { id: 4, name: "ESP1-VILLA 43", primaryUser: "John Doe", inviteStatus: "Invited", status: "Active" },
    { id: 5, name: "ESP1-VILLA 57", primaryUser: "", inviteStatus: "Not Invited", status: "Inactive" },
    { id: 6, name: "ESP1-VILLA 72", primaryUser: "Jane Smith", inviteStatus: "Invited", status: "Active" },
    { id: 7, name: "Subha Ecostone Phase-1", primaryUser: "", inviteStatus: "Not Invited", status: "Active" },
    { id: 8, name: "Subha Ecostone Phase-1-Villa-43", primaryUser: "Mike Johnson", inviteStatus: "Invited", status: "Inactive" },
    { id: 9, name: "Subha Ecostone Villa-43", primaryUser: "", inviteStatus: "Not Invited", status: "Active" }
  ];

  const [clients, setClients] = useState(initialClients);
  const [filteredClients, setFilteredClients] = useState(initialClients);
  const [filters, setFilters] = useState({
    nameSearch: "",
    primaryUserSearch: "",
    inviteStatus: "All",
    status: "All"
  });

  // Toggle status function
  const toggleStatus = (id: number) => {
    const updatedClients = clients.map((client) =>
      client.id === id ? { ...client, status: client.status === "Active" ? "Inactive" : "Active" } : client
    );
    setClients(updatedClients);
  };

  // Update filters when inputs change
  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  // Apply filters whenever filters state changes
  useEffect(() => {
    let result = [...clients];
    
    // Filter by name search
    if (filters.nameSearch) {
      result = result.filter(client => 
        client.name.toLowerCase().includes(filters.nameSearch.toLowerCase())
      );
    }
    
    // Filter by primary user
    if (filters.primaryUserSearch) {
      result = result.filter(client => 
        client.primaryUser && client.primaryUser.toLowerCase().includes(filters.primaryUserSearch.toLowerCase())
      );
    }
    
    // Filter by invite status
    if (filters.inviteStatus !== "All") {
      result = result.filter(client => client.inviteStatus === filters.inviteStatus);
    }
    
    // Filter by status
    if (filters.status !== "All") {
      result = result.filter(client => client.status === filters.status);
    }
    
    setFilteredClients(result);
  }, [filters, clients]);

  return (
    <div className="bg-white p-2 w-full">
      <div className="flex justify-between items-center mb-2 px-2">
        <h1 className="text-xl font-bold text-gray-900">Manage Clients</h1>
        <div className="flex items-center space-x-2">
          <button className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">10</span>
          </button>
          <button className="flex items-center space-x-1 border px-2 py-1 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
            <span className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium">N</span>
            <span className="text-gray-700 text-sm font-medium">Nithesh</span>
            <ChevronDown className="w-3 h-3 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="border-b mb-2 px-2">
        <button className="text-black text-sm font-medium pb-1 border-b-2 border-red-500">All Clients</button>
      </div>

      <div className="border border-gray-200 shadow-sm rounded-lg">
        <table className="w-full text-left border-collapse table-fixed">
          <thead className="bg-gray-50">
            <tr className="text-gray-700 text-xs">
              <th className="p-2 border-b w-4 text-left">
                <div className="flex flex-col">
                  <span>Sl.No</span>
                  <Filter className="w-3 h-3 mt-1 text-gray-500" />
                </div>
              </th>
              <th className="p-2 border-b w-1/4 text-left">
                Client Organisation Name
                <input 
                  className="mt-1 w-full text-xs p-1 border rounded" 
                  placeholder="Search" 
                  value={filters.nameSearch}
                  onChange={(e) => handleFilterChange("nameSearch", e.target.value)}
                />
              </th>
              <th className="p-2 border-b w-1/6 text-left">
                Primary User
                <input 
                  className="mt-1 w-full text-xs p-1 border rounded" 
                  placeholder="Search" 
                  value={filters.primaryUserSearch}
                  onChange={(e) => handleFilterChange("primaryUserSearch", e.target.value)}
                />
              </th>
              <th className="p-2 border-b w-1/6 text-left">
                Invite Status
                <select 
                  className="mt-1 w-full text-xs p-1 border rounded"
                  value={filters.inviteStatus}
                  onChange={(e) => handleFilterChange("inviteStatus", e.target.value)}
                >
                  <option>All</option>
                  <option>Invited</option>
                  <option>Not Invited</option>
                </select>
              </th>
              <th className="p-2 border-b w-1/6 text-left">
                Status
                <select 
                  className="mt-1 w-full text-xs p-1 border rounded"
                  value={filters.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                >
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </th>
              <th className="p-2 border-b w-10 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {filteredClients.map((client, index) => (
              <tr key={client.id} className="border-b hover:bg-gray-50">
                <td className="p-2 text-left">{index + 1}.</td>
                <td className="p-2 font-medium text-left truncate">
                  <Link href={`/clients/${client.id}/client-info`} className="text-gray-500 hover:underline">{client.name}</Link>
                  <br /><span className="text-gray-400 text-xs">RDASH</span>
                </td>
                <td className="p-2 text-left">{client.primaryUser || "-"}</td>
                <td className="p-2 text-gray-600">
                  <button className="border border-gray-400 rounded-lg px-2 py-0.5 text-xs">{client.inviteStatus}</button>
                </td>
                <td className={`p-2 font-medium ${client.status === "Active" ? "text-green-500" : "text-red-500"}`}>{client.status}</td>
                <td className="p-2 text-center">
                  <button className="text-gray-500 hover:text-gray" onClick={() => toggleStatus(client.id)}>
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredClients.length === 0 && (
              <tr>
                <td colSpan={6} className="p-2 text-center text-gray-500">No clients match your filter criteria</td>
              </tr>
            )}
          </tbody>
          </table>

          {/* Align "+ Create Client" under the second column */}
          <div className="grid grid-cols-6">
            <div className="col-span-1"></div> {/* First column empty (Sl.No) */}
            <div className="col-span-1">
              <div className="p-2 text-red-500 font-medium text-sm cursor-pointer hover:underline">
                + Create Client
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}