"use server";

import { cookies } from "next/headers";

export interface LoginResponse {
    access_token: string;
    [key: string]: any;
}

export async function LoginAction(username: string, password: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    let data: any;
    try {
        data = await res.json();
    } catch {
        data = null;
    }
    if (!res.ok) {
        const errorDetail = data?.message || res.statusText || "Unknown error";
        throw new Error(`Login gagal:${errorDetail}`);
    }

    // set cookie on server
    if (data?.access_token) {
        await setAuthToken(data.access_token);
    }

    return data as LoginResponse;
}

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

export async function gerServcerCookieToken(): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get("token")?.value || null;
}