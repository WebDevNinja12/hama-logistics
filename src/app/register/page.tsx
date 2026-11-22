"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function RegisterForm() {
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
    if (!fd.get("terms")) {
      setError("You must accept the terms");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fd.get("firstName"),
          lastName: fd.get("lastName"),
          email: fd.get("email") || undefined,
          phone: fd.get("phone") || undefined,
          password: fd.get("password"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      router.push(next.startsWith("/admin") ? "/dashboard" : next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card w-full max-w-md p-6 sm:p-8">
      <h1 className="text-center text-xl font-bold text-brand-900">Create account</h1>
      <p className="mt-1 text-center text-sm text-slate-500">Customer registration only</p>
      {error && (
        <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-center text-sm text-red-700">{error}</p>
      )}
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">First name</label>
            <input name="firstName" className="input" required />
          </div>
          <div>
            <label className="label">Last name</label>
            <input name="lastName" className="input" required />
          </div>
        </div>
        <div>
          <label className="label">Email</label>
          <input name="email" type="email" className="input" required placeholder="you@example.com" />
        </div>
        <div>
          <label className="label">Phone</label>
          <input name="phone" className="input" required placeholder="+234…" />
        </div>
        <div>
          <label className="label">Password</label>
          <input name="password" type="password" className="input" required minLength={8} />
        </div>
        <label className="flex items-start gap-2 text-sm text-slate-600">
          <input name="terms" type="checkbox" className="mt-1" required />
          <span>
            I accept the{" "}
            <Link href="/terms" className="text-brand-600 hover:underline">terms</Link> and{" "}
            <Link href="/privacy" className="text-brand-600 hover:underline">privacy policy</Link>
          </span>
        </label>
        <button type="submit" className="btn-primary w-full" disabled={loading}>
          {loading ? "Creating…" : "Create account"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href={`/login?next=${encodeURIComponent(next)}`} className="font-semibold text-brand-600">
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-accent-600 text-white">
        <div className="container-app py-10 sm:py-12">
          <p className="text-xs text-white/70">Home / Register</p>
          <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">Create account</h1>
          <p className="mt-1 text-sm text-brand-100">Customer registration — full name, email, phone</p>
        </div>
      </section>
      <div className="container-app flex min-h-[50vh] items-center justify-center py-12">
        <Suspense fallback={<div className="text-slate-500">Loading…</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </>
  );
}
