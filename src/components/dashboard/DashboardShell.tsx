"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Car,
  ShoppingBag,
  Plane,
  Ticket,
  Bike,
  Wallet,
  CreditCard,
  Heart,
  LifeBuoy,
  User,
  Bell,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "My orders", icon: Package },
  { href: "/dashboard/shipments", label: "Shipments", icon: Package },
  { href: "/dashboard/purchases", label: "Vehicle purchases", icon: ShoppingBag },
  { href: "/dashboard/rentals", label: "Rentals", icon: Car },
  { href: "/dashboard/flights", label: "Flights", icon: Plane },
  { href: "/dashboard/tickets", label: "Tickets", icon: Ticket },
  { href: "/dashboard/rides", label: "E-bike rides", icon: Bike },
  { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/wishlist", label: "Wishlist", icon: Heart },
  { href: "/dashboard/support", label: "Support", icon: LifeBuoy },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

const mobileTabs = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/dashboard/orders", label: "Orders", icon: Package },
  { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

export default function DashboardShell({
  children,
  userName,
  walletBalance,
}: {
  children: React.ReactNode;
  userName?: string;
  walletBalance?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[70vh] bg-slate-50">
      <div className="border-b border-slate-200 bg-white">
        <div className="container-app flex h-14 items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-600 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <p className="text-sm font-semibold text-brand-900">
              {userName ? `Hi, ${userName}` : "My account"}
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="hidden rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-800 sm:inline">
              Wallet {walletBalance || "₦0.00"}
            </span>
            <Link href="/dashboard/notifications" className="relative rounded-lg p-2 text-slate-600 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
            </Link>
            <Link href="/dashboard/profile" className="rounded-lg p-2 text-slate-600 hover:bg-slate-100">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-app flex gap-6 py-6 pb-24 lg:pb-10">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 bg-white p-4 pt-20 transition lg:static lg:z-0 lg:block lg:w-56 lg:shrink-0 lg:rounded-2xl lg:border lg:pt-4",
            open ? "block" : "hidden lg:block"
          )}
        >
          <nav className="space-y-0.5">
            {nav.map((item) => {
              const active =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition",
                    active
                      ? "bg-brand-600 text-white"
                      : "text-slate-600 hover:bg-brand-50 hover:text-brand-800"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        {open && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/30 lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
        )}
        <div className="min-w-0 flex-1">{children}</div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white lg:hidden">
        <div className="mx-auto flex max-w-lg justify-around px-2 py-2">
          {mobileTabs.map((t) => {
            const active =
              t.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1 text-[10px] font-medium",
                  active ? "text-brand-600" : "text-slate-500"
                )}
              >
                <t.icon className="h-5 w-5" />
                {t.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
