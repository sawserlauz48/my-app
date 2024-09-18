/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'check-light-pattern': "url('./images/check-lg.svg')",
        'check-dark-pattern': "url('./images/check-w-lg.svg')",
      },
      colors: {
        "darkmode-bg": "#02031D",
        "darkmode-pBtn": "#C79338",
        "darkmode-pBtn-h": "#E19F61",
        "darkmode-Sntn": "#ffffff",
        "darkmode-Sntn-h": "#ffffff",
        "darkmode-accent": "#001E3C",
        "darkmode-text": "#ECEDFE",
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

