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
        'spacecadet': {
          100: '#dfdfec',
          200: '#bfbfd9',
          300: '#9f9fc6',
          400: '#8080b3',
          500: '#60609f',
          600: '#4d4d80',
          700: '#393960',
          800: '#262640',
          900: '#131320',
        },
        'ultraviolet': {
          100: '#e1e2ea',
          200: '#c3c6d5',
          300: '#a5a9c0',
          400: '#888caa',
          500: '#6a7095',
          600: '#555977',
          700: '#3f435a',
          800: '#2a2d3c',
          900: '#15161e',
        },
        'rosequartz': {
          100: '#e7e4e7',
          200: '#cfc9ce',
          300: '#b7aeb6',
          400: '#9f939d',
          500: '#877885',
          600: '#6c606a',
          700: '#514850',
          800: '#363035',
          900: '#1b181b',
        },
        'paledogwood': {
          100: '#ece2df',
          200: '#d8c4c0',
          300: '#c5a7a0',
          400: '#b18981',
          500: '#9e6c61',
          600: '#7e564e',
          700: '#5f413a',
          800: '#3f2b27',
          900: '#201613',
        },
        'isabelline': {
          100: '#eee3dd',
          200: '#dec7ba',
          300: '#cdaa98',
          400: '#bd8e75',
          500: '#ac7253',
          600: '#8a5b42',
          700: '#674432',
          800: '#452e21',
          900: '#221711',
        },
      },
    },
  },
  plugins: [],
}

