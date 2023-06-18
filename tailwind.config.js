/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#B78A0D',
        dark: '#1e40af',
        secondary: '#212121',
        warnabg: '#f7f3e7',
        warnaheader: '#f7e599',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

