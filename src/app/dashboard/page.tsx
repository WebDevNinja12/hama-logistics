import Link from "next/link";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="container-app py-14">
      <h1 className="section-title">Dashboard</h1>
      <p className="mt-2 text-slate-600">
        Sign in to manage shipments, rentals, purchases and wallet.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { href: "/rentals", label: "Rent a car" },
          { href: "/vehicles", label: "Buy a vehicle" },
          { href: "/track", label: "Track shipment" },
          { href: "/login", label: "Sign in" },
          { href: "/register", label: "Create account" },
          { href: "/services", label: "All services" },
        ].map((l) => (
          <Link key={l.href + l.label} href={l.href} className="card p-5 font-medium text-brand-800 hover:bg-brand-50">
            {l.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
