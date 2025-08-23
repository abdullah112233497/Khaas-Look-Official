// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // if your code is inside /src
  ],
  theme: {
    extend: {
  fontFamily: {
    montserrat: ["Montserrat", "sans-serif"],
    adria: ["AdriaDeco", "sans-serif"],
    lucida: ["LucidaCalligraphySTD", "cursive"],
  },
},

  },
  plugins: [],
};
