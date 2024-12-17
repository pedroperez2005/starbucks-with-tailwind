/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'verde-latte': '#1e3932',
        'azul-season': '#0044b4',
        'rojo-season': '#d50032'
      },
      fontFamily:{
        'Sodo Sans':['Sodo Sans', 'Arial', 'Helvetica', 'sans-serif'],
        'Sodo Sans Black':['Sodo Sans Black', 'Arial', 'Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}

