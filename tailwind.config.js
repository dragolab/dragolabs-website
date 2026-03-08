/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'drago-text': '#40484e',
        'drago-secondary': '#616f79',
        'drago-accent': '#0073a0',
        'drago-bg': '#000000',
        'drago-contrast': '#ffffff'
      },
      fontFamily: {
        'sans': ['"Product Sans"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'mono': ['monospace']
      }
    },
  },
  plugins: [],
}
