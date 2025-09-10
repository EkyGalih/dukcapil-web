import type { Metadata } from "next";
import "../globals.css"; // kalau mau tetap pakai global css

export const metadata: Metadata = {
  title: "Login - Sistem Kependudukan",
  description: "Form login aplikasi",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 w-full bg-transparent">{children}</main>
  );
}
