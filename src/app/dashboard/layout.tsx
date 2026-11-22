import { redirect } from "next/navigation";
import { getSession, getCurrentUser } from "@/lib/auth";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { formatNaira } from "@/lib/utils";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login?next=/dashboard");
  }

  let userName = session.name?.split(" ")[0] || "Customer";
  let walletBalance = "₦0.00";

  try {
    const user = await getCurrentUser();
    if (user) {
      userName = user.firstName || userName;
      const w = (user as { wallet?: { balance: unknown } }).wallet;
      if (w?.balance != null) walletBalance = formatNaira(Number(w.balance));
    }
  } catch {
    // DB may be unavailable
  }

  return (
    <DashboardShell userName={userName} walletBalance={walletBalance}>
      {children}
    </DashboardShell>
  );
}
