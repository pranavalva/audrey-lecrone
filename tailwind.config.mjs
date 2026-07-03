/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F1EA',
          deep: '#EDE6DA',
        },
        ink: {
          DEFAULT: '#1C1917',
          muted: '#2E2A26',
        },
        coral: {
          DEFAULT: '#D4534A',
          hover: '#C94C3D',
        },
        gold: {
          DEFAULT: '#D4A054',
        },
        burgundy: {
          DEFAULT: '#6B2D3C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        pill: '0 4px 14px rgba(212, 83, 74, 0.25)',
        card: '0 8px 30px rgba(28, 25, 23, 0.08)',
      },
    },
  },
  plugins: [],
};
