/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1700px', // Upper limit for responsiveness
      },
      fontSize: {
        'xxl': '40px',
      },
    },
  },
  plugins: [],
}
