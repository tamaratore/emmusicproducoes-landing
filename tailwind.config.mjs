/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: ['text-signal', 'text-gospel'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0B0C',
          raised: '#17151A',
          line: '#2A2730',
        },
        paper: {
          DEFAULT: '#F7F4EE',
        },
        signal: {
          DEFAULT: '#FF5A1F',
          dim: '#B23E12',
        },
        gospel: {
          DEFAULT: '#E8A93A',
          dim: '#9C6E1E',
        },
        brand: {
          purple: '#7429A8',
          pink: '#EF3D9A',
        },
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
