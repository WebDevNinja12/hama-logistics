import Link from "next/link";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-brand-950 text-slate-300">
      <div className="container-app grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 font-bold text-white">
            <Truck className="h-5 w-5 text-brand-400" />
            Hama Logistics
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Mobility & logistics division of Hama Enterprise Ng (CAC RC 8827959).
            Flights, rentals, tickets, e-bikes, vehicle sales and nationwide shipping.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/vehicles" className="hover:text-brand-300">Vehicle sales</Link></li>
            <li><Link href="/rentals" className="hover:text-brand-300">Car rental</Link></li>
            <li><Link href="/services" className="hover:text-brand-300">All services</Link></li>
            <li><Link href="/track" className="hover:text-brand-300">Track shipment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand-300">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-brand-300">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-brand-300">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Contact</h4>
          <p className="text-sm">support@hamalogistics.ng</p>
          <p className="text-sm">+234 800 000 0000</p>
          <p className="mt-2 text-xs text-slate-500">Currency: ₦ NGN · Africa/Lagos</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Hama Logistics · Hama Enterprise Ng · Powered by Hama Info Tech
      </div>
    </footer>
  );
}
