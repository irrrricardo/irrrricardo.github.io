/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#315f85',
        secondary: '#6b7280',
        signal: '#315f85',
        mint: '#a9c4d6',
        ink: '#202a33',
        paper: '#f8fafb',
        cream: '#f1f4f6',
        mist: '#d9e0e5',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 55px -28px rgba(15, 23, 42, 0.35)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
