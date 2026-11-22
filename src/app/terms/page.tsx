import PageBanner from "@/components/layout/PageBanner";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms of service" crumbs={[{ label: "Terms" }]} tone="slate" />
      <div className="container-app prose prose-slate max-w-3xl py-12">
        <p>
          By using Hama Logistics (a division of Hama Enterprise Ng, RC 8827959) you agree to our booking,
          payment and cancellation policies. Bank-transfer payments require proof upload and admin confirmation
          before services are fulfilled. Prices are in Nigerian Naira (₦).
        </p>
      </div>
    </>
  );
}
