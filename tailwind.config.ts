import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08080A",
        surface: "rgba(255,255,255,0.045)",
        ink: "#F8F7F5",
        muted: "#9A9AA0",
        accent: "#7A7CFF",
        background: "#08080A",
        card: "#111114",
      },
      fontFamily: {
        display: ["Instrument Serif", "serif"],
        sans: ["Geist", "Instrument Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: { premium: "20px" },
    },
  },
  plugins: [],
};
export default config;
