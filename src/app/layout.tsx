import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteBanner from "@/components/layout/SiteBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Hama Logistics | Mobility & Shipping across Nigeria",
    template: "%s | Hama Logistics",
  },
  description:
    "Book flights, rent cars, buy vehicles, and ship goods with Hama Logistics — Hama Enterprise Ng (CAC RC 8827959).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <SiteBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
