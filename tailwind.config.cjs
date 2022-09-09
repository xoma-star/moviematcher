/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        panelIn: 'panelIn 100ms linear',
        panelOut: 'panelOut 100ms linear'
      },
      keyframes: {
        panelIn: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        panelOut: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100vw)'}
        },
        shimmer: {
          "100%": {
            "transform": "translateX(100%)",
          },
        }
      }
    },
  },
  plugins: [],
}
