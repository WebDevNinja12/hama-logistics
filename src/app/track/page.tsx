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
    <div className="container-app py-14">
      <h1 className="section-title">Track shipment</h1>
      <p className="mt-2 text-slate-600">Enter your Hama tracking number</p>
      <form onSubmit={onSubmit} className="card mt-8 flex max-w-lg flex-col gap-3 p-5 sm:flex-row">
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
  );
}
