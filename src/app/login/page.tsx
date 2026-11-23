"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import PasswordInput from "@/components/ui/PasswordInput";

function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/dashboard";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: fd.get("identifier"),
          password: fd.get("password"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      const role = data.user?.role;
      if (role === "ADMIN" || role === "SUPER_ADMIN") {
        router.push(next.startsWith("/admin") ? next : "/admin");
      } else {
        router.push(next.startsWith("/admin") ? "/dashboard" : next);
      }
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card w-full max-w-md p-6 sm:p-8">
      <h1 className="text-center text-xl font-bold text-primary">Sign in</h1>
      <p className="mt-1 text-center text-sm text-slate-500">Hama Logistics account</p>
      {error && (
        <p className="mt-4 rounded-control bg-danger-50 px-3 py-2 text-center text-sm text-danger-700">{error}</p>
      )}
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="label" htmlFor="identifier">Email or phone</label>
          <input id="identifier" name="identifier" className="input" required placeholder="you@example.com" autoComplete="username" />
        </div>
        <div>
          <label className="label" htmlFor="password">Password</label>
          <PasswordInput id="password" name="password" required autoComplete="current-password" />
        </div>
        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-500">
        New?{" "}
        <Link href={`/register?next=${encodeURIComponent(next)}`} className="font-semibold text-secondary">
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-primary-700 to-secondary text-white">
        <div className="container-app py-16 sm:py-20 lg:py-24">
          <p className="text-sm text-white/70">Home / Login</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Sign in</h1>
          <p className="mt-3 text-base text-white/80 sm:text-lg">Access your Hama Logistics account</p>
        </div>
      </section>
      <div className="container-app flex min-h-[50vh] items-center justify-center py-12">
        <Suspense fallback={<div className="text-slate-500">Loading…</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
}
