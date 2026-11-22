"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

/** Top announcement strip shown on every page */
export default function SiteBanner() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="relative bg-gradient-to-r from-brand-900 via-brand-700 to-accent-600 text-white">
      <div className="container-app flex items-center justify-center gap-3 py-2.5 pr-10 text-center text-xs sm:text-sm">
        <span className="font-medium">
          Hama Logistics · Ship, rent &amp; buy nationwide · Prices in ₦
        </span>
        <Link
          href="/register"
          className="hidden rounded-full bg-white/15 px-3 py-0.5 font-semibold underline-offset-2 hover:bg-white/25 hover:underline sm:inline"
        >
          Create free account
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setHidden(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
