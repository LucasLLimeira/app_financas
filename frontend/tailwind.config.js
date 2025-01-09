/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spread-color': 'spreadColor 2s ease-in-out infinite',
      },
      keyframes: {
        spreadColor: {
          '0%': { background: 'rgb(0, 255, 255)' },  // Ciano
          '50%': { background: 'rgb(0, 200, 255)' }, // Tonalidade mais escura
          '100%': { background: 'rgb(0, 255, 255)' }, // Volta para ciano
        },
      },
    },
  },
  plugins: [],
}
