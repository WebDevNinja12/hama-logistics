"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fd = new FormData(e.currentTarget);
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
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-app flex min-h-[70vh] items-center justify-center py-12">
      <div className="card w-full max-w-md p-6 sm:p-8">
        <h1 className="text-center text-xl font-bold text-brand-900">Create account</h1>
        <p className="mt-1 text-center text-sm text-slate-500">Join Hama Logistics</p>
        {error && <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-center text-sm text-red-700">{error}</p>}
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
            <input name="email" type="email" className="input" placeholder="you@example.com" />
          </div>
          <div>
            <label className="label">Phone</label>
            <input name="phone" className="input" placeholder="+234…" />
          </div>
          <div>
            <label className="label">Password</label>
            <input name="password" type="password" className="input" required minLength={8} />
          </div>
          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? "Creating…" : "Create account"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
