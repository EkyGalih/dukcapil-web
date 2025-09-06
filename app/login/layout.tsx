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
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
      </head>
      <body className="min-h-screen flex items-center justify-center bg-gray-50">
        {children}
      </body>
    </html>
  );
}
