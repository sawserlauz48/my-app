/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "darkmode-bg": "#191023",
        "darkmode-pBtn": "#4c3168",
        "darkmode-pBtn-h": "#795E96",
        "darkmode-Sntn": "#ffffff",
        "darkmode-Sntn-h": "#ffffff",
        "darkmode-accent": "#79397f",
        "darkmode-text": "#e8e0f0",
        "lightmode-bg": "#f6eedf",
        "lightmode-pBtn": "#C79338",
        "lightmode-pBtn-h": "#E19F61",
        "lightmode-Sntn": "#fcf8f3",
        "lightmode-Sntn-h": "#E0DCDB",
        "lightmode-accent": "#e3e3e3",
        "lightmode-text": "#000000",
      }
    },
  },
  plugins: [],
}

