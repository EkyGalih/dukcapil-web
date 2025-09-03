export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetcher(endpoint, options = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if (!res.ok) {
        throw new Error("API error: "+ res.statusText);
    }

    return res.json();
}