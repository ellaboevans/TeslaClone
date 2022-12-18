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
        "hero-image": "url('./assets/Homepage.jpeg')",
      },
    },
  },
  plugins: [],
};
