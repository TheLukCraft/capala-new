/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f7fff7",
        "pink-underline": "#ff69b4",
        "card-color": "#4A148C",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
    },
  },
  plugins: [],
};
