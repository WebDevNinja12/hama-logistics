import { Badge } from "@/components/ui/Badge";
import {
  Package,
  Car,
  Plane,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";

export const metadata = { title: "Design system" };

const colors = [
  { name: "Primary", hex: "#0B2545", className: "bg-primary" },
  { name: "Secondary", hex: "#1D6FE8", className: "bg-secondary" },
  { name: "Accent", hex: "#F28C28", className: "bg-accent" },
  { name: "Success", hex: "#16A34A", className: "bg-success" },
  { name: "Warning", hex: "#D97706", className: "bg-warning" },
  { name: "Danger", hex: "#DC2626", className: "bg-danger" },
  { name: "Surface muted", hex: "#F7F9FC", className: "bg-surface-muted border" },
];

export default function DesignSystemPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-primary">Design system</h1>
        <p className="mt-1 text-sm text-slate-500">
          Hama Logistics tokens, buttons, badges and icons (Lucide, no emoji).
        </p>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-primary">Colors</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {colors.map((c) => (
            <div key={c.name} className="text-center">
              <div className={`mx-auto h-14 w-full rounded-card ${c.className}`} />
              <p className="mt-2 text-xs font-medium text-primary">{c.name}</p>
              <p className="text-[10px] text-slate-500">{c.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-primary">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn-primary">Primary</button>
          <button type="button" className="btn-secondary">Secondary</button>
          <button type="button" className="btn-outline">Outline</button>
          <button type="button" className="btn-ghost">Ghost</button>
          <button type="button" className="btn-danger">Destructive</button>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-primary">Status badges</h2>
        <div className="flex flex-wrap gap-2">
          {(["pending","awaiting","confirmed","progress","completed","cancelled","rejected","expired"] as const).map((s) => (
            <Badge key={s} status={s} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-primary">Icons (Lucide)</h2>
        <div className="flex flex-wrap gap-4 text-primary">
          <Package className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          <Car className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          <Plane className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          <CheckCircle2 className="h-6 w-6 text-success" strokeWidth={1.75} aria-hidden />
          <Clock className="h-6 w-6 text-warning" strokeWidth={1.75} aria-hidden />
          <XCircle className="h-6 w-6 text-danger" strokeWidth={1.75} aria-hidden />
        </div>
      </section>
    </div>
  );
}
