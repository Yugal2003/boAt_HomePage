/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mini' : '276px',
        
        'base': '360px',

        'ac': '440px',

        'sm': '640px',

        'bw': '740px',
  
        'md': '768px',
        
        'local': '960px',
  
        'bm' : '1000px',
        
        'lg': '1024px',

        'lm' : '1100px',
  
        'xl': '1200px',
  
        '2xl': '1280px',

        '3xl': '1536px',
 
        '4xl': '1600px'
      },
      fontFamily: {
        metropolis: ['Metropolis', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}