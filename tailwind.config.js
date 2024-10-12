/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'], // Add the custom font
      },
      cursor: {
        sword: "url('./src/assets/images/sword-cursor.png'), default", // Public folder path
      },
    },
  },
  plugins: [],
}

