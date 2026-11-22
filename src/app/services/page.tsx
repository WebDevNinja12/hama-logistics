import Link from "next/link";
import { Plane, Car, Package, Bike, Ticket, ShoppingBag } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";

const modules = [
  { href: "/vehicles", icon: ShoppingBag, title: "Vehicle & aircraft sales", text: "Cars, bikes and high-value assets with deposit or installments." },
  { href: "/rentals", icon: Car, title: "Car rental", text: "Daily hire with or without driver, deposit and extras." },
  { href: "/login?next=/dashboard/flights", icon: Plane, title: "Flight booking", text: "One-way, return and multi-city requests." },
  { href: "/login?next=/dashboard/tickets", icon: Ticket, title: "Train, bus & car tickets", text: "Seat selection and QR tickets." },
  { href: "/login?next=/dashboard/rides", icon: Bike, title: "E-bike rides", text: "Scan, ride and pay from wallet." },
  { href: "/track", icon: Package, title: "Goods shipment", text: "Quote, book, track and deliver nationwide." },
];

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our services"
        subtitle="Six modules under one account — prices in ₦"
        crumbs={[{ label: "Services" }]}
        tone="accent"
      />
      <div className="container-app py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
