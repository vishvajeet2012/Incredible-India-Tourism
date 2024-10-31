/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: 'rgb(40, 147, 156)', // Adding the custom color
      },
    },
  },
  plugins: [],
};
