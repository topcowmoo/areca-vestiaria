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
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/contactus.webpp')",
        "mobile-home-three":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/mobile-contactus.webp')",
        "resource-image":
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/resources.webpp')",
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
          "url('https://drmammbucket.s3.us-east-1.amazonaws.com/Resized/therapy.webp')",
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
        xs: "375px", // Added custom `xs` breakpoint
        "landscape-sm": {
          raw: "(orientation: landscape) and (min-width: 640px)",
        },
        "landscape-md": {
          raw: "(orientation: landscape) and (min-width: 768px)",
        },
        "galaxy-z-fold-max": { max: "344px" }, // Galaxy Z Fold and smaller
        "galaxy-s8-max": { max: "360px" }, // Galaxy S8 and smaller
        "iphone-12-max": { min: "390px" }, // iPhone 12 and smaller
        "galaxy-s20-max": { min: "412px" }, // Galaxy S20 and larger
        "iphone-xr-max": { min: "414px" }, // iPhone XR and larger
        "iphone-14-max": { min: "430px" }, // iPhone 14 and larger
        "surface-duo-max": { min: "540px" }, // Surface Duo and larger
        "ipad-mini": { min: "768px" }, // iPad Mini and larger
        "ipad-air-max": { min: "820px" }, // iPad Air and larger
        "asus-zenbook-max": { min: "853px" }, // Asus Zenbook and larger
        "suface-pro-max": { min: "912px" }, // Surface Pro and larger
        "nest-hub": { min: "1024px" }, // Nest Hub and larger
        "ipad-pro-height": {
          raw: "(min-width: 1024px) and (min-height: 1366px)",
        }, // iPad Pro and larger
        "nest-hub-max": { min: "1280px" }, // Nest Hub and larger
        "full-hd-max": { min: "1920px" }, // Full HD (1920px)
        "ultra-wide": { min: "2560px" }, // Ultra wide (2560px)

        "landscape-iphone-se": {
          raw: "(max-width: 667px) and (max-height: 375px) and (orientation: landscape)",
        },
        "landscape-surface-duo": {
          raw: "(min-width: 668px) and (max-width: 720px) and (max-height: 540px) and (orientation: landscape)",
        },
        "landscape-galaxy-s8": {
          raw: "(min-width: 721px) and (max-width: 740px) and (min-height: 360px) and (orientation: landscape)",
        },
        "landscape-galaxy-z-fold": {
          raw: "(min-width: 741px) and (max-width: 882px) and (max-height: 344px) and (orientation: landscape)",
        },
        "landscape-iphone-12": {
          raw: "(min-width: 820px) and (max-width: 844px) and (orientation: landscape)",
        },
        "landscape-iphone-xr": {
          raw: "(min-width: 845px) and (max-width: 896px) and (min-height: 414px) and (orientation: landscape)",
        },
        "landscape-pixel-7": {
          raw: "(min-width: 897px) and (max-width: 915px) and (min-height: 412px) and (orientation: landscape)",
        },
        "landscape-iphone-14": {
          raw: "(min-width: 916px) and (max-width: 932px) and (min-height: 430px) and (orientation: landscape)",
        },
        "landscape-ipad-mini": {
          raw: "(min-width: 933px) and (max-width: 1024px) and (min-height: 768px) and (orientation: landscape)",
        },
        "landscape-ipad-air": {
          raw: "(min-width: 1025px) and (max-width: 1180px) and (min-height: 820px) and (orientation: landscape)",
        },
        "landscape-zenbook-fold": {
          raw: "(min-width: 1181px) and (max-width: 1280px) and (max-height: 853px) and (orientation: landscape)",
        },
        "landscape-ipad-pro": {
          raw: "(min-width: 1281px) and (max-width: 1366px) and (min-height: 1024px) and (orientation: landscape)",
        },
        "landscape-surface-pro": {
          raw: "(min-width: 1367px) and (max-width: 1368px) and (min-height: 912px) and (orientation: landscape)",
        },
      },
    },
  },
  plugins: [],
};
