
'use client';

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectTable from "./_components/projecttable";
import { Bell, Settings } from "lucide-react";
import Projects from "@/components/icons/projects";
import Tasks from "@/components/icons/mytasks";
import Link from "next/link";
import { Sheet } from "@/components/ui/sheet";
import { SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";

const statusTabs = [
  { name: "All Projects", count: 2 },
  { name: "Project Created", count: 0 },
  { name: "Recce Pending", count: 0 },
  { name: "Design Pending", count: 0 },
  { name: "Design Freeze", count: 0 },
  { name: "Scope Approval Awaited", count: 0 },
  { name: "Partial Scope Approved", count: 0 },
  { name: "Execution In Progress", count: 2 },
  { name: "Execution Completed", count: 0 },
  { name: "Project Closed", count: 0 },
  { name: "Project On Hold", count: 0 },
  { name: "Project Cancelled", count: 0 }
];


  export default function DashboardPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<{
      projectName: string;
      client: string;
      businessCategory: string;
      addressLine1: string;
      addressLine2: string;
      country: string;
      state: string;
      city: string;
      zipcode: string;
      currency: string;
      taxType: string;
      timezone: string;
      clientPOCName: string;
      clientPOCNumber: string;
      recceDueDate: string;
      expectedStartDate: string;
      executionDueDate: string;
      assignedUser: string;
      userRole: string;
      documents: string[];
    }>({
      projectName: '',
      client: '',
      businessCategory: '',
      addressLine1: '',
      addressLine2: '',
      country: 'India',
      state: '',
      city: '',
      zipcode: '',
      currency: 'INR',
      taxType: 'GST',
      timezone: 'Asia/Kolkata',
      clientPOCName: '',
      clientPOCNumber: '',
      recceDueDate: '',
      expectedStartDate: '',
      executionDueDate: '',
      assignedUser: 'Nithesh',
      userRole: 'Admin',
      documents: [], // to hold document names or other data
    });
    
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Project submitted:', formData);
      setIsModalOpen(false);
    };
    const handleAddDocument = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files[0]) {
        const file = files[0]; // Get the selected file
      
      if (file) {
        // You can save the file's name or other details here
        setFormData((prevData) => ({
          ...prevData,
          documents: [...prevData.documents, file.name], // You can also store the file itself if needed
        }));
      }
    };
  };

    const removeDocument = (index: number) => {
      setFormData((prevData) => ({
        ...prevData,
        documents: prevData.documents.filter((_, i) => i !== index),
      }));
    };
    
    
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
          {/* Fixed Header */}
          <header className="bg-white border-b sticky top-0 z-30">
            <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold">My Projects</h1>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Tasks selected={false} width={19} height={19} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
                    N
                  </div>
                  <span>Nithesh</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 " style={{ backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-[1600px] mx-auto px-6">
              {/* Fixed Status Tabs and Action Buttons */}
              <div className="sticky top-[73px] bg-gray-50 z-20 py-4 border-b">
                <div className="flex items-center justify-between gap-4">
                  {/* Status tabs container */}
                  <div className="flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <div className="flex min-w-max">
                      {/* "All Projects" Tab */}
                      <button
                        key="All Projects"
                        className="whitespace-nowrap mr-[10px] px-6 py-2 flex items-center gap-2  text-red-600 border-b-2 border-red-600 sticky left-0 z-10 bg-gray-100"
                      >
                        All Projects
                        <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm">
                          2
                        </span>
                      </button>

                      {/* Container for the rest of the tabs */}
                      <div className="border-gray border-2  flex-1 flex ietms-center gap-2 shadow-lg overflow-hidden">
                        {statusTabs.slice(1).map((tab, index) => (
                          <button
                            key={tab.name}
                            className={`whitespace-nowrap px-6 py-2 flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-b-2 border-gray-200 ${
                              index < statusTabs.length - 2 ? "border-r-2" : ""
                            }`}
                          >
                            {tab.name}
                            <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm">
                              {tab.count}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="outline" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                    
                   <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2 sticky top-0 z-10" onClick={handleOpenModal}>
                    Add Project
                  </Button>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="py-4">
                <ProjectTable />
              </div>
            </div>
          </main>

        <Sheet open={isModalOpen}>
  <SheetContent className="py-0 w-[650px]  max-h-[100vh] overflow-y-auto">
    <SheetHeader>
      <SheetTitle className="py-4">Create Project</SheetTitle>
    </SheetHeader>
    <div className="grid grid-cols-2 gap-6 py-2 max-h-[100vh] overflow-y-auto pb-20">
      {/* Project Name */}
      <div className="mb-4 ">
        <label className="block mb-2">Project Name *</label>
        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Project Name" required />
      </div>
      {/* Client */}
      <div className="mb-4 ">
        <label className="block mb-2">Select Client *</label>
        <select name="client" value={formData.client} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="">Select Client</option>
        </select>
      </div>
      {/* Business Category */}
      <div className="mb-4 ">
        <label className="block mb-2">Business Category *</label>
        <input type="text" name="businessCategory" value={formData.businessCategory} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Business Category" required />
      </div>
      {/* Address Line 1 */}
      <div className="mb-4 ">
        <label className="block mb-2">Project Address Line 1 *</label>
        <input type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Address Line 1" required />
      </div>
      {/* Address Line 2 */}
      <div className="mb-4 ">
        <label className="block mb-2">Project Address Line 2</label>
        <input type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Address Line 2" />
      </div>
      {/* Country */}
      <div className="mb-4 ">
        <label className="block mb-2">Country *</label>
        <select name="country" value={formData.country} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="India">India</option>
        </select>
      </div>
      {/* State */}
      <div className="mb-4 ">
        <label className="block mb-2">State *</label>
        <select name="state" value={formData.state} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="">Select State</option>
        </select>
      </div>
      {/* City */}
      <div className="mb-4 ">
        <label className="block mb-2">City *</label>
        <select name="city" value={formData.city} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="">Select City</option>
        </select>
      </div>
      {/* Zipcode */}
      <div className="mb-2 ">
        <label className="block mb-2">Zipcode *</label>
        <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Zipcode" required />
      </div>
    </div>

    {/* Project Settings Section */}
    <div className="py-1">
      <h2 className="font-semibold text-lg mb-4">Project Settings</h2>
      {/* Currency */}
      <div className="mb-4">
        <label className="block mb-2">Currency *</label>
        <select name="currency" value={formData.currency} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="INR">Indian National Rupee (INR)</option>
        </select>
      </div>
      {/* Tax Type */}
      <div className="mb-4">
        <label className="block mb-2">Tax Type *</label>
        <select name="taxType" value={formData.taxType} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="GST">GST</option>
        </select>
      </div>
      {/* Timezone */}
      <div className="mb-4">
        <label className="block mb-2">Timezone *</label>
        <select name="timezone" value={formData.timezone} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="Asia/Kolkata">Asia/Kolkata</option>
        </select>
      </div>
    </div>

    {/* Client POC Details Section */}
    <div className="py-4">
      <h2 className="font-semibold text-lg mb-4">Client POC Details</h2>
      {/* Client POC Name */}
      <div className="mb-4">
        <label className="block mb-2">Client POC Name *</label>
        <input type="text" name="clientPOCName" value={formData.clientPOCName} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Client POC Name" required />
      </div>
      {/* Client POC Number */}
      <div className="mb-4">
        <label className="block mb-2">Client POC Number *</label>
        <input type="text" name="clientPOCNumber" value={formData.clientPOCNumber} onChange={handleChange} className="w-full p-3 border rounded-md" placeholder="Enter Client POC Number" required />
      </div>
    </div>

    {/* Important Dates Section */}
    <div className="py-4">
      <h2 className="font-semibold text-lg mb-4">Important Dates</h2>
      {/* Recce Due Date */}
      <div className="mb-4">
        <label className="block mb-2">Recce Due Date *</label>
        <input type="date" name="recceDueDate" value={formData.recceDueDate} onChange={handleChange} className="w-full p-3 border rounded-md" required />
      </div>
      {/* Expected Start Date */}
      <div className="mb-4">
        <label className="block mb-2">Expected Start Date *</label>
        <input type="date" name="expectedStartDate" value={formData.expectedStartDate} onChange={handleChange} className="w-full p-3 border rounded-md" required />
      </div>
      {/* Execution Due Date */}
      <div className="mb-4">
        <label className="block mb-2">Execution Due Date *</label>
        <input type="date" name="executionDueDate" value={formData.executionDueDate} onChange={handleChange} className="w-full p-3 border rounded-md" required />
      </div>
    </div>

    {/* Assign Project Users Section */}
    <div className="py-4">
      <h2 className="font-semibold text-lg mb-4">Assign Project Users</h2>
      <div className="mb-4">
        <label className="block mb-2">Select User *</label>
        <select name="assignedUser" value={formData.assignedUser} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="Nithesh">Nithesh</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select User Role *</label>
        <select name="userRole" value={formData.userRole} onChange={handleChange} className="w-full p-3 border rounded-md" required>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>

    {/* Documents and Attachments Section */}
    <div className="py-4">
  <h2 className="font-semibold text-lg mb-4">Documents and Attachments</h2>
  <div className="mb-4">
    <label htmlFor="documentUpload" className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer">
      + Add Document
    </label>
    <input
      id="documentUpload"
      type="file"
      onChange={handleAddDocument}
      className="hidden"
    />
  </div>
  {/* Display the added documents */}
  <div>
    {formData.documents.length > 0 ? (
      formData.documents.map((doc, index) => (
        <div key={index} className="flex justify-between items-center mb-2">
          <span>{doc}</span> {/* Display document name */}
          <button
            type="button"
            onClick={() => removeDocument(index)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))
    ) : (
      <p>No documents added.</p>
    )}
  </div>
</div>

    <SheetFooter className="sticky bottom-0 bg-white">
      <div className="flex justify-end gap-4 col-span-2 pb-3">
        <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-gray-100 rounded-lg">
          Cancel
        </button>
        <button type="submit" onClick={handleSubmit} className="px-4 py-2 bg-red-600 text-white rounded-lg">
          Create Project
        </button>
      </div>
    </SheetFooter>
  </SheetContent>
</Sheet>

        </div>
      </Suspense>
    );
  };
