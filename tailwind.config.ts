import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#000613",
        "crimson": "#bc0007",
        "marine-blue": "#2f87ed",
        "steel-grey": "#50606F",
        "glass-white": "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
        condensed: ["'Barlow Condensed'", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 1.5s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
