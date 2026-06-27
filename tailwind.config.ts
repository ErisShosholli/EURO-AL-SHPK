import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#0B0F19",
        panel: "#111827",
        gold: "#F4B400",
        "gold-deep": "#C88C00",
        platinum: "#E5E7EB"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.36)",
        gold: "0 16px 48px rgba(244, 180, 0, 0.18)"
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at 20% 20%, rgba(244,180,0,.18), transparent 34%)",
        "hero-vignette": "linear-gradient(90deg, rgba(11,15,25,.98) 0%, rgba(11,15,25,.72) 38%, rgba(11,15,25,.28) 70%, rgba(11,15,25,.86) 100%)"
      }
    }
  },
  plugins: []
};

export default config;
