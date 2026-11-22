import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Hama Logistics | Mobility & Shipping across Nigeria",
    template: "%s | Hama Logistics",
  },
  description:
    "Book flights, rent cars, buy vehicles, ride e-bikes, buy transport tickets and ship goods with Hama Logistics — a division of Hama Enterprise Ng (CAC RC 8827959).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
