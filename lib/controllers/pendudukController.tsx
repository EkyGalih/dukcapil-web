import { Penduduk } from "../models/penduduk";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/penduduks";

export async function getPenduduk(): Promise<Penduduk[]> {
    const res = await fetch(API_URL, {cache: 'no-store'});
    if (!res.ok) {
        throw new Error("Gagal mengambil data penduduk");
    }

    return res.json();
}

export async function getPendudukById(id: number): Promise<Penduduk> {
    const res = await fetch(`${API_URL}/${id}/detail`, { cache: "no-store"});
    if (!res.ok) {
        throw new Error(`Gagal mengambil data penduduk dengan ID ${id}`);
    }

    return res.json()
}

export async function updatePenduduk(id: number, data: Partial<Penduduk>): Promise<Penduduk> {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error(`Gagal memperbarui data penduduk dengan ID ${id}`);
    }

    return res.json();
}