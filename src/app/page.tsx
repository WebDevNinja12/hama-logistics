import Link from "next/link";
import {
  Plane,
  Car,
  Package,
  Bike,
  Ticket,
  ShoppingBag,
  Shield,
  Clock,
  MapPin,
  CreditCard,
  Search,
} from "lucide-react";

const services = [
  { href: "/vehicles", icon: ShoppingBag, title: "Vehicle & aircraft sales", desc: "Cars, bikes, jets — buy, deposit or request inspection.", color: "from-brand-500 to-brand-700" },
  { href: "/rentals", icon: Car, title: "Car rental", desc: "Daily or hourly hire, with or without a driver.", color: "from-sky-500 to-brand-600" },
  { href: "/services", icon: Plane, title: "Flight booking", desc: "One-way, return and multi-city with e-tickets.", color: "from-indigo-500 to-brand-700" },
  { href: "/services", icon: Ticket, title: "Train, bus & car tickets", desc: "Routes, seat maps and QR-validated tickets.", color: "from-violet-500 to-purple-700" },
  { href: "/services", icon: Bike, title: "E-bike rides", desc: "Scan, ride and pay from your Hama wallet.", color: "from-emerald-500 to-teal-700" },
  { href: "/track", icon: Package, title: "Goods shipment", desc: "Quote, track and deliver with live status updates.", color: "from-accent-500 to-accent-700" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center opacity-25" />
        <div className="container-app relative py-16 lg:py-24">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-brand-100 backdrop-blur">
            Hama Enterprise Ng · RC 8827959
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Move people &amp; cargo <span className="text-accent-400">across Nigeria</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-brand-100 sm:text-lg">
            Flights, car hire, transport tickets, e-bikes, vehicle sales and nationwide shipping — one account, secure payments in ₦.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="btn-accent btn-lg">Explore services</Link>
            <Link href="/track" className="btn-lg border-2 border-white/70 text-white hover:bg-white hover:text-brand-900">
              <Search className="h-4 w-4" /> Track shipment
            </Link>
            <Link href="/rentals" className="btn-lg border-2 border-white/70 text-white hover:bg-white hover:text-brand-900">Rent a car</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-6">
        <div className="container-app grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: Shield, t: "Secure payments", d: "Bank transfer + proof" },
            { icon: Clock, t: "Fast support", d: "Ops team on every booking" },
            { icon: MapPin, t: "Nationwide", d: "Road, air & last-mile" },
            { icon: CreditCard, t: "Wallet ready", d: "Top up for quick pay" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-900">{t}</p>
                <p className="text-xs text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-app">
          <div className="mb-10 text-center">
            <h2 className="section-title">Our services</h2>
            <p className="mt-2 text-slate-600">Six modules. One platform.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
                <div className={`flex h-28 items-center justify-center bg-gradient-to-br ${s.color} text-white`}>
                  <s.icon className="h-10 w-10" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-brand-900 group-hover:text-brand-600">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-brand-700 to-brand-600 py-14 text-white">
        <div className="container-app text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to move?</h2>
          <p className="mt-2 text-brand-100">Create a free account and start booking in minutes.</p>
          <Link href="/register" className="btn-accent btn-lg mt-6 inline-flex">Get started</Link>
        </div>
      </section>
    </>
  );
}
