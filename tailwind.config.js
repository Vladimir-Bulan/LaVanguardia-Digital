/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
        crimson: ["var(--font-crimson)"],
      },
      colors: {
        "primary-black": "#1a1a1a",
        "secondary-black": "#2d2d2d",
        "accent-gold": "#d4af37",
        "accent-red": "#c41e3a",
        "text-gray": "#4a4a4a",
        "light-gray": "#f8f9fa",
        "border-gray": "#e1e5e9",
      },
      boxShadow: {
        custom: "0 2px 20px rgba(0,0,0,0.08)",
        hover: "0 8px 40px rgba(0,0,0,0.12)",
      },
      maxWidth: {
        "7xl": "1400px",
      },
      spacing: {
        15: "3.75rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}