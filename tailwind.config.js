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
        primary: '#FFFFFF',
        primaryDark: '#000000',
        logo: '#5C8374',
        bg1: '#2d3748',
        bg1Dark: '#b9bdc1',
      }
    },
  },
  darkMode: true,
  plugins: [
    require('@tailwindcss/typography')
  ],
}