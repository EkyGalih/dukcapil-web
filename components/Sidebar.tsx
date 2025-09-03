
"use client";

import {
    Sidebar,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems
} from "flowbite-react";
import {
    HiChartPie,
    HiUserGroup,
    HiUser,
    HiBookOpen
} from "react-icons/hi";

export function MySidebar() {
    return (
        <div className="flex h-screen">
            <Sidebar aria-label="Pendudukan">
                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem href="#" icon={HiChartPie}>
                            Dashboard
                        </SidebarItem>
                        {/* <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
                            <SidebarItem href="#">Products</SidebarItem>
                            <SidebarItem href="#">Sales</SidebarItem>
                            <SidebarItem href="#">Refunds</SidebarItem>
                            <SidebarItem href="#">Shipping</SidebarItem>
                            </SidebarCollapse> */}
                        <SidebarItem href="#" icon={HiBookOpen}>
                            Pendataan
                        </SidebarItem>
                        <SidebarItem href="/penduduk" icon={HiUser}>
                            Penduduk
                        </SidebarItem>
                        <SidebarItem href="/keluarga" icon={HiUserGroup}>
                            Keluarga
                        </SidebarItem>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>
        </div>
    );
}

export default MySidebar;