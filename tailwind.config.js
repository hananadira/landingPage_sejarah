/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // warna yang tersedia 
        myColor: {
          50: "#343131",
        }
      },
    },
  },
  plugins: [],
}

