module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      tosca: {
        100: '#003034',
        200: '#006D77',
        300: '#3E9CA5',
        400: '#D7F5F2',
        500: '#FBFFFF',
      },
      gray: {
        100: '#262626',
        200: '#777A84',
      },
    },
    container: {
      padding: {
        sm: '80px',
        md: '120px',
        lg: '160px',
        xl: '160px',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
