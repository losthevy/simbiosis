/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ec6d",
        "primary-dark": "#0eb553",
        "background-light": "#f6f8f7",
        "background-dark": "#102218",
        "surface-light": "#ffffff",
        "surface-dark": "#1c2e24",
        "text-main": "#111814",
        "text-muted": "#618972",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
