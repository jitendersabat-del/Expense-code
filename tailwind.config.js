/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#30D5C8', // Turquoise
          light: '#72E5DD',
          dark: '#24A096',
        },
        secondary: {
          cream: '#FFFDD0',
          white: '#FAF9F6',
          mint: '#E0FFF0',
          beige: '#F5F5DC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
