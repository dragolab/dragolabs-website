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
        'drago-cyan': '#00E5FF',
        'drago-glow': 'rgba(0, 115, 160, 0.35)',
        'drago-bg': '#000000',
        'drago-contrast': '#ffffff'
      },
      fontFamily: {
        'sans': ['"Inter Tight"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'display': ['"Inter Tight"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
        'serif': ['"Playfair Display"', 'serif'],
        'productsans': ['"Product Sans"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      }
    },
  },
  plugins: [],
}
