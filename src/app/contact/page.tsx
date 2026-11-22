export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="container-app py-14">
      <h1 className="section-title">Contact us</h1>
      <p className="mt-2 text-slate-600">Hama Logistics · Hama Enterprise Ng (RC 8827959)</p>
      <div className="card mt-8 max-w-lg space-y-3 p-6 text-sm">
        <p><span className="font-medium text-brand-900">Email:</span> support@hamalogistics.ng</p>
        <p><span className="font-medium text-brand-900">Phone:</span> +234 800 000 0000</p>
        <p><span className="font-medium text-brand-900">Hours:</span> Mon–Sat, 8:00–18:00 (Africa/Lagos)</p>
        <p className="text-slate-500">Or use the WhatsApp button for quick chat.</p>
      </div>
    </div>
  );
}
