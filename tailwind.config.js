/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  darkModeSelector: ".dark-mode",
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 0px 10px rgba(0, 0, 0, 0.15)',
        'inner': 'inset 0 4px 6px rgba(0, 0, 0, 0.2)',
      },
        backgroundImage: {
          "page-one": "url('/src/assets/home-1.png')",
          "page-two": "url('/src/assets/home-2.png')",
          "page-three": "url('/src/assets/home-3.png')",
          "card-one": "url('/src/assets/card1.png')",
          "card-two": "url('/src/assets/card2.png')",
          "card-three": "url('/src/assets/card3.png')",
          "card-four": "url('/src/assets/card4.png')",
          "resource-image": "url('/src/assets/Resources1.png')",
      },
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