/** @type {import('tailwindcss').Config} */
module.exports = {
  // ! for light theme
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
