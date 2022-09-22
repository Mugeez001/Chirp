/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '30em',
      md: '48em',
      lg: '63.75em',
      xl: '90em',
    },
    extend: {
      colors: {
       softBlue: 'hsl(208, 100%, 51%)',
       lightGreen: 'hsl(150, 52%, 51%)',
       lightGrey: '#d0d0d0',
       darkBlue: 'hsl(207, 64%, 48%)',
       darkCyan: 'hsl(180.00,100.00%,27.25%)',
       bgYellow: '#fffef2',
       bglightBlue: '#c5eff7',
       bGold: 'hsl(52, 85%, 69%)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [],
}
