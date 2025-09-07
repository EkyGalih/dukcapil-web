import "./../globals.css";

import MyNavbar from "@/components/Navbar";
import MySidebar from "@/components/Sidebar";
import MyFooter from "@/components/Footer";

import { getCookie } from "@/lib/cookies";
import { redirect } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const token = getCookie("token");
  if (!token) {
    redirect("/login");
  }
  
  return (
    <div className="h-screen">
      <MySidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <MyNavbar />
        <main className="flex-1 p-6 bg-grey-50">{children}</main>
        <MyFooter />
      </div>
    </div>
  );
}
