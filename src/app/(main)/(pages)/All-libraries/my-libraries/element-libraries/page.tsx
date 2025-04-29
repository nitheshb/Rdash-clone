// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// // Component for the Element Libraries page
// export default function ElementLibrariesPage() {
//   const [libraries, setLibraries] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     // Fetch libraries data when component mounts
//     fetchLibraries();
//   }, []);

//   const fetchLibraries = async () => {
//     try {
//       const response = await fetch('/api/libraries/element-libraries');
//       if (response.ok) {
//         const data = await response.json();
//         setLibraries(data);
//       } else {
//         console.error('Failed to fetch libraries');
//       }
//     } catch (error) {
//       console.error('Error fetching libraries:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // If no data is available, use the static data
//   const staticData = [
//     {
//       id: 1,
//       name: 'Work order description',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '20 Mar 2025, 3:49 pm',
//       updatedBy: 'Darshith M',
//       sections: 2,
//       elements: 1
//     },
//     {
//       id: 2,
//       name: 'CONTRACTORS',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '18 Mar 2025, 4:52 pm',
//       updatedBy: 'Darshith M',
//       sections: 1,
//       elements: 0
//     },
//     {
//       id: 3,
//       name: 'Material Tree',
//       type: 'My Library',
//       createdBy: 'System User, Subha Buildcon and Developers',
//       updated: '29 Jan 2025, 3:10 pm',
//       updatedBy: 'System User',
//       sections: 3,
//       elements: 14
//     }
//   ];

//   const displayData = libraries.length > 0 ? libraries : staticData;
//   const totalElements = displayData.reduce((sum, lib) => sum + lib.elements, 0);

//   return (
//     <div className="p-6">
//       {/* Header Row */}
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-xl font-semibold">All Libraries / My Libraries</h1>
//         <div className="flex items-center space-x-4">
//           {/* Notification Bell */}
//           <button className="relative">
//             <Bell className="w-5 h-5 text-gray-600" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//               10
//             </span>
//           </button>

//           {/* User Profile */}
//           <button className="flex items-center space-x-1 border px-2 py-1 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
//             <span className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium">
//               N
//             </span>
//             <span className="text-gray-700 text-sm font-medium">Nithesh</span>
//             <ChevronDown className="w-3 h-3 text-gray-600" />
//           </button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b mb-4">
//         <button className="border-b-2 border-red-500 px-4 py-2 font-medium">
//           Element Libraries
//         </button>
//         <button
//           className="px-4 py-2 text-gray-500 hover:text-black"
//           disabled
//         >
//           Rate Contracts
//         </button>
//       </div>
      
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-sm">
//               <th className="p-2 border">Sl.No</th>
//               <th className="p-2 border">Library Name</th>
//               <th className="p-2 border">Type Of Library</th>
//               <th className="p-2 border">Created By</th>
//               <th className="p-2 border">Last Updated</th>
//               <th className="p-2 border">Sections</th>
//               <th className="p-2 border">Elements</th>
//               <th className="p-2 border"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayData.map((item, index) => (
//               <tr key={item.id} className="text-sm hover:bg-gray-50">
//                 <td className="p-2 border">{index + 1}</td>
//                 <td className="p-2 border">
//                   <Link href={`/All-libraries/my-libraries/element-libraries/${item.id}`} className="text-blue-600 hover:underline">
//                     {item.name}
//                   </Link>
//                 </td>
//                 <td className="p-2 border">{item.type}</td>
//                 <td className="p-2 border">{item.createdBy}</td>
//                 <td className="p-2 border">{item.updated}, by {item.updatedBy}</td>
//                 <td className="p-2 border">{item.sections}</td>
//                 <td className="p-2 border">{item.elements}</td>
//                 <td className="p-2 border">⋮</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
      
//       <div className="flex justify-between items-center mt-4 text-sm">
//         <Link href="/All-libraries/my-libraries/element-libraries/new" className="text-red-500 cursor-pointer">
//           + Add New Library
//         </Link>
//         <div className="text-gray-600">
//           {totalElements} <span className="text-xs">(Unique Elements)</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // API endpoint for Next.js
// // Create this file at: pages/api/libraries/element-libraries.js
// import { NextApiRequest, NextApiResponse } from 'next';
// import { Bell, ChevronDown } from 'lucide-react';

// export async function getElementLibraries(req: NextApiRequest, res: NextApiResponse) {
//   // Mock data - replace with actual database query
//   const librariesData = [
//     {
//       id: 1,
//       name: 'Work order description',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '20 Mar 2025, 3:49 pm',
//       updatedBy: 'Darshith M',
//       sections: 2,
//       elements: 1
//     },
//     {
//       id: 2,
//       name: 'CONTRACTORS',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '18 Mar 2025, 4:52 pm',
//       updatedBy: 'Darshith M',
//       sections: 1,
//       elements: 0
//     },
//     {
//       id: 3,
//       name: 'Material Tree',
//       type: 'My Library',
//       createdBy: 'System User, Subha Buildcon and Developers',
//       updated: '29 Jan 2025, 3:10 pm',
//       updatedBy: 'System User',
//       sections: 3,
//       elements: 14
//     }
//   ];
  
