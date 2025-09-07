// app/lib/cookies.ts
import { cookies } from "next/headers";

/**
 * Ambil cookie di server component
 * @param name Nama cookie
 * @returns string | null
 */
export function getServerCookie(name: string): string | null {
  const cookieStore = cookies();
  return cookieStore.get(name)?.value || null;
}

/**
 * Set cookie di server component (hanya bisa lewat response headers)
 * @param name Nama cookie
 * @param value Nilai cookie
 * @param options Opsi tambahan seperti path, maxAge
 */
export function setServerCookie(
  name: string,
  value: string,
  options?: { path?: string; maxAge?: number }
) {
  const cookieStore = cookies();
  cookieStore.set({
    name,
    value,
    path: options?.path || "/",
    maxAge: options?.maxAge,
    httpOnly: true, // aman untuk server
    sameSite: "lax",
  });
}

/**
 * Hapus cookie di server
 * @param name Nama cookie
 */
export function deleteServerCookie(name: string) {
  const cookieStore = cookies();
  cookieStore.delete(name, { path: "/" });
}
