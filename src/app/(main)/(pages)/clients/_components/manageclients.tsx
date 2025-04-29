"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function ManageClients() {
  const [clients, setClients] = useState([
    { id: 1, name: "ESP1-VILLA", inviteStatus: "Not Invited", status: "Active" },
    { id: 2, name: "ESP1-VILLA 16", inviteStatus: "Not Invited", status: "Active" },
    { id: 3, name: "ESP1-VILLA 40", inviteStatus: "Not Invited", status: "Active" },
    { id: 4, name: "ESP1-VILLA 43", inviteStatus: "Not Invited", status: "Active" },
    { id: 5, name: "ESP1-VILLA 57", inviteStatus: "Not Invited", status: "Active" },
    { id: 6, name: "ESP1-VILLA 72", inviteStatus: "Not Invited", status: "Active" },
    { id: 7, name: "Subha Ecostone Phase-1", inviteStatus: "Not Invited", status: "Active" },
    { id: 8, name: "Subha Ecostone Phase-1-Villa-43", inviteStatus: "Not Invited", status: "Active" },
    { id: 9, name: "Subha Ecostone Villa-43", inviteStatus: "Not Invited", status: "Active" }
  ]);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Clients</h1>
      <div className="border border-gray-200 shadow-sm rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr className="text-gray-700 text-sm">
              <th className="p-3 border-b w-20">Sl.No</th>
              <th className="p-3 border-b">Client Organisation Name</th>
              <th className="p-3 border-b">Primary User</th>
              <th className="p-3 border-b">Invite Status</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
            <tr>
              <th className="p-2 border-b w-20">🔍</th>
              <th className="p-2 border-b">
                <input className="w-full text-xs p-1 border rounded" placeholder="Search" />
              </th>
              <th className="p-2 border-b">
                <input className="w-full text-xs p-1 border rounded" placeholder="Search" />
              </th>
              <th className="p-2 border-b">
                <select className="w-full text-xs p-1 border rounded">
                  <option value="">Select Status</option>
                  <option value="Not Invited">Not Invited</option>
                  <option value="Invited">Invited</option>
                </select>
              </th>
              <th className="p-2 border-b">
                <select className="w-full text-xs p-1 border rounded">
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </th>
              <th className="p-2 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{index + 1}.</td>
                <td className="p-3 font-medium">{client.name}</td>
                <td className="p-3">-</td>
                <td className="p-3 text-gray-600">
                  <button className="border border-gray-400 rounded-lg px-3 py-1 text-sm">{client.inviteStatus}</button>
                </td>
                <td className="p-3 text-green-500 font-medium">{client.status}</td>
                <td className="p-3 text-center">
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 text-center text-red-500 font-medium">+ Create Client</div>
    </div>
  );
}
