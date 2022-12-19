/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gotham: ["Gotham", "sans-serif"],
        gothamBlack: ["Gotham Black", "sans-serif"],
        gothamBook: ["Gotham Book", "sans-serif"],
        gothamUltra: ["Gotham Ultra", "sans-serif"],
      },
      backgroundImage: {
        "hero-image-desktop": "url('./assets/Homepage.jpeg')",
        "hero-image-mobile": "url('./assets/M3-Homepage-Mobile-LHD.jpeg')",
        "modely-desktop": "url('./assets/Desktop-ModelY.jpeg')",
        "modely-mobile": "url('./assets/Mobile-ModelY.jpeg')",
        "model-s-desktop": "url('./assets/Desktop-ModelS.jpeg')",
        "model-s-mobile": "url('./assets/Mobile-ModelS.jpeg')",
        "model-x-desktop": "url('./assets/Desktop-ModelX.jpeg')",
        "model-x-mobile": "url('./assets/Mobile-ModelX.jpeg')",
        "solarPanel-desktop": "url('./assets/SolarPanel-D.jpeg')",
        "solarPanel-mobile": "url('./assets/SolarPanel-M.jpeg')",
        "solarRoof-desktop": "url('./assets/SolarRoof-D.webp')",
        "solarRoof-mobile": "url('./assets/SolarRoof-M.webp')",
        "Accessory-desktop": "url('./assets/Assessory-D.jpeg')",
        "Accessory-mobile": "url('./assets/Asessory-M.jpeg')",
      },
      colors: {
        "btn-bg": "rgba(23,26,32,0.8)",
      },
      width: {
        100: "28rem",
      },
    },
  },
  plugins: [],
};
