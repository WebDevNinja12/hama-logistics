"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type V = {
  id: string;
  year: number;
  make: string;
  model: string;
  price: number;
  location: string;
  category: string;
  image: string | null;
};

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<V[]>([]);
  const [error, setError] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    fetch(`/api/vehicles?${params}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else {
          setError("");
          setVehicles(d.vehicles || []);
        }
      })
      .catch(() => setError("Could not load vehicles"));
  }, [q]);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-950 via-brand-800 to-brand-600 text-white">
        <div className="container-app py-16 sm:py-20 lg:py-24">
          <p className="text-sm text-white/70">Home / Vehicles</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Vehicles for sale</h1>
          <p className="mt-3 text-base text-brand-100 sm:text-lg">
            Cars, bikes and more — prices in ₦. Login required to buy or enquire.
          </p>
        </div>
      </section>
      <div className="container-app py-10">
        <input
          className="input max-w-md"
          placeholder="Search make or model"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {error && (
          <p className="mt-4 text-sm text-amber-700">
            {error}. Connect the database to load live listings.
          </p>
        )}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v) => (
            <Link key={v.id} href={`/vehicles/${v.id}`} className="card p-4 hover:shadow-soft">
              <p className="font-semibold text-brand-900">
                {v.year} {v.make} {v.model}
              </p>
              <p className="text-brand-700">₦{Number(v.price).toLocaleString("en-NG")}</p>
              <p className="text-xs text-slate-500">
                {v.location} · {v.category}
              </p>
            </Link>
          ))}
        </div>
        {!error && vehicles.length === 0 && (
          <p className="card mt-6 p-6 text-center text-slate-500">No listings yet. Check back soon.</p>
        )}
      </div>
    </>
  );
}
