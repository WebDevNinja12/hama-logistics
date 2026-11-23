"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Truck,
  ChevronDown,
  ShoppingBag,
  Car,
  Plane,
  Ticket,
  Bike,
  Package,
} from "lucide-react";

const serviceLinks = [
  { href: "/vehicles", label: "Buy a vehicle", icon: ShoppingBag },
  { href: "/rentals", label: "Rent a car", icon: Car },
  { href: "/login?next=/dashboard/flights", label: "Flights", icon: Plane },
  { href: "/login?next=/dashboard/tickets", label: "Tickets", icon: Ticket },
  { href: "/login?next=/dashboard/rides", label: "E-bike", icon: Bike },
  { href: "/track", label: "Ship goods", icon: Package },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-white/95 backdrop-blur">
      <div className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-primary">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow">
            <Truck className="h-4 w-4" strokeWidth={1.75} aria-hidden />
          </span>
          <span>
            Hama <span className="text-secondary">Logistics</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            </button>
            {servicesOpen && (
              <>
                <button
                  type="button"
                  className="fixed inset-0 z-40 cursor-default"
                  aria-label="Close menu"
                  onClick={() => setServicesOpen(false)}
                />
                <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-card border border-surface-border bg-white p-2 shadow-card">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 rounded-control px-3 py-2.5 text-sm text-slate-700 hover:bg-primary-50"
                      onClick={() => setServicesOpen(false)}
                    >
                      <s.icon className="h-4 w-4 text-secondary" strokeWidth={1.75} aria-hidden />
                      {s.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="mt-1 block rounded-control px-3 py-2 text-sm font-semibold text-secondary hover:bg-primary-50"
                    onClick={() => setServicesOpen(false)}
                  >
                    All services
                  </Link>
                </div>
              </>
            )}
          </div>
          <Link
            href="/track"
            className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-primary-50 hover:text-primary"
          >
            Track
          </Link>
          <Link href="/dashboard" className="btn-ghost btn-sm ml-1">
            Dashboard
          </Link>
          <Link href="/login" className="btn-primary btn-sm ml-1">
            Login
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-control text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-6 w-6" strokeWidth={1.75} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.75} />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface-border bg-white px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-control px-3 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Services
          </p>
          {serviceLinks.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center gap-2 rounded-control px-3 py-3 text-sm text-slate-700 hover:bg-primary-50"
              onClick={() => setOpen(false)}
            >
              <s.icon className="h-4 w-4 text-secondary" strokeWidth={1.75} aria-hidden />
              {s.label}
            </Link>
          ))}
          <Link
            href="/track"
            className="block rounded-control px-3 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50"
            onClick={() => setOpen(false)}
          >
            Track shipment
          </Link>
          <Link
            href="/dashboard"
            className="block rounded-control px-3 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link href="/login" className="btn-primary mt-2 w-full" onClick={() => setOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
