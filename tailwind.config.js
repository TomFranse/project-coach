/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-start': '#E6196B',
        'primary-middle': '#CF13B3',
        'primary-end': '#8D0BD1',
        'text-light': '#616166',
        'text-dark': '#A6A6A8',
        'black': '#070614',
        'white': '#FFFFFF',
        'off-white': '#F5F5F7',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 