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
      <div className="container-app flex flex-col items-center justify-center gap-2 py-4 pr-10 text-center sm:flex-row sm:gap-4 sm:py-5">
        <span className="text-sm font-semibold sm:text-base">
          Hama Logistics · Ship, rent &amp; buy nationwide · Prices in ₦
        </span>
        <Link
          href="/register"
          className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold underline-offset-2 transition hover:bg-white/30 hover:underline"
        >
          Create free account
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setHidden(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white sm:right-4"
        aria-label="Dismiss banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
