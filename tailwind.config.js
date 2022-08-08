require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.scss'],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
};
