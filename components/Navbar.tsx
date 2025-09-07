"use client";

import { useEffect, useState } from "react";
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarToggle,
} from "flowbite-react";
import { fetcher } from "@/lib/api";
import { Profile } from "@/lib/models/profile";
import { getCookie, deleteCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";

export function MyNavbar() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function loadProfile() {
            const token = getCookie("token");
            if (!token) return;

            try {
                const me = await fetcher("/auth/me", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                setProfile(me);
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
        loadProfile();
    }, []);

    function handleSignOut() {
        deleteCookie("token");
        router.replace("/login");
    }

    return (
        <Navbar fluid className="rounded-none">
            <NavbarBrand href="/">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Data Kependudukan</span>
            </NavbarBrand>
            <div className="flex md:order-2 cursor-pointer">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">{profile?.full_name || "Guest"}</span>
                        <span className="block truncate text-sm font-medium">{profile?.email || "example@example.com"}</span>
                    </DropdownHeader>
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
        </Navbar>
    );
}

export default MyNavbar;