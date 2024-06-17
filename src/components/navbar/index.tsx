"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { navbarConfig } from "@/config/navbar.config";

export default function Navbar() {
  return (
    <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground sticky sm:top-0 py-5 gap-1 z-50">
      {navbarConfig.map((item, index) => (
        <NavItem key={index} url={item.url}>
          {item.title}
        </NavItem>
      ))}
    </div>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  url: string;
};
const NavItem = ({ children, url }: NavItemProps) => {
  const pathname = usePathname();
  const active = pathname === url || (pathname.includes(url) && url !== "/");

  return (
    <Link href={url}>
      <div
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pebble",
          active && "bg-background text-foreground shadow"
        )}
      >
        {children}
      </div>
    </Link>
  );
};
