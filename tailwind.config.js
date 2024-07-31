/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  darkModeSelector: ".dark-mode",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "page-one": "url('/src/assets/home-1.png')",
        "page-two": "url('/src/assets/home-2.png')",
        "page-three": "url('/src/assets/home-3.png')",
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        alt: "#161616",
      },
    },
  },
  plugins: [],
};
