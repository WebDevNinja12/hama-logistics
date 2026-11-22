import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  tone?: "brand" | "accent" | "slate";
};

const tones = {
  brand: "from-brand-950 via-brand-800 to-brand-600",
  accent: "from-brand-900 via-brand-700 to-accent-600",
  slate: "from-slate-900 via-slate-800 to-brand-800",
};

/** Hero banner for page tops */
export default function PageBanner({
  title,
  subtitle,
  crumbs,
  tone = "brand",
}: Props) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${tones[tone]} text-white`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.25), transparent 45%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.35), transparent 40%)",
        }}
      />
      <div className="container-app relative py-16 sm:py-20 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <span aria-hidden>/</span>
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-brand-100 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
