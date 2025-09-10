import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sistem Kependudukan",
    description: "Sistem pencatatan kependudukan untuk daerah desa dasan lekong",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body className="min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}