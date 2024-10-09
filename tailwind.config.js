module.exports = {
   purge: [
      './templates/**/*.html',
      './static/js/**/*.js',
   ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        a4: '210mm',
        almosthalf: '46.6%'
     },
     height: {
       a4: '297mm',
     },
     screens: {
      print: { raw: 'print' },
      screen: { raw: 'screen' },
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
