/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  darkModeSelector: ".dark-mode",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "page-one": "url('/src/assets/homePage1.jpeg')",
        "page-two": "url('/src/assets/homePage2.jpeg')",
      }),
    },
  },
  plugins: [],
};
