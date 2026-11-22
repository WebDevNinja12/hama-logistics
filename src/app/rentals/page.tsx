"use client";

import { useState } from "react";
import Link from "next/link";

type Vehicle = {
  id: string;
  make: string;
  model: string;
  year: number;
  location: string;
  rentPerDay: number;
  deposit: number;
  image: string | null;
};

export default function RentalsPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ location: "Lagos", pickup: "", dropoff: "" });

  async function search(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({
        location: form.location,
        pickup: form.pickup ? new Date(form.pickup).toISOString() : "",
        dropoff: form.dropoff ? new Date(form.dropoff).toISOString() : "",
      });
      const res = await fetch(`/api/rentals/search?${params}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Search failed");
      setVehicles(data.vehicles || []);
      if (!(data.vehicles || []).length) {
        setError("No vehicles found for those dates (or database not connected yet).");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
      setVehicles([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-accent-600 text-white">
        <div className="container-app py-10 sm:py-12">
          <p className="text-xs text-white/70">Home / Rentals</p>
          <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">Car rental</h1>
          <p className="mt-1 text-sm text-brand-100">Search by location and dates — login to book</p>
        </div>
      </section>
      <div className="container-app py-10">
        <form onSubmit={search} className="card grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="label">Location</label>
            <input
              className="input"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="label">Pick-up</label>
            <input
              type="datetime-local"
              className="input"
              value={form.pickup}
              onChange={(e) => setForm({ ...form, pickup: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="label">Drop-off</label>
            <input
              type="datetime-local"
              className="input"
              value={form.dropoff}
              onChange={(e) => setForm({ ...form, dropoff: e.target.value })}
              required
            />
          </div>
          <div className="flex items-end">
            <button type="submit" className="btn-primary w-full" disabled={loading}>
              {loading ? "Searching…" : "Search"}
            </button>
          </div>
        </form>
        {error && <p className="mt-4 text-sm text-amber-700">{error}</p>}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <div key={v.id} className="card p-4">
              <p className="font-semibold text-brand-900">
                {v.year} {v.make} {v.model}
              </p>
              <p className="text-brand-700">₦{v.rentPerDay.toLocaleString("en-NG")}/day</p>
              <p className="text-xs text-slate-500">
                {v.location} · deposit ₦{v.deposit.toLocaleString("en-NG")}
              </p>
              <Link href="/login?next=/rentals" className="btn-primary btn-sm mt-3 inline-flex">
                Sign in to book
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
