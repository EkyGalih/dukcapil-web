import { getClientCookie } from "./clientCookie";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function setAuthToken(token: string) {
    document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24}; sameSite=lax`;
}

export async function fetcher(endpoint: string, options: RequestInit = {}) {
   const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    ...options.headers,
   }

    const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    if (!res.ok) {
        // console.log(API_URL);
        throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}