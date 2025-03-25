/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    // ✅ screens should go here (NOT inside extend)
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",

      // ✅ Custom landscape breakpoints (mobile-focused)
      "landscape-xs": {
        raw: "(max-width: 639px) and (orientation: landscape)",
      },
      "landscape-sm": {
        raw: "(min-width: 640px) and (max-width: 767px) and (orientation: landscape)",
      },

      'tablet-portrait': {
        raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: portrait)',
      },
      'tablet-landscape': {
        raw: '(min-width: 768px) and (max-width: 1023px) and (orientation: landscape)',
      },
    },
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
        "custom-inner": "inset 0 0 5px rgba(0, 0, 0, 0.2)",
        "custom-even": "0 0 25px rgba(0, 0, 0, 0.9)",
        "custom-dark": "0 0 30px rgba(0, 0, 0, 1.3)",
      },
      backgroundImage: {
        "home-one":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/homeone.webp')",
        "mobile-home-one":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-homeone.webp')",
        "home-two":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/aboutus.webp')",
        "mobile-home-two":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-aboutus.webp')",
        "home-three":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/contactus.webp')",
        "mobile-home-three":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-contactus.webp')",
        "resource-image":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/resources.webp')",
        "mobile-resource-image":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-resources.webp')",
        "parenting-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/parenting.webp')",
        "mobile-parenting-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-parenting.webp')",
        "additional-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/additional.webp')",
        "mobile-additional-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-additional.webp')",
        "adhd-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/adhd.webp')",
        "mobile-adhd-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-adhd.webp')",
        "couples-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/couples.webp')",
        "mobile-couples-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-couples.webp')",
        "anger-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/anger.webp')",
        "mobile-anger-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-anger.webp')",
        "emotions-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/attachment.webp')",
        "mobile-emotions-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-attachment.webp')",
        "therapy-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/therapy4.webp')",
        "mobile-therapy-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-therapy.webp')",
        "physician-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/physician.webp')",
        "mobile-physician-page":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-physician.webp')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        "aspect-9-18_5": {
          raw: "(aspect-ratio: 9 / 18.5)",
        },
        zfold: {
          raw: "(max-width: 350px) and (min-height: 870px) and (aspect-ratio: 344 / 882)",
        },
      },
    },
  },
  plugins: [],
};