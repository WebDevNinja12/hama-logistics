import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
  Loader2,
  Ban,
} from "lucide-react";

const map = {
  pending: { label: "Pending", className: "bg-warning-50 text-warning-700", Icon: Clock },
  awaiting: { label: "Awaiting confirmation", className: "bg-secondary-50 text-secondary-700", Icon: Clock },
  confirmed: { label: "Confirmed", className: "bg-success-50 text-success-700", Icon: CheckCircle2 },
  progress: { label: "In progress", className: "bg-secondary-50 text-secondary-700", Icon: Loader2 },
  completed: { label: "Completed", className: "bg-success-50 text-success-700", Icon: CheckCircle2 },
  cancelled: { label: "Cancelled", className: "bg-slate-100 text-slate-600", Icon: Ban },
  rejected: { label: "Rejected", className: "bg-danger-50 text-danger-700", Icon: XCircle },
  expired: { label: "Expired", className: "bg-slate-100 text-slate-500", Icon: AlertTriangle },
  warning: { label: "Warning", className: "bg-warning-50 text-warning-700", Icon: AlertTriangle },
} as const;

export type BadgeStatus = keyof typeof map;

export function Badge({
  status,
  label,
  className,
}: {
  status: BadgeStatus;
  label?: string;
  className?: string;
}) {
  const cfg = map[status];
  const Icon = cfg.Icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        cfg.className,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
      {label || cfg.label}
    </span>
  );
}
