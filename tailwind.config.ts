import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfdfff",
          300: "#93c8fd",
          400: "#60a8fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e3a8a",
          900: "#0f2744",
          950: "#0a1929",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(15, 39, 68, 0.08)",
        card: "0 1px 3px rgba(15,39,68,0.06), 0 8px 24px rgba(15,39,68,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
