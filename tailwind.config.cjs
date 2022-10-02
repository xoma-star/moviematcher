/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        panelIn: 'panelIn 700ms cubic-bezier(0.36,0.66,0.04,1) forwards',
        panelOut: 'panelOut 700ms cubic-bezier(0.36,0.66,0.04,1) forwards'
      },
      keyframes: {
        panelIn: {
          '0%': { transform: 'translateY(100vh)', opacity: 0.2 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        panelOut: {
          '0%': {transform: 'translateY(0)', opacity: 1},
          '20%': {opacity: 0, scale: 0.6},
          '100%': {transform: 'translateY(-100vh)', opacity: 0}
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
