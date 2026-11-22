import Link from "next/link";
import { Car, ShoppingBag, Package, Wallet, Ticket, Plane } from "lucide-react";

export const metadata = { title: "Dashboard" };

const actions = [
  {
    href: "/vehicles",
    label: "Buy a vehicle",
    desc: "Browse cars, bikes and high-value assets",
    icon: ShoppingBag,
  },
  {
    href: "/rentals",
    label: "Rent a car",
    desc: "Search by location and dates",
    icon: Car,
  },
  {
    href: "/track",
    label: "Track shipment",
    desc: "Enter your tracking number",
    icon: Package,
  },
  {
    href: "/services",
    label: "All services",
    desc: "Flights, tickets, e-bikes and more",
    icon: Plane,
  },
  {
    href: "/login",
    label: "Sign in",
    desc: "Access wallet, bookings and payments",
    icon: Wallet,
  },
  {
    href: "/register",
    label: "Create account",
    desc: "New customer registration",
    icon: Ticket,
  },
];

export default function DashboardPage() {
  return (
    <div className="container-app py-14">
      <h1 className="section-title">Dashboard</h1>
      <p className="mt-2 text-slate-600">
        Bookings and tools — vehicles, rentals and tracking live here.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((a) => (
          <Link
            key={a.href + a.label}
            href={a.href}
            className="card flex gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <a.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-brand-900">{a.label}</p>
              <p className="mt-0.5 text-sm text-slate-500">{a.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
