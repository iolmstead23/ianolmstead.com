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
        logo: '#5C8374',
        bg1: '#2d3748',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}