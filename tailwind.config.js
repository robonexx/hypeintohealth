/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sourcepro: ['Source Pro', 'sans-serif'],
      sourceprosb: ['Source Pro SemiBold', 'sans-serif'],
      sourceprob: ['Source Pro Black', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      black: '900',
    },
    extend: {
      dropShadow: {
        'xl': '0 14px 20px rgb(12, 12, 12, .435)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [],
};
