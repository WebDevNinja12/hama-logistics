"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function VehicleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    fetch(`/api/vehicles/${id}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setVehicle(d.vehicle);
      })
      .catch(() => setError("Could not load vehicle"));
  }, [id]);

  if (error) {
    return (
      <div className="container-app py-14 text-center">
        <p className="text-red-600">{error}</p>
        <Link href="/vehicles" className="btn-outline mt-4 inline-flex">
          Back
        </Link>
      </div>
    );
  }
  if (!vehicle) {
    return <div className="container-app py-14 text-center text-slate-500">Loading…</div>;
  }

  return (
    <div className="container-app py-14">
      <Link href="/vehicles" className="text-sm text-brand-600 hover:underline">
        ← All vehicles
      </Link>
      <h1 className="mt-4 text-2xl font-bold text-brand-900">
        {String(vehicle.year)} {String(vehicle.make)} {String(vehicle.model)}
      </h1>
      <p className="mt-2 text-xl font-semibold text-brand-700">
        ₦{Number(vehicle.price).toLocaleString("en-NG")}
      </p>
      <p className="mt-2 text-sm text-slate-600">
        {String(vehicle.location)} · {String(vehicle.condition || "")}
      </p>
      {vehicle.description ? (
        <p className="mt-4 max-w-2xl text-slate-600">{String(vehicle.description)}</p>
      ) : null}
      <Link href="/login" className="btn-primary mt-6 inline-flex">
        Sign in to purchase
      </Link>
    </div>
  );
}
