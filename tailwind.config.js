/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'spacecadet': '#22223B',
        'ultra-violet': '#4A4E69',
        'rose-quartz': '#9A8C98',
        'pale-dogwood': '#C9ADA7',
        'isabelline': '#F2E9E4',
      },
    },
  },
  plugins: [],
}

