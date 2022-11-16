/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing:{
        '144':'27.9cm',
        '130':'21.6cm',
        '150':'32cm',
        '120':'18cm',
      },
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
  },
  plugins: [],
}
