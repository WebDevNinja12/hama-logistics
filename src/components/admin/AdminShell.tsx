"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CreditCard,
  Package,
  Users,
  Car,
  ShoppingBag,
  Plane,
  Ticket,
  Bike,
  Settings,
  ClipboardList,
  LifeBuoy,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/payments", label: "Pending payments", icon: CreditCard },
  { href: "/admin/orders", label: "Orders", icon: ClipboardList },
  { href: "/admin/shipments", label: "Shipments", icon: Package },
  { href: "/admin/vehicles", label: "Vehicles", icon: ShoppingBag },
  { href: "/admin/rentals", label: "Rental fleet", icon: Car },
  { href: "/admin/flights", label: "Flights", icon: Plane },
  { href: "/admin/tickets", label: "Tickets & routes", icon: Ticket },
  { href: "/admin/rides", label: "E-bikes", icon: Bike },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/wallets", label: "Wallets", icon: Wallet },
  { href: "/admin/support", label: "Support", icon: LifeBuoy },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminShell({
  children,
  role,
}: {
  children: React.ReactNode;
  role?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-[70vh] bg-slate-100">
      <div className="border-b border-slate-200 bg-brand-950 text-white">
        <div className="container-app flex h-14 items-center justify-between">
          <p className="font-semibold">Hama Admin</p>
          <p className="text-xs text-brand-200">{role || "Staff"}</p>
        </div>
      </div>
      <div className="container-app flex flex-col gap-6 py-6 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-56">
          <nav className="card space-y-0.5 p-2">
            {nav.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
                    active
                      ? "bg-brand-600 text-white"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