//   try {
//     res.status(200).json(librariesData);
//   } catch (error) {
//     console.error('Error retrieving element libraries:', error);
//     res.status(500).json({ message: 'Failed to retrieve element libraries' });
//   }
// }

// // Setup the route for App Router
// // Create this file at: app/api/libraries/element-libraries/route.js
// export async function GET() {
//   // Mock data - same as above
//   const librariesData = [
//     {
//       id: 1,
//       name: 'Work order description',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '20 Mar 2025, 3:49 pm',
//       updatedBy: 'Darshith M',
//       sections: 2,
//       elements: 1
//     },
//     {
//       id: 2,
//       name: 'CONTRACTORS',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '18 Mar 2025, 4:52 pm',
//       updatedBy: 'Darshith M',
//       sections: 1,
//       elements: 0
//     },
//     {
//       id: 3,
//       name: 'Material Tree',
//       type: 'My Library',
//       createdBy: 'System User, Subha Buildcon and Developers',
//       updated: '29 Jan 2025, 3:10 pm',
//       updatedBy: 'System User',
//       sections: 3,
//       elements: 14
//     }
//   ];
  
//   return new Response(JSON.stringify(librariesData), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// }


// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Bell, ChevronDown } from 'lucide-react';

// export default function ElementLibrariesPage() {
//   const [libraries, setLibraries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchLibraries();
//   }, []);

//   const fetchLibraries = async () => {
//     try {
//       const response = await fetch('/api/libraries/element-libraries');
//       if (response.ok) {
//         const data = await response.json();
//         setLibraries(data);
//       } else {
//         console.error('Failed to fetch libraries');
//       }
//     } catch (error) {
//       console.error('Error fetching libraries:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const staticData = [
//     {
//       id: 1,
//       name: 'Work order description',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '20 Mar 2025, 3:49 pm',
//       updatedBy: 'Darshith M',
//       sections: 2,
//       elements: 1
//     },
//     {
//       id: 2,
//       name: 'CONTRACTORS',
//       type: 'My Library',
//       createdBy: 'Darshith M, Subha Buildcon and Developers',
//       updated: '18 Mar 2025, 4:52 pm',
//       updatedBy: 'Darshith M',
//       sections: 1,
//       elements: 0
//     },
//     {
//       id: 3,
//       name: 'Material Tree',
//       type: 'My Library',
//       createdBy: 'System User, Subha Buildcon and Developers',
//       updated: '29 Jan 2025, 3:10 pm',
//       updatedBy: 'System User',
//       sections: 3,
//       elements: 14
//     }
//   ];

//   const displayData = libraries.length > 0 ? libraries : staticData;
//   const totalElements = displayData.reduce((sum, lib) => sum + lib.elements, 0);

//   return (
//     <div className="p-6">
//       {/* Header Row */}
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-xl font-semibold">All Libraries / My Libraries</h1>
//         <div className="flex items-center space-x-4">
//           <button className="relative">
//             <Bell className="w-5 h-5 text-gray-600" />
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
//               10
//             </span>
//           </button>
//           <button className="flex items-center space-x-1 border px-2 py-1 rounded-lg shadow-sm bg-white hover:bg-gray-100 transition">
//             <span className="bg-green-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium">
//               N
//             </span>
//             <span className="text-gray-700 text-sm font-medium">Nithesh</span>
//             <ChevronDown className="w-3 h-3 text-gray-600" />
//           </button>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b mb-4">
//         <button className="border-b-2 border-red-500 px-4 py-2 font-medium">
//           Element Libraries
//         </button>
//         <Link
//           href="/All-libraries/my-libraries/rate-contracts"
//           className="px-4 py-2 text-gray-500 hover:text-black"
//         >
//           Rate Contracts
//         </Link>
//       </div>

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="bg-gray-100 text-sm">
//               <th className="p-2 border">Sl.No</th>
//               <th className="p-2 border">Library Name</th>
//               <th className="p-2 border">Type Of Library</th>
//               <th className="p-2 border">Created By</th>
//               <th className="p-2 border">Last Updated</th>
//               <th className="p-2 border">Sections</th>
//               <th className="p-2 border">Elements</th>
//               <th className="p-2 border"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {displayData.map((item, index) => (
//               <tr key={item.id} className="text-sm hover:bg-gray-50">
//                 <td className="p-2 border">{index + 1}</td>
//                 <td className="p-2 border">
//                   <Link
//                     href={`/All-libraries/my-libraries/element-libraries/${item.id}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {item.name}
//                   </Link>
//                 </td>
//                 <td className="p-2 border">{item.type}</td>
//                 <td className="p-2 border">{item.createdBy}</td>
//                 <td className="p-2 border">
//                   {item.updated}, by {item.updatedBy}
//                 </td>
//                 <td className="p-2 border">{item.sections}</td>
//                 <td className="p-2 border">{item.elements}</td>
//                 <td className="p-2 border">⋮</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Footer Row */}
//       <div className="border-t mt-4 pt-3 flex justify-between items-center text-sm text-gray-700">
//         <div className="text-red-500 font-medium cursor-pointer">
//           <Link href="/All-libraries/my-libraries/element-libraries/new">
//             + Add New Library
//           </Link>
//         </div>
//         <div className="font-medium">
//           All Elements &nbsp;
//           <span className="text-black">{totalElements}</span>
//           <span className="text-xs text-gray-500 ml-1">(Unique Elements)</span>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, ChevronDown, MoreVertical, History } from 'lucide-react';

