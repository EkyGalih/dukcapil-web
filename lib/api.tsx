import { getClientCookie } from "./clientCookie";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher(endpoint: string, options: RequestInit = {}) {
    const token = getClientCookie("token");
    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
    }

    const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    if (!res.ok) {
        // console.log(API_URL);
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}