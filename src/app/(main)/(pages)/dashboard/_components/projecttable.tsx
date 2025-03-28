

// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const projects = [
  {
    id: 1,
    jobId: "SUBHA26737",
    Projectname: "Unified Villa Inventory – 52/...",
    Clientname: "Subha Developers",
    BusinessCategory: "Parent Project",
    country: "India",
    state: "Karnataka",
    city: "Bangalore",
    projectState: "Execution In Progress",
    projectestimate: "1,00,00,000",
    recceduedate: "-",
    createdon: "3 Mar 2025",
    executionduedate: "-",
    actualcompletiondate: "-",
    createdby: "Darshith M",
    Reccecompletiondate: "-",
    currency: "INR",
    taxType: "GST",
    timezone: "Asia/Kolkata",
    scopeProgress: 0,
    scheduleProgress: 0,
    phase: "Subha 1",
  },
  {
    id: 2,
    jobId: "SUBHA26737",
    Projectname: "Unified Villa Inventory – 52/...",
    Clientname: "Subha Developers",
    BusinessCategory: "Parent Project",
    country: "India",
    state: "Karnataka",
    city: "Bangalore",
    projectState: "Execution In Progress",
    projectestimate: "1,00,00,000",
    recceduedate: "-",
    createdon: "3 Mar 2025",
    executionduedate: "-",
    actualcompletiondate: "-",
    createdby: "Darshith M",
    Reccecompletiondate: "-",
    currency: "INR",
    taxType: "GST",
    timezone: "Asia/Kolkata",
    scopeProgress: 0,
    scheduleProgress: 0,
    phase: "Subha 1",
  },
  
  // ... second project data remains the same
];

const ProjectTable = () => {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="relative">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                {/* Fixed columns */}
                <th className="sticky left-0 bg-white z-20 p-4 text-left font-medium text-sm w-20 min-w-[90px] overflow-hidden"> 
  {/* ID column */}
  <Input placeholder="Sl.No" className="h-9" />
</th>
<th className="sticky left-[90px] bg-white z-20 p-4 text-left font-medium text-sm w-32 min-w-[120px] overflow-hidden"> 
  {/* Job Id column */}
  <Input placeholder="Job Id" className="h-9" />
</th>
<th className="sticky left-[218px] bg-white z-20 p-4 text-left font-medium text-sm w-64 min-w-[200px] overflow-hidden"> 
  {/* Project Name column */}
  <Input placeholder="Project Name" className="h-9" />
</th>             
                {/* Scrollable columns */}
                <th className="p-4 text-left font-medium text-sm min-w-[150px]">
                  <Input placeholder="Client Name" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[180px]">
                  <Input placeholder="Business Category" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[120px]">
                  <Input placeholder="Country" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[120px]">
                  <Input placeholder="State" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[150px]">
                  <Input placeholder="City" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[200px]">
                  <Input placeholder="Project State" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[180px]">
                  <Input placeholder="Project Estimate" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[180px]">
                  <Input placeholder="Recce Due Date" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[150px]">
                  <Input placeholder="Created On" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[200px]">
                  <Input placeholder="Execution Due Date" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[230px]">
                  <Input placeholder="Actual Completion Date" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[150px]">
                  <Input placeholder="Created By" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[220px]">
                  <Input placeholder="Recce Completion Date" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[120px]">
                  <Input placeholder="Currency" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[120px]">
                  <Input placeholder="Tax Type" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[150px]">
                  <Input placeholder="Timezone" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[180px]">
                  <Input placeholder="Scope Progress" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[180px]">
                  <Input placeholder="Schedule Progress" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[180px]">
                  <Input placeholder="Phase" className="h-9" />
                </th>
                <th className="p-4 text-left font-medium text-sm min-w-[80px] sticky right-0 bg-white z-20 p-4 w-16">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
           
            <tbody>
  {projects.map((project) => (
    <tr key={project.id} className="border-b bg-white">
      {/* Fixed columns */}
      <td className="sticky left-0 bg-inherit z-20 p-4 w-20 min-w-[80px] whitespace-nowrap overflow-hidden text-ellipsis">{project.id}</td>
<td className="sticky left-[90px] bg-inherit z-20 p-4 w-32 min-w-[120px] whitespace-nowrap overflow-hidden text-ellipsis">{project.jobId}</td>
<td className="sticky left-[218px] bg-inherit z-20 p-4 w-64 min-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis">{project.Projectname}</td>



      <td className="p-4 text-center">{project.Clientname}</td>
<td className="p-4 text-center">{project.BusinessCategory}</td>
<td className="p-4 text-center">{project.country}</td>
<td className="p-4 text-center">{project.state}</td>
<td className="p-4 text-center">{project.city}</td>
<td className="p-4 text-center">{project.projectState}</td>
<td className="p-4 text-center">{project.projectestimate}</td>
<td className="p-4 text-center">{project.recceduedate}</td>
<td className="p-4 text-center">{project.createdon}</td>
<td className="p-4 text-center">{project.executionduedate}</td>
<td className="p-4 text-center">{project.actualcompletiondate}</td>
<td className="p-4 text-center">{project.createdby}</td>
<td className="p-4 text-center">{project.Reccecompletiondate}</td>
<td className="p-4 text-center">{project.currency}</td>
<td className="p-4 text-center">{project.taxType}</td>
<td className="p-4 text-center">{project.timezone}</td>
<td className="p-4 text-center">
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Scope Progress</span>
      <span>{project.scopeProgress}%</span>
    </div>
    <Progress value={project.scopeProgress} />
  </div>
</td>
<td className="p-4 text-center">
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>Schedule Progress</span>
      <span>{project.scheduleProgress}%</span>
    </div>
    <Progress value={project.scheduleProgress} />
  </div>
</td>
<td className="p-4 text-center">{project.phase}</td>

      <td className="sticky right-0 bg-white z-20 p-4 w-16">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreVertical className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</td>

    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;