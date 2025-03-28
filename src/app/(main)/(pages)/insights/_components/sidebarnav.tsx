"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, PlusCircle } from "lucide-react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string;
    href: string;
    items?: { title: string; href: string }[];
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2" {...props}>
      {items.map((item) => {
        const isExpanded = pathname.startsWith(item.href);
        return (
          <div key={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between font-normal hover:bg-gray-100",
                pathname === item.href && "bg-gray-100"
              )}
              asChild
            >
              <Link href={item.href}>
                <span>{item.title}</span>
                {item.items && (
                  <>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </>
                )}
              </Link>
            </Button>
            {isExpanded && item.items && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                {item.items.map((subItem) => (
                  <Button
                    key={subItem.href}
                    variant="ghost"
                    className={cn(
                      "justify-start font-normal hover:bg-gray-100",
                      pathname === subItem.href && "bg-gray-100"
                    )}
                    asChild
                  >
                    <Link href={subItem.href}>{subItem.title}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <Button className="mt-4 w-full" variant="outline">
        <PlusCircle className="mr-2 h-4 w-4" />
        Create
      </Button>
    </nav>
  );
}