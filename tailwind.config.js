/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    fontSize: {
      xs: ['9px', '16.2px'],
      sm: ['10px', '15px'],
      base: ['12px', '48px'],
      lg: ['14px', '21px'],
      xl: ['16px', '48px'],
      '2xl': ['18px', '32.4px'],
      '3xl': ['24px', '34px'],
      '4xl': ['25px', '37.5px'],
      '5xl': ['32px', '80px'],
      '6xl': ['40px', '50px'],
      '7xl': ['48px', '58px'],
      '8xl': ['64px', '80px']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      'white-smoke': '#FFF2F2',
      lavender: '#E3E7FA',
      whisper: '#EDEDED', //#E5E5E5
      silver: '#C4C4C4',
      logan: '#A0A0AF',
      nobel: '#9A9999',
      grey: '#858585',
      'dim-gray': '#747272',
      comet: '#656567',
      perfume: '#C39EFF',
      'medium-purple': '#9D79D7',
      'deep-pink': '#FF008A',
      supernova: '#FFAC2F',
      'vista-blue': '#9ACEAF',
      'fruit-salad': '#4B9A4E',
      'cornflower-blue': '#7F9BFF',
      'slate-blue': '#5B59DF'
    },
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(272px, 1fr))'
      },
      boxShadow: {
        custom: '0px 16px 40px rgba(54, 68, 119, 0.1)'
      }
    }
  },
  plugins: []
}
