/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#0086c0',
        'custom-green': '#10B981',
        'custom-red': '#EF4444',
        'custom-teal': '#00848f',
        'custom-gray': '#1a1c1d',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}