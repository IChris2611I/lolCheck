/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'lol': "url('/bg.jpg')",
    },
    extend: {
      colors: {
      darkBg: '#1a1a2e', 
      primary: '#4c4c6d', 
      accent: '#9a4c95',
    },
  },
  },
  plugins: [],
}