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
        primary: '#29abe3',
        primaryDark: '#3829e3',
        logo: '#edebeb',
        bg1: '#4c05b0',
      }
    },
  },
  plugins: [],
}