export default function ElementLibrariesPage() {
  const [libraries, setLibraries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLibraries();
  }, []);

  const fetchLibraries = async () => {
    try {
      const response = await fetch('/api/libraries/element-libraries');
      if (response.ok) {
        const data = await response.json();
        setLibraries(data);
      } else {
        console.error('Failed to fetch libraries');
      }
    } catch (error) {
      console.error('Error fetching libraries:', error);
    } finally {
      setLoading(false);
    }
  };

  const staticData = [
    {
      id: 1,
      name: 'Work order description',
      type: 'My Library',
      createdBy: {
        name: 'Darshith M',
        organization: 'Subha Buildcon and Developers',
        avatar: 'D'
      },
      updated: '20 Mar 2025, 3:49 pm',
      updatedBy: {
        name: 'Darshith M',
        avatar: 'D'
      },
      sections: 2,
      elements: 1
    },
    {
      id: 2,
      name: 'CONTRACTORS',
      type: 'My Library',
      createdBy: {
        name: 'Darshith M',
        organization: 'Subha Buildcon and Developers',
        avatar: 'D'
      },
      updated: '18 Mar 2025, 4:52 pm',
      updatedBy: {
        name: 'Darshith M',
        avatar: 'D'
      },
      sections: 1,
      elements: 0
    },
    {
      id: 3,
      name: 'Material Tree',
      type: 'My Library',
      createdBy: {
        name: 'System User',
        organization: 'Subha Buildcon and Developers',
        avatar: 'S'
      },
      updated: '29 Jan 2025, 3:10 pm',
      updatedBy: {
        name: 'System User',
        avatar: 'S'
      },
      sections: 3,
      elements: 14
    }
  ];

  const displayData = libraries.length > 0 ? libraries : staticData;
  const totalElements = displayData.reduce((sum, lib) => sum + lib.elements, 0);

  const Avatar: React.FC<{ letter: string; size?: "small" | "large" }> = ({ letter, size = "small" }) => {
    const sizeClass = size === "small" ? "w-6 h-6" : "w-8 h-8";
    return (
      <div className={`${sizeClass} rounded-full bg-teal-500 text-white flex items-center justify-center text-xs font-medium`}>
        {letter}
      </div>
    );
  };

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
            <span className="bg-teal-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium">
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
          className="border-b-2 border-red-500 px-4 py-2 font-medium"
        >
          Element Libraries
        </Link>
        <Link
  href="/All-libraries/my-libraries/rate-contract"
  className="px-4 py-2 text-gray-500 hover:text-black"
>
  Rate contracts
</Link>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-white rounded-md">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm border-b">
                <th className="py-3 px-4 font-medium">Sl.No</th>
                <th className="py-3 px-4 font-medium">Library Name</th>
                <th className="py-3 px-4 font-medium">Type Of Library</th>
                <th className="py-3 px-4 font-medium">Created By</th>
                <th className="py-3 px-4 font-medium">Last Updated</th>
                <th className="py-3 px-4 font-medium text-center">Sections</th>
                <th className="py-3 px-4 font-medium text-center">Elements</th>
                <th className="py-3 px-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((item, index) => (
                <tr key={item.id} className="text-sm border-b hover:bg-gray-50">
                  <td className="py-4 px-4 text-gray-600">{index + 1}.</td>
                  <td className="py-4 px-4">
                    <Link
                      href={`/All-libraries/my-libraries/element-libraries/${item.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-blue-600">{item.type}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Avatar letter={item.createdBy.avatar} />
                      <div className="ml-2">
                        <div className="flex items-center">
                          <span>{item.createdBy.name},</span>
                        </div>
                        <div className="text-gray-500 text-xs">{item.createdBy.organization}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span>{item.updated}, by</span>
                      <div className="flex items-center ml-1">
                        <Avatar letter={item.updatedBy.avatar} />
                        <span className="ml-1">{item.updatedBy.name}</span>
                      </div>
                      <History className="ml-1 w-4 h-4 text-gray-400" />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">{item.sections}</td>
                  <td className="py-4 px-4 text-center">{item.elements}</td>
                  <td className="py-4 px-4 text-center">
                    <button>
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer Row */}
          <div className="py-3 px-4 flex justify-between items-center text-sm border-t">
            <div className="text-red-500 font-medium cursor-pointer">
              <Link href="/All-libraries/my-libraries/element-libraries/new">
                + Add New Library
              </Link>
            </div>
            <div className="font-medium">
              All Elements&nbsp;
              <span className="text-black font-bold">{totalElements}</span>
              <span className="text-xs text-gray-500 ml-1">(Unique Elements)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}