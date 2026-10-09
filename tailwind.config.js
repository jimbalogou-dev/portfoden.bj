import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        cyan: 'rgb(var(--accent-rgb) / <alpha-value>)',
        cyan2: 'rgb(var(--accent2-rgb) / <alpha-value>)',
        green: '#22C55E',
        border: 'var(--border)',
        card: 'var(--card)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config