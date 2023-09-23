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
    extend: {},
  },
  plugins: [],
};
