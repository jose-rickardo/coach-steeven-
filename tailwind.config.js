/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ring: {
          950: "#0a0a0b",
          900: "#111113",
          800: "#1a1a1e",
          700: "#26262c",
        },
        blood: {
          400: "#ff5a52",
          500: "#e5342b",
          600: "#c1241c",
        },
      },
      fontFamily: {
        display: ["Oswald", "Impact", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
