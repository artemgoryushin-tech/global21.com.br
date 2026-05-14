import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        muted: "#5b6472",
        line: "#e6e8ee",
        brand: "#1347ff",
        accent: "#0dbf84",
        cream: "#f7f4ec"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(11, 18, 32, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
