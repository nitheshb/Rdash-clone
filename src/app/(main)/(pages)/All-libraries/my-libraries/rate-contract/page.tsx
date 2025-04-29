'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronDown, PlusCircle } from 'lucide-react';

export default function RateContractsPage() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const response = await fetch('/api/libraries/rate-contracts');
      if (response.ok) {
        const data = await response.json();
        setContracts(data);
      } else {
        console.error('Failed to fetch rate contracts');
      }
    } catch (error) {
      console.error('Error fetching rate contracts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Display empty state initially as shown in the image
  const noContractsFound = contracts.length === 0;

  return (
    <div className="p-6">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">All Libraries / My Libraries</h1>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              10
            </span>
          </button>
          <button className="flex items-center space-x-1 border px-2 py-1 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
            <span className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium">
              N
            </span>
            <span className="text-gray-700 text-sm font-medium">Nithesh</span>
            <ChevronDown className="w-3 h-3 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        <Link
          href="/All-libraries/my-libraries/element-libraries"
          className="px-4 py-2 text-gray-500 hover:text-black"
        >
          Element Libraries
        </Link>
        <button className="border-b-2 border-red-500 px-4 py-2 font-medium">
          Rate Contracts
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="p-2 border">Sl.No</th>
                <th className="p-2 border">Vendor Name & ID</th>
                <th className="p-2 border">Buyer Name</th>
                <th className="p-2 border">Contract Name</th>
                <th className="p-2 border">Vendor Category</th>
                <th className="p-2 border">Created By</th>
                <th className="p-2 border">Start From</th>
                <th className="p-2 border">Valid Through</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Attachments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="p-2">
                  <div className="flex flex-col items-center justify-center py-16">
                    {noContractsFound && (
                      <>
                        <div className="mb-4">
                          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 12C24.52 12 12 24.52 12 40C12 55.48 24.52 68 40 68C55.48 68 68 55.48 68 40C68 24.52 55.48 12 40 12ZM40 64C26.76 64 16 53.24 16 40C16 26.76 26.76 16 40 16C53.24 16 64 26.76 64 40C64 53.24 53.24 64 40 64Z" fill="#DADADA"/>
                            <path d="M28 32H52V40H48V36H32V44H40V48H28V32Z" fill="#DADADA"/>
                            <path d="M40 48H52V56H40V48Z" fill="#DADADA"/>
                          </svg>
                        </div>
                        <div className="text-xl text-gray-400 mb-1">No Rate Contract found</div>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Filter Row above table */}
          <div className="flex w-full mb-2">
            <div className="flex items-center mr-2">
              <svg className="w-4 h-4 text-gray-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </div>
            <div className="grid grid-cols-10 gap-2 w-full text-sm">
              <div className="col-span-1">
                <input type="text" placeholder="Search" className="w-full p-1 border rounded-md text-sm" />
              </div>
              <div className="col-span-1">
                <input type="text" placeholder="Search" className="w-full p-1 border rounded-md text-sm" />
              </div>
              <div className="col-span-1">
                <input type="text" placeholder="Search" className="w-full p-1 border rounded-md text-sm" />
              </div>
              <div className="col-span-1">
                <select className="w-full p-1 border rounded-md text-sm">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <select className="w-full p-1 border rounded-md text-sm">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <input type="date" placeholder="Select Date" className="w-full p-1 border rounded-md text-sm" />
              </div>
              <div className="col-span-1">
                <input type="date" placeholder="Select Date" className="w-full p-1 border rounded-md text-sm" />
              </div>
              <div className="col-span-1">
                <select className="w-full p-1 border rounded-md text-sm">
                  <option>Select</option>
                </select>
              </div>
              <div className="col-span-1">
                <select className="w-full p-1 border rounded-md text-sm">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Footer Row */}
      <div className="border-t mt-4 pt-3 flex justify-between items-center text-sm text-gray-700">
        <div className="text-red-500 font-medium cursor-pointer">
          <Link href="/All-libraries/my-libraries/rate-contracts/new" className="flex items-center">
            <span className="mr-1">+</span> Add New Rate Contract
          </Link>
        </div>
      </div>
    </div>
  );
}