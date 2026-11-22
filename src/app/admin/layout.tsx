import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login?next=/admin");
  if (session.role !== "ADMIN" && session.role !== "SUPER_ADMIN") {
    redirect("/dashboard");
  }
  return <AdminShell role={session.role}>{children}</AdminShell>;
}
