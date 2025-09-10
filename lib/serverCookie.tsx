// app/lib/cookies.ts
import { cookies } from "next/headers";

// ======================== SERVER ===================== //
export async function getServerCookie(name: string): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value || null;
}