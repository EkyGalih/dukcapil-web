import { getClientCookie } from "./clientCookie";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher(endpoint: string, options: RequestInit = {}) {
    let token: string | null = null;

    if (typeof window !== "undefined") {
        token = getClientCookie("token");
    }

    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {})
        },
        ...options,
    });

    if (!res.ok) {
        // console.log(API_URL);
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}