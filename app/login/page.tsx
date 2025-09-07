"use client";

import { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput, Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { fetcher } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    try {
      const data = await fetcher("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Simpan token ke cookie (browser)
      document.cookie = `token=${data.access_token}; Path=/; Max-Age=${60 * 60 * 24
        }; Secure; SameSite=Lax`;

      router.push("/admin/dashboard");
    } catch (err: any) {
      const message = err?.message || err?.detail || "Login gagal. Perika kembali kredensial.";
      setError(message);
      console.error(err);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-center text-white">Login</h2>
          {
            error && (
              <Alert color="failure">
                <span className="font-medium">{error}</span>
              </Alert>
            )
          }
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Kata Sandi</Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Ingat saya</Label>
          </div>

          <Button color="green" type="submit">Masuk</Button>
        </form>
      </Card>
    </div>
  );
}
