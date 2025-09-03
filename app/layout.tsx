import type { Metadata } from "next";
import "./globals.css";
import MyNavbar from "@/components/Navbar";
import MySidebar from "@/components/Sidebar";
import MyFooter from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sistem Kependudukan",
  description: "Aplikasi pencatatan penduduk",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sistem Kependudukan</title>
      </head>
      <body className="flex">
        <MySidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <MyNavbar />
          <main className="flex-1 p-6 bg-grey-50">{children}</main>
          <MyFooter />
        </div>
      </body>
    </html>
  );
}
