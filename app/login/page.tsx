"use client";

import { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { fetcher } from "@/lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const data = await fetcher("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Simpan token ke cookie (browser)
      document.cookie = `token=${data.access_token}; Path=/; Max-Age=${60 * 60 * 24
        }; Secure; SameSite=Lax`;

      router.push("/dashboard");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
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
            <Label htmlFor="remember">Remember me</Label>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}
