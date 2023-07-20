/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'dela' :  ['Dela Gothic One', 'cursive'],
      'dm sans' :  ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}
