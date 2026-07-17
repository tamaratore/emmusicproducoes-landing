/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  safelist: ['text-brand-pink', 'text-brand-purple'],
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
        // paleta oficial da marca (mesmo gradiente da logo real) — não usar
        // laranja/dourado em lugar nenhum do site
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
