import Link from "next/link";
import { Plane, Car, Package, Bike, Ticket, ShoppingBag } from "lucide-react";

const modules = [
  { href: "/vehicles", icon: ShoppingBag, title: "Vehicle & aircraft sales", text: "Cars, bikes and high-value assets with deposit or installments." },
  { href: "/rentals", icon: Car, title: "Car rental", text: "Daily hire with or without driver, deposit and extras." },
  { href: "/login", icon: Plane, title: "Flight booking", text: "One-way, return and multi-city (coming online with API keys)." },
  { href: "/login", icon: Ticket, title: "Train, bus & car tickets", text: "Seat selection and QR tickets." },
  { href: "/login", icon: Bike, title: "E-bike rides", text: "Scan, ride and pay from wallet." },
  { href: "/track", icon: Package, title: "Goods shipment", text: "Quote, book, track and deliver nationwide." },
];

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="container-app py-14">
      <h1 className="section-title">Services</h1>
      <p className="mt-2 text-slate-600">Everything under Hama Logistics — prices in ₦</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <Link key={m.title} href={m.href} className="card p-6 transition hover:-translate-y-1 hover:shadow-soft">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <m.icon className="h-5 w-5" />
            </div>
            <h2 className="font-semibold text-brand-900">{m.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{m.text}</p>
            <span className="btn-outline btn-sm mt-4 inline-flex">Get started</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
