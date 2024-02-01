import { auth } from "@/auth";
import { Navbar } from "@/components/dashboard/nav";
import { Sidebar } from "@/components/dashboard/sidebar";
import { setAxiosAuthorization } from "@/lib/axios";
import { notFound, redirect } from "next/navigation";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const session = await auth();

  setAxiosAuthorization(session?.user.accessToken || null);
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        {children}
        </main>
    </div>
  );
}
