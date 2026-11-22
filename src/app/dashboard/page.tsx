import Link from "next/link";
import {
  Package,
  Car,
  ShoppingBag,
  Plane,
  Ticket,
  Bike,
  CreditCard,
  Bell,
} from "lucide-react";
import { getSession } from "@/lib/auth";

const quick = [
  { href: "/dashboard/shipments", label: "Ship goods", icon: Package },
  { href: "/rentals", label: "Rent a car", icon: Car },
  { href: "/vehicles", label: "Browse vehicles", icon: ShoppingBag },
  { href: "/dashboard/flights", label: "Request flight", icon: Plane },
  { href: "/dashboard/tickets", label: "Buy ticket", icon: Ticket },
  { href: "/dashboard/rides", label: "Ride e-bike", icon: Bike },
];

export default async function DashboardOverviewPage() {
  const session = await getSession();
  const name = session?.name?.split(" ")[0] || "there";

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-900">Welcome, {name}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage bookings, payments and shipments from one place.
        </p>
      </div>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Quick actions
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {quick.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="card flex flex-col items-start gap-2 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <q.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-brand-900">{q.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="card p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-900">
            <Package className="h-4 w-4" /> Active shipments
          </div>
          <p className="text-sm text-slate-500">No active shipments yet.</p>
          <Link href="/dashboard/shipments" className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline">
            Start a shipment →
          </Link>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-900">
            <CreditCard className="h-4 w-4" /> Pending payments
          </div>
          <p className="text-sm text-slate-500">Nothing awaiting confirmation.</p>
          <Link href="/dashboard/payments" className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline">
            View payments →
          </Link>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-900">
            <Car className="h-4 w-4" /> Upcoming rentals
          </div>
          <p className="text-sm text-slate-500">No upcoming rentals.</p>
          <Link href="/dashboard/rentals" className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline">
            Browse fleet →
          </Link>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-900">
            <Bell className="h-4 w-4" /> Notifications
          </div>
          <p className="text-sm text-slate-500">You&apos;re all caught up.</p>
          <Link href="/dashboard/notifications" className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline">
            Open inbox →
          </Link>
        </div>
      </section>
    </div>
  );
}
