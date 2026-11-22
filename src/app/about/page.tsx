import PageBanner from "@/components/layout/PageBanner";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Hama Logistics"
        subtitle="Mobility & logistics division of Hama Enterprise Ng (CAC RC 8827959). Powered by Hama Info Tech."
        crumbs={[{ label: "About" }]}
      />
      <div className="container-app py-12">
        <p className="max-w-3xl text-slate-600 leading-relaxed">
          Hama Logistics offers vehicle sales, car rental, flights, tickets, e-bikes and goods shipment —
          priced in ₦ (Africa/Lagos). We combine secure bank-transfer payments with a full customer and
          admin platform so every booking is tracked from request to delivery.
        </p>
      </div>
    </>
  );
}
