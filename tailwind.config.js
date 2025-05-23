/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', 
        'xxs': '375px'
        
      },
     
        
      colors: {
        primary: '#7C4585',
        secondary: '#C95792',
        light:'#F8B55F' // (light complementary green suggestion)
      },
      },
    },

  plugins: [],
}
