"use client";

import { BarChart, Compass, DatabaseZap, FilePlus2, Layout, List, PackagePlus } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const commonRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: DatabaseZap,
    label: "Stocks",
    href: "/dashboard/stocks",
  },
  {
    icon: List,
    label: "Orders",
    href: "/dashboard/orders",
  },
  {
    icon: PackagePlus,
    label: "Add Orders",
    href: "/dashboard/add-order",
  }
];

const adminRoutes = [
  {
    icon: FilePlus2,
    label: "Add Product",
    href: "/dashboard/product/add",
  },
  {
    icon: BarChart,
    label: "Manage Order",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const isAdmin = true;

  const routes = isAdmin ? [...commonRoutes, ...adminRoutes] : commonRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
