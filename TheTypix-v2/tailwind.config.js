/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      keyframes: {
        moveDown: {
          "0%": { top: "0" },
          "100%": { top: "var(--topDistance)" },
        },
      },
      animation: {
        moveDown: "moveDown 5s linear infinite",
      },
    },
  },
  plugins: [],
};
