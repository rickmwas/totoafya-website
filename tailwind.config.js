/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── TotoAfya Brand Palette ─────────────────────────────────────────
      colors: {
        forest: {
          50:  '#edf7f1',
          100: '#d0ecdb',
          200: '#a3d9bc',
          300: '#6ec19a',
          400: '#3fa577',
          500: '#1e8a59',
          600: '#1A6B45',   // Primary brand green
          700: '#155736',
          800: '#0f4128',
          900: '#082d1b',
          950: '#041610',
        },
        earth: {
          50:  '#fef9ec',
          100: '#fef0c8',
          200: '#fde08e',
          300: '#fbca4c',
          400: '#f9b820',
          500: '#D4920F',   // Primary amber/gold
          600: '#b87a0a',
          700: '#956208',
          800: '#724b08',
          900: '#4f3407',
        },
        coral: {
          50:  '#fef3ee',
          100: '#fde4d5',
          200: '#fbcaab',
          300: '#f9a77b',
          400: '#E8725A',   // Warm coral accent
          500: '#e05535',
          600: '#c93f22',
          700: '#a3311b',
          800: '#7e2617',
          900: '#5a1b11',
        },
        cream: {
          50:  '#FDFBF5',   // Page background
          100: '#F9F5EA',
          200: '#F3EDD5',
        },
      },
      // ── Typography ────────────────────────────────────────────────────
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      // ── Spacing & sizing ─────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // ── Animations ────────────────────────────────────────────────────
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        'pulse-soft':   'pulse-soft 3s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
      // ── Shadows ───────────────────────────────────────────────────────
      boxShadow: {
        'warm':    '0 4px 24px rgba(26, 107, 69, 0.12)',
        'warm-lg': '0 8px 40px rgba(26, 107, 69, 0.18)',
        'amber':   '0 4px 24px rgba(212, 146, 15, 0.25)',
        'card':    '0 2px 16px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 8px 32px rgba(0, 0, 0, 0.10)',
      },
      // ── Border radius ─────────────────────────────────────────────────
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      // ── Backdrop blur ─────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
