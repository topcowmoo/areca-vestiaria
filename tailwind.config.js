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
        "inner": "inset 0 0 12px rgba(0, 0, 0, 0.9)",
        "custom-inner": "inset 0 0 5px rgba(0, 0, 0, 0.2)",
        "custom-even": "0 0 25px rgba(0, 0, 0, 0.9)",
        "custom-dark": "0 0 30px rgba(0, 0, 0, 1.3)",
      },
      backgroundImage: {
        "home-one": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/homeone.webp')",
        "mobile-home-one": "url('htthttps://drmammbucket.s3.us-east-1.amazonaws.com/mobilehomeone.webp')",
        "home-two": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/aboutus.webp')",
        "mobile-home-two": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-aboutus.webp')",
        "home-three": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/contactus.webp')",
        "mobile-home-three": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-contactus.webp')",
        "resource-image": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/resourcepage.webp')",
        "mobile-resource-image": "url('hthttps://drmammbucket.s3.us-east-1.amazonaws.com/mobile-resource.webp')",
        "parenting-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/parenting.webp')",
        "mobile-parenting-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-parenting.webp')",
        "additional-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/additional.webp')",
        "mobile-additional-page": "url('hhttps://drmammbucket.s3.us-east-1.amazonaws.com/mobile-additional.webp')",
        "adhd-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/adhd.webp')",
        "mobile-adhd-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-adhd.webp')",
        "couples-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/couples.webp')",
        "mobile-couples-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-couples.webp')",
        "anger-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/anger.webp')",
        "mobile-anger-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-anger.webp')",
        "emotions-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/attachment.webp')",
        "mobile-emotions-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-attachment.webp')",
        "therapy-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/therapy.webp')",
        "mobile-therapy-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-therapy.webp')",
        "physician-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/physician.webp')",
        "mobile-physician-page": "url('https://drmammbucket.s3.us-east-1.amazonaws.com/mobile-physician.webp')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        xs: "375px", // Added custom `xs` breakpoint
        "landscape-sm": {
          raw: "(orientation: landscape) and (min-width: 640px)",
        },
        "landscape-md": {
          raw: "(orientation: landscape) and (min-width: 768px)",
        },
        'galaxy-z-fold-max': {'max': '344px'},  // Galaxy Z Fold and smaller
        'galaxy-s8-max': {'max': '360px'},  // Galaxy S8 and smaller
        'iphone-12-max': {'min': '390px'},  // iPhone 12 and smaller
        'galaxy-s20-max': {'min': '412px'},  // Galaxy S20 and larger
        'iphone-xr-max': {'min': '414px'},  // iPhone XR and larger
        'surface-duo-max': {'min': '540px'},  // Surface Duo and larger
        'ipad-mini': {'min': '768px'},  // iPad Mini and larger
      },
    },
  },
  plugins: [],
};
