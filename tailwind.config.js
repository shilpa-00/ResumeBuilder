/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing:{
        '144':'27.9cm',
        '130':'21.6cm',
        '150':'40cm',
      },
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1000px',
      'xl':'1280px',
    },
  },
  plugins: [],
}
