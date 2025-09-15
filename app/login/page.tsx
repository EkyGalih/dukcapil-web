"use client";

import { useState } from "react";
import { Button, Card, Checkbox, Label, TextInput, Alert, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { LoginAction } from "../actions/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await LoginAction(username, password);
      console.log(res);
      
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
              <Label htmlFor="username">Username</Label>
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="example@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Kata Sandi</Label>
            </div>
            <TextInput
              id="password"
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

          <Button color="green" type="submit">
            {loading ? (
              <>
                <Spinner aria-label="Loading..." color="white" size="sm" className="mr-2" />
                Loading...
              </>
            ) : (
              "Masuk"
            )
            }
          </Button>
        </form>
      </Card>
    </div>
  );
}
