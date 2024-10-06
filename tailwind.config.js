/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc3545",
        'primary-hover': 'rgb(200,35,51)',
        'text-white': '#ffffff'
      }
    },
    borderRadius: {
      '2xl': '1rem', // Adjust this value as needed
    },
    screens: {
      '4xl': { max: '1699px' },
      '3xl': { max: '1599px' },
      '2xl': { max: '1299px' },
      xl: { max: '1199px' },
      lg: { max: '991px' },
      md: { max: '767px' },
      sm: { max: '575px' },
      ssm: { max: '480px' },
      xs: { max: '380px' },
      xxs: { max: '320px' },
      'min-xxs': '320px',
      'min-xs': '380px',
      'min-ssm': '480px',
      'min-sm': '575px',
      'min-md': '768px',
      'min-lg': '991px',
      'min-xl': '1199px',
      'min-2xl': '1299px',
      'min-3xl': '1599px',
      'min-4xl': '1699px',
    },
    animation: {
      slide: 'slide 1s ease-in-out infinite',
      scale: 'scaleUp .70s ease-in-out infinite',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(10px)' },
        '100%': { transform: 'translateX(0)' },
      },
      scaleUp: {
        '0%': { transform: 'scale(0)' },
        '100%': { 
          transform: 'scale(1)',
          borderRadius: '100%' 
         },
        
      },
    },
  },

  plugins: [],
}