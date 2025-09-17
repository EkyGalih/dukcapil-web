import { fetcher } from "../api";
import { Penduduk } from "../models/penduduk";

export async function getPenduduk(
    page = 1,
    size = 10,
    search?: string,
): Promise<{ items: Penduduk[]; pages: number }> {
    const params = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
    });

    if (search) {
        params.append("search", search);
    }

    const data = await fetcher(`/penduduk?${params.toString()}`);

    // kalau backend sudah return { items, pages }
    return {
        items: data.items,
        pages: data.pages,
    };
}

export async function getPendudukById(id: number): Promise<Penduduk> {
    return fetcher(`/penduduk/${id}`, {
        method: "GET",
        cache: 'no-store'
    })
}

export async function updatePenduduk(id: number, data: Partial<Penduduk>): Promise<Penduduk> {
    return fetcher(`/penduduk/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data)
    })
}