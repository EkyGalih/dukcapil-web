"use client";

import { useEffect, useState } from "react";
import { Penduduk } from "@/lib/models/penduduk";
import Link from "next/link";
import { fetcher } from "@/lib/api";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    Pagination,
    Button,
    Spinner
} from "flowbite-react";

export default function PendudukPage() {
    const [penduduk, setPenduduk] = useState<Penduduk[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const loadData = async (page: number) => {
        setLoading(true);
        try {
            const data = await fetcher(`/penduduks?page=${page}&size=10`);
            if (Array.isArray(data)) {
                setPenduduk(data);
                setTotalPages(1);
            } else {
                setPenduduk(data.items);
                setTotalPages(data.pages);
            }
        } catch (err) {
            console.error("Gagal get penduduk: ", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData(page);
    }, [page]);

    if (loading) {
        return <div className="p-4 text-center">
            <Spinner aria-label="Loading data penduduk..." color="info" />
        </div>
    }

    return (
        <div className="overflow-x-auto">
            <h1 className="text-xl font-bold mb-4">Daftar Penduduk</h1>
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

            {/** Pagination */}
            <div className="flex justify-center mt-4">
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}