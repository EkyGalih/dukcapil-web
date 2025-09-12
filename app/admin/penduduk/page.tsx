"use client";

import { useEffect, useState } from "react";
import { Penduduk } from "@/lib/models/penduduk";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    Pagination,
    Button,
    Spinner,
    TextInput,
    Label
} from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { getPenduduk } from "@/lib/controllers/pendudukController";

export default function PendudukPage() {
    const [penduduk, setPenduduk] = useState<Penduduk[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");

    const loadData = async (page: number, searchText?: string) => {
        setLoading(true);
        try {
            const data = await getPenduduk(page, 10, searchText);
            setPenduduk(data.items);
            setTotalPages(data.pages > 0 ? data.pages : 1);
        } catch (err) {
            console.error("Gagal get penduduk: ", err);
            setPenduduk([]);
            setTotalPages(1);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData(page, search);
    }, [page]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setPage(1);
        loadData(1, search);
    };

    if (loading) {
        return <div className="p-4 text-center">
            <Spinner aria-label="Loading data penduduk..." color="info" />
        </div>
    }

    return (
        <div className="overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold">Daftar Penduduk</h1>
                <div className="max-w-md w-full">
                    <form className="flex gap-2 w-full max-w-md" onSubmit={handleSearch}>
                        <div className="mb-2 block">
                            <Label htmlFor="search">Cari Penduduk</Label>
                        </div>
                        <TextInput id="search" type="text" icon={HiSearch} value={search} onChange={e => setSearch(e.target.value)} placeholder="cari penduduk" color="white" />
                        <Button color="alternative" className="cursor-pointer" type="submit">Cari</Button>
                    </form>
                </div>
            </div>
            {penduduk.length === 0 ? (
                <p className="text-center text-gray-500">Tidak ada data ditemukan</p>
            ) : (
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>#</TableHeadCell>
                            <TableHeadCell>NIK</TableHeadCell>
                            <TableHeadCell>Nama Lengkap</TableHeadCell>
                            <TableHeadCell>Jenis Kelamin</TableHeadCell>
                            <TableHeadCell>Tempat, Tanggal Lahir</TableHeadCell>
                            <TableHeadCell>Agama</TableHeadCell>
                            <TableHeadCell>Pekerjaan</TableHeadCell>
                            <TableHeadCell>Hubungan Keluarga</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Edit</span>
                            </TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {penduduk.map((p, i) => (
                            <TableRow key={p.id}>
                                <TableCell>{i + 1}</TableCell>
                                <TableCell>{p.nik}</TableCell>
                                <TableCell>{p.nama_lengkap}</TableCell>
                                <TableCell>{p.jenis_kelamin}</TableCell>
                                <TableCell>
                                    {p.tempat_lahir}, {p.tanggal_lahir}
                                </TableCell>
                                <TableCell>{p.agama}</TableCell>
                                <TableCell>{p.pekerjaan}</TableCell>
                                <TableCell>{p.hubungan_dalam_keluarga}</TableCell>
                                <TableCell>
                                    {/* <a href={`/penduduk/${p.id}/edit`} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Edit
                                </a> */}
                                    <Link href={`/admin/penduduk/${p.id}/edit`}>
                                        <Button className="cursor-pointer" color="yellow">Edit</Button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            {/** Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={setPage}
                        className="cursor-pointer"
                    />
                </div>
            )}
        </div>
    );
}