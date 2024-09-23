/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        dropdownSlideDown: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        dropdownSlideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-10%)", opacity: "0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-50%)", opacity: "0" },
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(320px)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(320px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out forwards",
        slideUp: "slideUp 0.4s ease-in-out forwards",
        slideRight: "slideRight 0.4s ease-in-out forwards",
        slideLeft: "slideLeft 0.4s ease-in-out forwards",
        dropdownSlideDown: "dropdownSlideDown 0.4s ease-in-out forwards",
        dropdownSlideUp: "dropdownSlideUp 0.4s ease-in-out forwards",
      },
      boxShadow: {
        "custom-light": "0 0px 12px rgba(0, 0, 0, 0.2)",
        inner: "inset 0 0 12px rgba(0, 0, 0, 0.9)",
        "custom-inner": "inset 0 0 9px rgba(0, 0, 0, 0.6)",
        "custom-even": "0 0 25px rgba(0, 0, 0, 0.9)",
        "custom-dark": "0 0 30px rgba(0, 0, 0, 1.3)",
      },
      backgroundImage: {
        "home-one": "url('/src/assets/homeone.png')",
        "home-two": "url('/src/assets/hometwo.png')",
        "home-three": "url('/src/assets/homethree.png')",
        "resource-image": "url('/src/assets/resources.png')",
        "parenting-page": "url('/src/assets/parentingpage.png')",
        "additional-page": "url('/src/assets/additionalpage.png')",
        "adhd-page": "url('/src/assets/adhdpage.png')",
        "couples-page": "url('/src/assets/couplespage.png')",
        "anger-page": "url('/src/assets/angerpage.png')",
        "emotions-page": "url('/src/assets/emotionspage.png')",
        "therapy-page": "url('/src/assets/therapypage.png')",
        "physician-page": "url('/src/assets/physicianpage.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        "landscape-sm": {
          raw: "(orientation: landscape) and (min-width: 640px)",
        },
        "landscape-md": {
          raw: "(orientation: landscape) and (min-width: 768px)",
        },
      },
    },
  },
  plugins: [],
};
