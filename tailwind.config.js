/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
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
      },
      boxShadow: {
        "custom-light": "0 0px 10px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 0 12px rgba(0, 0, 0, 0.9)",
        "custom-inner": "inset 0 0 9px rgba(0, 0, 0, 0.6)",
        "custom-even": "0 0 25px rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "page-one": "url('/src/assets/home-1.png')",
        "page-two": "url('/src/assets/home-2.png')",
        "page-three": "url('/src/assets/home-3.png')",
        "card-one": "url('/src/assets/card1.png')",
        "card-two": "url('/src/assets/card2.png')",
        "card-three": "url('/src/assets/card3.png')",
        "card-four": "url('/src/assets/card4.png')",
        "card-five": "url('/src/assets/couples.png')",
        "card-six": "url('/src/assets/anger.png')",
        "card-seven": "url('/src/assets/additional.png')",
        "resource-image": "url('/src/assets/Resources1.png')",
        "parenting-page": "url('/src/assets/parentingpage.png')",
        "additional-page": "url('/src/assets/additionalpage.png')",
        "anger-page": "url('/src/assets/angershamepage.png')",
        "therapy-page": "url('/src/assets/therapypage.png')",
        "attachment-page": "url('/src/assets/attachmentpage.png')",
        "adhd-page": "url('/src/assets/adhdpage.png')",
        "couples-page": "url('/src/assets/couplespage.png')",
        "physician-page": "url('/src/assets/physicianpage.png')",
        "contact-page": "url('/src/assets/contact-page.png')",
        "testanger": "url('/src/assets/angertest.png')",
        "testtall": "url('/src/assets/testtall.png')",
        "testemotion": "url('/src/assets/emotest.png')",
        "testcontact": "url('/src/assets/testcontactus.png')",
        "testsunrise": "url('/src/assets/testsunrise.png')",
        "testtherapy": "url('/src/assets/testtherapy.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
