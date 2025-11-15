import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050507",
          900: "#0c0f12",
          800: "#14171c",
          700: "#1d2129",
          600: "#272c37"
        },
        accent: {
          500: "#8b5cf6",
          400: "#a855f7",
          300: "#22d3ee",
          200: "#38bdf8"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        brand: "0 30px 60px -30px rgba(139, 92, 246, 0.65)",
        glow: "0 0 30px rgba(56, 189, 248, 0.35)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.3), transparent 55%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(circle at 0% 80%, rgba(34,211,238,0.2), transparent 60%)"
      }
    }
  },
  plugins: []
};

export default config;
