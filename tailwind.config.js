/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "app/helpers/**/*.rb",
    "app/views/**/*.{html,html.erb,erb,js,ts,rb,slim,html.slim}",
    "app/frontend/**/*.{js,jsx,ts,tsx,vue}",
    "app/frontend/**/**/*.{js,jsx,ts,tsx,vue}",
    "app/frontend/entrypoints/*.js",
    "app/frontend/stylesheets/*.scss",
    "app/frontend/images/icons/*.svg",
    "app/frontend/components/**/**/*.{rb,slim,html.slim,js,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
