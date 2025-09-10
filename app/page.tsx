"use client";

import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function HomePage() {
    return (
        <main className="flex-1 flex items-center justify-center">
            <Breadcrumb aria-label="Default breadcrumb example">
                <BreadcrumbItem href="#" icon={HiHome}>
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                <BreadcrumbItem>Flowbite React</BreadcrumbItem>
            </Breadcrumb>
        </main>
    );
}
