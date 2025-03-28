import { Sailboat } from "lucide-react";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Sailboat className="h-24 w-24 text-gray-200" />
      <p className="mt-4 text-lg text-gray-500">No results!</p>
    </div>
  );
}