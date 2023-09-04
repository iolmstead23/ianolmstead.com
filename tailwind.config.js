/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        primaryDark: '#ffffff',
        logo: '#5C8374',
        bg1: '#645CBB',
        box: '#EBC7E6',
        bg1Dark: '#371B58',
        boxDark: '#5B4B8A',
      }
    },
  },
  plugins: [],
  darkMode: false,
}