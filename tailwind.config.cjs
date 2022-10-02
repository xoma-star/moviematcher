/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        panelIn: 'panelIn 200ms ease-in forwards',
        panelOut: 'panelOut 200ms ease-out forwards'
      },
      keyframes: {
        panelIn: {
          '0%': { transform: 'translateY(100vh)', opacity: 0.2 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        panelOut: {
          '0%': {transform: 'translateY(0)', opacity: 1},
          '100%': {transform: 'translateY(-100vh)', opacity: 0.2}
        },
        shimmer: {
          "100%": {
            "transform": "translateX(100%)",
          },
        }
      },
      backgroundImage: {
        'lines': "url('/img/backdrops/lines.jpg')"
      }
    },
  },
  plugins: [],
}
