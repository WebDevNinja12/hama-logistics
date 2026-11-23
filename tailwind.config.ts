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
        primary: {
          DEFAULT: "#0B2545",
          50: "#E8EEF5",
          100: "#C5D3E6",
          200: "#8FA7C7",
          300: "#5A7BA8",
          400: "#2E5589",
          500: "#1A3D6B",
          600: "#0B2545",
          700: "#091D36",
          800: "#061528",
          900: "#040E1A",
        },
        secondary: {
          DEFAULT: "#1D6FE8",
          50: "#E8F1FD",
          100: "#C5DBFA",
          200: "#8BB7F5",
          300: "#5193F0",
          400: "#1D6FE8",
          500: "#1558C0",
          600: "#104298",
          700: "#0B2C70",
        },
        accent: {
          DEFAULT: "#F28C28",
          50: "#FEF3E7",
          100: "#FCE0C2",
          200: "#F9C185",
          300: "#F5A248",
          400: "#F28C28",
          500: "#D97515",
          600: "#B55E0F",
          700: "#8C480B",
        },
        success: { DEFAULT: "#16A34A", 50: "#F0FDF4", 100: "#DCFCE7", 600: "#16A34A", 700: "#15803D" },
        warning: { DEFAULT: "#D97706", 50: "#FFFBEB", 100: "#FEF3C7", 600: "#D97706", 700: "#B45309" },
        danger: { DEFAULT: "#DC2626", 50: "#FEF2F2", 100: "#FEE2E2", 600: "#DC2626", 700: "#B91C1C" },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F7F9FC",
          border: "#E5EAF0",
        },
        brand: {
          50: "#E8EEF5",
          100: "#C5D3E6",
          200: "#8FA7C7",
          300: "#5A7BA8",
          400: "#2E5589",
          500: "#1A3D6B",
          600: "#1D6FE8",
          700: "#1558C0",
          800: "#0B2545",
          900: "#0B2545",
          950: "#040E1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        control: "8px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 37, 69, 0.08)",
        card: "0 1px 3px rgba(11,37,69,0.06), 0 8px 24px rgba(11,37,69,0.06)",
        focus: "0 0 0 3px rgba(29, 111, 232, 0.25)",
      },
      minHeight: {
        touch: "44px",
      },
    },
  },
  plugins: [],
};
export default config;
