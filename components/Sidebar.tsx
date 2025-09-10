"use client";

import {
  Sidebar,
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
    <div className="w-64 flex-shrink-0 h-screen">
      <Sidebar aria-label="Pendudukan" className="h-full rounded-none">
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem href="/admin/dashboard" icon={HiChartPie}>
              Dashboard
            </SidebarItem>
            <SidebarItem href="#" icon={HiBookOpen}>
              Pendataan
            </SidebarItem>
            <SidebarItem href="/admin/penduduk" icon={HiUser}>
              Penduduk
            </SidebarItem>
            <SidebarItem href="/admin/keluarga" icon={HiUserGroup}>
              Keluarga
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
    </div>
  );
}

export default MySidebar;
