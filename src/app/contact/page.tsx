import PageBanner from "@/components/layout/PageBanner";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact us"
        subtitle="Hama Logistics · Hama Enterprise Ng (RC 8827959)"
        crumbs={[{ label: "Contact" }]}
        tone="slate"
      />
      <div className="container-app py-12">
        <div className="card max-w-lg space-y-3 p-6 text-sm">
          <p><span className="font-medium text-brand-900">Email:</span> support@hamalogistics.ng</p>
          <p><span className="font-medium text-brand-900">Phone:</span> +234 800 000 0000</p>
          <p><span className="font-medium text-brand-900">Hours:</span> Mon–Sat, 8:00–18:00 (Africa/Lagos)</p>
          <p className="text-slate-500">Or use the WhatsApp button for quick chat.</p>
        </div>
      </div>
    </>
  );
}
