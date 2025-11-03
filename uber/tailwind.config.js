// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        // Tente este caminho relativo
        'uber': "url('./src/assets/bguber.png')",
        'city': "url('./src/assets/bg-city.png')",
      }
    }
  },
  plugins: []
}