"use client";

import { BarChart, Compass, DatabaseZap, FilePlus2, Layout, List, PackagePlus } from "lucide-react";

import { SidebarItem } from "./sidebar-item";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

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
    icon: Compass,
    label: "Manage Product",
    href: "/dashboard/product",
  },
  {
    icon: BarChart,
    label: "Manage Order",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const currentUser = useSession().data?.user;
  const currentUserRole = currentUser?.role;
  // const isAdmin = currentUserRole === "ADMIN";
  // TODO: Remove this line and uncomment the line above
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
