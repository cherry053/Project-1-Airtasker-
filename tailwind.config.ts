import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF3FE",
          100: "#D9E4FC",
          200: "#B3C8F9",
          300: "#84A4F4",
          400: "#5379EA",
          500: "#3460E0",
          600: "#1D4FD8",
          700: "#173FB0",
          800: "#143489",
          900: "#122C6E",
        },
        accent: {
          400: "#FBBF24",
          500: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
