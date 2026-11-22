import Link from "next/link";

const kpis = [
  { label: "Revenue (today)", value: "—" },
  { label: "Pending payments", value: "—" },
  { label: "Active shipments", value: "—" },
  { label: "Open support", value: "—" },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-900">Admin overview</h1>
        <p className="text-sm text-slate-500">Needs attention and key metrics</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="card p-4">
            <p className="text-xs font-medium uppercase text-slate-500">{k.label}</p>
            <p className="mt-1 text-2xl font-bold text-brand-900">{k.value}</p>
          </div>
        ))}
      </div>
      <div className="card p-5">
        <h2 className="font-semibold text-brand-900">Needs attention</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            <Link href="/admin/payments" className="text-brand-600 hover:underline">
              Pending payments queue →
            </Link>
          </li>
          <li>Unassigned shipments (connect DB to populate)</li>
          <li>Overdue installments</li>
        </ul>
      </div>
    </div>
  );
}
