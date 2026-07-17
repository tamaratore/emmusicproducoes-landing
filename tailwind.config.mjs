/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050505', // preto profundo
          raised: '#101010', // preto secundário
        },
        paper: '#F2EFEA', // branco quente
        signal: {
          purple: '#7429A8',
          magenta: '#CB287D',
          pink: '#EF3D9A',
        },
        mist: '#A6A6A6', // cinza de texto
      },
      fontFamily: {
        display: ['"Anton"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(90deg, #7429A8 0%, #CB287D 55%, #EF3D9A 100%)',
        'signal-gradient-v': 'linear-gradient(180deg, #7429A8 0%, #CB287D 55%, #EF3D9A 100%)',
        'void-fade': 'linear-gradient(180deg, rgba(5,5,5,0) 0%, #050505 100%)',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      zIndex: {
        overlay: '60',
        header: '50',
        actionbar: '40',
        intro: '100',
      },
    },
  },
  plugins: [],
};
