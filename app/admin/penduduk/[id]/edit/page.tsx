"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPendudukById, updatePenduduk } from "@/lib/controllers/pendudukController";
import { Penduduk } from "@/lib/models/penduduk";
import {
    Button,
    Label,
    Radio,
    TextInput,
    Datepicker
} from "flowbite-react";

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
        <form className="grid w-full grid-cols gap-4 md:grid-cols-2">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nik" color="black">NIK</Label>
                </div>
                <TextInput id="nik" color="white" type="text" value={penduduk.nik} onChange={(e) => setPenduduk({ ...penduduk, nik: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nik" color="black">Urutan NIK</Label>
                </div>
                <TextInput id="nik" color="white" type="number" value={penduduk.urutan_nik} onChange={(e) => setPenduduk({ ...penduduk, urutan_nik: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nik" color="black">Jenis Kelamin</Label>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="flex items-center gap-2">
                        <Radio id="P" name="jenis_kelamin" color="white" value="P" checked={penduduk.jenis_kelamin === "P"} onChange={(e) => setPenduduk({ ...penduduk, jenis_kelamin: e.target.value })} />
                        <label htmlFor="P">Perempuan</label>
                        <Radio id="L" name="jenis_kelamin" color="white" value="L" checked={penduduk.jenis_kelamin === "L"} onChange={(e) => setPenduduk({ ...penduduk, jenis_kelamin: e.target.value })} />
                        <label htmlFor="L">Laki-laki</label>
                    </div>
                </div>
                <div className="mb-2 block">
                    <Label htmlFor="tempat_lahir" color="black">Tempat/Tanggal Lahir</Label>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex w-full items-center gap-2">
                        <TextInput id="tempat_lahir" color="white" type="text" value={penduduk.tempat_lahir} onChange={(e) => setPenduduk({ ...penduduk, tempat_lahir: e.target.value })} required />
                        <Datepicker id="tanggal_lahir" language="id" labelTodayButton="Hari Ini" labelClearButton="Hapus" value={penduduk.tanggal_lahir ? new Date(penduduk.tanggal_lahir) : undefined} onChange={(e: any) => setPenduduk({ ...penduduk, tanggal_lahir: e.detail.date.toISOString().slice(0, 10)})} />
                    </div>
                </div>
                <div className="mb-2 block">
                    <Label htmlFor="nik" color="black">NIK</Label>
                </div>
                <TextInput id="nik" color="white" type="text" value={penduduk.nik} onChange={(e) => setPenduduk({ ...penduduk, nik: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nik" color="black">NIK</Label>
                </div>
                <TextInput id="nik" color="white" type="text" value={penduduk.nik} onChange={(e) => setPenduduk({ ...penduduk, nik: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nik" color="black">NIK</Label>
                </div>
                <TextInput id="nik" color="white" type="text" value={penduduk.nik} onChange={(e) => setPenduduk({ ...penduduk, nik: e.target.value })} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="Kepala Keluarga" color="black">Kepala Keluarga</Label>
                </div>
                <TextInput id="kepala_keluarga" color="white" type="text" value={penduduk.keluarga?.nama_kepala_keluarga ?? "-"} onChange={(e) => setPenduduk({ ...penduduk, keluarga: { ...penduduk.keluarga, nama_kepala_keluarga: e.target.value } })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Label htmlFor="nama_lengkap" color="black">Nama Lengkap</Label>
                </div>
                <TextInput id="nama_lengkap" color="white" type="text" value={penduduk.nama_lengkap} onChange={(e) => setPenduduk({ ...penduduk, nama_lengkap: e.target.value })} required />
                <div className="mb-2 block">
                    <Button color="green" className="cursor-pointer">Submit</Button>
                </div>
            </div>
        </form>
    );
}