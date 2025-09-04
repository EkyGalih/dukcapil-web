export interface Keluarga {
    id: number;
    nama_kepala_keluarga: string;
}

export interface Pendidikan {
    id: number;
    pendidikan_terakhir: string;
    pendidikan_sedang_ditempuh?: string;
}

export interface Kesehatan {
    id: number;
    jaminan_sosial_kesehatan: string;
}

export interface Penduduk {
    id: number;
    keluarga_id: number;
    urutan_nik: number;
    nik: string;
    nama_lengkap: string;
    jenis_kelamin: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    agama: string;
    status_pernikahan: string;
    duda_janda: string;
    golongan_darah: string;
    pekerjaan: string;
    nama_ayah: string;
    nama_ibu: string;
    hubungan_dalam_keluarga: string;
    created_at: string;
    updated_at: string;

    keluarga?: Keluarga;
    pendidikan?: Pendidikan;
    kesehatan?: Kesehatan;
}