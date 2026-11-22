"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function TrackPage() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/shipments/track?number=${encodeURIComponent(number.trim())}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Not found");
      setResult(JSON.stringify(data.shipment || data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Tracking unavailable");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-accent-600 text-white">
        <div className="container-app py-16 sm:py-20 lg:py-24">
          <p className="text-sm text-white/70">Home / Track</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Track shipment</h1>
          <p className="mt-3 text-base text-brand-100 sm:text-lg">
            Enter your Hama tracking number to see live status
          </p>
        </div>
      </section>
      <div className="container-app py-12">
        <form onSubmit={onSubmit} className="card flex max-w-lg flex-col gap-3 p-5 sm:flex-row">
          <input
            className="input flex-1"
            placeholder="e.g. HL26…"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            <Search className="h-4 w-4" />
            {loading ? "Searching…" : "Track"}
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {result && (
          <pre className="card mt-4 max-w-2xl overflow-auto p-4 text-xs text-slate-700">{result}</pre>
        )}
      </div>
    </>
  );
}
