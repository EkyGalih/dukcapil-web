"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPendudukById, updatePenduduk } from "@/lib/controllers/pendudukController";
import { Penduduk } from "@/lib/models/penduduk";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function EditPendudukPage() {
    const params = useParams();
    const id = Number(params.id);
    const [penduduk, setPenduduk] = useState<Penduduk | null>(null);

    useEffect(() => {
        const load = async () => {
            const data = await getPendudukById(id);
            setPenduduk(data);
        };
        load();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!penduduk) return;

        try {
            await updatePenduduk(id, penduduk);
            alert("Data updated successfully");
        } catch (err) {
            console.error(err);
            alert("Gagal update data");
        }
    };

    if (!penduduk) return <p>Loading...</p>

    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="nik">NIK</Label>
                </div>
                <TextInput id="nik" type="text" value={penduduk.nik} onChange={(e) => setPenduduk({ ...penduduk, nik: e.target.value })} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
}