module.exports = {
  content: [
    './layout/**/*.{js,liquid}',
    './templates/**/*.{js,liquid}',
    './sections/**/*.{js,liquid}',
    './snippets/**/*.{js,liquid}',
    './assets/**/*.{js,css}',
    './scripts/**/*.js',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
