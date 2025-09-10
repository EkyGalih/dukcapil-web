"use server";

import { cookies } from "next/headers";

export async function setAuthToken(token: string) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "token",
        value: token,
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24
    });
}

export async function deleteAuthToken() {
    const cookieStore = await cookies();
    cookieStore.delete("token");
}