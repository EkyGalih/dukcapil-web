export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher(endpoint: string, options: RequestInit = {}) {
    let token = "";
    if (typeof document !== "undefined") {
        const match = document.cookie.match(/(^| )token=([^;]+)/);
        if (match) token = match[2];
    }

    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}`} : {}),
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