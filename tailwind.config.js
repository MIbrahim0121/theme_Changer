/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ye line Tailwind ko batati hai ke kahan kahan classes dhoondni hain
  ],
  darkMode: 'class', // <--- Ye manually add karna zaroori hai
  theme: {
    extend: {},
  },
  plugins: [],
}