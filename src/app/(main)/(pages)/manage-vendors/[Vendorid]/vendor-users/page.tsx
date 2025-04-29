
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "../header";
import { sampleVendors } from "../../_components/Allvendors";

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
    const params = useParams();
    const id = params.id
    const vendors = sampleVendors;
    const currentVendor = vendors.find((vendor) => vendor.id === id || "1");

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


        <div>
            <Header vendor={currentVendor} />
            {/* <Link href="/clients" className="text-blue-600 hover:underline mr-2">
            All Clients
          </Link>
          <span>/</span>
          <span className="ml-2 font-semibold text-black">{client.name}</span> */}

            {/* <div className="rounded-lg shadow-md p-3"> */}

                {/* <nav className="flex border-b mb-3 text-xs">
                    <Link href={`/manage-vendors/${client.id}/Vendor-info?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
                        <button className="px-3 py-2 font-medium text-gray-600">
                            Vendor Info
                        </button>
                    </Link>

                    <button className="px-3 py-2 font-medium border-b-2 border-red-500 text-red-500">
                        Vendor Users
                    </button>

                    <Link href={`/manage-vendors/${client.id}/other-details?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
                        <button className="px-3 py-2 font-medium text-gray-600">
                            Other Details
                        </button>
                    </Link>

                    <Link href={`/manage-vendors/${client.id}/vendor-invoices?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
                        <button className="px-3 py-2 font-medium text-gray-600">
                            vendor Invoices
                        </button>
                    </Link>

                    <Link href={`/manage-vendors/${client.id}/vendor-payments?id=${client.id}&name=${encodeURIComponent(client.name)}&company=${encodeURIComponent(client.company)}&registrationName=${encodeURIComponent(client.registrationName)}`}>
                        <button className="px-3 py-2 font-medium text-gray-600">
                            Vendor Payments
                        </button>
                    </Link>
                </nav> */}

                <div className="mx-3 border rounded-lg overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between p-3 border-b bg-gray-50">
                        <h3 className="text-sm font-semibold text-black">RelationShip Details</h3>
                    </div>

                    <div className="p-3 text-xs">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b">
                                    <th className="py-3 px-4">Sl.No</th>
                                    <th className="py-3 px-4">User Name</th>
                                    <th className="py-3 px-4">Mobile Number</th>
                                    <th className="py-3 px-4">Email Address</th>
                                    <th className="py-3 px-4">Invite Status</th>
                                    <th className="py-3 px-4">Active Status</th>
                                    <th className="py-3 px-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-4 px-4">1</td>
                                    <td className="py-4 px-4">-</td>
                                    <td className="py-4 px-4">-</td>
                                    <td className="py-4 px-4">{currentVendor?.primaryUser.email}</td>
                                    <td className="py-4 px-4">
                                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                                            Not Invited
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">{currentVendor?.status}</td>
                                    <td className="py-4 px-4">Primary</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="text-red-600 hover:text-red-700 text-sm mt-5">
                            + Add New User
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}