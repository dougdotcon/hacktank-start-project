/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verdant-green': '#3AA65C',
        'deep-evergreen': '#2B6B3C',
        'pumpkin-orange': '#E67127',
        'coral-red': '#C43D21',
        'sunflower-yellow': '#FFB640',
        'midnight-navy': '#002E3D',
        'sky-teal': '#4AC0C8',
        'warm-cream': '#F5E9D2',
      }
    },
  },
  plugins: [],
} 