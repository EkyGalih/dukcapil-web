import "./../globals.css";

import MyNavbar from "@/components/Navbar";
import MySidebar from "@/components/Sidebar";
import MyFooter from "@/components/Footer";

import { getServerCookie } from "@/lib/serverCookie";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const token = await getServerCookie("token");
  if (!token) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar kiri */}
      <MySidebar />

      {/* Konten kanan */}
      <div className="flex flex-col flex-1 w-full">
        <MyNavbar />
        <main className="flex-1 w-full p-6 bg-gray-50">{children}</main>
        <MyFooter />
      </div>
    </div>
  );
}
